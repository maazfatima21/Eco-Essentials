import Link from "next/link"

import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-12 w-50" />
      </Link>
      <nav className="flex gap-6 md:gap-10 ml-auto items-center">
        <Link 
          href="/" 
          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link 
          href="/products" 
          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Products
        </Link>
        <Link 
          href="/about" 
          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}
