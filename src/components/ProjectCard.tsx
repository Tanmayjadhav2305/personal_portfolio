
import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
}) => {
  const playClickSound = () => {
    const clickSound = document.getElementById('click-sound') as HTMLAudioElement;
    if (clickSound) {
      clickSound.currentTime = 0;  // Reset audio to start
      clickSound.play().catch(err => console.error("Audio play failed:", err));
    }
  };
  
  return (
    <div className="glass-panel overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neon-purple/10 hover:-translate-y-2 h-full">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error("Image failed to load:", target.src);
            target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-3 mt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm text-gray-300 hover:text-neon-purple transition-colors"
            aria-label={`View ${title} GitHub repository`}
            onClick={playClickSound}
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-gray-300 hover:text-neon-blue transition-colors"
              aria-label={`View ${title} live demo`}
              onClick={playClickSound}
            >
              <ExternalLink size={18} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
