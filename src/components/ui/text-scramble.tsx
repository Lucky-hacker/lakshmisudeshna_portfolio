"use client";

import { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleSpeed?: number;
  characters?: string;
  trigger?: boolean;
  onComplete?: () => void;
}

export function TextScramble({
  text,
  className = "",
  speed = 50,
  scrambleSpeed = 20,
  characters = "!<>-_\\/[]{}—=+*^?#________",
  trigger = true,
  onComplete,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const frameRequest = useRef<number>(0);
  const resolveRef = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    if (!trigger) return;

    const scrambleText = async () => {
      return new Promise<void>((resolve) => {
        resolveRef.current = resolve;
        let frame = 0;
        
        const update = () => {
          let output = "";
          let complete = 0;
          
          for (let i = 0; i < text.length; i++) {
            if (frame >= i * speed) {
              if (frame >= i * speed + scrambleSpeed) {
                output += text[i];
                complete++;
              } else {
                output += characters[Math.floor(Math.random() * characters.length)];
              }
            }
          }
          
          setDisplayText(output);
          
          if (complete === text.length) {
            if (onComplete) onComplete();
            resolve();
          } else {
            frame++;
            frameRequest.current = requestAnimationFrame(update);
          }
        };
        
        frameRequest.current = requestAnimationFrame(update);
      });
    };

    scrambleText();

    return () => {
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
    };
  }, [text, speed, scrambleSpeed, characters, trigger, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <span className="opacity-0">.</span> {/* Invisible character to maintain height */}
    </span>
  );
}

// Hook version for more complex use cases
export function useTextScramble() {
  const [isScrambling, setIsScrambling] = useState(false);
  
  const scramble = (
    element: HTMLElement,
    text: string,
    options: {
      speed?: number;
      scrambleSpeed?: number;
      characters?: string;
    } = {}
  ) => {
    const {
      speed = 50,
      scrambleSpeed = 20,
      characters = "!<>-_\\/[]{}—=+*^?#________",
    } = options;

    return new Promise<void>((resolve) => {
      setIsScrambling(true);
      let frame = 0;
      
      const update = () => {
        let output = "";
        let complete = 0;
        
        for (let i = 0; i < text.length; i++) {
          if (frame >= i * speed) {
            if (frame >= i * speed + scrambleSpeed) {
              output += text[i];
              complete++;
            } else {
              output += characters[Math.floor(Math.random() * characters.length)];
            }
          }
        }
        
        element.textContent = output;
        
        if (complete === text.length) {
          setIsScrambling(false);
          resolve();
        } else {
          frame++;
          requestAnimationFrame(update);
        }
      };
      
      requestAnimationFrame(update);
    });
  };

  return { scramble, isScrambling };
}

// Wrapper component for multiple text scrambles in sequence
interface TextScrambleSequenceProps {
  texts: string[];
  className?: string;
  speed?: number;
  scrambleSpeed?: number;
  delay?: number;
  loop?: boolean;
  onComplete?: () => void;
}

export function TextScrambleSequence({
  texts,
  className = "",
  speed = 50,
  scrambleSpeed = 20,
  delay = 1000,
  loop = false,
  onComplete,
}: TextScrambleSequenceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trigger, setTrigger] = useState(true);

  const handleComplete = () => {
    if (currentIndex < texts.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setTrigger(false);
        setTimeout(() => setTrigger(true), 50);
      }, delay);
    } else if (loop) {
      setTimeout(() => {
        setCurrentIndex(0);
        setTrigger(false);
        setTimeout(() => setTrigger(true), 50);
      }, delay);
    } else {
      if (onComplete) onComplete();
    }
  };

  return (
    <TextScramble
      text={texts[currentIndex] || ""}
      className={className}
      speed={speed}
      scrambleSpeed={scrambleSpeed}
      trigger={trigger}
      onComplete={handleComplete}
    />
  );
}

// Component with typewriter effect combined with scramble
interface ScrambleTypewriterProps {
  text: string;
  className?: string;
  typeSpeed?: number;
  scrambleIntensity?: number;
  onComplete?: () => void;
}

export function ScrambleTypewriter({
  text,
  className = "",
  typeSpeed = 100,
  scrambleIntensity = 3,
  onComplete,
}: ScrambleTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentLength, setCurrentLength] = useState(0);
  const frameRef = useRef<number>(0);
  
  useEffect(() => {
    let scrambleFrame = 0;
    const characters = "!<>-_\\/[]{}—=+*^?#";
    
    const animate = () => {
      if (currentLength < text.length) {
        let output = text.slice(0, currentLength);
        
        // Add scrambled characters at the end
        for (let i = 0; i < scrambleIntensity; i++) {
          if (currentLength + i < text.length) {
            output += characters[Math.floor(Math.random() * characters.length)];
          }
        }
        
        setDisplayText(output);
        
        // Advance the actual text every few frames
        if (scrambleFrame % Math.floor(typeSpeed / 16) === 0) {
          setCurrentLength(prev => prev + 1);
        }
        
        scrambleFrame++;
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        if (onComplete) onComplete();
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, typeSpeed, scrambleIntensity, currentLength, onComplete]);

  return <span className={className}>{displayText}</span>;
}

// Hover-triggered text scramble component
interface HoverScrambleProps {
  text: string;
  className?: string;
  characters?: string;
  resetOnLeave?: boolean;
}

export function HoverScramble({
  text,
  className = "",
  characters = "!<>-_\\/[]{}—=+*^?#________",
  resetOnLeave = true,
}: HoverScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRequest = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const scrambleText = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let frame = 0;
    const totalFrames = 40; // Fixed animation duration
    const scramblePhase = 25; // How long to scramble before revealing
    
    const update = () => {
      let output = "";
      
      if (frame < scramblePhase) {
        // Scramble phase - randomly scramble characters
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            output += ' '; // Keep spaces
          } else {
            // Randomly decide whether to scramble this character (80% chance)
            if (Math.random() < 0.8) {
              output += characters[Math.floor(Math.random() * characters.length)];
            } else {
              output += text[i];
            }
          }
        }
      } else {
        // Reveal phase - progressively reveal correct characters
        const revealProgress = (frame - scramblePhase) / (totalFrames - scramblePhase);
        const revealCount = Math.floor(text.length * revealProgress);
        
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            output += ' ';
          } else if (i < revealCount) {
            output += text[i]; // Revealed character
          } else {
            // Still scrambling remaining characters
            output += characters[Math.floor(Math.random() * characters.length)];
          }
        }
      }
      
      setDisplayText(output);
      
      if (frame >= totalFrames) {
        setDisplayText(text); // Ensure final text is correct
        setIsAnimating(false);
      } else {
        frame++;
        frameRequest.current = requestAnimationFrame(update);
      }
    };
    
    frameRequest.current = requestAnimationFrame(update);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    scrambleText();
  };

  const handleMouseLeave = () => {
    if (frameRequest.current) {
      cancelAnimationFrame(frameRequest.current);
    }
    
    if (resetOnLeave) {
      // Small delay before resetting to avoid flicker
      timeoutRef.current = setTimeout(() => {
        setDisplayText(text);
        setIsAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    return () => {
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span 
      className={`${className} cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
}
