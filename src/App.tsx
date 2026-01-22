import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SecretLab from "./pages/SecretLab";

const queryClient = new QueryClient();

// Console Easter Egg
const logConsoleMessage = () => {
  console.log(
    `%c
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   👁️  ACCESS GRANTED  👁️                                  ║
║                                                          ║
║   Looking for vulnerabilities?                           ║
║   You're in the right place.                             ║
║                                                          ║
║   $ whoami -> Shubham Rawat                              ║
║   $ contact -> shubhamrawatsrt@gmail.com                 ║
║   $ hint -> Try the Konami Code ;)                       ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    `,
    "color: #00ff00; font-family: 'JetBrains Mono', monospace; font-size: 12px;"
  );
  
  console.log(
    "%c🔒 Security Tip: Always check robots.txt for interesting paths...",
    "color: #ff6b6b; font-family: 'JetBrains Mono', monospace; font-size: 11px;"
  );
};

const App = () => {
  useEffect(() => {
    logConsoleMessage();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/secret-lab" element={<SecretLab />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
