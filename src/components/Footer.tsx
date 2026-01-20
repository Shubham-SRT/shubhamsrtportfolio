const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/80 text-sm">
            Cybersecurity Analyst & Bug Bounty Hunter
          </p>
          <p className="text-primary-foreground/60 text-sm">
            ©2023 — Present
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
