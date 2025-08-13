import { Button } from "@/components/ui/button";
import { ScrollText, Sparkles } from "lucide-react";
import shravyaPortrait from "@/assets/shravya-portrait.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-library animate-fade-in">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-amber rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-gold rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-crimson rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Library atmosphere particles */}
        <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-crimson rounded-full animate-drift opacity-45" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-amber rounded-full animate-spiral opacity-35" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-bronze rounded-full animate-float opacity-55" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-80 left-1/2 w-1 h-1 bg-maroon rounded-full animate-drift opacity-40" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-caramel rounded-full animate-spiral opacity-30" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 right-40 w-1 h-1 bg-mahogany rounded-full animate-float opacity-50" style={{ animationDelay: '3.2s' }}></div>
        
        {/* Twinkling stars */}
        <div className="absolute top-24 right-1/3 w-0.5 h-0.5 bg-gold rounded-full animate-twinkle opacity-70" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-24 left-40 w-0.5 h-0.5 bg-amber rounded-full animate-twinkle opacity-60" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-0.5 h-0.5 bg-burgundy rounded-full animate-twinkle opacity-50" style={{ animationDelay: '4.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        {/* Parchment scroll with content */}
        <div className="flex-1 max-w-3xl">
          <div className="relative">
            {/* Parchment background */}
            <div className="bg-gradient-scroll rounded-lg p-12 shadow-deep border-2 border-leather/30 animate-unroll">
              {/* Decorative scroll edges */}
              <div className="absolute -left-2 top-4 bottom-4 w-4 bg-gradient-to-b from-caramel via-bronze to-mahogany rounded-full opacity-60"></div>
              <div className="absolute -right-2 top-4 bottom-4 w-4 bg-gradient-to-b from-caramel via-bronze to-mahogany rounded-full opacity-60"></div>
              
              <div className="animate-scroll-reveal">
                {/* Mystical header */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <ScrollText className="w-16 h-16 text-gold animate-glow" />
                    <Sparkles className="w-6 h-6 text-amber absolute -top-2 -right-2 animate-pulse" />
                  </div>
                </div>

                <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-mahogany text-center">
                  HI, I AM
                  <span className="block text-gold bg-gradient-mystical bg-clip-text text-transparent mt-2">
                    Shravya Azmani
                  </span>
                </h1>
                
                <p className="font-garamond text-lg md:text-xl italic text-leather text-center mb-8">
                  Tech And Business Enthusiast
                </p>

                <div className="flex justify-center">
                  <Button 
                    onClick={scrollToAbout}
                    size="lg" 
                    className="font-garamond text-lg px-8 py-3 bg-crimson hover:bg-maroon text-white shadow-glow hover:shadow-deep transition-all duration-300"
                  >
                    Begin Exploring
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Circular portrait space */}
        <div className="flex-1 max-w-md ml-12 hidden lg:block">
          <div className="relative">
            {/* Circular grid pattern background */}
            <div className="w-80 h-80 mx-auto relative">
              {/* Grid circles */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 opacity-30">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`rounded-full ${
                      Math.random() > 0.7 ? 'bg-gold/40' : 
                      Math.random() > 0.5 ? 'bg-amber/30' : 'bg-bronze/20'
                    } animate-twinkle`}
                    style={{ animationDelay: `${Math.random() * 3}s` }}
                  />
                ))}
              </div>
              
              {/* Main circular portrait area */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-parchment/40 via-gold/20 to-mahogany/30 border-4 border-gold/50 shadow-deep flex items-center justify-center backdrop-blur-sm animate-fade-in overflow-hidden">
                <img 
                  src={shravyaPortrait} 
                  alt="Shravya Azmani Portrait" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Decorative orbital rings */}
              <div className="absolute inset-0 rounded-full border border-gold/20 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border border-amber/20 animate-[spin_25s_linear_infinite_reverse]"></div>
              <div className="absolute inset-6 rounded-full border border-bronze/20 animate-[spin_30s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;