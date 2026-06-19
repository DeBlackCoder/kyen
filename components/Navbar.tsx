"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { usePathname } from "next/navigation";
import AuthModal from "@/components/AuthModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const productLinks = [
  { label: "All Products", href: "/shop" },
  { label: "Flakes", href: "/shop" },
  { label: "Powders", href: "/shop" },
  { label: "Syrups", href: "/shop" },
];

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function DarkModeToggle({ mobile = false }: { mobile?: boolean }) {
  const { theme, toggle, mounted } = useTheme();
  const isDark = theme === "dark";

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-white/10 shrink-0" aria-hidden="true" />;
  }

  // Mobile: simple icon button (sun / moon), no sliding track
  if (mobile) {
    return (
      <button
        onClick={toggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shrink-0"
      >
        {isDark ? (
          // Sun icon
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        ) : (
          // Moon icon
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </button>
    );
  }

  // Desktop: sliding toggle
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 shrink-0"
      style={{ backgroundColor: isDark ? "#4f4f4f" : "#d1d5db" }}
    >
      <span className="absolute left-1 top-0.5 text-[10px] select-none pointer-events-none">
        {isDark ? "🌙" : "☀️"}
      </span>
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm"
        style={{ left: isDark ? "calc(100% - 18px)" : "2px" }}
      />
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isProductsActive = pathname.startsWith("/shop");

  function handleGoogleSignIn() {
    setAuthModalOpen(true);
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-[#111111] border-b border-gray-100 dark:border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Main bar ── */}
          <div className="flex items-center h-14 gap-4">

            {/* ── MOBILE: 3-col grid so logo is perfectly centered ── */}
            {/* Left col: hamburger */}
            <div className="md:hidden flex items-center flex-1">
              <button
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                onClick={() => { setMenuOpen(o => !o); setMobileSearchOpen(false); }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>

            {/* ── DESKTOP LEFT: nav links ── */}
            <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-gray-700 dark:text-gray-300 flex-1">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}
                  className={`relative py-1 whitespace-nowrap transition-colors group ${
                    isActive(link.href)
                      ? "text-black dark:text-white"
                      : "hover:text-black dark:hover:text-white"
                  }`}>
                  {link.label}
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
              {/* Products dropdown */}
              <div className="relative group">
                <button className={`relative flex items-center gap-1 transition-colors whitespace-nowrap py-1 ${
                  isProductsActive ? "text-black dark:text-white" : "hover:text-black dark:hover:text-white"
                }`}>
                  Our Products
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Underline */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${
                    isProductsActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
                <div className="absolute top-full left-0 mt-1 w-40 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {productLinks.map(pl => (
                    <Link key={pl.label} href={pl.href}
                      className="block px-4 py-2.5 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors">
                      {pl.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* ── CENTER: Logo (always centered on mobile, natural flow on desktop) ── */}
            <Link
              href="/"
              aria-label="Kyen Products home"
              className="shrink-0"
            >
              <Image
                src="https://kyenproducts.com/wp-content/uploads/2020/09/WhatsApp_Image_2025-11-13_at_12.24.15_a9bc9341-removebg-preview-e1763033958502.png"
                alt="Kyen Products & Supplies"
                width={80}
                height={40}
                className="object-contain h-10 w-auto dark:brightness-0 dark:invert"
                priority
              />
            </Link>

            {/* ── DESKTOP RIGHT: search + dark toggle + sign in ── */}
            <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
              <div className="flex items-center border border-gray-300 dark:border-[#444] rounded-lg overflow-hidden bg-transparent">
                <input
                  type="search"
                  placeholder="Search..."
                  aria-label="Search products"
                  className="text-xs px-3 py-1.5 w-28 focus:outline-none focus:w-36 transition-all bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400"
                />
                <button aria-label="Submit search"
                  className="bg-gray-800 dark:bg-gray-700 px-2.5 py-1.5 hover:bg-black transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <DarkModeToggle />
              <button onClick={handleGoogleSignIn}
                className="flex items-center gap-1.5 border border-gray-300 dark:border-[#444] rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-400 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400">
                <GoogleIcon />
                Sign in
              </button>
            </div>

            {/* ── MOBILE RIGHT: dark mode + search — equal width to left col so logo centers ── */}
            <div className="md:hidden flex items-center justify-end gap-1 flex-1">
              <DarkModeToggle mobile />
              <button
                aria-label={mobileSearchOpen ? "Close search" : "Open search"}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                onClick={() => { setMobileSearchOpen(o => !o); setMenuOpen(false); }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileSearchOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  }
                </svg>
              </button>
            </div>
          </div>

          {/* ── Mobile search bar — slides down under the header ── */}
          <AnimatePresence>
            {mobileSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden md:hidden border-t border-gray-100 dark:border-[#222]"
              >
                <div className="py-3">
                  <div className="flex items-center border border-gray-300 dark:border-[#444] rounded-lg overflow-hidden">
                    <input
                      type="search"
                      placeholder="Search products..."
                      aria-label="Search products"
                      autoFocus
                      className="flex-1 text-sm px-4 py-2.5 focus:outline-none bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400"
                    />
                    <button aria-label="Submit search"
                      className="bg-gray-800 dark:bg-gray-700 px-4 py-2.5 hover:bg-black transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-14 left-0 right-0 bg-white dark:bg-[#111] z-40 md:hidden shadow-xl border-b border-gray-100 dark:border-[#222] max-h-[85vh] overflow-y-auto"
            >
              <nav className="px-4 py-2">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}>
                    <Link href={link.href}
                      className={`flex items-center justify-between py-3.5 px-2 text-sm font-medium border-b border-gray-50 dark:border-[#222] transition-colors border-l-2 ${
                        isActive(link.href)
                          ? "border-l-gray-900 dark:border-l-white text-black dark:text-white bg-gray-50 dark:bg-white/5 pl-3"
                          : "border-l-transparent text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
                      }`}
                      onClick={() => setMenuOpen(false)}>
                      {link.label}
                      <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}

                {/* Products accordion */}
                <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.25 }}>
                  <button onClick={() => setProductsOpen(o => !o)}
                    className={`flex items-center justify-between w-full py-3.5 px-2 text-sm font-medium border-b border-gray-50 dark:border-[#222] transition-colors border-l-2 ${
                      isProductsActive
                        ? "border-l-gray-900 dark:border-l-white text-black dark:text-white bg-gray-50 dark:bg-white/5 pl-3"
                        : "border-l-transparent text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
                    }`}>
                    Our Products
                    <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${productsOpen ? "rotate-90" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50 dark:bg-[#1a1a1a] rounded-lg mx-2 mb-1">
                        {productLinks.map(pl => (
                          <Link key={pl.label} href={pl.href}
                            className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border-b border-gray-100 dark:border-[#222] last:border-0 transition-colors"
                            onClick={() => setMenuOpen(false)}>
                            {pl.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </nav>

              {/* Sign in */}
              <div className="px-4 py-4 border-t border-gray-100 dark:border-[#222]">
                <button onClick={handleGoogleSignIn}
                  className="flex items-center justify-center gap-2 w-full border border-gray-300 dark:border-[#444] rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                  <GoogleIcon />
                  Sign in with Google
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
