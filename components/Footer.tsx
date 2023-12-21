import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

const usefullLinks = [
  {
    label: "Website Map",
    links: [
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
    ],
  },
  {
    label: "Example Title",
    links: [
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
    ],
  },
  {
    label: "Socials",
    links: [
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
      {
        title: "link",
        href: "/link",
      },
    ],
  },
];

const Footer = () => {
  const appData = {
    serversJoined: 100,
    botUsers: 5000,
    totalCommands: 120,
    eliteUsers: 100,
    websiteVisits: 5000,
  };
  return (
    <section className="w-screen h-96">
      <Separator className="bg-foreground/10" />

      <div className="bg-gradient-to-br from-primary/40 to-secondary h-full mx-24 mt-10 rounded-t-2xl flex flex-cols-3 justify-center">
        <div className="bg-white/10 p-10 rounded-lg border-white/70 border max-w-[500px] hidden xl:flex flex-wrap flex-rows-5 justify-center items-center space-between gap-10 my-auto mx-10">
          <div>
            <h2 className="text-white/75">Servers Joined</h2>
            <p className="font-bold text-center text-xl">
              {appData.serversJoined}
            </p>
          </div>

          <div>
            <h2 className="text-white/75">Bot Users</h2>
            <p className="font-bold text-center text-xl">{appData.botUsers}</p>
          </div>

          <div>
            <h2 className="text-white/75">Elite Users</h2>
            <p className="font-bold text-center text-xl">
              {appData.eliteUsers}
            </p>
          </div>

          <div>
            <h2 className="text-white/75">Website Visits</h2>
            <p className="font-bold text-center text-xl">
              {appData.websiteVisits}
            </p>
          </div>

          <div>
            <h2 className="text-white/75">App Commands</h2>
            <p className="font-bold text-center text-xl">
              +{appData.totalCommands}
            </p>
          </div>
        </div>

        <div className="col-span-1 -translate-y-24 mx-10">
          <Image src="/logo.png" height="370" width="370" alt="Frost logo" />
          <p className="text-center font-semibold mt-10">
            © 2024 All rights reserved.
          </p>
        </div>

        <div className="flex flex-cols-3 w-[500px] space-between space-x-20 my-auto mx-10">
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
