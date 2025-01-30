import { FiTruck, FiHeadphones, FiShield } from "react-icons/fi"

const features = [
  {
    icon: FiTruck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: FiHeadphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: FiShield,
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
  },
]

export default function CustomerService() {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-black rounded-full p-4 mb-4">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

