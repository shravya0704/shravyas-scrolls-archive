import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Scroll } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
        block: "start"
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-mahogany/95 backdrop-blur-xl border-b border-gold/10 shadow-elegant py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-amber/10 border border-gold/30 flex items-center justify-center group-hover:scale-110 group-hover:border-gold/50 transition-all duration-300">
              <Scroll className="w-5 h-5 text-gold" />
            </div>
            <span className="font-cinzel font-bold text-lg text-parchment group-hover:text-gold transition-colors duration-300">
              Shravya
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "font-inter text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 relative",
                  activeSection === item.id
                    ? "text-gold bg-gold/10"
                    : "text-parchment/80 hover:text-gold hover:bg-gold/5"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-lg text-parchment hover:bg-gold/10 transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              <span className="font-inter text-sm">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
