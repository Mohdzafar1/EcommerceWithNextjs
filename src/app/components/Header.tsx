"use client"

import Link from "next/link"
import { useState } from "react"
// import { IoIosSearch } from "react-icons/io"



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Exclusive
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/contact" className="hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Link href="/about" className="hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/signup" className="hover:text-purple-600 transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {/* <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-purple-600 transition-colors">
              {/* <FiHeart className="w-6 h-6" /> */}
            </button>
            <button className="hover:text-purple-600 transition-colors">
              {/* <FiShoppingCart className="w-6 h-6" /> */}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

