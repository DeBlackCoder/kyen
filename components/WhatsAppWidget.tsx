"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "2348117264991"; // international format, no +
const MESSAGE = encodeURIComponent(
  "Hi Kyen Products! I'd like to make an enquiry about your products."
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export default function WhatsAppWidget() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 left-4 sm:left-6 z-50 flex flex-col items-start gap-2">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white text-gray-800 text-xs font-medium px-3 py-2 rounded-xl shadow-lg border border-gray-100 max-w-[180px] leading-snug"
          >
            Chat with us on WhatsApp!
            {/* tail */}
            <span className="absolute -bottom-1.5 left-4 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
            {/* close */}
            <button
              onClick={() => setTooltip(false)}
              aria-label="Dismiss"
              className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-2.5 h-2.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp FAB */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onHoverStart={() => setTooltip(true)}
        className="w-[52px] h-[52px] rounded-full shadow-xl flex items-center justify-center"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* Official WhatsApp icon */}
        <svg
          className="w-7 h-7"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 3C9.373 3 4 8.373 4 15c0 2.385.67 4.61 1.833 6.5L4 29l7.715-1.814A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.54 18.33c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.07 3.17 5.03 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.75-.71 2-1.4.25-.68.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35z"
            fill="#25D366"
          />
        </svg>
      </motion.a>
    </div>
  );
}
