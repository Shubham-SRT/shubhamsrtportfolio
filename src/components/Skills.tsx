import { Shield, Globe, FileSearch, Wrench, Network } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Web Application Security",
      skills: ["OWASP Top 10", "Authentication Testing", "Authorization Testing", "Session Management"],
      color: "bg-skill-cyan",
      badgeColor: "skill-badge-cyan",
    },
    {
      icon: FileSearch,
      title: "Vulnerability Assessment",
      skills: ["Manual Testing", "Automated Scanning", "Risk Assessment", "Impact Analysis"],
      color: "bg-skill-orange",
      badgeColor: "skill-badge-orange",
    },
    {
      icon: Globe,
      title: "Penetration Testing",
      skills: ["Black Box Testing", "Grey Box Testing", "White Box Testing", "API Security"],
      color: "bg-skill-pink",
      badgeColor: "skill-badge-pink",
    },
    {
      icon: Wrench,
      title: "Security Tools",
      skills: ["Burp Suite", "Nmap", "Caido", "Browser DevTools"],
      color: "bg-skill-green",
      badgeColor: "skill-badge-green",
    },
    {
      icon: Network,
      title: "Networking",
      skills: ["HTTP Protocol", "TCP/IP", "DNS", "Network Analysis"],
      color: "bg-skill-yellow",
      badgeColor: "skill-badge-yellow",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="skill-badge-green mb-6 inline-block">Skills</span>
          <h2 className="section-title text-primary-foreground">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-8 bg-primary-foreground/5 rounded-xl hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-foreground/10 text-primary-foreground/80 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-display font-semibold text-primary-foreground mb-6">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Technical Reporting",
              "Vulnerability Documentation",
              "Secure Coding Practices",
              "Input Validation",
              "Security Research",
              "Community Contribution",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-primary-foreground/30 text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
