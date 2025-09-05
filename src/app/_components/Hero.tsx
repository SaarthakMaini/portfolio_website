"use client"

import React from 'react'

function Hero() {
  return (
    <div className="flex justify-center items-center w-full py-8 sm:py-10 px-4 sm:px-6 lg:py-10 lg:px-8">
      <div className="w-full max-w-3xl aspect-video h-full">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/yuYCEHTwJ-I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Hero