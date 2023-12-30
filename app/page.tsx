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
    name: "Server Name",
    members: 3000,
    image:
      "https://www.arch2o.com/wp-content/uploads/2020/07/Arch2O-65-types-of-wood-every-designer-needs-to-know-about-12-700x467.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        title="Super Easy Way"
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

      {/* TODO: add top partners here */}

      <TopServers>
        {topServers.map(({ name, members, image }) => (
          <TopServerDetails
            key={name}
            name={name}
            image={image}
            members={members}
          />
        ))}
      </TopServers>
    </main>
  );
}
