
import React from "react";
import { CheckCircle } from "lucide-react";

const techStack = [
  { name: "JavaScript/TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
];

const valueProps = [
  "Clean, efficient code focused on performance",
  "Responsive, accessible design across all devices",
  "Agile development approach with continuous integration",
  "Passion for learning and implementing new technologies"
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-3/5">
            <p className="text-gray-300 mb-6">
              Hi, I'm Tanmay Jadhav, a passionate Full-Stack Developer currently pursuing B.E in Computer Engineering. My journey into coding began with a curiosity about how digital experiences are built, and I've been enthusiastically exploring this field ever since.
            </p>
            <p className="text-gray-300 mb-8">
              I specialize in building modern, responsive applications with React on the frontend and Python/Node.js on the backend. I believe in writing clean, maintainable code and creating intuitive user experiences. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or creating educational content for my YouTube channel.
            </p>
            
            <div className="space-y-3 mb-8">
              {valueProps.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-neon-purple mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-2/5">
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-6">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center transition-transform hover:scale-110"
                  >
                    <div className="bg-dark-lighter rounded-full p-3 mb-2 w-16 h-16 flex items-center justify-center">
                      <img
                        src={tech.url}
                        alt={tech.name}
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="text-xs text-center text-gray-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
