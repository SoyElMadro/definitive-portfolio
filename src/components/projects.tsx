'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from 'next/link';
import type { FC } from 'react';
import { useTranslations } from 'next-intl';

interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  tags: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto max-w-screen-lg px-4 animate-fade-in animation-delay-600">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
            <Card
              key={index}
              className={`flex flex-col overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${
              project.title === "USA2 Reventas" || project.title === "InfiniTech Studios"
                ? "scale-[1.05] shadow-2xl border-2 border-accent bg-accent/10"
                : "hover:scale-[1.03] hover:shadow-xl"
              }`}
            >
              <CardHeader>
              <CardTitle
                className={`text-xl font-semibold ${
                project.title === "USA2 Reventas" || project.title === "InfiniTech Studios" ? "text-accent" : ""
                }`}
              >
                {project.title}
              </CardTitle>
              <CardDescription
                className={`text-muted-foreground min-h-[4rem] text-ellipsis ${
                project.title === "USA2 Reventas" || project.title === "InfiniTech Studios" ? "font-medium" : ""
                }`}
              >
                {project.description}
              </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (tag === 'AI' ? (
                  <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs text-white bg-accent hover:bg-gray-800 transition-colors duration-200 select-none"
                >
                  {tag}
                </Badge>
                ) : (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`text-xs transition-colors duration-200 select-none ${
                  project.title === "USA2 Reventas" || project.title === "InfiniTech Studios" ? "bg-accent text-white hover:text-teal-400" : ""
                  }`}
                >
                  {tag}
                </Badge>
                )))}
              </div>
              </CardContent>
              <CardFooter className="mt-auto flex flex-wrap justify-start gap-3 border-t pt-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className={`transition-colors duration-200 ${
                project.title === "USA2 Reventas" || project.title === "InfiniTech Studios" ? "border-accent text-accent" : ""
                }`}
              >
                {project.githubLink && project.githubLink !== "https://github.com/SoyElMadro/#" ? (
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-4 w-4" /> {t("code")}
                </Link>
                ) : null}
              </Button>
              {project.liveLink && project.liveLink !== "https://usa2-reventa.vercel.app/" ? (
                <Button
                asChild
                variant="ghost"
                size="sm"
                className={`text-accent hover:text-accent hover:bg-accent/10 transition-colors duration-200 ${
                  project.title === "USA2 Reventas" || project.title === "InfiniTech Studios" ? "font-bold" : ""
                }`}
                >
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-4 w-4" /> {t("liveDemo")}
                </Link>
                </Button>
              ) : (
                <Button
                asChild
                variant="ghost"
                size="sm"
                className={`text-accent hover:text-accent hover:bg-accent/10 transition-colors duration-200 ${
                  project.title === "USA2 Reventas" || project.title === "InfiniTech Studios" ? "font-bold" : ""
                }`}
                >
                <Link href="https://usa2-reventa.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-4 w-4" /> {t("openPage")}
                </Link>
                </Button>
              )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
