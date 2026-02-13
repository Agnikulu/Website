import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectsCard from "@/components/projects/projects-card";
import { pagesConfig } from "@/config/pages";
import { projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

export default function ProjectsPage() {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <ProjectsCard projects={projects} />
    </PageContainer>
  );
}
