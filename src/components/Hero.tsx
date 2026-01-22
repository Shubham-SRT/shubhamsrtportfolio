import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImage from "@/assets/profile-image.png";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  const skillBadges = [
    { label: "VAPT", color: "skill-badge-cyan", rotation: "-rotate-6", position: "left-[5%] top-[35%]" },
    { label: "Bug Bounty", color: "skill-badge-orange", rotation: "rotate-3", position: "left-[2%] top-[55%]" },
    { label: "OWASP Top 10", color: "skill-badge-pink", rotation: "-rotate-3", position: "right-[5%] top-[30%]" },
    { label: "Burp Suite", color: "skill-badge-green", rotation: "rotate-6", position: "right-[2%] top-[55%]" },
    { label: "Pentesting", color: "skill-badge-yellow", rotation: "-rotate-2", position: "right-[10%] top-[75%]" },
  ];

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 bg-card grid-pattern overflow-hidden">
      
      {/* Decorative oval shape */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-secondary rounded-t-full opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center pt-16 md:pt-24">
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-none uppercase text-foreground mb-6 font-mono whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-skill-green">&gt;</span> SHUBHAM_RAWAT
          </motion.h1>

          {/* Description */}
          <motion.div 
            className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-left font-mono text-sm">
              <span className="text-skill-green">//</span> Entry-level Cybersecurity Analyst with 1+ year of hands-on experience in web application security, 
              vulnerability assessment, and penetration testing.
            </p>
            <p className="text-muted-foreground text-left font-mono text-sm">
              <span className="text-skill-green">//</span> Active bug bounty hunter on HackerOne with multiple Hall of Fame recognitions. 
              Strong foundation in OWASP Top 10, Burp Suite, and real-world attack scenarios.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground font-mono font-semibold uppercase tracking-wide text-sm hover:gap-4 transition-all duration-300 group px-6 py-3 border border-skill-green/50 hover:border-skill-green hover:bg-skill-green/10 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-skill-green">$</span> Get_in_Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-skill-green" />
          </motion.a>
        </div>

        {/* Floating Skill Badges - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block">
          {skillBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              className={`absolute ${badge.position} ${badge.color} ${badge.rotation} animate-float neon-card`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {badge.label}
            </motion.div>
          ))}
        </div>

        {/* Profile Image with Parallax */}
        <motion.div 
          className="flex justify-center mt-8 md:mt-12 pb-12"
          style={{ y, scale, opacity }}
        >
          <div className="relative">
            {/* Decorative neon rings */}
            <div className="absolute -inset-4 md:-inset-8 rounded-full border-2 border-skill-green/40 animate-pulse-neon" />
            <div className="absolute -inset-8 md:-inset-14 rounded-full border border-skill-green/20" />
            <div className="absolute -inset-12 md:-inset-20 rounded-full border border-skill-green/10" />
            
            {/* Main image container - larger and properly contained */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-skill-green/50 shadow-[0_0_40px_hsl(145_100%_50%_/_0.25)]">
              <img
                src={profileImage}
                alt="Shubham Rawat - Cybersecurity Analyst"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-skill-green/10 to-transparent" />
            </div>
            
            {/* Floating accent badge */}
            <motion.div 
              className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-16 h-16 md:w-20 md:h-20 bg-skill-green rounded-full flex items-center justify-center animate-float shadow-[0_0_25px_hsl(145_100%_50%_/_0.5)]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
            >
              <span className="text-foreground font-mono font-bold text-sm md:text-base">VAPT</span>
            </motion.div>

            {/* Additional decorative element */}
            <motion.div 
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-14 md:h-14 border-2 border-skill-cyan/50 rounded-full flex items-center justify-center bg-card/80 backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4, type: "spring" }}
            >
              <span className="text-skill-cyan font-mono text-sm md:text-base font-bold">01</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
