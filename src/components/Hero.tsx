import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const Hero = () => {
  const skillBadges = [
    { label: "VAPT", color: "skill-badge-cyan", rotation: "-rotate-6", position: "left-[5%] top-[35%]" },
    { label: "Bug Bounty", color: "skill-badge-orange", rotation: "rotate-3", position: "left-[2%] top-[55%]" },
    { label: "OWASP Top 10", color: "skill-badge-pink", rotation: "-rotate-3", position: "right-[5%] top-[30%]" },
    { label: "Burp Suite", color: "skill-badge-green", rotation: "rotate-6", position: "right-[2%] top-[55%]" },
    { label: "Pentesting", color: "skill-badge-yellow", rotation: "-rotate-2", position: "right-[10%] top-[75%]" },
  ];

  return (
    <section className="relative min-h-screen pt-24 bg-card grid-pattern overflow-hidden">
      {/* Decorative oval shape */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-secondary rounded-t-full opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center pt-16 md:pt-24">
          {/* Main Title */}
          <h1 className="hero-title text-foreground mb-8">
            SECURITY<br />ANALYST
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mb-8">
            <p className="text-muted-foreground text-left">
              Entry-level Cybersecurity Analyst with 1+ year of hands-on experience in web application security, 
              vulnerability assessment, and penetration testing.
            </p>
            <p className="text-muted-foreground text-left">
              Active bug bounty hunter on HackerOne with multiple Hall of Fame recognitions. 
              Strong foundation in OWASP Top 10, Burp Suite, and real-world attack scenarios.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground font-semibold uppercase tracking-wide text-sm hover:gap-4 transition-all duration-300 group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Floating Skill Badges - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block">
          {skillBadges.map((badge, index) => (
            <div
              key={badge.label}
              className={`absolute ${badge.position} ${badge.color} ${badge.rotation} animate-float`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {badge.label}
            </div>
          ))}
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mt-12 md:mt-16 pb-16">
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute -inset-4 md:-inset-6 rounded-full border-2 border-skill-cyan/30 animate-pulse" />
            <div className="absolute -inset-8 md:-inset-12 rounded-full border border-skill-orange/20" />
            
            {/* Main image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img
                src={profileImage}
                alt="Shubham Rawat - Cybersecurity Analyst"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 bg-skill-cyan rounded-full flex items-center justify-center animate-float shadow-lg">
              <span className="text-foreground font-bold text-xs md:text-sm">VAPT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
