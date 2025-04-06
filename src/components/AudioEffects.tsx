import React, { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AudioEffects = () => {
  const [muted, setMuted] = useState(true);
  const { toast } = useToast();
  
  const toggleMute = () => {
    const bgMusic = document.getElementById('bg-music') as HTMLAudioElement;

    if (bgMusic) {
      if (muted) {
        bgMusic.volume = 0.2;
        bgMusic.loop = true;
        // Set the new audio file
        bgMusic.src = "/audio/Wiz Khalifa - See You Again ft. Charlie Puth (Lyrics).mp3";
        bgMusic.load();
        bgMusic.play()
          .then(() => {
            toast({
              title: "Background music enabled",
              description: "Enjoy the ambient soundtrack!",
            });
          })
          .catch(err => {
            console.error("Could not play audio:", err);
            toast({
              title: "Audio playback failed",
              description: "Try interacting with the page first",
              variant: "destructive",
            });
          });
      } else {
        bgMusic.pause();
        toast({
          title: "Background music disabled",
          description: "Music has been muted.",
        });
      }
      setMuted(!muted); // Toggle the muted state
    }
  };

  const preloadAudio = () => {
    const clickSound = document.getElementById('click-sound') as HTMLAudioElement;
    if (clickSound) {
      clickSound.volume = 0.3;
      clickSound.src = "/audio/click-sound.mp3";
      clickSound.load();
    }
  };

  useEffect(() => {
    preloadAudio();
    
    const enableAudio = () => {
      const clickSound = document.getElementById('click-sound') as HTMLAudioElement;
      if (clickSound) {
        clickSound.load();
      }
      
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
    };
    
    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
    
    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
    };
  }, []);
  
  return (
    <>
      <audio id="bg-music" preload="auto" loop>
        <source src="/audio/Wiz Khalifa - See You Again ft. Charlie Puth (Lyrics).mp3" type="audio/mpeg" />
      </audio>
      
      <audio id="click-sound" preload="auto">
        <source src="/audio/click-sound.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-dark-lighter text-neon-purple flex items-center justify-center hover:bg-neon-purple/20 transition-all border border-neon-purple/30"
        aria-label={muted ? "Enable background music" : "Disable background music"}
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
};

export default AudioEffects;
