"use client";

import React from "react";
import { motion } from "framer-motion";
import MotionText from "./MotionText";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
}

interface ProjectSectionProps {
  projects: Project[];
}

const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      bounce: 0.4,
      delay: i * 0.2,
    },
  }),
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section className="md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project, index) => (
          <motion.div
            key={project.id}
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-[#222222]"
            style={{ objectFit: "cover", backgroundSize: "cover" }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 border-white">
                <MotionText>
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </MotionText>
                <MotionText delay={0.2}>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </MotionText>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
