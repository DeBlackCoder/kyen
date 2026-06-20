import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Kyen Products & Supplies Ltd",
  description: "Transforming Farm Produce. Empowering Farmers. Nourishing Communities.",
  metadataBase: new URL("https://kyen.vercel.app"),
  openGraph: {
    title: "Kyen Products & Supplies Ltd",
    description: "Transforming Farm Produce. Empowering Farmers. Nourishing Communities.",
    url: "https://kyen.vercel.app",
    siteName: "Kyen Products & Supplies",
    images: [
      {
        url: "/images/nrd-D6Tu_L3chLE-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Kyen Products & Supplies - Fresh Agricultural Produce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyen Products & Supplies Ltd",
    description: "Transforming Farm Produce. Empowering Farmers. Nourishing Communities.",
    images: ["/images/nrd-D6Tu_L3chLE-unsplash.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Prevent dark-mode flash before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('kyen-theme');
                  var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = saved || system;
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Chatbot />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
