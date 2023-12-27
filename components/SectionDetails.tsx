interface SectionDetailsProps {
  label: string;
  description: string;
  children: React.ReactNode;
}

const SectionDetails = ({
  label,
  description,
  children,
}: SectionDetailsProps) => {
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="rounded-full py-2 flex w-fit items-center font-semibold text-center">
        <div className="p-2 tag-icon">{children}</div>
        <h1 className="ml-4 text-lg text-foreground">{label}</h1>
      </div>
      <div className="w-80 ml-1">
        <p className="text-muted-foreground text-base">{description}</p>
      </div>
    </div>
  );
};

export default SectionDetails;
