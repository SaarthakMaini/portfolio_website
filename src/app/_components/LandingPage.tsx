"use client"

import React from 'react'
import Resume from './Resume'
import { Button } from '../../components/ui/button'
import SocialMedia from './SocialMedia'

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl aspect-video h-full mb-6 sm:mb-8">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/yuYCEHTwJ-I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full max-w-md sm:max-w-lg">
        <Resume />
        <a href="/contact" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">Contact Saarthak</Button>
        </a>
      </div>
      
      <div className="mt-6 sm:mt-8 flex justify-center">
        <div className="scale-110 sm:scale-125 lg:scale-140">
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default LandingPage