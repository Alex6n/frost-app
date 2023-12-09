"use client";

import { Icons } from "./Icons";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="hero-section flex h-[72vh] items-center justify-center lg:h-[85vh]">
      <div className="mx-auto mt-[400px] z-30 tracking-tight">
        <h1 className="text-[80px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-[#f5faff] to-[#d6f3ff]">
          Super Easy Way
        </h1>
        <p className="text-[30px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#f5faff] to-[#d6f3ff]">
          Create and Manage your Discord Community!
        </p>
        <div className="flex flex-row justify-center gap-3 mt-5">
          <Button className="text-lg font-semibold p-7">Add to Discord</Button>
          <Button className="text-lg font-semibold p-7" variant="secondary">
            Dashboard
          </Button>
        </div>
      </div>
      <Icons.frost className="h-[450px] text-primary/50 z-10 frost opacity-100 justify-self-center absolute top-40 right-auto overflow-clip" />
      <div className="halftone" />
    </div>
  );
}
