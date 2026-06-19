"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="font-bold text-sm mb-3 uppercase tracking-wide">KYEN PRODUCTS &amp; SUPPLIES LTD</h4>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">Transforming Farm Produce. Empowering Farmers. Nourishing Communities.</p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Pages</h4>
          <ul className="space-y-2">
            {[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Shop", href: "/shop" }, { label: "Contact Us", href: "/contact" }].map(l => (
              <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white text-xs transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Contact</h4>
          <address className="not-italic text-gray-400 text-xs space-y-2 leading-relaxed">
            <p>Nigerian Stored Agricultural Produce and Research Institute, Mile 4, Port-Harcourt</p>
            <p><a href="mailto:kyenproducts@gmail.com" className="hover:text-white transition-colors">kyenproducts@gmail.com</a></p>
            <p><a href="tel:+2348117264991" className="hover:text-white transition-colors">+234 811 726 4991</a></p>
          </address>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Details</h4>
          <ul className="space-y-2 mb-5">
            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white text-xs transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-400 hover:text-white text-xs transition-colors">Terms and Conditions</Link></li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="http://www.linkedin.com/company/kyen1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8.5 6.5h-2v7h2v-7zm-1-2.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM17 9.5h-1.75s-.05.44-.05 1h-.1c-.3-.56-.93-1.1-2.1-1.1-1.9 0-3.25 1.6-3.25 3.9 0 2.2 1.2 3.8 3.1 3.8 1 0 1.75-.48 2.1-1.05h.1v.75H17V9.5zm-3.5 5.75c-.95 0-1.6-.85-1.6-1.95s.65-1.95 1.6-1.95c.9 0 1.5.8 1.5 1.95s-.6 1.95-1.5 1.95z"/></svg>
            </a>
            <a href="https://www.instagram.com/onion_wholeseller_in_nigeria" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.308C2.497 19.467 2.226 18.2 2.164 16.834 2.106 15.569 2.095 15.189 2.095 11.985s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608C4.448 2.553 5.715 2.282 7.081 2.22 8.346 2.162 8.726 2.163 12 2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.074-3.038.435-4.181 1.578C1.729 2.794 1.368 4.223 1.294 5.832.014 8.347 0 8.741 0 12c0 3.259.014 3.668.072 4.948.074 1.609.435 3.038 1.578 4.181 1.143 1.143 2.572 1.504 4.181 1.578 1.28.058 1.689.072 4.947.072s3.667-.014 4.947-.072c1.609-.074 3.038-.435 4.181-1.578 1.143-1.143 1.504-2.572 1.578-4.181C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.653-.072-4.948-.074-1.609-.435-3.038-1.578-4.181C21.207.728 19.778.367 18.169.293 16.889.014 16.481 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 px-4 text-center text-gray-500 text-xs">
        &copy; 2025 Kyen Products &amp; Supplies Ltd. All rights reserved.
      </div>
    </footer>
  );
}
