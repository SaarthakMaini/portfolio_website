import React from 'react'

function Navbar() {
  return (
    <nav className="shadow-sm border p-4 flex items-center justify-between">
        <strong><h1 className="mr-30">Saarthak Maini</h1></strong>
        <div className="flex space-x-6 font-bold mr-10">
        <a href="#home" className="text-black hover:text-blue-700 transition-colors duration-300">Home</a>
        <a href="#about" className="text-black hover:text-blue-700 transition-colors duration-300">About</a>
        <a href="#projects" className="text-black hover:text-blue-700 transition-colors duration-300">Projects</a>
        <a href="#blogs" className="text-black hover:text-blue-700 transition-colors duration-300">Blogs</a>
        <a href="#contact" className="text-black hover:text-blue-700 transition-colors duration-300">Contact</a> 
        </div>
    </nav>
  )
}

export default Navbar