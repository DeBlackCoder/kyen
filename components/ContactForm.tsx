"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gray-200 dark:border-[#2a2a2a] rounded p-6 text-center space-y-2 bg-white dark:bg-[#1a1a1a]">
        <p className="text-2xl">✅</p>
        <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Message sent!</p>
        <p className="text-gray-500 dark:text-gray-400 text-xs">We&apos;ll get back to you shortly.</p>
        <button onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
          className="mt-3 text-xs underline text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
          Send another
        </button>
      </div>
    );
  }

  const inputCls = "w-full border border-gray-300 dark:border-[#333] rounded-sm px-3 py-2.5 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 bg-white dark:bg-[#1a1a1a] focus:outline-none focus:border-gray-600 dark:focus:border-gray-400 focus:ring-1 focus:ring-gray-600 dark:focus:ring-gray-400 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Name</label>
        <input id="contact-name" type="text" name="name" required placeholder="Name" value={form.name} onChange={handleChange} className={inputCls} />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Email</label>
        <input id="contact-email" type="email" name="email" required placeholder="Email" value={form.email} onChange={handleChange} className={inputCls} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Message</label>
        <textarea id="contact-message" name="message" required rows={5} placeholder="Message" value={form.message} onChange={handleChange} className={`${inputCls} resize-none`} />
      </div>
      <button type="submit" className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm py-3 rounded-sm hover:bg-black dark:hover:bg-white transition-colors">
        Send
      </button>
    </form>
  );
}
