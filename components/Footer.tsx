"use client";

import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useRef } from "react";
import Statistics from "./Statistics";
import { Github, Twitter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Locale } from "@/i18n.config";
interface FooterProps {
  usefullLinks: {
    label: string;
    links: {
      title: string;
      href: string;
      badge?: {
        label: string;
        color: string;
      };
    }[];
  }[];

  appData: {
    serversJoined: number;
    botUsers: number;
    eliteUsers: number;
    websiteVisits: number;
    appCommands: number;
  };

  rights: string;
}

const Footer = ({ usefullLinks, appData, rights }: FooterProps) => {
  const footerRef = useRef(null);

  return (
    <footer ref={footerRef} className="w-screen md:h-96">
      <Separator className="bg-foreground/10" />

      <div className="bg-gradient-to-br from-primary/20 to-transparent h-full mx-10 md:mx-24 mt-10 rounded-t-2xl flex flex-cols-3 justify-center">
        <Statistics appData={appData} footerRef={footerRef} />

        <div className="col-span-1 -translate-y-24 mx-10">
          <Image src="/logo.svg" height="370" width="370" alt="Frost logo" />
          <p className="text-center font-semibold mt-10">{rights}</p>
          <div className="flex flex-row justify-center gap-4 my-3">
            <a href="#">
              <Github className="w-5 h-5" />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faDiscord} className="h-5 w-5" />
            </a>

            <a href="#">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-cols-3 w-[500px] space-between space-x-20 my-auto mx-10">
          {usefullLinks.map(({ label, links }) => (
            <div key={label}>
              <h3 className="mb-5 tracking-wider text-md font-medium">
                {label}
              </h3>
              {links.map(({ href, title, badge }) => (
                <ul key={title} className="text-zinc-400 mb-3 text-sm">
                  <Link className="hover:underline tracking-wide" href={href}>
                    {title}
                  </Link>
                  {badge && (
                    <span
                      className={`m-1 rounded px-2 py-[2px] text-[12px] font-extrabold uppercase w-fit ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  )}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
