import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"
import { connect } from "@/app/lib/db"
import Product from "@/app/lib/productModel"


export async function POST(req: Request) {
    try {
      await connect()
  
      const formData = await req.formData()
      const name = formData.get("name") as string
      const originalPrice = Number(formData.get("originalPrice"))
      const discountedPrice = Number(formData.get("discountedPrice"))
      const rating = Number(formData.get("rating"))
      const reviews = Number(formData.get("reviews"))
      const image = formData.get("image") as File
  
      if (!image || !name || !originalPrice || !discountedPrice || !rating || !reviews) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      }
  
      // Handle image upload
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)
  
      // Save image to public directory
      const imagesDirectory = join(process.cwd(), "public/uploads")
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
      const filename = `${uniqueSuffix}-${image.name}`
      const imagePath = join(imagesDirectory, filename)
      await writeFile(imagePath, buffer)
      const imageUrl = `/uploads/${filename}`
  
      // Create new product
      const product = await Product.create({
        name,
        image: imageUrl,
        originalPrice,
        discountedPrice,
        rating,
        reviews,
      })
  
      return NextResponse.json(product, { status: 201 })
    } catch (error) {
      console.error("Error creating product:", error)
      return NextResponse.json({ error: "Error creating product" }, { status: 500 })
    }
}


  export const GET = async (): Promise<NextResponse> => {
    try {
      // Connect to the database
      await connect();
  
      // Fetch all products from the database
      const products = await Product.find();
  
      // Map products to include a full image URL
      const host = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Replace with your actual domain
    
      const productsWithImageURL = products.map((product: any) => ({
        ...product.toObject(),
        image: `${host}${product.image}`, // Combine base URL with the relative image path
      }));
  
      // Return the products as a JSON response
      return NextResponse.json(productsWithImageURL, { status: 200 });
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
  
      // Handle server errors
      return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
    }
  };
  
  