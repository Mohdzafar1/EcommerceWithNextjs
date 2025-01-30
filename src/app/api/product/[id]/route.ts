import { NextResponse } from "next/server";
// Ensure this is your Product model
import mongoose from "mongoose";
import Product from "@/app/lib/productModel";
import { connect } from "@/app/lib/db";

export const GET = async (req: Request): Promise<NextResponse> => {
  try {
    // Connect to the database
    await connect();

    // Extract the ID from the request URL
    const url = new URL(req.url);
    const id = decodeURIComponent(url.pathname.split("/").pop() || "").trim();

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid or missing Product ID" },
        { status: 400 }
      );
    }
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Add full image URL to the product
    const host = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const productWithImageURL = {
      ...product.toObject(),
      image: `${host}${product.image}`, // Add the full URL for the image
    };

    // Return the product as a JSON response
    return NextResponse.json(productWithImageURL, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching product:", error.message);

    // Handle server errors
    return NextResponse.json(
      { error: "Error fetching product" },
      { status: 500 }
    );
  }
};
