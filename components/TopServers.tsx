import { Locale } from "@/i18n.config";
import { Separator } from "./ui/separator";
import { getDictionary } from "@/lib/dictionary";

type TopServersProps = {
  children: React.ReactNode;
  lang?: Locale;
};

const TopServers = async ({ children, lang }: TopServersProps) => {
  const { topServers } = await getDictionary(lang || "en");

  return (
    <div className="flex items-center justify-center w-full my-32">
      <div className="flex flex-col justify-center">
        <h1 className="font-semibold text-lg mx-auto tracking-wide uppercase">
          {topServers}
        </h1>
        <Separator className="w-9 h-1 my-3 mx-auto rounded-full bg-primary-foreground/50" />
        {children}
      </div>
    </div>
  );
};

export default TopServers;
