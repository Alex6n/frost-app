import { Icons } from "@/components/Icons";

interface HeroProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Hero = ({ title, description, children }: HeroProps) => {
  return (
    <div className="hero-section flex h-[72vh] items-center justify-center lg:h-[85vh] relative">
      <div className="mx-auto mt-[400px] z-30 tracking-tight absolute">
        <h1 className="text-[50px] md:text-[80px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-b dark:from-[#f5faff] dark:to-[#d6f3ff] from-[#00050a] to-[#002b3d]">
          {title}
        </h1>
        <p className="text-[25px] md:text-[30px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b dark:from-[#f5faff] dark:to-[#d6f3ff] from-[#00050a] to-[#002b3d]">
          {description}
        </p>
        <div className="flex flex-row justify-center gap-3 mt-5">
          {children}
        </div>
      </div>
      <Icons.frost className="h-[350px] md:h-[450px] text-primary/30 dark:text-primary/50 z-10 frost opacity-100 justify-self-center absolute top-40 right-auto overflow-clip" />
      <div className="halftone-dark absolute z-[-10] mt-80" />
    </div>
  );
};

export default Hero;
