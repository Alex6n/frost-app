import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { BookOpen, CheckSquare, Coffee, Hop, Timer } from "lucide-react";
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
        <Section>
          <SectionDetails
            label="Frost First"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga"
          >
            <Hop className="h-7 w-7 text-muted-foreground" />
          </SectionDetails>

          <div className="flex flex-col justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://assets.materialup.com/uploads/320be02a-aa8f-4376-8a35-5457274fb45b/attachment.png"
              alt="Frost First"
              className="aspect-video object-cover max-w-xl lg:max-w-sm xl:max-w-xl m-14 rounded-3xl shadow-lg shadow-black/60 border-zinc-100/20 border-2"
            />
          </div>
        </Section>

        <Section>
          <div className="flex flex-col justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://assets.materialup.com/uploads/320be02a-aa8f-4376-8a35-5457274fb45b/attachment.png"
              alt="Frost Second"
              className="aspect-video object-cover max-w-xl lg:max-w-sm xl:max-w-xl m-14 rounded-3xl shadow-lg shadow-black/60 border-zinc-100/20 border-2"
            />
          </div>

          <SectionDetails
            label="Frost Second"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga"
          >
            <Coffee className="h-7 w-7 text-muted-foreground" />
          </SectionDetails>
        </Section>
      </section>

      {/* TODO: add top partners here */}
    </main>
  );
}
