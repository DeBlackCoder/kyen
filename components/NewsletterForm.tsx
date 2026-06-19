"use client";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-0 max-w-md" onSubmit={e => e.preventDefault()}>
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input
        id="nl-email" type="email" required placeholder="Email"
        className="flex-1 px-4 py-2.5 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-200 placeholder-gray-400 text-xs border-0 focus:outline-none rounded-l sm:rounded-none sm:rounded-l"
      />
      <button type="submit"
        className="bg-gray-700 dark:bg-gray-600 text-white text-xs font-semibold px-6 py-2.5 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors rounded-r sm:rounded-none sm:rounded-r">
        Send
      </button>
    </form>
  );
}
