import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Bug Bounty Hunter",
      company: "HackerOne",
      period: "2023 - Present",
      color: "bg-skill-cyan",
      highlights: [
        "Identified and responsibly disclosed high and medium severity web application vulnerabilities",
        "Achieved Hall of Fame recognition from iHerb, Doppler, TrueCaller, Phenom, and more",
        "Performed manual security testing on authentication, authorization, and session management",
        "Used Burp Suite, Nmap, and OWASP Top 10 methodology for structured VAPT assessments",
        "Produced clear vulnerability reports with impact analysis and remediation guidance",
      ],
    },
    {
      title: "Product Engineer Intern",
      company: "Pepcoding, Noida",
      period: "Sep - Oct 2021",
      color: "bg-skill-orange",
      highlights: [
        "Applied secure coding and security best practices during product development lifecycle",
        "Assisted in identifying potential security issues and improving application stability",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech Computer Science",
      institution: "Dehradun Institute of Technology",
      period: "2018 - 2022",
      specialization: "Cyber Security",
    },
    {
      degree: "CBSE 12th",
      institution: "Dronas International School",
      period: "2017 - 2018",
    },
    {
      degree: "ICSE 10th",
      institution: "Summer Valley School",
      period: "2015 - 2016",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-card grid-pattern relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="skill-badge-orange mb-6 inline-block">
            <span className="text-foreground mr-1">&lt;</span>Experience<span className="text-foreground ml-1">/&gt;</span>
          </span>
          <h2 className="section-title text-foreground">
            Professional_Journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-mono font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-skill-green rounded-full shadow-[0_0_10px_hsl(145_100%_50%_/_0.5)]" />
              <span className="text-skill-green">$</span> Work_Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative pl-8 border-l-2 border-skill-green/30 pb-8 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 ${exp.color} rounded-full shadow-lg`} />
                  <div className="mb-4">
                    <h4 className="text-lg font-mono font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    <p className="text-skill-green font-mono font-medium flex items-center gap-2">
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </p>
                    <p className="text-muted-foreground text-sm font-mono">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="text-skill-green mt-1 shrink-0">&gt;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education - Compact glassmorphism cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-mono font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-skill-pink rounded-full shadow-[0_0_10px_hsl(340_85%_60%_/_0.5)]" />
              <span className="text-skill-pink">$</span> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="p-4 glass-card rounded-lg border-l-2 border-skill-green/40 hover:border-skill-green transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-mono font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-skill-green font-mono text-xs">{edu.institution}</p>
                    </div>
                    <span className="text-muted-foreground text-xs font-mono shrink-0">{edu.period}</span>
                  </div>
                  {edu.specialization && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-skill-green/10 text-skill-green text-xs font-mono rounded border border-skill-green/30">
                      {edu.specialization}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
