import { Coffee, Hop } from "lucide-react";
import { Separator } from "./ui/separator";
import SectionDetails from "./SectionDetails";

const Section = () => {
  return (
    <section className="w-screen md:h-96">
      <Separator className="bg-foreground/10" />

      <div className="flex flex-cols-2 justify-center h-full">
        <SectionDetails
          label="Frost Feature"
          description="The File Manager UI consists of a toolbar, navigation pane."
        >
          <Hop className="h-7 w-7 text-muted-foreground" />
        </SectionDetails>
      </div>
    </section>
  );
};

export default Section;
