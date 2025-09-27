import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, DollarSign, Target, Shield, Calendar, Lightbulb, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Investment = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-hero-accent" />,
      title: "Portfolio Analysis",
      description: "Comprehensive review of your current investments with cosmic timing insights for optimization.",
      duration: "90 minutes",
      features: ["Risk assessment", "Diversification analysis", "Cosmic timing review", "Rebalancing strategy"]
    },
    {
      icon: <Target className="w-8 h-8 text-hero-accent" />,
      title: "Investment Strategy",
      description: "Personalized wealth-building strategy aligned with your financial goals and astrological profile.",
      duration: "120 minutes",
      features: ["Goal setting", "Risk tolerance", "Asset allocation", "Timeline planning"]
    },
    {
      icon: <Calendar className="w-8 h-8 text-hero-accent" />,
      title: "Market Timing",
      description: "Leverage planetary cycles and market patterns for optimal entry and exit points.",
      duration: "60 minutes",
      features: ["Cycle analysis", "Entry/exit timing", "Trend identification", "Risk management"]
    },
    {
      icon: <PieChart className="w-8 h-8 text-hero-accent" />,
      title: "Wealth Planning",
      description: "Long-term financial planning incorporating both traditional metrics and cosmic influences.",
      duration: "120 minutes",
      features: ["Retirement planning", "Tax optimization", "Estate planning", "Legacy building"]
    }
  ];

  const approaches = [
    {
      icon: <TrendingUp className="w-6 h-6 text-hero-accent" />,
      title: "Technical Analysis",
      description: "Chart patterns, indicators, and market psychology combined with intuitive insights"
    },
    {
      icon: <Shield className="w-6 h-6 text-hero-accent" />,
      title: "Risk Management",
      description: "Sophisticated protection strategies using both financial tools and cosmic timing"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-hero-accent" />,
      title: "Cosmic Cycles",
      description: "Planetary transits and lunar phases for market timing and decision making"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-hero-accent" />,
      title: "Value Investing",
      description: "Long-term wealth building through undervalued assets and patient accumulation"
    }
  ];

  const results = [
    {
      metric: "15%+",
      label: "Average Annual Returns",
      description: "Consistent outperformance using integrated approach"
    },
    {
      metric: "85%",
      label: "Success Rate",
      description: "Clients achieving their financial goals on time"
    },
    {
      metric: "12+",
      label: "Years Experience",
      description: "Combined astrology and financial market expertise"
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
              Investment Expertise
            </h1>
            <p className="professional-text text-lg md:text-xl text-hero-text/80 leading-relaxed max-w-4xl mx-auto">
              Combine time-tested investment principles with cosmic timing for superior returns. 
              Build wealth that aligns with both market realities and natural cycles, 
              creating sustainable prosperity for your future.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium tracking-wide"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Proven Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={result.label} className={`professional-card text-center fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-8 space-y-4">
                  <div className="elegant-heading text-4xl text-hero-accent font-light">
                    {result.metric}
                  </div>
                  <h3 className="elegant-heading text-lg text-primary font-medium tracking-wide">
                    {result.label}
                  </h3>
                  <p className="professional-text text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Investment Services
            </h2>
            <p className="professional-text text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial guidance that combines proven investment strategies with cosmic timing insights.
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

      {/* Investment Philosophy */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Investment Philosophy
            </h2>
          </div>
          
          <div className="space-y-8 professional-text text-lg leading-relaxed text-foreground">
            <p>
              My investment approach combines rigorous financial analysis with the wisdom of natural cycles. 
              While markets are driven by human psychology and economic fundamentals, they also follow 
              patterns that align with cosmic rhythms and seasonal energies.
            </p>
            
            <p>
              I believe in patient wealth building through disciplined strategies, proper risk management, 
              and optimal timing. Rather than chasing quick profits, we focus on building sustainable 
              portfolios that grow steadily over time while protecting against major downturns.
            </p>
            
            <p>
              The integration of astrological timing doesn't replace sound financial principles—it enhances 
              them. By understanding when markets are likely to be volatile versus stable, when to be 
              aggressive versus conservative, we can optimize our decisions for better long-term outcomes.
            </p>
            
            <p>
              Most importantly, your investment strategy should align with your personal goals, values, 
              and life timeline. Money is a tool for creating the life you desire, not an end in itself. 
              My role is to help you build wealth that supports your authentic purpose and provides 
              true security for your future.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              My Methodology
            </h2>
            <p className="professional-text text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive approach combining traditional finance with cosmic insights.
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

      <Footer />
    </div>
  );
};

export default Investment;