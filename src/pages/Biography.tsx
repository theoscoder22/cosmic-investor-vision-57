import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Award, TrendingUp, Star } from 'lucide-react';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const Biography = () => {
  const milestones = [
    {
      year: "2015",
      title: "Astrological Studies Begin",
      description: "Started comprehensive study of Vedic and Western astrology, including birth chart analysis and predictive techniques."
    },
    {
      year: "2017",
      title: "Financial Markets Entry",
      description: "Began professional trading and investment management, developing unique strategies combining technical analysis with intuitive insights."
    },
    {
      year: "2019",
      title: "Certification & Practice",
      description: "Received certification in advanced astrological counseling and launched private practice combining spiritual guidance with financial advisory."
    },
    {
      year: "2021",
      title: "Media & Entertainment",
      description: "Expanded into content creation, developing engaging material that makes complex topics accessible to broader audiences."
    },
    {
      year: "2023",
      title: "Integrated Approach",
      description: "Pioneered holistic methodology combining cosmic timing with market analysis for optimal life and financial decisions."
    }
  ];

  const achievements = [
    {
      icon: <Star className="w-6 h-6 text-hero-accent" />,
      title: "Advanced Astrological Certification",
      description: "Certified in Vedic and Western astrology with specialization in financial timing"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-hero-accent" />,
      title: "Investment Performance",
      description: "Consistent 15%+ annual returns combining technical analysis with cosmic timing"
    },
    {
      icon: <Award className="w-6 h-6 text-hero-accent" />,
      title: "Media Recognition",
      description: "Featured in multiple publications for innovative approach to combining spirituality and finance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-container py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <h1 className="elegant-heading text-4xl md:text-5xl text-hero-text font-light tracking-wide leading-tight">
                About Me
              </h1>
              <p className="professional-text text-lg text-hero-text/80 leading-relaxed">
                My journey began with a deep fascination for the cosmic patterns that govern our lives, 
                combined with a practical need to understand financial markets. This unique combination 
                has led me to develop an integrated approach that bridges ancient wisdom with modern prosperity.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end fade-in-up stagger-1">
              <img
                src={professionalHeadshot}
                alt="Professional portrait"
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Biography */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 professional-text text-lg leading-relaxed text-foreground">
            <p>
              My path into astrology began during my college years when I was studying finance. 
              While excelling in traditional market analysis, I found myself drawn to the patterns 
              and cycles that seemed to govern not just markets, but life itself. This curiosity 
              led me to explore Vedic astrology, where I discovered the profound connection between 
              planetary movements and human behavior.
            </p>
            
            <p>
              After graduating with honors in Financial Management, I spent several years in 
              traditional investment roles while simultaneously pursuing advanced studies in 
              astrological sciences. I studied under renowned masters in both Vedic and Western 
              traditions, earning certifications that allowed me to practice professionally.
            </p>
            
            <p>
              The breakthrough came when I began applying astrological timing to my investment 
              strategies. By combining technical analysis with planetary transits and lunar cycles, 
              I developed a unique methodology that consistently outperformed traditional approaches. 
              This success led to requests from colleagues and friends for guidance, and my 
              practice naturally evolved.
            </p>
            
            <p>
              Today, I work with individuals who seek both spiritual guidance and practical prosperity. 
              My clients range from entrepreneurs looking to time their business launches, to 
              individuals seeking clarity on major life decisions, to investors wanting to align 
              their portfolios with cosmic cycles. I also create content that makes these complex 
              topics accessible and entertaining for broader audiences.
            </p>
            
            <p>
              My mission is to help people understand that spirituality and material success are 
              not opposing forces, but complementary aspects of a well-lived life. When we align 
              our actions with both cosmic wisdom and sound financial principles, we create 
              conditions for authentic abundance and fulfillment.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Professional Journey
            </h2>
            <p className="professional-text text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Key milestones in developing an integrated approach to spirituality and financial success.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className={`professional-card fade-in-up stagger-${index % 3 + 1}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-6 h-6 text-hero-accent" />
                      <span className="elegant-heading text-2xl text-hero-accent font-medium">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="elegant-heading text-xl text-primary font-medium tracking-wide">
                        {milestone.title}
                      </h3>
                      <p className="professional-text text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Key Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className={`professional-card text-center fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">{achievement.icon}</div>
                  <h3 className="elegant-heading text-lg text-primary font-medium tracking-wide">
                    {achievement.title}
                  </h3>
                  <p className="professional-text text-muted-foreground leading-relaxed">
                    {achievement.description}
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

export default Biography;