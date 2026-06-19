"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Metric tons sourced" },
  { value: 300, suffix: "+", label: "Farmers supported" },
  { value: 25,  suffix: "",  label: "Jobs created" },
  { value: 60,  suffix: "%", label: "Women & youth" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = 16;
    const inc = target / (1800 / step);
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-2xl font-extrabold text-gray-900 dark:text-white">
      {count}{suffix}
    </span>
  );
}

export default function CounterSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
      {stats.map(s => (
        <div key={s.label} className="text-center bg-gray-50 dark:bg-[#1a1a1a] rounded-lg py-3 px-2">
          <Counter target={s.value} suffix={s.suffix} />
          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-tight">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
