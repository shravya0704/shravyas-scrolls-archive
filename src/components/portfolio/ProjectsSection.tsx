import { 
  ScrollText, 
  Code, 
  Briefcase, 
  Mail, 
  Wallet, 
  Car, 
  Users, 
  Sparkles, 
  Leaf, 
  Shirt, 
  Apple, 
  Dumbbell, 
  TrendingUp,
  Github
} from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const technicalProjects = [
    {
      title: "ColdConnect",
      description: "Cold Outreach Tool For Students",
      icon: <Mail className="w-7 h-7" />,
      timeline: "Personal Project",
      points: [
        "Led end-to-end product development (problem discovery → workflow design → launch), building a tool that reduced email creation time from 20 mins to less than 2 mins.",
        "Designed a smart contact-finding engine using pattern prediction + lightweight scraping, generating probable decision-maker emails without paid APIs.",
        "Built a personalized email generation system (Groq + resume parsing + news context) that produces high-conversion, ready-to-send outreach emails in one click.",
      ],
      documents: [
        { label: "View GitHub", url: "https://github.com/shravya0704/ColdConnect" }
      ]
    },
    {
      title: "MoneyVerse",
      description: "Created an interactive learning platform using MERN stack for Gen Z financial education. Led content architecture and gamification logic design, implemented story-based learning modules, and worked on frontend using React + Tailwind CSS. Incorporated user personas for intuitive onboarding and reward systems.",
      icon: <Wallet className="w-7 h-7" />,
      timeline: "College Project - Semester 4",
      documents: []
    },
    {
      title: "BookMySpot",
      description: "Built a prototype web-based parking system to manage real-time slot availability and booking. Implemented backend logic using PHP, designed frontend in HTML/CSS/JS, created features to reduce wait time and booking conflicts, and mapped user journey for frictionless experience.",
      icon: <Car className="w-7 h-7" />,
      timeline: "College Project - Semester 3",
      documents: []
    },
    {
      title: "Collabry",
      points: [
        "Built a centralized platform for students to ask academic doubts, find teammates, and collaborate on projects, addressing scattered communication across Whatsapp/Telegram.",
        "Designed and refined user flows (signup, forums, project matching) using feedback from 10–15 student testers, and developed core features like discussion threads, search/filters, notifications, and an admin dashboard using MERN stack.",
      ],
      icon: <Users className="w-7 h-7" />,
      timeline: "Engineering Minor Project - Semester 5",
      documents: [
        { label: "View GitHub", url: "https://github.com/janhavisuvarnpradeep27-star/collabry-minor-proj.git" }
      ]
    },
  ];

  const businessProjects = [
    {
      title: "The Body Shop – Business Consulting Case Study",
      description: "Conducted secondary research on India's $36B BPC market and evaluated strategies of top beauty brands.",
      points: [
        "Proposed a localized sub-brand strategy for Tier 2/3 cities, with digital-first and culturally tuned GTM.",
        "Outlined omnichannel expansion via e-commerce, influencer marketing, and experiential retail.",
        "Frameworks used: 4Ps, STP, Competitor Mapping."
      ],
      icon: <Sparkles className="w-7 h-7" />,
      timeline: "Competition: Indian Case Challenge 2025, IIT Kharagpur",
      documents: [
        { label: "View Case Deck", url: "https://drive.google.com/file/d/1U4uy9E36Z-OV3k6DKZFEjAO2xwbXtLhK/view?usp=sharing" }
      ]
    },
    {
      title: "PISTARA – Clean Beauty GTM Strategy",
      description: "Developed a go-to-market strategy for a clean beauty startup leveraging a pistachio-based hydration mist with a zero-waste business model and sustainability-led positioning.",
      points: [
        "Developed go-to-market strategy for a clean beauty startup using a pistachio-based hydration mist and zero-waste business model.",
        "Designed a hybrid D2C + B2B revenue model with refill stations, byproduct monetization, and vending machine placement.",
        "Crafted pricing (₹499-599), launch roadmap, and sustainability-led brand positioning targeting Gen Z and eco-conscious buyers."
      ],
      icon: <Leaf className="w-7 h-7" />,
      timeline: "Competition: ConsultXpert 2025, Shri Ram College of Commerce",
      documents: [
        { label: "View Case Deck", url: "https://drive.google.com/file/d/1SIagaQUK_D2O7lhQo-tZ3K-v1T5YQK3g/view?usp=sharing" }
      ]
    },
    {
      title: "SwiftStyle",
      description: "Conducted market research and designed a web prototype for AI-based personal styling platform. Surveyed 40+ users to validate demand for affordable styling solutions, designed web prototype and investor-facing assets, created pitch deck, product mockup, and poster. Positioned for Gen Z users and working professionals.",
      icon: <Shirt className="w-7 h-7" />,
      timeline: "College Project - Entrepreneurship Course",
      documents: [
        { label: "View Poster", url: "https://drive.google.com/file/d/1v7mO5W4qNIOAdxLsh3eGnJUs7ThOvJ08/view?usp=sharing" }
      ]
    },
    {
      title: "Open Secret",
      points: [
        "Product thinking case sample focused on reducing user confusion in the nutrition category.",
        "Identified key hesitation points around plant protein and proposed low-risk messaging and UX experiments to improve clarity and trust for first-time users."
      ],
      icon: <Apple className="w-7 h-7" />,
      timeline: "Work sample made for Product Management Internship Application",
      documents: [
        { label: "View PDF", url: "https://drive.google.com/file/d/1MxpKLwuDqwNoi_GjSTrX9k2MXiTijMzo/view?usp=sharing" }
      ]
    },
    {
      title: "AI Fitness Coach — MVP PRD (10-Day Build)",
      points: [
        "Defined user personas, core flows, success metrics, and a tightly scoped 10-day MVP plan focused on habit-building and guided workouts without a physical trainer.",
      ],
      icon: <Dumbbell className="w-7 h-7" />,
      timeline: "Assignment for Product Management Internship Application",
      documents: [
        { label: "View PDF", url: "https://drive.google.com/file/d/1IHUtTVPsQd5zf_4UBlABEbTe2WizR7pI/view?usp=drive_link" }
      ]
    },
    {
      title: "Vinca Wealth",
      points: [
        "Proposed a premium product feature for a fintech wealth platform focused on portfolio–risk alignment.",
        "Identified investor pain points and designed a compliant, monetisable decision-support tool with clear validation, pricing, and go-to-market plans."
      ],
      icon: <TrendingUp className="w-7 h-7" />,
      timeline: "Assignment for Product Management Internship Application",
      documents: [
        { label: "View PDF", url: "https://drive.google.com/file/d/1mdnOYv9FcdLiHpPBFelyKfQxlSGzboxy/view?usp=drive_link" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background scroll-mt-16 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--mahogany)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="icon-container w-16 h-16 animate-glow-pulse">
              <ScrollText className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-mahogany mb-3 text-shadow-elegant">
            CHAPTER 2
          </h2>
          <p className="font-garamond text-leather/80 italic text-2xl md:text-3xl">Projects</p>
          <div className="section-divider mt-8" />
        </div>

        {/* Technical Projects */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="icon-container w-12 h-12">
              <Code className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-mahogany">Technical Projects</h3>
            <div className="flex-grow h-px bg-gradient-to-r from-gold/30 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalProjects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Product/Business Projects */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="icon-container w-12 h-12">
              <Briefcase className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-mahogany">Product / Business Projects</h3>
            <div className="flex-grow h-px bg-gradient-to-r from-gold/30 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {businessProjects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
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
