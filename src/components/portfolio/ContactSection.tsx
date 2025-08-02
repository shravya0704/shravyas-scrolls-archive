import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-parchment">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Send className="w-12 h-12 text-primary animate-glow" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-4">
            Message via Raven
          </h2>
          <p className="font-garamond text-xl text-muted-foreground italic">
            Summon a conversation across the mystical networks
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-scroll hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="font-cinzel text-2xl text-card-foreground">
                Send a Scroll
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="font-lora text-card-foreground leading-relaxed">
                  Ready to collaborate on your next strategic venture? Whether you need insights on 
                  product strategy, market research, or want to discuss the intersection of AI and business, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  asChild
                  className="font-garamond h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300"
                >
                  <a href="mailto:shravya@example.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </Button>

                <Button 
                  asChild
                  variant="outline"
                  className="font-garamond h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-scroll hover:shadow-glow transition-all duration-300"
                >
                  <a href="https://linkedin.com/in/shravya-azmani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="font-garamond text-sm text-muted-foreground italic">
                  "The best stories are born from meaningful conversations."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;