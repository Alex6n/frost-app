"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section = ({
  children,
  image,
  imageAlt,
  imageFirst,
}: {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
}) => {
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
      <div className="block lg:flex flex-cols-2 sm:mx-[15%] justify-center h-full ">
        {(matches || imageFirst) && (
          <div className="flex flex-col justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="Frost First"
              className="aspect-video object-cover max-w-xl lg:max-w-sm xl:max-w-xl m-14 rounded-3xl shadow-lg shadow-black/60 border-zinc-100/20 border-2"
            />
          </div>
        )}
        {children}
        {imageFirst || (
          <div className="flex flex-col justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="Frost First"
              className="aspect-video object-cover max-w-xl lg:max-w-sm xl:max-w-xl m-14 rounded-3xl shadow-lg shadow-black/60 border-zinc-100/20 border-2"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
