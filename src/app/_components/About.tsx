import React, { useState, useEffect } from "react";
import MurfEmbed from "./MurfEmbed";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function About() {
  const [showPopup, setShowPopup] = useState(false);
  const [useMurf, setUseMurf] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    setUseMurf(true);
    setShowPopup(false);
  };

  const handleNo = () => {
    setUseMurf(false);
    setShowPopup(false);
  };

  return (
    <div className="flex flex-1 items-center justify-around mx-50 mt-30">
      <div className="mr-12">
        <h1 className="text-5xl font-bold mb-7">Hi, I'm Saarthak</h1>
        <p className="font-bold">
          Hi, I’m Saarthak, a recent Computer Science graduate passionate about solving problems at the intersection of data and software engineering. Over the past few years, I’ve built a strong foundation in core CS concepts and developed skills in Python, SQL, React, Next.js, Docker, and Kubernetes, along with experience in data analysis, visualization, and applied machine learning.<br/><br/>

          What excites me most is the ability to turn ideas into impactful solutions, whether that means building scalable applications that perform in the real world or uncovering insights from data to drive smarter decisions. I’ve interned at IIT Madras, where I gained hands-on experience working on real projects, and I regularly challenge myself through self-learning, side projects, and problem-solving.<br/><br/>

          I’m eager to bring my curiosity, adaptability, and technical skills to opportunities like the Google Apprenticeship in Data Analytics and Software Application Development. For me, this is more than just a role — it’s a chance to learn from world-class engineers, sharpen my expertise, and contribute to solutions that make a meaningful impact.
        </p>
        <br />
        {useMurf && <MurfEmbed />}
      </div>

      <img
        src="/photo.jpg"
        alt="Saarthak Photo"
        width={400}
        height={400}
        style={{ borderRadius: "50%", border: "5px solid black" }}
      />

      {/* Neutral Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="rounded-2xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-center">
              Would you like AI to read this for you?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex justify-center gap-4">
            <Button onClick={handleYes} className="bg-blue-600 text-white hover:bg-blue-700">
              Yes
            </Button>
            <Button variant="outline" onClick={handleNo}>
              No
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default About;
