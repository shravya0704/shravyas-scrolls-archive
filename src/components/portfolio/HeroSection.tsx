import { Button } from "@/components/ui/button";
import { ScrollText, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-library">
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

        {/* Space for image */}
        <div className="flex-1 max-w-md ml-12 hidden lg:block">
          <div className="relative">
            {/* Placeholder for portrait image */}
            <div className="aspect-[3/4] bg-gradient-to-b from-parchment/20 to-mahogany/20 rounded-lg border-4 border-gold/30 shadow-deep flex items-center justify-center backdrop-blur-sm animate-fade-in">
              <div className="text-center text-leather/60">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-mystical/20 flex items-center justify-center">
                  <ScrollText className="w-12 h-12 text-gold/60" />
                </div>
                <p className="font-garamond italic">Portrait Space</p>
                <p className="text-sm mt-1">Add your image here</p>
              </div>
            </div>
            
            {/* Decorative frame elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-gold/60 rounded-tl-lg"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-gold/60 rounded-tr-lg"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-gold/60 rounded-bl-lg"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-gold/60 rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;