import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Scroll, Mail, Linkedin } from "lucide-react";

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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
            <Scroll className="w-6 h-6 text-gold group-hover:rotate-6 transition-transform duration-200" />
            <span className="font-cinzel font-bold text-gold group-hover:text-amber transition-colors duration-200">
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
                  "font-garamond font-medium transition-all duration-200 relative group",
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
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-mystical transition-all duration-200",
                  "group-hover:w-full",
                  activeSection === item.id ? "w-full" : "w-0"
                )} />
                
                {/* Glow effect on hover */}
                <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-20 transition-opacity duration-200 bg-gold/20 blur-sm" />
              </button>
            ))}
            
            {/* Contact Icons */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gold/30">
              <a
                href="mailto:shravyaazmani@gmail.com"
                className={cn(
                  "p-2 rounded-full transition-all duration-200 relative group",
                  "hover:scale-110",
                  isScrolled ? "text-parchment" : "text-parchment/90"
                )}
                title="Send Email"
              >
                <Mail className="w-5 h-5 group-hover:text-gold transition-colors duration-200" />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200 bg-gold/20 blur-sm" />
              </a>
              
              <a
                href="https://linkedin.com/in/shravya-azmani"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-all duration-200 relative group",
                  "hover:scale-110",
                  isScrolled ? "text-parchment" : "text-parchment/90"
                )}
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 group-hover:text-gold transition-colors duration-200" />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200 bg-gold/20 blur-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;