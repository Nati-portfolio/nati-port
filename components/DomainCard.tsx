import Link from "next/link";

type DomainCardProps = {
  id: number;
  icon: React.ReactNode;
  title: string;
  blurb: string;
  metrics: string[];
  href: string;
};

export function DomainCard({ id, icon, title, blurb, metrics, href }: DomainCardProps) {
  return (
    <Link
      href={href}
      className="group block p-8 rounded-2xl border-0 bg-white"
    >
      <div className="flex flex-col items-start mb-6 group">
        <p className="font-agdasima w-full border-b-[1px] text-gray-400 border-gray-400 mb-6 pb-2 group-hover:border-black group-hover:text-gray-600 transition-all duration-300">
          0{id + 1}
        </p>
        <h3 className="text-xl text-center font-bold mb-4 text-slate-900 dark:text-slate-100 font-manrope flex items-center gap-2">
         <div className="bg-primary/20 group-hover:bg-primary/30 p-3 rounded-xl transition-all duration-300">
          {icon}
         </div>
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm font-agdasima">
          {blurb}
        </p>
      </div>
      <ul className="space-y-2">
        {metrics.map((metric, idx) => (
          <li key={idx} className="text-xs text-slate-500 dark:text-slate-500 flex items-start">
            <span className="text-slate-400 dark:text-slate-500 mr-3">•</span>
            <span>{metric}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
