
import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine"
  },
  {
    text: "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay"
  },
  {
    text: "JavaScript is to Java as car is to carpet.",
    author: "Chris Heilmann"
  },
  {
    text: "It's not a bug; it's an undocumented feature.",
    author: "Anonymous"
  },
  {
    text: "Programmers don't die, they just go offline.",
    author: "Anonymous"
  },
  {
    text: "There are only two hard problems in computer science: cache invalidation, naming things, and off-by-one errors.",
    author: "Leon Bambrick"
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  }
];

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="quotes" className="py-12 md:py-16 relative bg-dark-lighter">
      <div className="container mx-auto">
        <div className="glass-panel max-w-3xl mx-auto p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-4 left-4 text-neon-purple opacity-20">
            <Quote size={120} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl text-gray-200 mb-4 italic">
              "{quotes[currentQuote].text}"
            </p>
            <p className="text-right text-neon-purple font-medium">
              — {quotes[currentQuote].author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
