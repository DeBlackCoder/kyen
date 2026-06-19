"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[61] w-[calc(100vw-2rem)] max-w-sm bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl p-7 flex flex-col items-center text-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-modal-title"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16M10 12h4" />
              </svg>
            </div>

            <h2 id="auth-modal-title" className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Storage Database Not Connected
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Google Sign-In is not available yet. The storage database has not been connected to this site. Please check back soon.
            </p>

            <button
              onClick={onClose}
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm py-2.5 rounded-xl hover:bg-black dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Got it
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
