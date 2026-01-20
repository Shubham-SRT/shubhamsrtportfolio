import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo with glitch effect */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-skill-green rounded-sm flex items-center justify-center shadow-[0_0_10px_hsl(145_100%_50%_/_0.5)]">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span 
              className="text-primary-foreground font-mono font-semibold text-lg glitch-text cursor-pointer"
              data-text="Shubham Rawat"
            >
              Shubham<br />Rawat
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link group">
                  <span className="text-skill-green mr-1">0{index + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2 border border-skill-green/30 rounded hover:border-skill-green/60 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-skill-green/20">
            <ul className="flex flex-col gap-4 pt-4">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="nav-link block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-skill-green mr-2">0{index + 1}.</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
