import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shubhamrawatsrt@gmail.com",
      href: "mailto:shubhamrawatsrt@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9808407611",
      href: "tel:+919808407611",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ajabpur Khurd, Dehradun, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shubham-srt",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      href: "https://x.com/shubham_srt",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card grid-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="skill-badge-cyan mb-6 inline-block">Contact</span>
            <h2 className="section-title text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Looking to collaborate on security projects or discuss opportunities? 
              I'm always open to connecting with fellow security enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-skill-cyan/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-skill-cyan rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-skill-cyan transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-semibold text-foreground">
                Find me online
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-lg hover:bg-foreground transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <social.icon className="w-6 h-6" />
                      <span className="font-medium">{social.label}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ))}

                {/* HackerOne */}
                <a
                  href="https://hackerone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-skill-green text-foreground rounded-lg hover:bg-skill-green/80 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <Shield className="w-6 h-6" />
                    <span className="font-medium">HackerOne</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* TryHackMe */}
                <a
                  href="https://tryhackme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-skill-orange text-foreground rounded-lg hover:bg-skill-orange/80 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <Terminal className="w-6 h-6" />
                    <span className="font-medium">TryHackMe</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add missing imports
import { Shield, Terminal } from "lucide-react";

export default Contact;
