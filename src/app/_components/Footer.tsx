"use client"

import React from "react";
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <footer className="bg-base-200 py-3 border-t shadow-md">
      <div className="container flex flex-col md:flex-row items-center justify-between px-3">
        <h2 className="font-semibold text-sm shimmer-text">
          © {new Date().getFullYear()} Saarthak Maini
        </h2>
        <div className="pr-3">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
