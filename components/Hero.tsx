"use client"
import { cn } from "@/lib/utils";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Link from "next/link";
import { useEffect } from "react";
import EventBadge3D from "./EventBadge3D";

export type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

type HeroProps = {
  ctas: CTAButton[];
  startAnimation?: boolean;
};

export function Hero({ ctas, startAnimation }: HeroProps) {
  useEffect(() => {
    if (!startAnimation) return;

    const createSplit = (selector: string, type: 'chars' | 'lines', className: string) => {
      return SplitText.create(selector, {
        type: type,
        [type + 'Class']: className,
        mask: type,
      });
    };

    // Split header text
    const splitHeader = createSplit('.header-row h1', 'lines', 'line');
    const headerLines = splitHeader.lines as HTMLElement[];

    // Set initial positions
    gsap.set(headerLines, { yPercent: 100 });

    // Create timeline for hero section reveal
    const tl = gsap.timeline({ delay: 0 });

    // Animate header lines up
    tl.to(
      '.header-row .line',
      {
        yPercent: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
      },
      '-=0.75'
    );

    // Animate dividers
    tl.to(
      '.divider',
      {
        scaleX: 1,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
      },
      '<'
    );

    // Cleanup
    return () => {
      tl.kill();
      splitHeader.revert();
    };
  }, [startAnimation]);
  return (
    <section className="relative bg-white min-h-screen py-16 md:py-20 lg:px-4 flex items-end justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl flex flex-col items-center gap-6">


          <EventBadge3D />
          <h1 className="text-2xl px-1 md:text-6xl text-black font-manrope font-extrabold uppercase text-center">
            Building smart, data driven products with automation and design precision.
          </h1>
          <div className="hidden md:flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "inline-flex relative z-50 items-center justify-center px-6 py-3 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 font-manrope",
                  cta.variant === "primary" &&
                  "bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-500",
                  cta.variant === "secondary" &&
                  "bg-black text-white hover:bg-white hover:text-black focus:ring-slate-500",
                  (!cta.variant || cta.variant === "ghost") &&
                  "border border-slate-300 text-slate-700 hover:bg-slate-100 focus:ring-slate-500"
                )}
              >
                {cta.label}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden flex-wrap gap-4">
            {ctas.slice(0, 2).map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "inline-flex relative z-50 items-center justify-center px-6 py-3 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 font-manrope",
                  cta.variant === "primary" &&
                  "bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-500",
                  cta.variant === "secondary" &&
                  "bg-black text-white hover:bg-black/90 hover:text-black",
                  (!cta.variant || cta.variant === "ghost") &&
                  "border border-slate-300 text-slate-700 hover:bg-slate-100 focus:ring-slate-500"
                )}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
