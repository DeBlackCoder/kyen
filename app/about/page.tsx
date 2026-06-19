import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { getDailyImage } from "@/lib/daily-image";

export const metadata: Metadata = {
  title: "About Us | Kyen Products & Supplies Ltd",
  description: "Learn about our story, mission, and commitment to transforming African agriculture.",
};

const whyChooseUs = [
  { title: "Premium Quality", desc: "We offer clean, safe, natural food products processed under strict quality standards." },
  { title: "Reliable Supply", desc: "With a strong farmer network and controlled processing, we ensure consistent availability all year." },
  { title: "Best Pricing", desc: "By sourcing directly from farmers, we guarantee fair products at competitive, honest prices." },
];

export default function AboutPage() {
  const heroImg = getDailyImage(1);
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[220px] sm:h-[300px] lg:h-[340px] overflow-hidden">
        <Image src={heroImg}
          alt="Kyen About hero" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <FadeIn direction="up">
            <div className="bg-white dark:bg-[#1a1a1a] px-10 sm:px-16 py-5 sm:py-6 shadow-md">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight text-center">Our Story</h1>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STORY */}
      <section className="py-12 sm:py-16 px-4 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <FadeIn direction="left" className="w-full sm:w-[38%] shrink-0">
            <div className="relative w-full aspect-[3/4] rounded overflow-hidden border border-gray-100 dark:border-[#2a2a2a] shadow-sm bg-[#f5f3e8] dark:bg-[#1a1a1a]">
              <Image src="https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg"
                alt="Kyen Products Catalogue" fill className="object-contain p-4" />
              <div className="absolute top-0 left-0 right-0 bg-[#f5f3e8] dark:bg-[#1a1a1a] px-4 pt-4 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">K</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-gray-800 dark:text-gray-200 leading-none">KYEN</p>
                    <p className="text-[8px] font-bold text-gray-800 dark:text-gray-200 leading-none">PRODUCTS CATALOGUE</p>
                  </div>
                </div>
                <p className="text-[9px] text-gray-600 dark:text-gray-400 italic">....taste Africa naturally....</p>
                <div className="flex gap-3 mt-1 text-[9px] font-semibold text-gray-700 dark:text-gray-300">
                  <span>Dates Syrup</span><span>Dates powder</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15} className="flex-1">
            <div className="space-y-4 sm:space-y-5">
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">Kyen Products and Supplies Ltd began with a simple mission: to ensure no Nigerian harvest goes to waste. Founded in 2022 by Yeniseim Wami, we started as regional distributors and soon realized the scale of post-harvest losses affecting farmers and food supply.</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">In 2023, we expanded into agro-processing, transforming perishable crops like onions into long-lasting, nutritious products such as our Flakes and Powder. By 2024, we secured the Kyen trademark, strengthening our identity as a trusted food processor.</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">Today, we work directly with smallholder farmers, especially women and youth, providing fair prices and reliable market access. Every Kyen product reflects our commitment to sustainability, innovation, and nourishing communities with natural, locally produced food.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 sm:py-16 px-4 bg-white dark:bg-[#0f0f0f] border-t border-gray-100 dark:border-[#1e1e1e]">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">Why Choose Us?</h2>
              <div className="w-16 h-0.5 bg-gray-800 dark:bg-gray-400 mx-auto" />
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
            {whyChooseUs.map(item => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col items-center gap-2 px-2">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
