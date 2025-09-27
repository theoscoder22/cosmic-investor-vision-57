import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-content-bg border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="elegant-heading text-xl text-primary font-light tracking-wide">
              Professional Services
            </h3>
            <p className="professional-text text-muted-foreground leading-relaxed">
              Guiding you through life's journey with ancient wisdom and modern investment strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="elegant-heading text-lg text-primary font-medium tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/astrology-spirituality"
                className="professional-text text-muted-foreground hover:text-hero-accent transition-colors"
              >
                Astrology & Spirituality
              </Link>
              <Link
                to="/investment"
                className="professional-text text-muted-foreground hover:text-hero-accent transition-colors"
              >
                Investment Guidance
              </Link>
              <Link
                to="/masti"
                className="professional-text text-muted-foreground hover:text-hero-accent transition-colors"
              >
                Entertainment
              </Link>
              <Link
                to="/contact"
                className="professional-text text-muted-foreground hover:text-hero-accent transition-colors"
              >
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="elegant-heading text-lg text-primary font-medium tracking-wide">
              Expertise Areas
            </h4>
            <ul className="space-y-2 professional-text text-muted-foreground">
              <li>Birth Chart Analysis</li>
              <li>Spiritual Guidance</li>
              <li>Stock Market Analysis</li>
              <li>Investment Strategy</li>
              <li>Personal Brand Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="professional-text text-muted-foreground text-sm">
              © {currentYear} Professional Astrologer & Investment Expert. All rights reserved.
            </p>
            <p className="professional-text text-muted-foreground text-sm mt-4 md:mt-0">
              Bridging ancient wisdom with modern prosperity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;