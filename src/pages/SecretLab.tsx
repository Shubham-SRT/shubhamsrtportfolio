import { useEffect } from "react";

const SecretLab = () => {
  useEffect(() => {
    // Redirect to Rickroll
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center font-mono">
        <div className="text-skill-green text-xl animate-pulse">
          Accessing secret lab...
        </div>
        <div className="mt-2 text-muted-foreground text-sm">
          Please wait while we verify your clearance.
        </div>
      </div>
    </div>
  );
};

export default SecretLab;
