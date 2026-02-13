"use client";

import Link from "next/link";
import { Icons } from "@/components/common/icons";
import { ProjectInterface } from "@/config/projects";

interface ProjectsCardProps {
  projects: ProjectInterface[];
}

export default function ProjectsCard({ projects }: ProjectsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-6 sm:grid-cols-1 lg:grid-cols-2 static">
      {projects.map((project) => {
        const link =
          project.websiteLink || project.publicationLink || project.githubLink || "#";
        return (
          <div
            key={project.id}
            className="relative rounded-lg border bg-background p-6 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center justify-between">
                <h3 className="font-bold text-lg flex items-center space-x-2">
                  <Icons.gitRepoIcon size={20} />
                  <span>{project.name}</span>
                </h3>
                <div className="flex items-center space-x-2">
                  {project.websiteLink && (
                    <Link
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} website`}
                    >
                      <Icons.externalLink
                        size={30}
                        className="border bg-background rounded-full p-1.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                      />
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Icons.gitHub
                        className="border bg-background rounded-full p-1.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                        style={{ width: 30, height: 30 }}
                      />
                    </Link>
                  )}
                  {project.publicationLink && (
                    <Link
                      href={project.publicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} publication`}
                    >
                      <Icons.post
                        size={30}
                        className="border bg-background rounded-full p-1.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                      />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-muted px-2 py-1 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {project.descriptionBullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start space-x-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
