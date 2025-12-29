import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import shravyaPortrait from "@/assets/shravya-portrait.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-library">
      {/* Elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mahogany/10 to-burgundy/20" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl relative z-10">
        {/* Main content */}
        <div className="flex-1 max-w-2xl">
          <div className="glass-card p-10 md:p-14 animate-fade-in noise-texture">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
            </div>
            
            {/* Sparkle icon */}
            <div className="flex justify-center mb-8">
              <div className="icon-container w-14 h-14 animate-glow-pulse">
                <Sparkles className="w-7 h-7 text-gold" />
              </div>
            </div>

            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-mahogany text-center leading-tight">
              Hi, I'm
              <span className="block gradient-text mt-2">
                Shravya Azmani
              </span>
            </h1>
            
            <p className="font-inter text-base md:text-lg text-leather/80 text-center mb-10 tracking-wide">
              Tech × Business · Product thinker who ships
            </p>

            <div className="flex justify-center">
              <Button 
                onClick={scrollToAbout}
                size="lg" 
                className="font-inter text-base px-8 py-6 bg-gradient-to-r from-crimson to-maroon hover:from-maroon hover:to-burgundy text-parchment shadow-elegant hover:shadow-deep transition-all duration-500 rounded-xl group"
              >
                Begin Exploring
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="flex-1 max-w-md ml-16 hidden lg:block">
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Glow effect behind portrait */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-amber/10 to-crimson/20 rounded-full blur-2xl scale-110" />
            
            {/* Portrait container */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-amber/20 animate-[spin_25s_linear_infinite_reverse]" />
              
              {/* Main portrait */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-gold/40 shadow-deep">
                <img 
                  src={shravyaPortrait} 
                  alt="Shravya Azmani" 
                  className="w-full h-full object-cover"
                  style={{
                    filter: "sepia(10%) contrast(105%) brightness(98%) saturate(90%)"
                  }}
                />
              </div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 border-t-2 border-gold/40" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 border-b-2 border-gold/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
