"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import SocialMedia from "./SocialMedia";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-base-100">
        <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
          <AlertTriangle className="w-16 h-16 text-warning" />
          <h1 className="text-2xl font-bold text-neutral">Oops! Looks like the request wasn't sent.</h1>
          <p className="text-base text-neutral-600">
            Please consider contacting Saarthak on the following Social Profiles.
          </p>
          <p>
             Sorry for the inconvenience.😔
          </p>
          <div className="scale-120"><SocialMedia /></div>
          <Button
            className="mt-4 btn-neutral"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
