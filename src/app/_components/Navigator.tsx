"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { useMemo } from "react"

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
]

export default function Navigator() {
  const pathname = usePathname()
  
  const navigationData = useMemo(() => {
    const currentIndex = routes.findIndex((r) => r.path === pathname)
    const nextIndex = (currentIndex + 1) % routes.length
    const prevIndex = (currentIndex - 1 + routes.length) % routes.length
    const nextRoute = routes[nextIndex]
    const prevRoute = routes[prevIndex]
    
    return {
      currentIndex,
      nextRoute,
      prevRoute,
      showPrev: currentIndex > 0,
      showNext: pathname !== "/thanks"
    }
  }, [pathname])

  return (
    <div>
      {navigationData.showPrev && (
        <Link
          href={navigationData.prevRoute.path}
          prefetch={true}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 flex items-center group
                     bg-neutral-200 hover:bg-neutral-300 text-neutral-700 
                     px-2 sm:px-3 md:px-4 py-2 rounded-full shadow-md transition-all duration-300
                     z-10"
        >
          <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="ml-1 sm:ml-2 group-hover:opacity-100 transition-opacity duration-300 
                         text-xs sm:text-sm md:text-base opacity-0 sm:opacity-100">
            {navigationData.prevRoute.name}
          </span>
        </Link>
      )}

      {navigationData.showNext && (
        <Link
          href={navigationData.nextRoute.path}
          prefetch={true}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 flex items-center group
                     bg-neutral-200 hover:bg-neutral-300 text-neutral-700 
                     px-2 sm:px-3 md:px-4 py-2 rounded-full shadow-md transition-all duration-300
                     z-10"
        >
          <span className="mr-1 sm:mr-2 group-hover:opacity-100 transition-opacity duration-300 
                         text-xs sm:text-sm md:text-base opacity-0 sm:opacity-100">
            {navigationData.nextRoute.name}
          </span>
          <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      )}
    </div>
  )
}
