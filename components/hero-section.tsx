"use client";
import { Frost } from "./";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="hero-section flex h-[72vh] items-center justify-center lg:h-[85vh]">
      <div className="mx-auto mt-[400px] z-30">
        <p className="text-[80px] font-bold text-center">SUPER EASY WAY</p>
        <p className="text-[30px] text-center font-semibold">
          Create and Manage your Discord Community!
        </p>
        <div className="flex flex-row justify-center gap-3 mt-5">
          <Button className="text-lg font-semibold p-7">Add to Discord</Button>
          <Button className="text-lg font-semibold p-7" variant="secondary">
            Dashboard
          </Button>
        </div>
      </div>
      <Frost className="text-[500px] z-10 frost opacity-100 justify-self-center absolute top-40 right-auto overflow-clip" />
      <div className="halftone" />
    </div>
  );
}
