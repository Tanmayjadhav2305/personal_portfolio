import React, { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    id: 1,
    title: "Python Development Internship",
    issuer: "Tech Octanet",
    date: "February - March 2025",
    description:
      "Month-long internship demonstrating exceptional dedication and skills in Python development projects.",
    image: "/lovable-uploads/1d97d5c0-1354-4909-8621-2347a3ceed71.png",
  },
  {
    id: 2,
    title: "UI Automation with Studio",
    issuer: "UiPath",
    date: "March 2025",
    description:
      "Successfully completed comprehensive training in UI automation techniques and workflow optimization.",
    image: "/lovable-uploads/1d17a868-5ff2-444e-8767-fbddaf6beea6.png",
  },
  {
    id: 3,
    title: "Data Visualisation",
    issuer: "Tata & Forage",
    date: "January 2025",
    description:
      "Mastered skills in framing business scenarios, choosing effective visuals, and communicating insights through data analysis.",
    image: "/lovable-uploads/8ab9171e-aef4-4d54-9eed-766a2ed250d1.png",
  },
  {
    id: 4,
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "February 2025",
    description:
      "Demonstrated proficiency in fundamental problem-solving techniques and algorithmic thinking.",
    image: "/lovable-uploads/381d42ed-7ef5-4eef-bdc2-6ba4860dd41d.png",
  },
  {
    id: 5,
    title: "Global Career Guidance Webinar",
    issuer: "GradGuru",
    date: "December 2024",
    description:
      "Participated in comprehensive career guidance sessions to enhance job search and professional development strategies.",
    image: "/lovable-uploads/ad8310b9-6ea4-4c05-b79a-2041aba842ea.png",
  },
  {
    id: 6,
    title: "Weekly Case Challenge",
    issuer: "Unstop",
    date: "2025",
    description:
      "Achieved 33rd rank in Challenge 7 from Guru Gobind Singh College of Engineering and Research Center.",
    image: "/lovable-uploads/eb42f96f-7d67-484f-b1d1-51ddbdc879d0.png",
  },
];

const Certifications = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedCert, setSelectedCert] = useState<null | typeof certifications[0]>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const playClickSound = useCallback(() => {
    const clickSound = document.getElementById("click-sound") as HTMLAudioElement;
    if (clickSound) {
      clickSound.currentTime = 0; // Reset audio to start
      clickSound.play().catch((err) => console.error("Audio play failed:", err));
    }
  }, []);

  const handleCardClick = useCallback((cert: typeof certifications[0]) => {
    setSelectedCert(cert);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCert(null);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">Certifications</h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          Continuous learning is a key part of my professional journey. Here are some
          certifications I've earned that demonstrate my commitment to expanding my skills
          and knowledge.
        </p>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {certifications.map((cert) => (
              <CarouselItem key={cert.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card
                    className="glass-panel border-neon-purple/20 overflow-hidden group cursor-pointer"
                    onClick={() => handleCardClick(cert)}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
                          <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                          <p className="text-neon-purple text-sm mb-2">
                            {cert.issuer} • {cert.date}
                          </p>
                          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious
              onClick={playClickSound}
              className="relative static rounded-full bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 border-none h-10 w-10"
            />
            <CarouselNext
              onClick={playClickSound}
              className="relative static rounded-full bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 border-none h-10 w-10"
            />
          </div>
        </Carousel>
      </div>

      {/* Modal for Viewing Certificate */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">{selectedCert.title}</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="text-xl">&times;</span>
              </button>
            </div>
            <div className="p-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto"
              />
              <p className="text-gray-700 mt-4">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;