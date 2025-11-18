import { Hero } from "@/components/Hero";
import { Metric } from "@/components/Metric";
import Service from "@/components/Service";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <main>
      <Hero
        ctas={[
          { label: "Contact", href: "/contact", variant: "primary" },
          { label: "View Projects", href: "/projects", variant: "secondary" },
          {
            label: "GitHub",
            href: "https://github.com/Natnaele22",
            variant: "ghost",
            external: true,
          },
          {
            label: "LinkedIn",
            href: "http://linkedin.com/in/natnael-endale-mba-a261651b4",
            variant: "ghost",
            external: true,
          },
          {
            label: "E-mail",
            href: "natnaelvendale@gmail.com",
            variant: "ghost",
          },
        ]}
      />

      <Service />

      <section className="bg-white px-4 py-8">
        <div className="w-full md:max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl uppercase mb-8 font-manrope font-extrabold">
            Leadership Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 font-agdasima">
            <div className="w-full">
              <h3 className="text-xl font-bold mb-4 text-emerald-700 font-manrope">
                Cross-Functional Leadership
              </h3>
              <ul className="space-y-3 text-slate-600 text-lg font-agdasima">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Led teams of 5-8 across engineering, design, and data analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Managed stakeholder alignment across 3+ time zones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Coordinated sprint planning, retrospectives, and daily standups</span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold mb-4 text-emerald-700 font-manrope">
                Results & KPIs
              </h3>
              <ul className="space-y-3 text-slate-600 text-lg font-agdasima">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Shipped 20+ major features with 95%+ on-time delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced time-to-market by 40% through process optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Maintained team velocity at 85% sprint commitment rate</span>
                </li>
              </ul>
            </div>

          </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full border-t border-slate-200">
              <Metric label="Products Shipped" value="15+" />
              <Metric label="Team Members Led" value="25+" />
              <Metric label="Stakeholders Managed" value="30+" />
              <Metric label="On-Time Delivery" value="95%" />
            </div>
        </div>
      </section>

      <TrustedBy />
    </main>
  );
}
