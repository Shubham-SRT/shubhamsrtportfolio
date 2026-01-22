import { useEffect, useState, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export const useKonamiCode = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  const reset = useCallback(() => {
    setIsActivated(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...inputSequence, e.code].slice(-KONAMI_CODE.length);
      setInputSequence(newSequence);

      if (newSequence.join(",") === KONAMI_CODE.join(",")) {
        setIsActivated(true);
        setInputSequence([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence]);

  return { isActivated, reset };
};
