import { Scroll, Star, Zap, Code, Users, Brain } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Founder's Office Intern",
      company: "WittingAI",
      location: "Remote",
      timeline: "Jun 2025 – Present",
      icon: <Brain className="w-5 h-5" />,
      details: [
        "Designed pitch decks for clients, investors, and government grants by combining market insights with product storytelling",
        "Conducted competitive benchmarking on 8+ AI startups; mapped modularity, use cases, features to build positioning maps.",
        "Researched market trends and supported the formulation of business strategies for AI-based products."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Claidroid Technologies",
      location: "",
      timeline: "Dec 2024 – Jan 2025",
      icon: <Code className="w-5 h-5" />,
      details: [
        "Developed a deep learning image classifier using MobileNetV2 via transfer learning on the CIFAR-100 dataset",
        "Achieved 75% validation accuracy on over 100 image categories",
        "Tech Stack: Python, TensorFlow, Keras"
      ]
    }
  ];

  const skillCategories = [
    {
      category: "Product & Strategy",
      icon: <Star className="w-5 h-5" />,
      skills: ["MVP Planning", "Roadmapping", "A/B Testing", "Positioning Maps", "Competitive Benchmarking", "User Personas", "Lean Six Sigma"]
    },
    {
      category: "Tools",
      icon: <Zap className="w-5 h-5" />,
      skills: ["Figma", "Canva", "GitHub", "SurveyMonkey", "Google Workspace", "Google Colab"]
    },
    {
      category: "AI & Development",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "C", "TensorFlow", "Keras", "HTML", "CSS", "JavaScript", "React", "MongoDB", "Express.js", "Node.js", "Supabase", "Vercel", "Render", "AI Tools"]
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: ["Business Communication", "Content Writing", "Presentation Design", "Case Solving", "Stakeholder Mapping"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-muted/20 via-background to-muted/20 scroll-mt-16 relative">
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
              <Scroll className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-mahogany mb-3 text-shadow-elegant">
            CHAPTER 3
          </h2>
          <p className="font-garamond text-leather/80 italic text-2xl md:text-3xl">Work Experience</p>
          <div className="section-divider mt-8" />
        </AnimatedSection>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedItem
              key={index}
              index={index}
              animation="fade-left"
              staggerDelay={200}
            >
              <div className="glass-card hover-card-sleek p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="icon-container w-12 h-12 flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-cinzel text-xl font-bold text-mahogany">{exp.title}</h3>
                    <p className="font-inter text-sm text-gold font-medium tracking-wide">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </p>
                    <p className="font-inter text-xs text-bronze/70 uppercase tracking-wider mt-1">
                      {exp.timeline}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 ml-16">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3 font-garamond text-leather/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Skills */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="icon-container w-12 h-12">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-mahogany">Skills</h3>
                <div className="flex-grow h-px bg-gradient-to-r from-gold/30 to-transparent" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <AnimatedItem
                    key={index}
                    index={index}
                    animation="scale"
                    baseDelay={200}
                    staggerDelay={100}
                  >
                    <div className="p-5 rounded-xl bg-gradient-to-r from-bronze/5 to-mahogany/5 border border-gold/10 transition-all duration-300 hover:border-gold/25 hover:shadow-card h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-gold">{category.icon}</span>
                        <h4 className="font-cinzel font-bold text-mahogany">{category.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIdx) => (
                          <span 
                            key={skillIdx}
                            className="px-3 py-1 text-sm font-inter text-leather/80 bg-background/50 rounded-full border border-gold/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
