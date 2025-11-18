"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type MetricProps = {
  label: string;
  value: string;
  caption?: string;
};

export function Metric({ label, value, caption }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract number and suffix from value string
  const numericMatch = value.match(/(\d+)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * targetNumber);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNumber]);

  return (
    <div ref={ref} className="text-center font-manrope">
      <div className="text-2xl md:text-4xl font-bold text-primary mb-1">
        {displayValue}{suffix}
      </div>
      <div className="text-sm font-medium text-slate-700 mb-1">
        {label}
      </div>
      {caption && (
        <div className="text-xs text-slate-500 dark:text-slate-500">
          {caption}
        </div>
      )}
    </div>
  );
}
