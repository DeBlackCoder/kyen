import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import HeroText from "@/components/animations/HeroText";
import CounterSection from "@/components/animations/CounterSection";
import { getDailyImage } from "@/lib/daily-image";

const products = [
  { name: "Onion Flakes 250g", tag: "Flakes", price: "₦3,998.00", href: "/shop/onion-flakes-250g", img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { name: "Onion Powder 250g", tag: "Powder", price: "₦4,998.00", href: "/shop/onion-powder-250g", img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { name: "Date Syrup 350ml",  tag: "Syrup",  price: "₦5,990.00", href: "/shop/date-syrup-350ml",  img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { name: "CocoDates 500g",    tag: "Flakes", price: "₦6,000.00", href: "/shop/cocodates-500g",    img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
];

export default function Home() {
  const heroImg = "/images/nrd-D6Tu_L3chLE-unsplash.jpg";
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] overflow-hidden">
        <Image src={heroImg}
          alt="Kyen Products hero" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <HeroText />
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-10 sm:py-14 px-4 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-center text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 tracking-wide">
              Our Commitment to Africa
            </h2>
          </FadeIn>
          <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-[#2a2a2a]">
            <FadeIn direction="up" delay={0.1} className="sm:w-[45%]">
              <div className="h-full bg-gray-900 dark:bg-[#1a1a1a] text-white p-5 sm:p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-sm sm:text-base">Mission</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">To transform locally grown agricultural produce into premium, value-added products that enhance nutrition, reduce waste, and create market opportunities for smallholder farmers.</p>
              </div>
            </FadeIn>
            <div className="hidden sm:block sm:w-[10%] relative">
              <Image src="https://kyenproducts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-13-at-13.06.16_80ff88c5-300x300.jpg" alt="Agricultural produce" fill className="object-cover" />
            </div>
            <FadeIn direction="up" delay={0.2} className="sm:w-[45%]">
              <div className="h-full bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200 p-5 sm:p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                  </svg>
                </div>
                <h3 className="font-bold text-sm sm:text-base">Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">To become Africa&apos;s leading innovator in sustainable agro-processing by unlocking the market potential of raw and underutilised agricultural produce by 2030.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-10 sm:py-14 px-4 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-center text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 tracking-wide">What We Do</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Farmer Sourcing & Empowerment", desc: "We work directly with farmers, 40% of them women, to provide fair prices, training, and consistent market demand.", img: "https://kyenproducts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-13-at-13.06.16_80ff88c5-300x300.jpg" },
              { title: "Sustainability", desc: "Our model reduces waste, conserves resources, and strengthens food security. We process 100% of every harvest.", img: "https://kyenproducts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-13-at-13.06.16_a38c0754-300x300.jpg" },
              { title: "Nutrition & Accessibility", desc: "By extending shelf life, we make nutritious, affordable, locally processed food products available year-round.", img: "https://kyenproducts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-13-at-13.07.45_45e1a199-300x300.jpg" },
            ].map(item => (
              <StaggerItem key={item.title}>
                <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <div className="relative h-48 sm:h-52">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm font-bold mb-1 leading-tight">{item.title}</h3>
                    <p className="text-gray-200 text-xs leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-10 sm:py-14 px-4 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-center text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 tracking-wide">Checkout Our Latest Products</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
            {products.map(p => (
              <StaggerItem key={p.name}>
                <div className="flex flex-col border border-gray-100 dark:border-[#2a2a2a] rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-black/40 transition-shadow duration-300 group h-full bg-white dark:bg-[#1a1a1a]">
                  <div className="relative h-32 sm:h-36 bg-gray-50 dark:bg-[#111] overflow-hidden">
                    <Image src={p.img} alt={p.name} fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3 flex flex-col gap-1.5 flex-1">
                    <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">{p.tag}</span>
                    <Link href={p.href} className="text-xs font-semibold text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white leading-tight">{p.name}</Link>
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300">{p.price}</p>
                    <button type="button" className="mt-auto text-[10px] sm:text-xs font-semibold border border-gray-800 dark:border-gray-500 text-gray-800 dark:text-gray-300 py-1.5 px-2 rounded hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-200">Add to cart</button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="py-10 sm:py-14 px-4 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 items-stretch">
            <FadeIn direction="up" className="w-full sm:w-2/5">
              <div className="relative rounded-lg overflow-hidden h-56 sm:h-full sm:min-h-[260px]">
                <Image src="https://kyenproducts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-13-at-13.06.16_80ff88c5-300x300.jpg" alt="Cacao produce" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.15} className="flex-1">
              <div className="flex flex-col justify-between gap-4 h-full">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">Our Impact</h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">At Kyen Products and Supplies Ltd, our work is creating meaningful change across farming communities and the food value chain. We have sourced over 100 metric tons of produce from more than 300 smallholder farmers, strengthening incomes and expanding market access. We have created 25 direct and indirect jobs, with 60% filled by women and youth. By processing perishable crops into shelf-stable products, we have achieved an 8% reduction in post-harvest losses within partner communities.</p>
                </div>
                <CounterSection />
                <StaggerChildren className="flex gap-3">
                  <StaggerItem className="flex-1">
                    <div className="relative h-24 sm:h-28 rounded-lg overflow-hidden">
                      <Image src="https://kyenproducts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-13-at-13.06.16_a38c0754-300x300.jpg" alt="Agricultural produce" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </StaggerItem>
                  <StaggerItem className="flex-1">
                    <div className="relative h-24 sm:h-28 rounded-lg overflow-hidden">
                      <Image src="https://kyenproducts.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-13-at-13.07.45_45e1a199-300x300.jpg" alt="Farm products" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </StaggerItem>
                </StaggerChildren>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gray-900 dark:bg-[#0a0a0a] py-10 sm:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="border border-gray-700 dark:border-[#2a2a2a] rounded-lg p-6 sm:p-8">
              <h3 className="text-white font-bold text-sm sm:text-base mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-6 max-w-lg leading-relaxed">Join our community today and be part of a movement that transforms farm produce, supports local farmers, and nourishes communities across Nigeria.</p>
              <NewsletterForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
