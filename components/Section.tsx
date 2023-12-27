"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section
      className="w-screen md:h-96 my-20 md:my-72 lg:my-36 aos-init aos-animate"
      data-aos="fade-right"
      data-aos-offset="150"
      data-aos-duration="600"
    >
      <div className="block lg:flex flex-cols-2 justify-center xl:gap-28 h-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
