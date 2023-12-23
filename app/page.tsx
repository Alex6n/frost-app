import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <section className="flex flex-cols-2">
        <div></div>
      </section>
    </main>
  );
}
