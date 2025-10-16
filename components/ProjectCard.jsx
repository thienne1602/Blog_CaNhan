"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/effects/SpotlightCard";
import HoverGlow from "@/components/effects/HoverGlow";
import FadeInView from "@/components/effects/FadeInView";

const ProjectCard = ({ project, index }) => (
  <FadeInView delay={index * 0.1} className="h-full">
    <HoverGlow glowColor="rgba(124, 58, 237, 0.2)">
      <SpotlightCard
        className="card-hover flex h-full flex-col gap-4 rounded-2xl bg-white dark:bg-gray-800 p-6 transition-colors duration-300"
        spotlightColor="rgba(124, 58, 237, 0.12)"
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-primary-50 dark:bg-primary-900/30 px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-400">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-3 text-sm">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <Github size={16} />
            Repo
          </a>
          {project.demo && (
            <>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            </>
          )}
        </div>
      </SpotlightCard>
    </HoverGlow>
  </FadeInView>
);

export default ProjectCard;
