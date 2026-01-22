import { Shield, Globe, FileSearch, Wrench, Network, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Web App Security",
      skills: ["OWASP Top 10", "Auth Testing", "Authorization", "Session Mgmt"],
      color: "bg-skill-cyan",
      borderColor: "border-skill-cyan",
    },
    {
      icon: FileSearch,
      title: "Vuln Assessment",
      skills: ["Manual Testing", "Auto Scanning", "Risk Analysis", "Impact Review"],
      color: "bg-skill-orange",
      borderColor: "border-skill-orange",
    },
    {
      icon: Globe,
      title: "Pentesting",
      skills: ["Black Box", "Grey Box", "White Box", "API Security"],
      color: "bg-skill-pink",
      borderColor: "border-skill-pink",
    },
    {
      icon: Wrench,
      title: "Security Tools",
      skills: ["Burp Suite", "Nmap", "Caido", "DevTools"],
      color: "bg-skill-green",
      borderColor: "border-skill-green",
    },
    {
      icon: Network,
      title: "Networking",
      skills: ["HTTP/HTTPS", "TCP/IP", "DNS", "Analysis"],
      color: "bg-skill-yellow",
      borderColor: "border-skill-yellow",
    },
    {
      icon: Cloud,
      title: "Cloud & Scripting",
      skills: ["AWS Basics", "Python", "Bash", "Automation"],
      color: "bg-skill-cyan",
      borderColor: "border-skill-cyan",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2322c55e' stroke-width='1'%3E%3Cpath d='M10 10h40v40H10z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Cpath d='M30 10v10M30 40v10M10 30h10M40 30h10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="skill-badge-green mb-6 inline-block">
            <span className="text-primary mr-1">&lt;</span>Skills<span className="text-primary ml-1">/&gt;</span>
          </span>
          <h2 className="section-title text-primary-foreground">
            Technical_Arsenal
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="p-6 bg-primary-foreground/5 rounded-lg neon-card hover:-translate-y-2 transition-all duration-300 group"
              variants={cardVariants}
            >
              <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <category.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-mono font-semibold text-primary-foreground mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-primary-foreground/10 text-primary-foreground/80 text-xs font-mono rounded border border-skill-green/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
