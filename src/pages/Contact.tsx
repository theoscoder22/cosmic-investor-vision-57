import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Star, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-hero-accent" />,
      title: "Email",
      value: "hello@astrologer.com",
      description: "Best for detailed inquiries"
    },
    {
      icon: <Phone className="w-6 h-6 text-hero-accent" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-hero-accent" />,
      title: "Location",
      value: "New York, NY",
      description: "Virtual sessions worldwide"
    },
    {
      icon: <Clock className="w-6 h-6 text-hero-accent" />,
      title: "Hours",
      value: "Mon-Fri 9AM-6PM EST",
      description: "Weekend appointments available"
    }
  ];

  const services = [
    "Birth Chart Reading",
    "Investment Consultation",
    "Spiritual Guidance",
    "Portfolio Analysis",
    "Market Timing Session",
    "Relationship Synastry",
    "Content Collaboration",
    "Speaking Engagement",
    "Other"
  ];

  const faqs = [
    {
      question: "How long are typical sessions?",
      answer: "Sessions range from 60-120 minutes depending on the service. Birth chart readings and investment consultations typically take 90 minutes."
    },
    {
      question: "Do you offer virtual sessions?",
      answer: "Yes! All sessions can be conducted virtually via video call, making my services accessible worldwide."
    },
    {
      question: "What do I need for an astrology reading?",
      answer: "I'll need your exact birth date, time, and location. If you don't know your birth time, we can still do a reading with some limitations."
    },
    {
      question: "Do you provide investment advice?",
      answer: "I provide investment education and guidance, including market analysis and timing insights. This is not formal financial advice, and you should consult with licensed financial advisors for specific investment decisions."
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
              Get in Touch
            </h1>
            <p className="professional-text text-lg md:text-xl text-hero-text/80 leading-relaxed max-w-4xl mx-auto">
              Ready to begin your journey toward aligned prosperity and authentic success? 
              I'd love to help you navigate your path with wisdom, insight, and practical guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="professional-card fade-in-up">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-hero-accent" />
                    <h2 className="elegant-heading text-2xl text-primary font-medium tracking-wide">
                      Send a Message
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="professional-text font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="professional-text font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service" className="professional-text font-medium">
                        Service Interest
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="professional-text font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about your goals, questions, or what you're hoping to explore..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 fade-in-up stagger-1">
              <div>
                <h2 className="elegant-heading text-2xl text-primary font-medium tracking-wide mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="professional-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {info.icon}
                          <div>
                            <h3 className="elegant-heading text-lg text-primary font-medium mb-1">
                              {info.title}
                            </h3>
                            <p className="professional-text text-foreground font-medium mb-1">
                              {info.value}
                            </p>
                            <p className="professional-text text-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Session Information */}
              <Card className="professional-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Star className="w-6 h-6 text-hero-accent" />
                    <h3 className="elegant-heading text-lg text-primary font-medium">
                      Session Information
                    </h3>
                  </div>
                  <div className="space-y-3 professional-text text-muted-foreground">
                    <p>✨ All sessions include comprehensive guidance and actionable insights</p>
                    <p>📊 Investment consultations include written market analysis</p>
                    <p>🌟 Astrology readings include detailed birth chart interpretation</p>
                    <p>🔄 Follow-up support available for all clients</p>
                    <p>🌍 Virtual sessions available worldwide</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className={`professional-card fade-in-up stagger-${index % 3 + 1}`}>
                <CardContent className="p-6">
                  <h3 className="elegant-heading text-lg text-primary font-medium mb-3">
                    {faq.question}
                  </h3>
                  <p className="professional-text text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="elegant-heading text-3xl md:text-4xl text-primary font-light tracking-wide">
              Ready to Begin?
            </h2>
            <p className="professional-text text-lg text-muted-foreground leading-relaxed">
              Whether you're seeking spiritual guidance, investment insights, or both, 
              I'm here to support your journey toward authentic success and abundance. 
              Let's explore what's possible when ancient wisdom meets modern opportunity.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;