import { ExternalLink } from "lucide-react";

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
    <section id="experience" className="py-24 bg-card grid-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="skill-badge-orange mb-6 inline-block">Experience</span>
          <h2 className="section-title text-foreground">
            Professional Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-skill-cyan rounded-full" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0"
                >
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 ${exp.color} rounded-full`} />
                  <div className="mb-4">
                    <h4 className="text-xl font-display font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    <p className="text-skill-cyan font-medium flex items-center gap-2">
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </p>
                    <p className="text-muted-foreground text-sm">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-skill-pink rounded-full" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 bg-card border border-border rounded-lg hover:border-skill-pink/50 transition-colors"
                >
                  <h4 className="text-lg font-display font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-skill-pink font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.period}</p>
                  {edu.specialization && (
                    <span className="inline-block mt-3 px-3 py-1 bg-skill-pink/10 text-skill-pink text-xs font-medium rounded-full">
                      {edu.specialization}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
