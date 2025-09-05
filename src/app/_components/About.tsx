"use client"

import React, { useState, useEffect, useCallback } from "react";
import MurfEmbed from "./MurfEmbed";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function About() {
  const [showPopup, setShowPopup] = useState(false);
  const [useMurf, setUseMurf] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleYes = useCallback(() => {
    setUseMurf(true);
    setShowPopup(false);
  }, []);

  const handleNo = useCallback(() => {
    setUseMurf(false);
    setShowPopup(false);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-32 py-8 lg:py-12">
      <div className="w-full lg:w-5/8 lg:pr-20 mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-7 text-center lg:text-left">
          Hi, I'm Saarthak
        </h1>
        <div className="space-y-4 text-sm sm:text-base lg:text-lg">
          <p className="font-medium leading-relaxed">
            Hi, I'm Saarthak, a recent Computer Science graduate passionate about solving problems at the intersection of data and software engineering. Over the past few years, I've built a strong foundation in core CS concepts and developed skills in Python, SQL, React, Next.js, Docker, and Kubernetes, along with experience in data analysis, visualization, and applied machine learning.
          </p>
          
          <p className="font-medium leading-relaxed">
            What excites me most is the ability to turn ideas into impactful solutions, whether that means building scalable applications that perform in the real world or uncovering insights from data to drive smarter decisions. I've interned at IIT Madras, where I gained hands-on experience working on real projects, and I regularly challenge myself through self-learning, side projects, and problem-solving.
          </p>
          
          <p className="font-medium leading-relaxed">
            I'm eager to bring my curiosity, adaptability, and technical skills to opportunities like the Google Apprenticeship in Data Analytics and Software Application Development. For me, this is more than just a role — it's a chance to learn from world-class engineers, sharpen my expertise, and contribute to solutions that make a meaningful impact.
          </p>
        </div>
        
        {useMurf && (
          <div className="mt-6">
            <MurfEmbed />
          </div>
        )}
      </div>

      <div className="w-full lg:w-3/8 flex justify-center lg:justify-start lg:pl-20">
        <img
          src="/photo.jpg"
          alt="Saarthak Photo"
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-black object-cover shadow-lg"
        />
      </div>

      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="rounded-2xl shadow-lg max-w-sm mx-4">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-center">
              Would you like AI to read this for you?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button 
              onClick={handleYes} 
              className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto"
            >
              Yes
            </Button>
            <Button 
              variant="outline" 
              onClick={handleNo}
              className="w-full sm:w-auto"
            >
              No
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default About;
