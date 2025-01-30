"use client"

import { FiHeart } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"
import { FaHeart } from "react-icons/fa"
import { useEffect, useState } from "react"
import axios from "axios"

interface Product {
  _id: number
  name: string
  originalPrice: number
  image: string
  rating: number
  reviews: number
  isNew?: boolean
  colors?: string[]
  liked?: boolean // Add liked property for each product
}

export default function OtherProduct() {
  const [products, setProducts] = useState<Product[]>([])
  const[page,setPage]=useState(5)

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/product")
      const data = res.data.map((item: Product) => ({
        ...item,
        liked: false, // Initialize liked property to false
      }))
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  const toggleLike = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === id ? { ...product, liked: !product.liked } : product
      )
    )
  }

  const handlePage=()=>{
    setPage(page+5)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0,page).map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4 relative">
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-green-400 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}
            <div className="relative group">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2">
              <button
  className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
  onClick={() => toggleLike(product._id)}
>
  {product.liked ? (
    <FaHeart className="w-5 h-5 text-red-500" />
  ) : (
    <FiHeart className="w-5 h-5 text-gray-500" />
  )}
</button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-bold">${product.originalPrice}</span>
                <div className="flex items-center ml-2">
                  {[...Array(product.rating)].map((_, index) => (
                    <AiFillStar key={index} className="w-4 h-4 text-yellow-400" />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                </div>
              </div>
              {product.colors && (
                <div className="flex gap-1 mt-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}
              <button className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-gray-800 transition-colors">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        {
          (products.length>=page ) && 
           ( <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-colors" onClick={handlePage}>
            View All Products
          </button>)
          
        }
       
      </div>
    </div>
  )
}
