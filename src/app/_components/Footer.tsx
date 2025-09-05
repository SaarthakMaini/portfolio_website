"use client"

import React from "react";
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white py-2 sm:py-3 border-t shadow-md z-50">
      <div className="container flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <h2 className="font-semibold text-sm sm:text-base text-center sm:text-left shimmer-text mb-1 sm:mb-0">
          © {new Date().getFullYear()} Saarthak Maini
        </h2>
        <div className="flex justify-center sm:justify-end">
          <div className="scale-125 sm:scale-110">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
