import { FaMobileAlt, FaDesktop, FaClock, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa"




const categories = [
  { name: "Phones", icon: FaMobileAlt },
  { name: "Computers", icon: FaDesktop },
  { name: "SmartWatch", icon: FaClock },
  { name: "Camera", icon: FaCamera },
  { name: "HeadPhones", icon: FaHeadphones },
  { name: "Gaming", icon: FaGamepad },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center justify-center p-6 bg-white rounded-lg hover:bg-red-500 transition-colors cursor-pointer"
        >
          <category.icon className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium">{category.name}</span>
        </div>
      ))}
    </div>
  )
}

