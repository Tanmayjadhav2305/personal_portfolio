
import React, { useEffect, useState } from "react";

interface TerminalProps {
  text: string[];
  typingSpeed?: number;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ 
  text, 
  typingSpeed = 50,
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine >= text.length) {
      setIsTyping(false);
      return;
    }

    if (currentChar >= text[currentLine].length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
        setDisplayedText([...displayedText, text[currentLine]]);
      }, typingSpeed * 3); // Pause between lines
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentChar(currentChar + 1);
      setDisplayedText(prev => {
        const updatedLines = [...prev];
        if (currentLine >= updatedLines.length) {
          updatedLines.push(text[currentLine].substring(0, currentChar + 1));
        } else {
          updatedLines[currentLine] = text[currentLine].substring(0, currentChar + 1);
        }
        return updatedLines;
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, text, displayedText, typingSpeed]);

  return (
    <div className={`bg-dark-lighter rounded-md shadow-lg border border-gray-700 overflow-hidden ${className}`}>
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs font-mono text-gray-400">terminal</div>
      </div>
      <div className="p-4 font-mono text-sm text-neon-green">
        <div className="flex">
          <span className="text-neon-purple mr-2">~$</span>
          {displayedText.map((line, index) => (
            <React.Fragment key={index}>
              {index < displayedText.length - 1 ? (
                <div className="whitespace-pre">{line}</div>
              ) : (
                <div className="whitespace-pre">
                  {line}
                  {index === currentLine && isTyping && (
                    <span className="animate-type-cursor">|</span>
                  )}
                </div>
              )}
              {index < displayedText.length - 1 && <br />}
            </React.Fragment>
          ))}
          {currentLine >= text.length && (
            <span className="animate-type-cursor">|</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
