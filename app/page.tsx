import FAQ from "@/components/layout/faq";
import Features from "@/components/layout/features";
import Hero from "@/components/layout/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <Hero />
      <Features />
      <FAQ />
    </div>
  );
}
