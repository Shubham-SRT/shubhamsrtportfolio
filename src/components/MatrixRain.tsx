import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MatrixRainProps {
  isActive: boolean;
  onComplete: () => void;
}

const MatrixRain = ({ isActive, onComplete }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?ァィゥェォカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    // Show message after 1.5 seconds
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 1500);

    // Complete after 4 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
      setShowMessage(false);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(messageTimer);
      clearTimeout(completeTimer);
    };
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <canvas ref={canvasRef} className="absolute inset-0" />
          
          <AnimatePresence>
            {showMessage && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-4xl md:text-6xl font-mono font-bold text-skill-green mb-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ textShadow: "0 0 20px hsl(145 100% 50% / 0.8)" }}
                  >
                    ACCESS GRANTED
                  </motion.div>
                  <motion.div
                    className="text-lg font-mono text-skill-green/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Welcome, elite hacker.
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MatrixRain;
