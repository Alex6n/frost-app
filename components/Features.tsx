import { BookOpen, CheckSquare, LucideIcon, Timer } from "lucide-react";
import { Separator } from "./ui/separator";

interface FeaturesProps {
  perks: {
    name: string;
    Icon: LucideIcon;
    description: string;
  }[];
}

const Features = ({ perks }: FeaturesProps) => {
  return (
    <section>
      <Separator className="bg-foreground/10 dark:bg-foreground hidden lg:block" />

      <div className="bg-secondary/40 p-16 md:mx-28 my-40 rounded-xl">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/50 text-foreground">
                  {<perk.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-lg font-medium">{perk.name}</h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
