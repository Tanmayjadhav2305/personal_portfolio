
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

// Define project types for filtering
const projectTypes = ["All", "Frontend", "Backend", "Full-Stack"];

// Project data with better images
const projects = [
  {
    id: 1,
    title: "Healthcare Hub",
    description: "A comprehensive healthcare platform providing easy access to medical services, appointment booking, and health information management.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Tanmayjadhav2305/healthcare-hub.git",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "ATM Simulation",
    description: "A Python-based ATM simulation system with secure transaction processing, account management, and user authentication capabilities.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1470&auto=format&fit=crop",
    technologies: ["Python", "SQLite", "OOP"],
    githubUrl: "https://github.com/Tanmayjadhav2305/TechOctanet-Python-Internship.git",
    category: "Backend",
  },
  {
    id: 3,
    title: "iPhone 14 Dynamic Island",
    description: "A frontend implementation of the iPhone 14's Dynamic Island feature, showcasing interactive UI and smooth animations.",
    image: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?q=80&w=1471&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Tanmayjadhav2305/iPhone-14-Dynamic-Island.git",
    category: "Frontend",
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const playClickSound = () => {
    const clickSound = document.getElementById('click-sound') as HTMLAudioElement;
    if (clickSound) {
      clickSound.currentTime = 0;  // Reset audio to start
      clickSound.play().catch(err => console.error("Audio play failed:", err));
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">Projects</h2>
        
        <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeFilter === type
                  ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/50"
                  : "text-gray-400 hover:text-gray-200 border border-transparent"
              }`}
              onClick={() => {
                setActiveFilter(type);
                playClickSound();
              }}
            >
              {type}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
