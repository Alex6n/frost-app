const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-screen md:h-96 my-20 md:my-72 lg:my-36">
      <div className="block lg:flex flex-cols-2 justify-center xl:gap-28 h-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
