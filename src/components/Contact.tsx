
import React, { useState } from "react";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after a while
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };
  
  const playClickSound = () => {
    const clickSound = document.getElementById('click-sound') as HTMLAudioElement;
    if (clickSound) {
      clickSound.play();
    }
  };
  
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github size={20} />, 
      url: "https://github.com/Tanmayjadhav2305", 
      color: "hover:text-white hover:bg-gray-800" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      url: "https://www.linkedin.com/in/tanmay-jadhav-795a96293", 
      color: "hover:text-white hover:bg-blue-700" 
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple focus:outline-none transition-colors"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex items-center justify-center"
                onClick={playClickSound}
              >
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : (
                  <Send size={18} className="mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="glass-panel p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
              
              <div className="flex flex-col space-y-6">
                <div>
                  <p className="text-gray-300 mb-4">
                    I'm active on these platforms and typically respond within 24 hours.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 rounded-full bg-dark-lighter text-gray-400 transition-all hover:shadow-lg ${link.color}`}
                        aria-label={link.name}
                        onClick={playClickSound}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Email</h4>
                  <a 
                    href="mailto:tanmayjadhav2305@gmail.com" 
                    className="text-neon-purple hover:text-neon-blue transition-colors"
                    onClick={playClickSound}
                  >
                    tanmayjadhav2305@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Phone</h4>
                  <a 
                    href="tel:+918080281489" 
                    className="text-neon-purple hover:text-neon-blue transition-colors flex items-center gap-2"
                    onClick={playClickSound}
                  >
                    <Phone size={16} /> +91 8080281489
                  </a>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Location</h4>
                  <p className="text-gray-300">Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Availability</h3>
              <p className="text-gray-300">
                Currently available for freelance projects, contract work, and full-time positions. I'm particularly interested in challenging projects that involve modern web technologies and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
