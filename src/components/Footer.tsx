
import React from "react";
import { ArrowUp, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    const clickSound = document.getElementById('click-sound') as HTMLAudioElement;
    if (clickSound) {
      clickSound.currentTime = 0;  // Reset audio to start
      clickSound.play().catch(err => console.error("Audio play failed:", err));
    }
  };

  return (
    <footer className="py-8 bg-dark-lighter relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Tanmay Jadhav. All rights reserved.
            </p>
            
            <div className="mt-4 flex items-center gap-2">
              <a 
                href="https://youtube.com/@tanmayjadhav2305?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-neon-purple transition-all group"
              >
                <Youtube size={18} className="text-red-500 group-hover:animate-pulse" />
                <span className="text-sm">100K+ Views on YouTube</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-neon-purple/20 text-neon-purple flex items-center justify-center transition-all hover:bg-neon-purple/30"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
