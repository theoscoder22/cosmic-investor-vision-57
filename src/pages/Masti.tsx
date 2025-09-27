import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Mic, Camera, Users, Sparkles, Heart, Coffee, Laugh } from 'lucide-react';
import { Link } from 'react-router-dom';

const Masti = () => {
  const contentTypes = [
    {
      icon: <PlayCircle className="w-8 h-8 text-hero-accent" />,
      title: "Educational Content",
      description: "Making astrology and investment concepts accessible through engaging, entertaining formats.",
      examples: ["Astrology 101 series", "Market psychology explained", "Cosmic timing basics", "Financial literacy fun"]
    },
    {
      icon: <Mic className="w-8 h-8 text-hero-accent" />,
      title: "Podcast Appearances",
      description: "Guest appearances on podcasts discussing the intersection of spirituality and financial success.",
      examples: ["Money & mysticism", "Entrepreneur interviews", "Spiritual business", "Success stories"]
    },
    {
      icon: <Camera className="w-8 h-8 text-hero-accent" />,
      title: "Behind the Scenes",
      description: "Authentic glimpses into the life of someone balancing ancient wisdom with modern success.",
      examples: ["Daily routines", "Chart reading process", "Market analysis setup", "Travel adventures"]
    },
    {
      icon: <Users className="w-8 h-8 text-hero-accent" />,
      title: "Community Building",
      description: "Creating spaces where like-minded individuals can connect, learn, and grow together.",
      examples: ["Live Q&A sessions", "Group challenges", "Success celebrations", "Learning circles"]
    }
  ];

  const personalInterests = [
    {
      icon: <Coffee className="w-6 h-6 text-hero-accent" />,
      title: "Morning Rituals",
      description: "Sharing the spiritual practices that set the tone for successful days"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-hero-accent" />,
      title: "Travel Stories",
      description: "Adventures to sacred sites and how travel influences perspective"
    },
    {
      icon: <Heart className="w-6 h-6 text-hero-accent" />,
      title: "Life Balance",
      description: "Honest conversations about balancing spirituality with practical success"
    },
    {
      icon: <Laugh className="w-6 h-6 text-hero-accent" />,
      title: "Humor & Joy",
      description: "Finding lightness and laughter in the journey of growth and prosperity"
    }
  ];

  const entertainmentGoals = [
    "Make complex topics accessible and fun",
    "Break stereotypes about astrology and spirituality",
    "Show that success and authenticity can coexist",
    "Build genuine connections with audiences",
    "Inspire others to pursue their unique paths",
    "Create content that educates while entertaining"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-container py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 fade-in-up">
            <h1 className="elegant-heading text-4xl md:text-5xl lg:text-6xl text-hero-text font-light tracking-wide leading-tight">
              Masti & Entertainment
            </h1>
            <p className="professional-text text-lg md:text-xl text-hero-text/80 leading-relaxed max-w-4xl mx-auto">
              Where wisdom meets fun! Creating engaging content that makes spirituality and financial success 
              accessible, relatable, and entertaining. Because learning should be joyful, 
              and success should be celebrated.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium tracking-wide"
            >
              <Link to="/contact">Collaborate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Content & Entertainment
            </h2>
            <p className="professional-text text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creating engaging content that bridges the gap between ancient wisdom and modern life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((content, index) => (
              <Card key={content.title} className={`professional-card fade-in-up stagger-${index % 2 + 1}`}>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      {content.icon}
                      <h3 className="elegant-heading text-xl text-primary font-medium tracking-wide">
                        {content.title}
                      </h3>
                    </div>
                    
                    <p className="professional-text text-muted-foreground leading-relaxed">
                      {content.description}
                    </p>
                    
                    <div>
                      <h4 className="professional-text font-medium text-primary mb-3">
                        Content Examples:
                      </h4>
                      <ul className="space-y-2">
                        {content.examples.map((example, idx) => (
                          <li key={idx} className="professional-text text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-hero-accent rounded-full"></div>
                            {example}
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

      {/* Personal Side */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              The Personal Side
            </h2>
            <p className="professional-text text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Authentic glimpses into balancing spiritual growth with material success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInterests.map((interest, index) => (
              <Card key={interest.title} className={`professional-card text-center fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{interest.icon}</div>
                  <h3 className="elegant-heading text-lg text-primary font-medium tracking-wide">
                    {interest.title}
                  </h3>
                  <p className="professional-text text-sm text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              My Entertainment Philosophy
            </h2>
          </div>
          
          <div className="space-y-8 professional-text text-lg leading-relaxed text-foreground">
            <p>
              I believe that learning should be joyful and that wisdom doesn't have to be serious all the time. 
              Some of the most profound insights come through laughter, storytelling, and authentic human connection. 
              My goal is to make spiritual and financial concepts accessible to everyone, regardless of their background.
            </p>
            
            <p>
              Entertainment, for me, isn't about being superficial—it's about finding creative ways to share 
              valuable knowledge that can transform lives. Whether through humor, personal stories, or 
              engaging visual content, I aim to break down barriers that often make these topics feel 
              intimidating or exclusive.
            </p>
            
            <p>
              Behind all the content is a genuine desire to connect with people who are on similar journeys 
              of growth and success. I share my wins, my challenges, my learning moments, and my perspectives 
              because authenticity creates real community. When we can laugh together, learn together, 
              and celebrate together, we all grow faster.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Entertainment Goals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainmentGoals.map((goal, index) => (
              <Card key={index} className={`professional-card text-center fade-in-up stagger-${index % 3 + 1}`}>
                <CardContent className="p-6">
                  <p className="professional-text text-muted-foreground leading-relaxed">
                    {goal}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide">
              Let's Create Together
            </h2>
            <p className="professional-text text-lg text-muted-foreground leading-relaxed">
              Interested in collaborating on content, guest appearances, or creating something fun and educational? 
              I'm always open to new creative partnerships that spread positive energy and valuable knowledge.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium tracking-wide"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Masti;