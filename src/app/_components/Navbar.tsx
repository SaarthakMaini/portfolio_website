import React from 'react'
import Link from "next/link"

function Navbar() {
  return (
    <nav className="shadow-sm border p-4 flex items-center justify-between">
        <strong><h1 className="mr-30">Saarthak Maini</h1></strong>
        <div className="flex space-x-6 font-bold mr-10">
        <Link href="/" className="text-black hover:text-blue-700 transition-colors duration-300">Home</Link>
        <Link href="/about" className="text-black hover:text-blue-700 transition-colors duration-300">About</Link>
        <Link href="/projects" className="text-black hover:text-blue-700 transition-colors duration-300">Projects</Link>
        <Link href="/blogs" className="text-black hover:text-blue-700 transition-colors duration-300">Blogs</Link>
        <Link href="/contact" className="text-black hover:text-blue-700 transition-colors duration-300">Contact</Link> 
        <Link href="/skills" className="text-black hover:text-blue-700 transition-colors duration-300">Skills</Link>
        </div>
    </nav>
  )
}

export default Navbar