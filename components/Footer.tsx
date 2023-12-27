"use client";

import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useRef } from "react";
import Statistics from "./Statistics";

interface FooterProps {
  usefullLinks: {
    label: string;
    links: {
      title: string;
      href: string;
    }[];
  }[];
  appData: {
    serversJoined: number;
    botUsers: number;
    eliteUsers: number;
    websiteVisits: number;
    appCommands: number;
  };
}

const Footer = ({ usefullLinks, appData }: FooterProps) => {
  const footerRef = useRef(null);

  return (
    <section ref={footerRef} className="w-screen md:h-96">
      <Separator className="bg-foreground/10" />

      <div className="bg-gradient-to-br from-primary/40 to-secondary h-full mx-10 md:mx-24 mt-10 rounded-t-2xl flex flex-cols-3 justify-center">
        <Statistics appData={appData} footerRef={footerRef} />

        <div className="col-span-1 -translate-y-24 mx-10">
          <Image src="/logo.png" height="370" width="370" alt="Frost logo" />
          <p className="text-center font-semibold mt-10">
            © 2024 All rights reserved.
          </p>
        </div>

        <div className="hidden lg:flex flex-cols-3 w-[500px] space-between space-x-20 my-auto mx-10">
          {usefullLinks.map(({ label, links }) => (
            <div key={label}>
              <h3 className="text-center mb-3">{label}</h3>
              {links.map(({ href, title }) => (
                <ul key={href} className="text-zinc-400 mb-1">
                  <Link className="text-start" href={href}>
                    {title}
                  </Link>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
