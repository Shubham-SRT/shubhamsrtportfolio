import { Award, Trophy, FileText } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 100 in India",
      description: "TryHackMe platform ranking",
      color: "bg-skill-yellow",
    },
    {
      icon: Award,
      title: "Hall of Fame",
      description: "iHerb, Doppler, TrueCaller, Phenom",
      color: "bg-skill-cyan",
    },
    {
      icon: FileText,
      title: "CAP Certified",
      description: "Certified App-Sec Practitioner",
      color: "bg-skill-green",
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
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="flex items-start gap-6 p-6 bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${achievement.color} p-4 rounded-lg shrink-0`}>
                  <achievement.icon className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-display font-semibold text-xl mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-primary-foreground/70">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
