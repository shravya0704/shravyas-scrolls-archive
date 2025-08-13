import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Scroll } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Introduction" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: sectionId === "hero" ? "start" : "start"
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-mahogany/95 backdrop-blur-lg border-b border-gold/20 shadow-deep" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <Scroll className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-cinzel font-bold text-gold group-hover:text-amber transition-colors">
              Shravya
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "font-garamond font-medium transition-all duration-300 relative group",
                  "hover:text-gold hover:scale-105",
                  activeSection === item.id
                    ? "text-gold"
                    : isScrolled 
                      ? "text-parchment" 
                      : "text-parchment/90"
                )}
              >
                {item.label}
                
                {/* Animated underline */}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-mystical transition-all duration-300",
                  "group-hover:w-full",
                  activeSection === item.id ? "w-full" : "w-0"
                )} />
                
                {/* Glow effect on hover */}
                <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gold/20 blur-sm" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;