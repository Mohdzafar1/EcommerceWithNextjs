"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai"
import { FaStar } from "react-icons/fa"

interface Product {
  id: number
  name: string
  image: string
  originalPrice: number
  discountedPrice: number
  discount: number
  rating: number
  reviews: number
}

// const products: Product[] = [
//   {
//     id: 1,
//     name: "HAVIT HV-G92 Gamepad",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scroll-7jZ1aY6YqhWa02SBF6KSrKwXwAeGY3.png",
//     originalPrice: 160,
//     discountedPrice: 120,
//     discount: 40,
//     rating: 5,
//     reviews: 88,
//   },
//   {
//     id: 2,
//     name: "AK-900 Wired Keyboard",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scroll-7jZ1aY6YqhWa02SBF6KSrKwXwAeGY3.png",
//     originalPrice: 1160,
//     discountedPrice: 960,
//     discount: 35,
//     rating: 4,
//     reviews: 75,
//   },
//   {
//     id: 3,
//     name: "IPS LCD Gaming Monitor",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scroll-7jZ1aY6YqhWa02SBF6KSrKwXwAeGY3.png",
//     originalPrice: 400,
//     discountedPrice: 370,
//     discount: 30,
//     rating: 5,
//     reviews: 99,
//   },
//   {
//     id: 4,
//     name: "S-Series Comfort Chair",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scroll-7jZ1aY6YqhWa02SBF6KSrKwXwAeGY3.png",
//     originalPrice: 400,
//     discountedPrice: 375,
//     discount: 25,
//     rating: 5,
//     reviews: 99,
//   },
// ]

export default function ProductScroll() {
  const[products,setProducts]=useState<Product[]>([])

      const getProduct=async()=>{
         try{
     const res=await axios.get('http://localhost:3000/api/product')
     const data=res.data
     setProducts(data)
     console.log("data",data)

         }catch(error){
          console.log(error)
         }
      }

      useEffect(()=>{
        getProduct()
      },[])
  return (
    <div className="container mx-auto  py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(1,5).map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                -{product.discount}%
              </span>
              <div className="absolute top-2 right-2 space-y-2">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
                  <AiOutlineHeart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
                  <AiOutlineEye className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-200"} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold">${product.discountedPrice}</span>
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
              </div>
              <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors">
          View All Products
        </button>
      </div>
    </div>
  )
}

