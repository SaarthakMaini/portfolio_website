"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Thanks() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-base-100">
        <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
          <CheckCircle2 className="w-16 h-16 text-success" />
          <h1 className="text-2xl font-bold text-neutral">Thank You!</h1>
          <p className="text-base text-neutral-600">
            Saarthak has received your details and you will be contacted within{" "}
            <span className="font-semibold">24–48 hours</span>.
          </p>
          <Button className="mt-4 btn-neutral" onClick={() => (window.location.href = "/")}>
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
