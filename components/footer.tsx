// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <footer className="py-6 my-4">
        <ul className="flex justify-center border-b pb-3 mb-3 space-x-6">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/features" className="text-gray-500 hover:text-gray-800">
             Products
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-gray-500 hover:text-gray-800">
              Shipping & Return Policy
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="text-gray-500 hover:text-gray-800">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-500 hover:text-gray-800">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-gray-500">
          © 2025 Company, Inc
        </p>
      </footer>
    </div>
  );
}
