
import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Quotes from "../components/Quotes";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AudioEffects from "../components/AudioEffects";

const Index = () => {
  return (
    <div className="bg-dark min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Quotes />
      <Contact />
      <Footer />
      <AudioEffects />
      {/* ThemeToggle removed as requested */}
    </div>
  );
};

export default Index;
