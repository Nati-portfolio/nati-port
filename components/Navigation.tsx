import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navigation() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 bg-white w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="hidden lg:flex text-xl font-manrope font-bold hover:text-emerald-700 transition-colors rounded"
          >
            Natnael Endale
          </Link>
          <Link
            href="/"
            className="flex lg:hidden text-xl font-manrope font-bold hover:text-emerald-700 transition-colors rounded"
          >
            NE
          </Link>
          
          <div className="flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-1 lg:px-4 lg:py-2 rounded-lg font-agdasima text-sm md:text-lg lg:font-medium transition-colors",
                  "hover:bg-slate-100",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
