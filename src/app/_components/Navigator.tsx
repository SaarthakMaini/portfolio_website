"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
]

export default function Navigator() {
  const pathname = usePathname()

  const currentIndex = routes.findIndex((r) => r.path === pathname)
  const nextIndex = (currentIndex + 1) % routes.length
  const prevIndex = (currentIndex - 1 + routes.length) % routes.length

  const nextRoute = routes[nextIndex]
  const prevRoute = routes[prevIndex]

  return (
    <div>
      {currentIndex > 0 && (
        <Link
          href={prevRoute.path}
          prefetch
          className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center group
                     bg-neutral-200 hover:bg-neutral-300 text-neutral-700 
                     px-4 py-2 rounded-full shadow-md transition-all duration-300"
        >
          <FaArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="ml-2 group-hover:opacity-100 transition-opacity duration-300">
            {prevRoute.name}
          </span>
        </Link>
      )}

      {pathname !== "/thanks" && (
        <Link
          href={nextRoute.path}
          prefetch
          className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center group
                     bg-neutral-200 hover:bg-neutral-300 text-neutral-700 
                     px-4 py-2 rounded-full shadow-md transition-all duration-300"
        >
          <span className="mr-2 group-hover:opacity-100 transition-opacity duration-300">
            {nextRoute.name}
          </span>
          <FaArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      )}
    </div>
  )
}
