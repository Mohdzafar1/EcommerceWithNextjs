import { FiSend, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Exclusive</h2>
            <h3 className="text-lg">Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="flex items-center border border-white rounded-md">
              <input type="email" placeholder="Enter your email" className="bg-transparent p-2 flex-1 outline-none" />
              <button className="p-2">
                {/* <FiSend className="w-5 h-5" /> */}
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Support</h2>
            <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
            <p className="text-sm">DH 1515, Bangladesh.</p>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Account</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="hover:text-gray-300">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-gray-300">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-gray-300">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-gray-300">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gray-300">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Link</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Download App</h2>
            <p className="text-sm">Save $3 with App New User Only</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer-qGc6kA6EQ046ieG47DDrb9grrkOK6V.png"
                  alt="QR Code"
                  className="w-24 h-24"
                />
              </div>
              <div className="space-y-2">
                <Image src="/assist/download-appstore.png" alt="Google Play" className="h-10 object-contain w-full h-full object-cover" width={100}
            height={100}
            unoptimized />
                <Image src="/assist/GooglePlay.png" alt="App Store" className="h-10 object-contain w-full h-full object-cover" width={100}
            height={100}
            unoptimized />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© Copyright Rimel 2022. All right reserved</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <FiFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <FiTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <FiInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <FiLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

