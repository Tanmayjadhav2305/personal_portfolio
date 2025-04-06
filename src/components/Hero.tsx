import React, { useEffect, useState } from "react";
import { ArrowRight, FileDown } from "lucide-react";
import Terminal from "./Terminal";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    "Full-Stack Developer",
    "Software Developer",
    "Python Developer"
  ];
  
  useEffect(() => {
    setMounted(true);
    
    // Typing animation
    const currentTitle = titles[titleIndex];
    
    if (isTyping) {
      if (charIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Wait at the end of typing before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to the next title and start typing again
        const timeout = setTimeout(() => {
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [titleIndex, charIndex, isTyping]);
  
  // Terminal text
  const terminalText = [
    "const developer = {",
    "  name: 'Tanmay Jadhav',",
    "  title: 'Full-Stack Developer',",
    "  skills: ['React', 'Node.js', 'Python', 'MongoDB'],",
    "  passion: 'Building elegant solutions to complex problems',",
    "  coffee: true",
    "};",
    "",
    "while (developer.coffee) {",
    "  developer.code();",
    "}"
  ];

  const playClickSound = () => {
    const clickSound = document.getElementById('click-sound') as HTMLAudioElement;
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(err => console.error("Audio play failed:", err));
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      {/* Animated code symbols in background */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10 pointer-events-none select-none">
        <div className="animate-code-flow whitespace-pre font-mono text-6xl">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="leading-loose">
              {"{} [] () => &lt;&gt; == === || &amp;&amp; += !== || ..."
                .split(" ")
                .map((char, j) => (
                  <span key={j} className="inline-block mx-8 opacity-60">
                    {char}
                  </span>
                ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-fade-in">
            <p className="text-neon-purple font-mono mb-2">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
              Tanmay Jadhav
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-400 h-[60px] flex items-center">
              <span className="inline-block">
                {titles[titleIndex].substring(0, charIndex)}
                <span className="text-neon-purple animate-pulse">|</span>
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Turning coffee into code – one line at a time. I build exceptional digital experiences with focus on performance, accessibility, and clean code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="button-primary flex items-center gap-2"
                onClick={playClickSound}
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a 
                href="/Tanmay Jadhav - Resume.pdf" 
                download="Tanmay_Jadhav_Resume.pdf"
                className="button-outline flex items-center gap-2"
                onClick={playClickSound}
              >
                Download Resume <FileDown size={16} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            {mounted && (
              <Terminal 
                text={terminalText}
                typingSpeed={30}
                className="shadow-xl shadow-neon-purple/10"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
