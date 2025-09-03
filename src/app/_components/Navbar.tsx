"use client"

import React, { useState, useCallback, useMemo } from 'react'
import Link from "next/link"
import { Menu, X } from 'lucide-react'

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <nav className="shadow-sm border p-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <strong>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Saarthak Maini</h1>
          </strong>
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 font-bold 
                        ${isMenuOpen ? 'flex mt-4 sm:mt-0' : 'hidden sm:flex'}`}>
          {navigationLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-black hover:text-blue-700 transition-colors duration-300 text-center sm:text-left"
              onClick={closeMenu}
              prefetch={true}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
