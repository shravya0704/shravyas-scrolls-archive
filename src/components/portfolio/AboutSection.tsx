import { BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const AboutSection = () => {
  const educationItems = [
    { main: "B.Tech in Computer Engineering", sub: null },
    { main: "Honours in Data Science", sub: null },
    { main: "Minor in Entrepreneurship", sub: null },
    { main: "Expected Graduation", sub: "2027" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20 scroll-mt-16 relative">
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
              <BookOpen className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-mahogany mb-3 text-shadow-elegant">
            CHAPTER 1
          </h2>
          <p className="font-garamond text-leather/80 italic text-2xl md:text-3xl">
            Introduction
          </p>
          <div className="section-divider mt-8" />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main intro card */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="glass-card hover-card-sleek p-8 md:p-10">
              <div className="space-y-6">
                <p className="font-garamond text-leather/90 text-base md:text-lg leading-relaxed">
                  I started in computer science — but I don’t stop at code.
                </p>
                <p className="font-garamond text-leather/90 text-base md:text-lg leading-relaxed">
                  I build products with a strong technical backbone and a clear business lens, focusing on user problems, market logic, and execution that actually ships.
                </p>
                <p className="font-garamond text-leather/90 text-base md:text-lg leading-relaxed">
                  My work spans AI, web development, product thinking, and strategy.
                </p>
                <p className="font-garamond text-leather/90 text-base md:text-lg leading-relaxed">
                  In short: I’m a techie who understands business, and a product thinker who can execute.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Education card */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="glass-card hover-card-sleek p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-container w-12 h-12">
                  <GraduationCap className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-cinzel text-xl md:text-2xl font-bold text-mahogany">Education</h4>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {educationItems.map((item, idx) => (
                  <AnimatedItem
                    key={idx}
                    index={idx}
                    animation="fade-left"
                    baseDelay={300}
                    staggerDelay={80}
                  >
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-bronze/5 to-mahogany/5 border border-gold/10 transition-all duration-300 hover:border-gold/25">
                      <ArrowRight className="w-4 h-4 text-gold flex-shrink-0" />
                      <div>
                        <span className="font-garamond text-leather text-base md:text-lg font-medium">{item.main}</span>
                        {item.sub && (
                          <span className="font-inter text-bronze/80 text-sm ml-2">{item.sub}</span>
                        )}
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
