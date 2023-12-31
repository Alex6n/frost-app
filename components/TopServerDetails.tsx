import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { compactCount } from "@/lib/utils";

const TopServerDetails = ({
  name,
  members,
  link,
  image,
}: {
  name: string;
  members: number;
  link: string;
  image?: string;
}) => {
  return (
    <CarouselItem className="pl-1 max-w-[150px] cursor-grab select-none">
      <div className="p-1">
        <Card>
          <CardContent
            className="flex aspect-square items-center justify-center p-6 rounded-lg"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
          >
            <a href={link} target="_blank" className="flex flex-col mt-auto">
              <span className="text-md font-semibold mx-auto bg-black/30 px-1 rounded-t">
                {name}
              </span>
              <span className="text-xs font-medium mx-auto uppercase text-muted-foreground bg-black/30 rounded-md">
                {compactCount(members)} Members
              </span>
            </a>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default TopServerDetails;
