import { Button } from "@/components/ui/button";
import { ScrollText, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-parchment">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-gold rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Mystical header */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <ScrollText className="w-16 h-16 text-primary animate-glow" />
              <Sparkles className="w-6 h-6 text-gold absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6 text-foreground">
            HI, I AM
            <span className="block text-primary bg-gradient-mystical bg-clip-text text-transparent mt-2">
              Shravya Azmani
            </span>
          </h1>
          
          <p className="font-garamond text-xl md:text-2xl italic text-muted-foreground mb-8 max-w-2xl mx-auto">
            Curating clarity. Crafting stories. Building thoughtful strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="font-garamond text-lg px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300"
            >
              Begin Exploration
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;