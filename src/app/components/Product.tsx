"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai"
import { FaStar } from "react-icons/fa"

export interface Product {
  _id: any
  id: number
  name: string
  image: string
  originalPrice: number
  discountedPrice: number
  rating: number
  reviews: number
}



export default function BestSelling() {
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
    <section className="container mx-auto  py-8">
    
       <div className="flex justify-between items-center mb-8">
        <div>
          <div className="inline-block bg-red-100 text-red-500 px-3 py-1 rounded-md mb-2">This Month</div>
          <h2 className="text-2xl font-bold">Best Selling Products</h2>
        </div>
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(9,17).map((product) => (

          <div key={product.id} className="bg-gray-50 rounded-lg p-4">
             <Link href={`detaild_product/${product?._id}`}>
             <div className="relative group">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 space-y-2">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
                  <AiOutlineHeart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
                  <AiOutlineEye className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-200"} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-red-500 font-semibold">${product.discountedPrice}</span>
                {product.originalPrice !== product.discountedPrice && (
                  <span className="text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>
             </Link>

          </div>

        ))}
      </div>
     
    </section>
  )
}

