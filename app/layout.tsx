import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import SmoothScrolling from "@/utils/SmoothScroll";
import type { Metadata } from "next";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import "./globals.css";

export const metadata: Metadata = {
  title: "Natnael Endale - Product Manager",
  description: "Data-driven PM leading AI, Analytics, Web & Mobile products.",
  openGraph: {
    title: "Natnael Endale - Product Manager",
    description: "Data-driven PM leading AI, Analytics, Web & Mobile products.",
    images: ["/og/image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="antialiased">
        <NuqsAdapter>
          <SmoothScrolling>
            <Navigation />
            {children}
            <Footer />
          </SmoothScrolling>
        </NuqsAdapter>
      </body>
    </html>
  );
}
