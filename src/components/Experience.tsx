
import React from "react";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Python Developer",
    company: "Tech Octanet Services Pvt. Ltd.",
    location: "Remote",
    period: "Feb 2025 - Mar 2025",
    description: [
      "Developed and implemented Python-based applications, focusing on automation and backend development",
      "Worked with data structures, algorithms, and database management to optimize system performance",
      "Debugged, tested, and enhanced existing code while collaborating on real-world projects",
      "Implemented secure solutions while working with various Python frameworks and libraries"
    ],
    technologies: ["Python", "Data Structures", "Algorithms", "Database Management", "Automation"]
  },
  {
    title: "Web Developer",
    company: "Codsoft",
    location: "Remote",
    period: "Jan 2025 - Mar 2025",
    description: [
      "Created responsive and user-friendly web interfaces using modern frontend technologies",
      "Collaborated with the design team to implement pixel-perfect, accessible UI components",
      "Optimized website performance through code improvements and modern web best practices",
      "Developed and maintained client-side and server-side web applications"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Web APIs"]
  },
  {
    title: "Software Developer",
    company: "Cognifyz Technologies",
    location: "Remote",
    period: "Jan 2025 - Feb 2025",
    description: [
      "Participated in full software development lifecycle for multiple projects",
      "Contributed to codebase improvements and implemented new features based on requirements",
      "Collaborated in an agile environment to deliver high-quality software solutions",
      "Assisted in debugging and resolving software defects to improve application stability"
    ],
    technologies: ["Software Development", "Problem Solving", "Code Review", "Testing", "Documentation"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="section-heading">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-neon-purple/30 transform -translate-x-1/2"></div>
          
          <div className="flex flex-col space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-neon-purple transform -translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 md:px-8 pl-8 md:pl-0">
                  <div className="glass-panel p-6 transition-all hover:shadow-lg hover:shadow-neon-purple/10">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <h4 className="text-lg text-neon-purple mb-2">{exp.company}</h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-1 mb-4 text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for timeline layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
