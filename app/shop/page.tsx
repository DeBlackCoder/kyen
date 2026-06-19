import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import ShopClient from "@/components/ShopClient";
import { getDailyImage } from "@/lib/daily-image";

export const metadata: Metadata = {
  title: "Shop | Kyen Products & Supplies Ltd",
  description: "Browse and buy our premium, shelf-stable agricultural food products.",
};

export const products = [
  { id: 1, name: "CocoDates 150g",    tag: "Flakes", price: 3000, display: "₦3,000.00", href: "/shop/cocodates-150g",    img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { id: 2, name: "CocoDates 500g",    tag: "Flakes", price: 6000, display: "₦6,000.00", href: "/shop/cocodates-500g",    img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { id: 3, name: "CocoDates 70g",     tag: "Flakes", price: 1008, display: "₦1,008.00", href: "/shop/cocodates-70g",     img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { id: 4, name: "Date powder 500g",  tag: "Powder", price: 4900, display: "₦4,900.00", href: "/shop/date-powder-500g",  img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { id: 5, name: "Date syrup 350ml",  tag: "Syrup",  price: 5990, display: "₦5,990.00", href: "/shop/date-syrup-350ml",  img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { id: 6, name: "Onion Flakes 250g", tag: "Flakes", price: 3998, display: "₦3,998.00", href: "/shop/onion-flakes-250g", img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
  { id: 7, name: "Onion Powder 250g", tag: "Powder", price: 4998, display: "₦4,998.00", href: "/shop/onion-powder-250g", img: "https://kyenproducts.com/wp-content/uploads/2025/12/Kyen-Onion-Flakes--300x300.jpg" },
];

export default function ShopPage() {
  const heroImg = getDailyImage(2);
  return (
    <>
      <section className="relative w-full h-[220px] sm:h-[300px] lg:h-[340px] overflow-hidden">
        <Image src={heroImg}
          alt="Kyen Shop hero" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <FadeIn direction="up">
            <div className="bg-white dark:bg-[#1a1a1a] px-12 sm:px-20 py-5 sm:py-6 shadow-md">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight text-center">Shop</h1>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 bg-white dark:bg-[#0f0f0f] min-h-[60vh]">
        <div className="max-w-5xl mx-auto">
          <ShopClient products={products} />
        </div>
      </section>
    </>
  );
}
