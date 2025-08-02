import { ScrollText, Sparkles, Leaf, DollarSign, Car, Shirt } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "🪞 The Body Shop – Business Consulting Case Study",
      description: "Conducted extensive secondary research into India's $36B BPC market and proposed strategic expansion solutions.",
      details: [
        "Benchmarked growth strategies of major beauty brands",
        "Proposed localized sub-brand strategy targeting Tier 2/3 cities",
        "Suggested omnichannel GTM strategy blending experiential retail and digital-first expansion",
        "Frameworks Used: 4Ps, STP, Competitor Mapping"
      ],
      technologies: ["Market Research", "Strategy", "4Ps Framework", "STP Analysis"],
      icon: <Sparkles className="w-6 h-6" />,
      timeline: "Competition: Indian Case Challenge, IIT Kharagpur"
    },
    {
      title: "🌿 PISTARA – Clean Beauty GTM Strategy",
      description: "Built a complete go-to-market strategy for a clean beauty startup selling pistachio-based hydration mist.",
      details: [
        "Proposed hybrid D2C + B2B revenue model",
        "Designed refill stations and vending machine placements strategy",
        "Created byproduct monetization plan",
        "Developed launch roadmap with pricing (₹499–599) and Gen Z targeting"
      ],
      technologies: ["GTM Strategy", "D2C", "B2B", "Sustainability"],
      icon: <Leaf className="w-6 h-6" />,
      timeline: "Jan 2025 – Apr 2025 | ConsultXpert, SRCC Delhi"
    },
    {
      title: "💸 MoneyVerse – Gamified Finance Education Platform",
      description: "Created an interactive learning platform using MERN stack for Gen Z financial education.",
      details: [
        "Led content architecture and gamification logic design",
        "Implemented story-based learning modules",
        "Worked on frontend using React + Tailwind CSS",
        "Incorporated user personas for intuitive onboarding and reward systems"
      ],
      technologies: ["React", "Tailwind CSS", "MERN Stack", "UX Design"],
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "🅿️ BookMySpot – Smart Parking Web App",
      description: "Built a prototype web-based parking system to manage real-time slot availability and booking.",
      details: [
        "Implemented backend logic using PHP",
        "Designed frontend in HTML/CSS/JS",
        "Created features to reduce wait time and booking conflicts",
        "Mapped user journey for frictionless experience"
      ],
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "UX Mapping"],
      icon: <Car className="w-6 h-6" />
    },
    {
      title: "👗 SwiftStyle – Fashion-Tech Startup Ideation",
      description: "Conducted market research and designed a web prototype for AI-based personal styling platform.",
      details: [
        "Surveyed 40+ users to validate demand for affordable styling solutions",
        "Designed web prototype and investor-facing assets",
        "Created pitch deck, product mockup, and poster",
        "Positioned for Gen Z users and working professionals"
      ],
      technologies: ["Market Research", "Prototyping", "Pitch Design", "AI"],
      icon: <Shirt className="w-6 h-6" />,
      timeline: "Submitted for Entrepreneurship Evaluation"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-parchment">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ScrollText className="w-12 h-12 text-primary animate-glow" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Scroll Chamber
          </h2>
          <p className="font-garamond text-xl text-muted-foreground italic">
            Preserved chronicles of strategic endeavors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;