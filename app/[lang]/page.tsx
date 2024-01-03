import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import {
  BookOpen,
  CheckSquare,
  Cigarette,
  Coffee,
  Hop,
  Key,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionDetails from "@/components/SectionDetails";
import TopServers from "@/components/TopServers";
import TopServerDetails from "@/components/TopServerDetails";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const perks = [
  {
    name: "Quick Setup",
    Icon: Timer,
    description:
      "Finish setting up your discord server with only a few clicks!",
  },
  {
    name: "Tailored For You",
    Icon: CheckSquare,
    description:
      "This bot includes all essential features, along with new features crafted just for you.",
  },
  {
    name: "Open Source",
    Icon: BookOpen,
    description:
      "Committed to improvement, our bot is open source, inviting contributors to enrich its capabilities.",
  },
];

const presentation = [
  {
    label: "Frost First",
    image:
      "https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/640843453613c80273894d6e_playstation_launch_blog%20header.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga",
    icon: Coffee,
  },
  {
    label: "Frost Second",
    image:
      "https://assets.materialup.com/uploads/320be02a-aa8f-4376-8a35-5457274fb45b/attachment.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga",
    icon: Hop,
  },
  {
    label: "Frost Third",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/03/Clyde-In-Product-Screenshot.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga",
    icon: Cigarette,
  },
  {
    label: "Frost Fourth",
    image: "https://pbs.twimg.com/media/GCSuyy_XAAArqfN?format=jpg&name=large",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga",
    icon: Key,
  },
];

const topServers = [
  {
    name: "Lorem",
    members: 3,
    link: "https://discord.gg/",
    image:
      "https://64.media.tumblr.com/c44e72cc2c1a1c4f4d156724e9f43b26/tumblr_ovazo5Xkun1vjrytfo1_250.png",
  },
  {
    name: "Maxime",
    members: 3000,
    link: "https://discord.gg/",
    image:
      "https://64.media.tumblr.com/54604aafc1f88e8f8a9311cbcde76624/tumblr_mo76guWz6v1qg6rkio3_540.jpg",
  },
  {
    name: "molestiae",
    members: 3534000,
    link: "https://discord.gg/",
    image:
      "https://64.media.tumblr.com/2c0395dda9956963fd951fa4a7a7e427/tumblr_ono3mqYapT1w9wi67o1_250.jpg",
  },
  {
    name: "fuga",
    members: 0,
    link: "https://discord.gg/",
    image:
      "https://64.media.tumblr.com/7a32b1e463da3f47830507f115289bcb/tumblr_n8vn7hCktb1rpwm80o1_r1_250.jpg",
  },
  {
    name: "blanditiis",
    members: 500,
    link: "https://discord.gg/",
    image:
      "https://64.media.tumblr.com/1849623ccf6f84c21e253ca7aefbe647/tumblr_oujr1gys8y1vjrytfo1_250.png",
  },
];

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { hero } = await getDictionary(lang);

  return (
    <main>
      <Hero
        title={hero.title}
        description="Create and Manage your Discord Community!"
      >
        <Button className="text-base md:text-lg font-semibold p-6 md:p-7">
          Add to Discord
        </Button>
        <Button
          className="text-base md:text-lg font-semibold p-6 md:p-7"
          variant="secondary"
        >
          Dashboard
        </Button>
      </Hero>

      <Features perks={perks} />

      <section>
        {presentation.map((item, index) => (
          <Section
            key={item.label}
            imageFirst={index % 2 === 0}
            imageAlt={item.label}
            image={item.image}
          >
            <SectionDetails label={item.label} description={item.description}>
              <item.icon className="h-7 w-7 text-muted-foreground" />
            </SectionDetails>
          </Section>
        ))}
      </section>

      <TopServers>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:w-full">
            {topServers
              .sort((a, b) => b.members - a.members)
              .map(({ name, members, image, link }) => (
                <TopServerDetails
                  key={name}
                  name={name}
                  image={image}
                  members={members}
                  link={link}
                />
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </TopServers>
    </main>
  );
}
