import Link from "next/link"
// import { FiChevronRight } from "react-icons/fi"

export default function Sidebar() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ]

  return (
    <aside className="w-64 bg-white border-r">
      <nav className="py-4">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/category/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                <span>{category}</span>
                {/* <FiChevronRight className="w-4 h-4 text-gray-400" /> */}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

