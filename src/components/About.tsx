import { Award, Trophy, FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 100 in India",
      description: "TryHackMe platform ranking",
      color: "bg-skill-yellow",
      link: "https://tryhackme.com/p/InnovativeNoob",
    },
    {
      icon: Award,
      title: "Hall of Fame",
      description: "iHerb, Doppler, TrueCaller, Phenom",
      color: "bg-skill-cyan",
      link: null,
    },
    {
      icon: FileText,
      title: "CAP Certified",
      description: "Certified App-Sec Practitioner",
      color: "bg-skill-green",
      link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXYIp6DvNiAM3y1aTKDNdH9KmPNlBme8jpPDGN0f0qx7Un1xqxS+AOiNCJYmtfkl3Wd0EtaFiskhSFcKpYg1xi9E=",
    },
  ];

  return (
    <section id="about" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <span className="skill-badge-pink mb-6 inline-block">About Me</span>
            <h2 className="section-title text-primary-foreground mb-8">
              Securing the Digital World
            </h2>
            <div className="space-y-6 text-primary-foreground/80">
              <p>
                I'm Shubham Rawat, a passionate Cybersecurity Analyst specializing in Vulnerability Assessment 
                and Penetration Testing (VAPT). Based in Dehradun, India, I'm on a mission to make the 
                digital world a safer place.
              </p>
              <p>
                With a B.Tech in Computer Science specializing in Cyber Security from Dehradun Institute 
                of Technology, I've developed a strong foundation in web application security and 
                real-world attack scenarios.
              </p>
              <p>
                I actively contribute to the security community through bug bounty hunting on HackerOne, 
                where I've achieved Hall of Fame recognition from multiple organizations.
              </p>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const CardWrapper = achievement.link ? motion.a : motion.div;
              const cardProps = achievement.link 
                ? { href: achievement.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              
              return (
                <CardWrapper
                  key={achievement.title}
                  {...cardProps}
                  className={`flex items-center gap-5 p-5 bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 border border-transparent hover:border-skill-green/30 ${achievement.link ? 'cursor-pointer group' : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={`${achievement.color} p-3 rounded-lg shrink-0 shadow-lg`}>
                    <achievement.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary-foreground font-mono font-semibold text-lg flex items-center gap-2">
                      {achievement.title}
                      {achievement.link && (
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-skill-green" />
                      )}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">{achievement.description}</p>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
