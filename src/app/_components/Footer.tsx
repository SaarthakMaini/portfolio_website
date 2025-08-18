import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-base-200 py-3 border-t shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <h2 className="font-semibold text-sm shimmer-text">
          © {new Date().getFullYear()} Saarthak Maini
        </h2>

        <div className="flex space-x-4 mt-2 md:mt-0 mr-5">
          <a
            href="https://github.com/SaarthakMaini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors duration-300 shimmer-icon"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/saarthakmaini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors duration-300 shimmer-icon"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/saartwts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors duration-300 shimmer-icon"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:saarthakmaini@gmail.com"
            className="hover:text-gray-800 transition-colors duration-300 shimmer-icon"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
