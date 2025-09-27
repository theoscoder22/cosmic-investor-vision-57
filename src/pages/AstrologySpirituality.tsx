import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Star, Sparkles, Heart, Eye, Compass, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AstrologySpirituality = () => {
  const services = [
    {
      icon: <Star className="w-8 h-8 text-hero-accent" />,
      title: "Birth Chart Analysis",
      description: "Comprehensive analysis of your natal chart revealing personality traits, life purpose, career path, and relationship patterns.",
      duration: "90 minutes",
      features: ["Complete natal chart", "Life purpose guidance", "Career insights", "Relationship compatibility"]
    },
    {
      icon: <Moon className="w-8 h-8 text-hero-accent" />,
      title: "Predictive Astrology",
      description: "Timing guidance for major life decisions using transits, progressions, and solar returns to optimize your choices.",
      duration: "60 minutes",
      features: ["Future planning", "Optimal timing", "Major life transitions", "Goal manifestation"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-hero-accent" />,
      title: "Spiritual Guidance",
      description: "Intuitive counseling sessions combining astrological insights with spiritual healing and energy work.",
      duration: "75 minutes",
      features: ["Energy healing", "Chakra balancing", "Spiritual coaching", "Meditation guidance"]
    },
    {
      icon: <Heart className="w-8 h-8 text-hero-accent" />,
      title: "Relationship Synastry",
      description: "Deep dive into relationship compatibility using composite charts and synastry analysis for couples or partnerships.",
      duration: "90 minutes",
      features: ["Compatibility analysis", "Communication patterns", "Growth opportunities", "Conflict resolution"]
    }
  ];

  const approaches = [
    {
      icon: <Sun className="w-6 h-6 text-hero-accent" />,
      title: "Vedic Astrology",
      description: "Ancient Indian system focusing on karma, dharma, and spiritual evolution"
    },
    {
      icon: <Eye className="w-6 h-6 text-hero-accent" />,
      title: "Western Astrology",
      description: "Psychological approach emphasizing personality development and life patterns"
    },
    {
      icon: <Compass className="w-6 h-6 text-hero-accent" />,
      title: "Intuitive Guidance",
      description: "Combining analytical skills with psychic insights for complete perspective"
    },
    {
      icon: <Zap className="w-6 h-6 text-hero-accent" />,
      title: "Energy Healing",
      description: "Chakra balancing, aura cleansing, and spiritual alignment techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-container py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 fade-in-up">
            <h1 className="elegant-heading text-4xl md:text-5xl lg:text-6xl text-hero-text font-light tracking-wide leading-tight">
              Astrology & Spirituality
            </h1>
            <p className="professional-text text-lg md:text-xl text-hero-text/80 leading-relaxed max-w-4xl mx-auto">
              Unlock the wisdom of the cosmos and align with your soul's true purpose. 
              Through ancient astrological traditions and modern spiritual practices, 
              discover your path to authentic fulfillment and spiritual growth.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium tracking-wide"
            >
              <Link to="/contact">Book a Reading</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Spiritual Services
            </h2>
            <p className="professional-text text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Personalized guidance combining the precision of astrology with the wisdom of spiritual healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`professional-card fade-in-up stagger-${index % 2 + 1}`}>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      {service.icon}
                      <div>
                        <h3 className="elegant-heading text-xl text-primary font-medium tracking-wide">
                          {service.title}
                        </h3>
                        <p className="professional-text text-sm text-hero-accent font-medium">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    
                    <p className="professional-text text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="professional-text font-medium text-primary mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="professional-text text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-hero-accent rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              My Approach
            </h2>
            <p className="professional-text text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Integrating multiple traditions and techniques for comprehensive spiritual guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <Card key={approach.title} className={`professional-card text-center fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{approach.icon}</div>
                  <h3 className="elegant-heading text-lg text-primary font-medium tracking-wide">
                    {approach.title}
                  </h3>
                  <p className="professional-text text-sm text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide">
              My Philosophy
            </h2>
            <div className="space-y-6 professional-text text-lg leading-relaxed text-foreground">
              <p>
                I believe that astrology is not about predicting a fixed fate, but about understanding 
                the cosmic energies that influence our lives and learning to work with them harmoniously. 
                Each birth chart is a unique map of potential, showing both challenges and gifts.
              </p>
              <p>
                Spirituality, in my practice, is deeply practical. It's about developing the inner 
                tools to navigate life's complexities with grace, wisdom, and authentic power. 
                When we align with our soul's purpose, life becomes a journey of conscious creation 
                rather than random circumstance.
              </p>
              <p>
                My goal is to empower you with knowledge, insight, and practical tools that you 
                can use long after our session ends. True spiritual guidance creates independence, 
                not dependence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AstrologySpirituality;