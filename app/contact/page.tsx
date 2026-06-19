import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/ContactForm";
import { getDailyImage } from "@/lib/daily-image";

export const metadata: Metadata = {
  title: "Contact Us | Kyen Products & Supplies Ltd",
  description: "Get in touch with Kyen Products & Supplies Ltd.",
};

export default function ContactPage() {
  const heroImg = getDailyImage(3);
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[220px] sm:h-[300px] lg:h-[340px] overflow-hidden">
        <Image
          src={heroImg}
          alt="Contact us hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <FadeIn direction="up">
            <div className="bg-white px-12 sm:px-20 py-5 sm:py-6 shadow-md">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight text-center">
                Contact Us
              </h1>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">

          {/* ── LEFT: Contact Information ── */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              {/* Visit us */}
              <div className="mb-6">
                <p className="text-[11px] font-bold text-gray-800 uppercase tracking-widest mb-2">
                  Visit Us At:
                </p>
                <address className="not-italic text-sm text-gray-600 leading-relaxed">
                  Nigerian Stored Agricultural<br />
                  Produce and Research Institute, Mile 4,<br />
                  Port-Harcourt
                </address>
              </div>

              {/* Send / Call */}
              <div>
                <p className="text-[11px] font-bold text-gray-800 uppercase tracking-widest mb-2">
                  Send Us A Message Or Call At:
                </p>
                <div className="space-y-1">
                  <a
                    href="mailto:kyenproducts@gmail.com"
                    className="block text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    kyenproducts@gmail.com
                  </a>
                  <a
                    href="tel:+2348117264991"
                    className="block text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    +234 811 726 4991
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── RIGHT: Message Us form ── */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Message Us
              </h2>
              <ContactForm />
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}
