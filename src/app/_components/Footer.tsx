"use client"

import React from "react";
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <footer className="bg-base-200 py-4 sm:py-6 border-t shadow-md">
      <div className="container flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-semibold text-sm sm:text-base text-center sm:text-left shimmer-text mb-3 sm:mb-0">
          © {new Date().getFullYear()} Saarthak Maini
        </h2>
        <div className="flex justify-center sm:justify-end">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}

export default Footer
