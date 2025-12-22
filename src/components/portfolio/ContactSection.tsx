import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send, MessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_ed64n9w',
        'template_29lm4ba',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '62PXUc3wMCWP9_QHM'
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background scroll-mt-16 relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--mahogany)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="icon-container w-16 h-16 animate-glow-pulse">
              <Send className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-mahogany mb-3 text-shadow-elegant">
            Get In Touch
          </h2>
          <p className="font-garamond text-leather/80 italic text-xl md:text-2xl">
            Let's start a conversation and build something together.
          </p>
          <div className="section-divider mt-8" />
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="glass-card hover-card-sleek p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="icon-container w-12 h-12">
                  <Sparkles className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-mahogany">Let's Connect</h3>
              </div>

              <div className="space-y-4">
                <AnimatedItem index={0} animation="fade-left" baseDelay={200}>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shravyawork07@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-bronze/5 to-mahogany/5 border border-gold/10 transition-all duration-300 hover:border-gold/30 hover:shadow-card group"
                  >
                    <div className="icon-container w-14 h-14 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-lg font-bold text-mahogany">Email</h4>
                      <p className="font-inter text-leather/80 text-sm">shravyawork07@gmail.com</p>
                    </div>
                  </a>
                </AnimatedItem>

                <AnimatedItem index={1} animation="fade-left" baseDelay={200}>
                  <a 
                    href="https://www.linkedin.com/in/shravya-azmani-357738281/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-bronze/5 to-mahogany/5 border border-gold/10 transition-all duration-300 hover:border-gold/30 hover:shadow-card group"
                  >
                    <div className="icon-container w-14 h-14 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-lg font-bold text-mahogany">LinkedIn</h4>
                      <p className="font-inter text-leather/80 text-sm">Connect with me</p>
                    </div>
                  </a>
                </AnimatedItem>
              </div>

              <div className="mt-8 pt-6 border-t border-gold/10">
                <p className="font-garamond text-sm text-bronze/70 italic text-center">
                  "The best stories are born from meaningful conversations."
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="glass-card hover-card-sleek p-8 relative overflow-hidden h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="icon-container w-12 h-12">
                  <MessageSquare className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-mahogany">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-inter text-mahogany font-medium text-sm">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-gold/20 focus:border-gold focus:ring-gold/20 font-inter rounded-xl h-12"
                    placeholder="Enter your name..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-inter text-mahogany font-medium text-sm">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-gold/20 focus:border-gold focus:ring-gold/20 font-inter rounded-xl h-12"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter text-mahogany font-medium text-sm">
                    Your Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="flex w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/20 focus-visible:border-gold disabled:cursor-not-allowed disabled:opacity-50 font-inter resize-none"
                    placeholder="Share your thoughts..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-crimson to-maroon hover:from-maroon hover:to-burgundy text-parchment font-inter font-medium text-base py-6 h-auto rounded-xl transition-all duration-500 hover:shadow-deep disabled:opacity-50 group relative overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  <div className="flex items-center gap-2 relative z-10">
                    <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </div>
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
