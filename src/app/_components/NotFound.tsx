"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import SocialMedia from "./SocialMedia";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-xl rounded-2xl bg-base-100">
        <CardContent className="flex flex-col items-center text-center p-6 sm:p-8 space-y-4 sm:space-y-6">
          <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-warning" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral leading-tight">
            Oops! Looks like the request wasn't sent.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Please consider contacting Saarthak on the following Social Profiles.
          </p>
          <p className="text-sm sm:text-base text-neutral-600">
             Sorry for the inconvenience.😔
          </p>
          <div className="scale-110 sm:scale-120 lg:scale-125">
            <SocialMedia />
          </div>
          <Button
            className="mt-4 sm:mt-6 btn-neutral w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
