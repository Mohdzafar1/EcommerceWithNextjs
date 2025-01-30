"use client"

import { BsArrowRight } from "react-icons/bs"
import Image from "next/image"

export default function ArrivalProduct() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-red-500 rounded-sm" />
        <h2 className="text-2xl font-bold">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PlayStation 5 Section */}
        <div className="relative bg-black rounded-lg overflow-hidden">
        <Image
            src="/assist/arrivalProduct1.jpg"
            alt="PlayStation 5"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            unoptimized
            />


          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
            <p className="text-gray-300 mb-4">Black and White version of the PS5 coming out on sale.</p>
            <button className="flex items-center text-white hover:gap-4 transition-all duration-300 gap-2">
              Shop Now <BsArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-1 gap-4">
          {/* Women's Collections */}
          <div className="relative bg-black rounded-lg overflow-hidden">
          <Image
            src="/assist/arrivalProduct2.jpg"
            alt="PlayStation 5"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            unoptimized
            />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
              <p className="text-gray-300 text-sm mb-4">Featured woman collections that give you another vibe.</p>
              <button className="flex items-center text-white hover:gap-4 transition-all duration-300 gap-2">
                Shop Now <BsArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Speakers */}
            <div className="relative bg-black rounded-lg overflow-hidden">
            <Image
            src="/assist/arrivalProduct3.jpg"
            alt="PlayStation 5"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            unoptimized
            />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-1">Speakers</h3>
                <p className="text-gray-300 text-xs mb-2">Amazon wireless speakers</p>
                <button className="flex items-center text-white hover:gap-4 transition-all duration-300 gap-2">
                  Shop Now <BsArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-black rounded-lg overflow-hidden">
            <Image
            src="/assist/arrivalProduct4.jpg"
            alt="PlayStation 5"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            unoptimized
            />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-1">Perfume</h3>
                <p className="text-gray-300 text-xs mb-2">GUCCI INTENSE OUD EDP</p>
                <button className="flex items-center text-white hover:gap-4 transition-all duration-300 gap-2">
                  Shop Now <BsArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

