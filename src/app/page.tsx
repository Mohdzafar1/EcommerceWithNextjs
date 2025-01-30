import { CategoryGrid } from "./category/page";
import ArrivalProduct from "./components/ArrivalProduct";
import CustomerService from "./components/CustomerService";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import OtherProduct from "./components/Other_Product";
import BestSelling from "./components/Product";
import ProductScroll from "./components/ProductScroll";
import Sidebar from "./components/sidebar";
import SalesTimer from "./sale-timer/page";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="flex-1">
            <HeroBanner />
           <div className="mt-6">
             <SalesTimer/>
             <div>
               <ProductScroll/>
             </div>
           </div>
           <div className="my-3">
            <h3 className="py-2 font-bold">Browser By Category</h3>
            <CategoryGrid/>
           </div>
            <div>
              <BestSelling/>
            </div>
            <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/assist/speaker.jpg"
            alt="PlayStation 5"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            unoptimized
          />
      <div className="absolute inset-0 flex items-center justify-start p-4 text-white">
        <div>
          <p className="text-green-500 text-lg">Category</p>
          <h3 className="text-6xl font-bold mb-1 ">Enhance your</h3>
          <p className="text-gray-300 text-xs mb-2">Music Experience</p>
          <button className="flex items-center text-white hover:gap-4 transition-all duration-300 gap-2 bg-green-500 px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>

            <div className="my-3">
              <p>Our Product</p>
              <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-red-500 rounded-sm" />
              <h3 className="py-2 font-bold">Explore Our Product</h3>
              </div>
             <OtherProduct/>
            </div>
            <div className="my-3">
              <p>Feature Product</p>
             <ArrivalProduct/>
            </div>
            <div className="my-3">
             <CustomerService/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
