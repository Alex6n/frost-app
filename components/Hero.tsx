"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="hero-section flex h-[72vh] items-center justify-center lg:h-[85vh]">
      <div className="mx-auto mt-[400px] z-30 tracking-tight">
        <h1 className="text-[80px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-b dark:from-[#f5faff] dark:to-[#d6f3ff] from-[#00050a] to-[#002b3d]">
          Super Easy Way
        </h1>
        <p className="text-[30px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b dark:from-[#f5faff] dark:to-[#d6f3ff] from-[#00050a] to-[#002b3d]">
          Create and Manage your Discord Community!
        </p>
        <div className="flex flex-row justify-center gap-3 mt-5">
          <Button className="text-lg font-semibold p-7">Add to Discord</Button>
          <Button className="text-lg font-semibold p-7" variant="secondary">
            Dashboard
          </Button>
        </div>
      </div>
      <Icons.frost className="h-[450px] text-primary/30 dark:text-primary/50 z-10 frost opacity-100 justify-self-center absolute top-40 right-auto overflow-clip" />
      <div
        className={theme === "light" ? "halftone opacity-5" : "halftone-dark"}
      />
    </div>
  );
};

export default Hero;
