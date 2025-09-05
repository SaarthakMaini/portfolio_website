import React from 'react'
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function SocialMedia() {
  return (
    <div className="flex space-x-3 sm:space-x-4 sm:mt-0">
          <a
            href="https://github.com/SaarthakMaini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors duration-300 shimmer-icon p-2 hover:bg-gray-100 rounded-full"
            aria-label="GitHub"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://linkedin.com/in/saarthakmaini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors duration-300 shimmer-icon p-2 hover:bg-gray-100 rounded-full"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://twitter.com/saartwts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors duration-300 shimmer-icon p-2 hover:bg-gray-100 rounded-full"
            aria-label="Twitter"
          >
            <Twitter size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:saarthakmaini@gmail.com"
            className="hover:text-gray-800 transition-colors duration-300 shimmer-icon p-2 hover:bg-gray-100 rounded-full"
            aria-label="Email"
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
          </a>
        </div>
  )
}

export default SocialMedia