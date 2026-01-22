import { useEffect, useState, useCallback } from "react";

const TARGET_COMMAND = "sudo rm -rf /";

export const useSudoCommand = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [typedChars, setTypedChars] = useState("");

  const reset = useCallback(() => {
    setIsActivated(false);
    setTypedChars("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input field
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const char = e.key;
      
      // Only track printable characters and space
      if (char.length === 1) {
        const newTyped = (typedChars + char).slice(-TARGET_COMMAND.length);
        setTypedChars(newTyped);

        if (newTyped === TARGET_COMMAND) {
          setIsActivated(true);
          setTypedChars("");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [typedChars]);

  return { isActivated, reset };
};
