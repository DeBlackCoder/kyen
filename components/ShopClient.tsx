"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number; name: string; tag: string; price: number; display: string; href: string; img: string;
}

const MIN = 1000, MAX = 7000;
const CATS = ["Flakes", "Powder", "Syrup"];

export default function ShopClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(MAX);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() =>
    products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.price <= maxPrice &&
      (activeCat ? p.tag === activeCat : true)
    ), [products, search, maxPrice, activeCat]);

  const fmt = (v: number) => "₦" + v.toLocaleString("en-NG");

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">

      {/* Mobile filter toggle */}
      <div className="sm:hidden w-full">
        <button onClick={() => setSidebarOpen(o => !o)}
          className="flex items-center gap-2 text-sm font-medium border border-gray-300 dark:border-[#333] rounded px-4 py-2 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
          </svg>
          {sidebarOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`w-full sm:w-[200px] shrink-0 space-y-5 ${sidebarOpen ? "block" : "hidden sm:block"}`}>
        {/* Search */}
        <div className="flex items-center border border-gray-300 dark:border-[#333] rounded px-3 py-2 gap-2 bg-white dark:bg-[#1a1a1a]">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="search" placeholder="Search for products..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="text-xs flex-1 focus:outline-none bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400" />
        </div>

        {/* Price range */}
        <div className="space-y-2">
          <input type="range" min={MIN} max={MAX} step={100} value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
            className="w-full accent-gray-800 cursor-pointer" />
          <div className="flex items-center justify-between gap-2">
            <button onClick={() => setMaxPrice(MAX)}
              className="bg-gray-800 dark:bg-gray-700 text-white text-[10px] font-semibold px-3 py-1 rounded hover:bg-black transition-colors">
              Filter
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400">{fmt(MIN)} — {fmt(maxPrice)}</span>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">Categories</h3>
          <ul className="space-y-1">
            <li>
              <button onClick={() => setActiveCat(null)}
                className={`text-xs w-full text-left px-1 py-1 transition-colors hover:text-black dark:hover:text-white ${activeCat === null ? "font-semibold text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
                All
              </button>
            </li>
            {CATS.map(cat => (
              <li key={cat}>
                <button onClick={() => setActiveCat(cat === activeCat ? null : cat)}
                  className={`text-xs w-full text-left px-1 py-1 transition-colors hover:text-black dark:hover:text-white ${activeCat === cat ? "font-semibold text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Grid */}
      <div className="flex-1 w-full">
        {filtered.length === 0
          ? <p className="text-sm text-gray-400 text-center py-16">No products match your filters.</p>
          : (
            <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <AnimatePresence>
                {filtered.map(p => (
                  <motion.div key={p.id} layout
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}
                    className="flex flex-col group bg-white dark:bg-[#1a1a1a]">
                    <Link href={p.href} className="block relative h-36 sm:h-44 bg-gray-50 dark:bg-[#111] overflow-hidden border border-gray-100 dark:border-[#2a2a2a]">
                      <Image src={p.img} alt={p.name} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" />
                    </Link>
                    <div className="pt-2 pb-1 flex flex-col gap-1 text-center">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">{p.tag}</span>
                      <Link href={p.href} className="text-xs font-semibold text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white leading-tight line-clamp-2">{p.name}</Link>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{p.display}</p>
                      <button type="button" className="mt-1 w-full bg-gray-800 dark:bg-gray-700 text-white text-[10px] sm:text-xs font-semibold py-2 hover:bg-black dark:hover:bg-white dark:hover:text-gray-900 transition-colors">
                        Add to cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
      </div>
    </div>
  );
}
