import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MeltOverlayProps {
  isActive: boolean;
  onComplete: () => void;
}

const MeltOverlay = ({ isActive, onComplete }: MeltOverlayProps) => {
  const [phase, setPhase] = useState<"melt" | "message" | "done">("melt");

  useEffect(() => {
    if (!isActive) {
      setPhase("melt");
      return;
    }

    // Show message after melt animation
    const messageTimer = setTimeout(() => {
      setPhase("message");
    }, 2000);

    // Complete and refresh after showing message
    const completeTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
      // Refresh the page
      window.location.reload();
    }, 5000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(completeTimer);
    };
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Melt effect overlay */}
          <motion.div
            className="absolute inset-0 bg-background"
            initial={{ 
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              backdropFilter: "blur(0px)"
            }}
            animate={{ 
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              backdropFilter: "blur(20px)"
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Glitch/distortion strips */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 bg-skill-green/10"
              style={{ height: "5%", top: `${i * 5}%` }}
              initial={{ x: 0, opacity: 0 }}
              animate={{ 
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 0.3, 
                delay: i * 0.05,
                repeat: 3,
                repeatType: "reverse"
              }}
            />
          ))}

          {/* Black screen with message */}
          <motion.div
            className="absolute inset-0 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "message" || phase === "done" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {phase === "message" && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-2xl md:text-4xl font-mono text-skill-green"
                    animate={{ 
                      textShadow: [
                        "0 0 10px hsl(145 100% 50% / 0.5)",
                        "0 0 20px hsl(145 100% 50% / 0.8)",
                        "0 0 10px hsl(145 100% 50% / 0.5)"
                      ]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Nice try, hacker.
                  </motion.div>
                  <motion.div
                    className="mt-4 text-sm font-mono text-skill-green/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Restoring system...
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MeltOverlay;
