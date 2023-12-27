const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-screen md:h-96 my-36">
      <div className="flex flex-cols-2 justify-center gap-28 h-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
