import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/biography' },
    { name: 'Astrology / Spirituality', path: '/astrology-spirituality' },
    { name: 'Investment', path: '/investment' },
    { name: 'Masti', path: '/masti' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-nav-bg/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo/Brand */}
          <Link to="/" className="flex flex-col items-center group">
            <h1 className="elegant-heading text-2xl md:text-3xl text-nav-text font-light tracking-[0.2em]">
              ASTROLOGER
            </h1>
            <p className="professional-text text-xs text-muted-foreground mt-1 tracking-wider">
              Spirituality & Investment Expert
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-elegant professional-text text-sm font-medium tracking-wide ${
                  isActive(item.path)
                    ? 'text-hero-accent border-b-2 border-hero-accent pb-1'
                    : 'text-nav-text hover:text-hero-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-nav-text hover:text-hero-accent hover:bg-nav-hover transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`professional-text text-sm font-medium tracking-wide py-2 px-4 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'text-hero-accent bg-hero-accent/10'
                      : 'text-nav-text hover:text-hero-accent hover:bg-nav-hover'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;