import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, TrendingUp, Heart, Sparkles, BarChart3, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const Index = () => {
  const expertiseAreas = [
    {
      icon: <Star className="w-8 h-8 text-hero-accent" />,
      title: "Astrology",
      description: "Comprehensive birth chart analysis and cosmic guidance for life's major decisions and personal growth."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-hero-accent" />,
      title: "Spirituality",
      description: "Spiritual counseling and energy healing to align your soul's purpose with your life's journey."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-hero-accent" />,
      title: "Stock Market Analysis",
      description: "Professional market analysis combining technical indicators with intuitive insights for optimal timing."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-hero-accent" />,
      title: "Investment Strategy",
      description: "Personalized wealth-building strategies aligned with your financial goals and risk tolerance."
    },
    {
      icon: <Heart className="w-8 h-8 text-hero-accent" />,
      title: "Entertainment",
      description: "Creating engaging content that blends wisdom, humor, and authentic connection with audiences."
    },
    {
      icon: <Users className="w-8 h-8 text-hero-accent" />,
      title: "Personal Brand",
      description: "Building authentic personal brands that reflect your true essence and professional expertise."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 fade-in-up">
              <div className="space-y-6">
                <h1 className="elegant-heading text-4xl md:text-5xl lg:text-6xl text-hero-text font-light tracking-wide leading-tight">
                  Meet Your Guide.
                </h1>
                <p className="professional-text text-lg md:text-xl text-hero-text/80 leading-relaxed max-w-2xl">
                  A unique blend of ancient wisdom and modern financial expertise. 
                  I guide individuals through life's cosmic patterns while building 
                  sustainable wealth through strategic investments and authentic personal branding.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 stagger-1">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium tracking-wide"
                >
                  <Link to="/biography">Learn More About Me</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-background px-8 py-3 rounded-md font-medium tracking-wide"
                >
                  <Link to="/contact">Start Your Journey</Link>
                </Button>
              </div>
            </div>

            {/* Professional Image */}
            <div className="flex justify-center lg:justify-end fade-in-up stagger-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-hero-accent/20 to-transparent rounded-2xl blur-3xl"></div>
                <img
                  src={professionalHeadshot}
                  alt="Professional headshot of astrologer and investment expert"
                  className="relative rounded-2xl shadow-2xl w-80 h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle Section */}
      <section className="bg-content-bg py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-2xl md:text-3xl text-primary font-light tracking-wide mb-6">
            Astrology & Investment Expert
          </h2>
          <p className="professional-text text-lg text-muted-foreground leading-relaxed">
            Combining celestial insights with financial acumen to guide you toward prosperity, 
            purpose, and authentic success in all areas of life.
          </p>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Areas of Expertise
            </h2>
            <p className="professional-text text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bridging the mystical and practical to create comprehensive guidance 
              for your personal and financial transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={area.title} className={`professional-card fade-in-up stagger-${index % 3 + 1}`}>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">{area.icon}</div>
                  <h3 className="elegant-heading text-xl text-primary font-medium tracking-wide">
                    {area.title}
                  </h3>
                  <p className="professional-text text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
