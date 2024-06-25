"use client";

import { Label } from "@radix-ui/react-label";
import { CommentArea } from "./components/custom/CommentArea";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Spline scene="https://prod.spline.design/XqAiam5Cgqj8ygmb/scene.splinecode" />
      {/* <Label className="text-2xl font-bold mt-4">
        Mentoring Calon Member Autonomous
      </Label>
      <div className="w-full flex flex-wrap items-center justify-center font-mono text-sm p-5 ">
        {Array.from({ length: 12 }).map((_, index) => (
          <CommentArea key={index} id={index + 1} />
        ))}
      </div> */}
    </main>
  );
}
