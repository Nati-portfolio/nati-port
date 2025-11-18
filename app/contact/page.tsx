import { Mail, Github, Linkedin } from "@/components/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Natnael Endale",
  description: "Get in touch with Natnael Endale for product management opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="py-24 px-4 bg-white mb-[80vh] md:mb-[50vh] rounded-b-[4rem]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-manrope uppercase">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-agdasima">
            Open to new opportunities in product management, data analytics, and AI engineering.
            Let&apos;s connect and explore how we can build something impactful together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:natnael@endale.dev"
            className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-50  text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 font-manrope">Email</h2>
                <p className="text-slate-600 mb-2 font-agdasima">
                  Reach out directly via email for opportunities and collaborations.
                </p>
                <span className="text-emerald-700 font-medium group-hover:underline font-agdasima">
                  natnaelvendale@gmail.com
                </span>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="http://linkedin.com/in/natnael-endale-mba-a261651b4"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300  hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-50  text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 font-manrope">LinkedIn</h2>
                <p className="text-slate-600 mb-2 font-agdasima">
                  Connect with me professionally and see my career journey.
                </p>
                <span className="text-emerald-700 font-medium group-hover:underline font-agdasima">
                  linkedin.com/in/natnael-endale-mba-a261651b4
                </span>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Natnaele22"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-50  text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 font-manrope">GitHub</h2>
                <p className="text-slate-600 mb-2 font-agdasima">
                  Check out my open-source contributions and project repositories.
                </p>
                <span className="text-emerald-700 font-medium group-hover:underline font-agdasima">
                  github.com/Natnaele22
                </span>
              </div>
            </div>
          </a>

          {/* Calendly (Optional) */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
            <h2 className="text-xl font-semibold mb-4 font-manrope">Schedule a Call</h2>
            <p className="text-slate-600 mb-4 font-agdasima">
              Want to discuss a project or opportunity? Book a 30-minute intro call.
            </p>
            <a
              href="https://calendly.com/natnaelvendale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 font-manrope"
            >
              Book a Call
            </a>
            <p className="text-xs text-slate-500 mt-3 font-agdasima">
              Available Monday-Friday, 9 AM - 5 PM EAT
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="p-8 rounded-2xl bg-emerald-50  border border-emerald-200">
          <h2 className="text-2xl font-bold mb-4 text-emerald-900 font-manrope">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-emerald-800">
            <div>
              <h3 className="font-semibold mb-2 font-manrope">Response Time</h3>
              <p className="text-sm font-agdasima">I typically respond within 24-48 hours on weekdays.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-manrope">Best For</h3>
              <p className="text-sm font-agdasima">
                Product management roles, consulting opportunities, speaking engagements, and
                collaboration on data/AI projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-manrope">Time Zone</h3>
              <p className="text-sm font-agdasima">Eastern Standard Time (EST / UTC-5)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-manrope">Preferred Contact</h3>
              <p className="text-sm font-agdasima">Email for detailed discussions, LinkedIn for quick networking.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
