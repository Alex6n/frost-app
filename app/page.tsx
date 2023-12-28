import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import {
  BookOpen,
  CheckSquare,
  Cigarette,
  Coffee,
  Hop,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionDetails from "@/components/SectionDetails";

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
        <Section
          imageFirst={false}
          imageAlt="Frost First"
          image="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/640843453613c80273894d6e_playstation_launch_blog%20header.png"
        >
          <SectionDetails
            label="Frost First"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga"
          >
            <Hop className="h-7 w-7 text-muted-foreground" />
          </SectionDetails>
        </Section>

        <Section
          imageFirst={true}
          imageAlt="Frost Second"
          image="https://assets.materialup.com/uploads/320be02a-aa8f-4376-8a35-5457274fb45b/attachment.png"
        >
          <SectionDetails
            label="Frost Second"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga"
          >
            <Coffee className="h-7 w-7 text-muted-foreground" />
          </SectionDetails>
        </Section>

        <Section
          imageFirst={false}
          imageAlt="Frost Third"
          image="https://techcrunch.com/wp-content/uploads/2023/03/Clyde-In-Product-Screenshot.png"
        >
          <SectionDetails
            label="Frost Third"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga"
          >
            <Cigarette className="h-7 w-7 text-muted-foreground" />
          </SectionDetails>
        </Section>
      </section>

      {/* TODO: add top partners here */}
    </main>
  );
}
