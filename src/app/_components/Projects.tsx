"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type Project = {
  name: string;
  about: string;
  github: string;
  deployment: string;
};

const projects: Project[] = [
  {
    name: "CRM",
    about: "We made CRM with Pub Sub model",
    github: "https://github.com/SaarthakMaini/mini-crm-project",
    deployment: "https://6668473bce0da20735fe5b06--helpful-cheesecake-37b39f.netlify.app/",
  },
];

export default function Projects() {
  return (
    <div className="bg-base-200 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-neutral mb-6 sm:mb-8 lg:mb-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <Card key={idx} className="bg-base-100 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral">
                {project.name}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{project.about}</p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 p-4 sm:p-6 pt-0">
              <Button
                variant="outline"
                className="flex items-center space-x-2 w-full sm:w-auto justify-center"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">GitHub</span>
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto justify-center"
                onClick={() => window.open(project.deployment, "_blank")}
              >
                <span className="text-sm sm:text-base">Live Demo</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
