"use client";

import { Label } from "@radix-ui/react-label";
import { CommentArea } from "./components/custom/CommentArea";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Label className="text-2xl font-bold mt-4">
        Mentoring Calon Member Autonomous
      </Label>
      <div className="w-full flex flex-wrap items-center justify-center font-mono text-sm p-5 ">
        {Array.from({ length: 20 }).map((_, index) => (
          <CommentArea key={index} id={index + 1} />
        ))}
      </div>
    </main>
  );
}
