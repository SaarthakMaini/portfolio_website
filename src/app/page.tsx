"use client"

import Image from "next/image";
import Hero from './_components/Hero'
import Resume from "./_components/Resume"
import About from "./_components/About"
import LandingPage from "./_components/LandingPage";
import { Component } from "lucide-react";
import {useState} from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Contact from './_components/Contact'
import Blogs from './_components/Blogs'

const components = [
      {
        name: "Home",
        component: <LandingPage />
      },
      {
        name: "About",
        component: <About />
      },
      {
        name: "Contact",
        component: <Contact/>
      },
      {
        name: "Blogs",
        component: <Blogs />
      }
  ]

export default function Home() {

  const [index, setIndex] = useState(0);

  const nextComponent = () => {
    setIndex((prev) => (prev + 1) % components.length);
  }

  const prevComponent = () => {
    setIndex((prev) => (prev - 1 + components.length) % components.length);
  }

  const current = components[index];
  const next = components[(index + 1) % components.length];
  const prev = components[(index - 1 + components.length) % components.length];

  return (
    <div>
      <main className="row-start-2 items-center sm:items-start">
      {current.component}

      {index > 0 && (
        <button
          onClick={prevComponent}
          className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center group
                     bg-neutral-200 hover:bg-neutral-300 text-neutral-700 
                     px-4 py-2 rounded-full shadow-md transition-all duration-300 animate-pulse-left"
        >
          <FaArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="ml-2 group-hover:opacity-100 transition-opacity duration-300">
            {prev.name}
          </span>
        </button>
      )}

      <button
        onClick={nextComponent}
        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center group
                   bg-neutral-200 hover:bg-neutral-300 text-neutral-700 
                   px-4 py-2 rounded-full shadow-md transition-all duration-300 animate-pulse-right"
      >
        <span className="mr-2  group-hover:opacity-100 transition-opacity duration-300">
          {next.name}
        </span>
        <FaArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
      </main>
    </div>
  );
}
