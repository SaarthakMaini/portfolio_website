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

// Example project data
const projects: Project[] = [
  {
    name: "CRM",
    about: "We made CRM with Pub Sub model",
    github: "https://github.com/SaarthakMaini/mini-crm-project",
    deployment: "https://6668473bce0da20735fe5b06--helpful-cheesecake-37b39f.netlify.app/",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-neutral mb-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <Card key={idx} className="bg-base-100 shadow-lg rounded-2xl">
            <CardContent className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold text-neutral">
                {project.name}
              </h2>
              <p className="text-neutral-600">{project.about}</p>
            </CardContent>
            <CardFooter className="flex justify-between space-x-2">
              <Button
                variant="outline"
                className="flex items-center space-x-2"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(project.deployment, "_blank")}
              >
                Live Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
