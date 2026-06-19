"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getResponse } from "@/lib/chatbot-knowledge";

interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
}

const SUGGESTIONS = [
  "What products do you sell?",
  "How do I place an order?",
  "Where are you located?",
  "Tell me about Kyen",
];

let idCounter = 0;
const newId = () => ++idCounter;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: newId(),
      role: "bot",
      text: "Hi there! 👋 I'm the Kyen assistant. Ask me anything about our products, prices, ordering, or our company.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: newId(), role: "user", text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate slight typing delay
    setTimeout(() => {
      const reply = getResponse(trimmed);
      setMessages(prev => [...prev, { id: newId(), role: "bot", text: reply }]);
      setTyping(false);
    }, 700 + Math.random() * 400);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  // Render bot text with basic markdown: **bold** and \n newlines
  function renderText(text: string) {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
          {i < lines.length - 1 && <br />}
        </span>
      );
    });
  }

  return (
    <>
      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-200 dark:border-[#2a2a2a] flex flex-col overflow-hidden"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="bg-gray-900 px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold leading-none">Kyen Assistant</p>
                <p className="text-gray-400 text-[10px] mt-0.5">Ask me anything</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-gray-50 dark:bg-[#111]">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mr-2 mt-0.5">
                      <span className="text-white text-[9px] font-bold">K</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gray-900 dark:bg-gray-700 text-white rounded-br-sm"
                        : "bg-white dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-[#333] rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {renderText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                    <span className="text-white text-[9px] font-bold">K</span>
                  </div>
                  <div className="bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-[#333] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1">
                    {[0, 1, 2].map(i => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-gray-400"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions — only show when chat is short */}
            {messages.length <= 2 && (
              <div className="px-3 py-2 border-t border-gray-100 bg-white flex gap-2 overflow-x-auto shrink-0">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="shrink-0 text-[10px] border border-gray-300 rounded-full px-3 py-1 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors whitespace-nowrap"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 border-t border-gray-200 bg-white shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 text-xs border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-gray-600 transition-colors bg-gray-50"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="w-8 h-8 rounded-full bg-gray-900 hover:bg-black transition-colors flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB toggle button ── */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 sm:right-6 z-50 w-13 h-13 rounded-full bg-gray-900 shadow-xl flex items-center justify-center hover:bg-black transition-colors"
        style={{ width: "52px", height: "52px" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 text-white"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 text-white"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
