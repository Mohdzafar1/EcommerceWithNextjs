
import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link href="/"
           
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Go Back to Homepage
          </Link>
        </div>
      </div>
    );
  }
  