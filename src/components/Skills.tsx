
import React from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Angular", level: 75, category: "Frontend" },
  { name: "Vue.js", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "Django", level: 70, category: "Backend" },
  { name: "GraphQL", level: 75, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  
  // Tools/DevOps
  { name: "Git", level: 90, category: "DevOps" },
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "AWS", level: 70, category: "DevOps" },
  { name: "CI/CD", level: 80, category: "DevOps" },
  { name: "Testing", level: 85, category: "DevOps" },
  { name: "Webpack", level: 75, category: "DevOps" },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-neon-purple font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-neon-purple to-neon-blue rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${level}%`,
            boxShadow: `0 0 8px 0 rgba(139, 92, 246, 0.5)` 
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = skills.filter((skill) => skill.category === "Frontend");
  const backendSkills = skills.filter((skill) => skill.category === "Backend");
  const devopsSkills = skills.filter((skill) => skill.category === "DevOps");

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="glass-panel p-6">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              Frontend Development
            </h3>
            <div>
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="glass-panel p-6">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              Backend Development
            </h3>
            <div>
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          {/* DevOps Skills */}
          <div className="glass-panel p-6">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              DevOps & Tools
            </h3>
            <div>
              {devopsSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
