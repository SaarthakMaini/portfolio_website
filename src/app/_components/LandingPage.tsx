import React from 'react'
import Resume from './Resume'

function LandingPage() {
  return (
    <div className="flex justify-center items-center w-full py-10">
          <div className="w-full max-w-3xl aspect-video h-full">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/yuYCEHTwJ-I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="mt-5">
            <Resume />
            </div>
          </div>
        </div>
  )
}

export default LandingPage