import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "./icons";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  domains: string[];
  role: string;
  team: string;
  stack: string[];
  outcomes: string[];
  links?: { label: string; href: string }[];
  image?: string;
  slug?: string;
};

const domainLabels: Record<string, string> = {
  ai: "AI Engineering",
  data: "Data & BI",
  web: "Web",
  mobile: "Mobile",
  uiux: "UI/UX",
  qa: "QA/CI",
};

const domainColors: Record<string, string> = {
  ai: "bg-purple-100 text-purple-700",
  data: "bg-blue-100 text-blue-700",
  web: "bg-green-100 text-green-700",
  mobile: "bg-pink-100 text-pink-700",
  uiux: "bg-amber-100 text-amber-700",
  qa: "bg-slate-100 text-slate-700",
};

export function ProjectCard({
  title,
  domains,
  role,
  team,
  stack,
  outcomes,
  links,
  image,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group border border-slate-500 bg-white overflow-hidden cursor-pointer transition-all lg:h-[70vh] ">
      <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
        {image && !imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-center group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <svg
              className="w-16 h-16 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {domains.map((domain) => (
            <span
              key={domain}
              className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                domainColors[domain] || domainColors.web
              }`}
            >
              {domainLabels[domain] || domain}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-700 font-manrope transition-colors">
          {title}
        </h3>
        
        <div className="text-sm text-slate-600 mb-4 space-y-1">
          <p>
            <span className="font-medium">Role:</span> {role}
          </p>
          <p>
            <span className="font-medium">Team:</span> {team}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-slate-700 mb-2">
            Key Outcomes:
          </p>
          <ul className="space-y-1.5">
            {outcomes.slice(0, 3).map((outcome, idx) => (
              <li
                key={idx}
                className="text-sm text-slate-600 flex items-start"
              >
                <span className="text-emerald-600 mr-2 mt-0.5">
                  •
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-slate-100 text-black border-black border rounded-full"
              >
                {tech}
              </span>
            ))}
            {stack.length > 5 && (
              <span className="px-2 py-0.5 text-xs text-slate-500">
                +{stack.length - 5} more
              </span>
            )}
          </div>
        </div>

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-emerald-700 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
