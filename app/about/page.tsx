import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Natnael Endale",
    description: "Learn about Natnael Endale's approach to product management, leadership philosophy, and professional journey.",
};

export default function AboutPage() {
    return (
        <main className="py-24 px-4 bg-white mb-[80vh] md:mb-[50vh] rounded-b-[4rem]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 font-manrope uppercase">About Me</h1>

                {/* Bio */}
                <section className="mb-16">
                    <div className="prose max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-6 font-agdasima">
                            Natnael Endale is a Product Manager who blends data analytics, automation, and design to
                            build intelligent, testable products.
                            He&apos;s fluent in SQL, Python, and Power BI for data; and tools like Lovable, Figma AI, Supabase,
                            and Zapier for rapid front-end and process automation.
                        </p>
                    </div>

                    {/* Core Skills */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-700 mb-4 font-manrope">Core Skills</h3>
                        <p className="text-slate-600 lg:text-lg  leading-relaxed font-agdasima">
                            Python · SQL · Power BI · Figma AI · Lovable · Supabase · Zapier · Rapid POC Development ·
                            Data Automation · Product Analytics · System Design
                        </p>
                    </div>
                </section>

                {/* Values */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 font-manrope">
                        Values
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-emerald-600 font-bold text-lg">1.</span>
                            <p className="text-slate-600 font-agdasima text-lg">Speed through iteration</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-emerald-600 font-bold text-lg">2.</span>
                            <p className="text-slate-600 font-agdasima text-lg">Data clarity drives design</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-emerald-600 font-bold text-lg">3.</span>
                            <p className="text-slate-600 font-agdasima text-lg">Build smart, not complex</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-emerald-600 font-bold text-lg">4.</span>
                            <p className="text-slate-600 font-agdasima text-lg">Automation before repetition</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-emerald-600 font-bold text-lg">5.</span>
                            <p className="text-slate-600 font-agdasima text-lg">Design that informs execution</p>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl font-bold font-manrope">Tech Stack</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-emerald-700 mb-4 font-manrope">
                                Data & Analytics
                            </h3>
                            <p className="text-slate-600 font-agdasima">
                                Python · SQL · Power BI · Pandas
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-emerald-700 mb-4 font-manrope">
                                Automation
                            </h3>
                            <p className="text-slate-600 font-agdasima">
                                Zapier · n8n · Supabase · API Integrations
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-emerald-700 mb-4 font-manrope">
                                Prototyping & Design
                            </h3>
                            <p className="text-slate-600 font-agdasima">
                                Figma AI · Lovable · Galileo AI
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-emerald-700 mb-4 font-manrope">
                                Web Tools
                            </h3>
                            <p className="text-slate-600 font-agdasima">
                                Next.js · TypeScript · Tailwind CSS · shadcn/ui
                            </p>
                        </div>
                        
                        <div className="md:col-span-2">
                            <h3 className="text-lg font-semibold text-emerald-700 mb-4 font-manrope">
                                Infrastructure
                            </h3>
                            <p className="text-slate-600 font-agdasima">
                                GitHub Actions · Vercel · Replit
                            </p>
                        </div>
                    </div>
                </section>

                {/* Approach */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 font-manrope">Approach</h2>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                        <p className="text-slate-600 font-agdasima text-lg leading-relaxed">
                            My approach combines data-driven insights with rapid iteration. I believe in building smart solutions 
                            that scale through automation rather than complexity. Every product decision is backed by data, 
                            every process is designed for efficiency, and every design choice informs better execution.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
