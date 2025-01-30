"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { FaStar, FaRegStar, FaHeart, FaTruck, FaExchangeAlt } from "react-icons/fa"
import { FiMinus, FiPlus } from "react-icons/fi"
import { useParams } from "next/navigation"
import { Product } from "@/app/components/Product"
import axios from "axios"
import Link from "next/link"

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("white")
      
 const id=  useParams()?.id
 const[products,setProducts]=useState<Product>()

  
      const getProduct=async()=>{
         try{
     const res=await axios.get(`http://localhost:3000/api/product/${id}`)
      const data=res.data
      setProducts(data)
    

         }catch(error){
          console.log(error)
         }
      }

      useEffect(()=>{
        getProduct()
      },[])

   
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/detaild-znycNhWJI2Js3mfqzuT0WVDiH9LiZP.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/detaild-znycNhWJI2Js3mfqzuT0WVDiH9LiZP.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/detaild-znycNhWJI2Js3mfqzuT0WVDiH9LiZP.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/detaild-znycNhWJI2Js3mfqzuT0WVDiH9LiZP.png",
  ]

  const sizes = ["XS", "S", "M", "L", "XL"]
  const colors = [
    { name: "white", class: "bg-white" },
    { name: "pink", class: "bg-pink-500" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="text-blue-500">Product</Link>
          <span>/</span>
          <span className="text-red-900">{products?.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-white">
              <img
                src={products?.image}
                alt="Product image"
                // fill
                className="object-contain p-8"
                // priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative rounded-lg overflow-hidden bg-white ${
                    selectedImage === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <Image
                    src={"/placeholder.svg"}
                    alt={`Product thumbnail ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{products?.name}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <span className="text-sm text-gray-500">({products?.reviews} Reviews)</span>
                <span className="text-sm text-green-500">In Stock</span>
              </div>
              <p className="text-3xl font-bold">${products?.originalPrice}</p>
            </div>

            <p className="text-gray-600">
              PlayStation 5 Controller Skin High-quality vinyl with air channel adhesive for easy bubble free install & mess
              free removal Pressure sensitive.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Colours:
                </label>
                <div className="flex space-x-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 ${color.class} ${
                        selectedColor === color.name ? "border-blue-500" : "border-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm border rounded-md ${
                        selectedSize === size
                          ? "border-blue-500 bg-blue-50 text-blue-500"
                          : "border-gray-200 hover:border-blue-500"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                  Buy Now
                </button>
                <button className="p-2 border rounded-md hover:bg-gray-100 transition-colors">
                  <FaHeart className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center space-x-4 text-sm">
                <FaTruck className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-gray-500">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <FaExchangeAlt className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-gray-500">Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
