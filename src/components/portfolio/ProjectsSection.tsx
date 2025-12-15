import { ScrollText, Code, Briefcase, DollarSign, Car, Shirt, Sparkles, Leaf } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const technicalProjects = [
    {
      title: "MoneyVerse",
      description: "Created an interactive learning platform using MERN stack for Gen Z financial education. Led content architecture and gamification logic design, implemented story-based learning modules, and worked on frontend using React + Tailwind CSS. Incorporated user personas for intuitive onboarding and reward systems.",
      icon: <DollarSign className="w-8 h-8" />,
      documents: [
        // Add your documents here like:
        // { label: "PPT", url: "/documents/moneyverse.pptx" },
        // { label: "GitHub", url: "https://github.com/..." },
      ]
    },
    {
      title: "BookMySpot",
      description: "Built a prototype web-based parking system to manage real-time slot availability and booking. Implemented backend logic using PHP, designed frontend in HTML/CSS/JS, created features to reduce wait time and booking conflicts, and mapped user journey for frictionless experience.",
      icon: <Car className="w-8 h-8" />,
      documents: [
        // Add your documents here
      ]
    },
    {
      title: "SwiftStyle",
      description: "Conducted market research and designed a web prototype for AI-based personal styling platform. Surveyed 40+ users to validate demand for affordable styling solutions, designed web prototype and investor-facing assets, created pitch deck, product mockup, and poster. Positioned for Gen Z users and working professionals.",
      icon: <Shirt className="w-8 h-8" />,
      timeline: "Submitted for Entrepreneurship Evaluation",
      documents: [
        // Add your documents here
      ]
    }
  ];

  const businessProjects = [
    {
      title: "The Body Shop – Business Consulting Case Study",
      description: "Conducted extensive secondary research into India's $36B BPC market and proposed strategic expansion solutions. Benchmarked growth strategies of major beauty brands, proposed localized sub-brand strategy targeting Tier 2/3 cities, and suggested omnichannel GTM strategy blending experiential retail and digital-first expansion. Frameworks Used: 4Ps, STP, Competitor Mapping.",
      icon: <Sparkles className="w-8 h-8" />,
      timeline: "Competition: Case Challenge",
      documents: [
        // Add your documents here
      ]
    },
    {
      title: "PISTARA – Clean Beauty GTM Strategy",
      description: "Built a complete go-to-market strategy for a clean beauty startup selling pistachio-based hydration mist. Proposed hybrid D2C + B2B revenue model, designed refill stations and vending machine placements strategy, created byproduct monetization plan, and developed launch roadmap with pricing (₹499–599) and Gen Z targeting.",
      icon: <Leaf className="w-8 h-8" />,
      timeline: "Jan 2025 – Apr 2025 | ConsultXpert",
      documents: [
        // Add your documents here
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-burgundy/10 to-crimson/10 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ScrollText className="w-12 h-12 text-gold animate-glow" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mahogany mb-4">CHAPTER 2</h2>
          <p className="font-garamond text-leather italic text-2xl">Projects</p>
        </div>

        {/* Technical Projects */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6 text-gold" />
            <h3 className="font-cinzel text-2xl font-bold text-mahogany">Technical Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalProjects.map((project, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Product/Business Projects */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-gold" />
            <h3 className="font-cinzel text-2xl font-bold text-mahogany">Product / Business Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {businessProjects.map((project, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
