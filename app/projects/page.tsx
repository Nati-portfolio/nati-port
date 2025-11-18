import React, { Suspense } from "react";
import ProjectsClient from "./ProjectsClient";

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="py-24 px-4">Loading projects…</div>}>
      <ProjectsClient />
    </Suspense>
  );
}
