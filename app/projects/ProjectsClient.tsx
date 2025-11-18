"use client";

import { useQueryState } from "nuqs";
import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

const projects = projectsData as Project[];

const domainFilters = [
  { value: "all", label: "All Projects" },
  { value: "data", label: "Data & BI" },
  { value: "ai", label: "AI Engineering" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "uiux", label: "UI/UX" },
];

export default function ProjectsClient() {
  const [selectedDomain, setSelectedDomain] = useQueryState("domain", {
    defaultValue: "all",
  });
  const [sortBy, setSortBy] = useQueryState("sort", {
    defaultValue: "recent",
  });

  const filteredProjects = (() => {
    const filtered =
      selectedDomain === "all"
        ? projects
        : projects.filter((p) => p.domains.includes(selectedDomain));

    if (sortBy === "recent") {
      return filtered;
    } else {
      return [...filtered].sort((a, b) => b.outcomes.length - a.outcomes.length);
    }
  })();

  return (
    <main className="py-24 px-4 bg-white mb-[80vh] md:mb-[50vh] rounded-b-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-manrope uppercase">Projects</h1>
          <p className="text-lg text-slate-600 max-w-2xl font-agdasima">
            A showcase of product initiatives across data analytics, AI, web, mobile, and design systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by domain">
            {domainFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedDomain(filter.value)}
                className={`px-4 py-2 rounded-lg text-sm cursor-pointer font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 font-manrope ${
                  selectedDomain === filter.value
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                aria-pressed={selectedDomain === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="sort" className="text-sm text-slate-600 font-agdasima">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-agdasima"
            >
              <option value="recent">Most Recent</option>
              <option value="impact">Highest Impact</option>
            </select>
          </div>
        </div>

        <motion.div 
          layout
          className="mb-6 text-sm text-slate-600 font-agdasima"
        >
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait" initial={false}>
            {filteredProjects.map((project) => (
              <motion.div
                key={`${selectedDomain}-${sortBy}-${project.slug}`}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.9,
                  transition: {
                    duration: 0.2,
                  }
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-slate-600 text-lg font-agdasima">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
