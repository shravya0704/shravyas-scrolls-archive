import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scroll, Brain, Star, Zap, Code, Users } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "🔹 Founder's Office Intern",
      company: "WittingAI (Remote)",
      timeline: "Jun 2025 – Present",
      details: [
        "Wrote and structured pitch decks for client presentations, investor outreach, and government grant applications",
        "Conducted competitive benchmarking across 8+ AI startups; built positioning matrices to define whitespace opportunities",
        "Supported GTM strategies for new AI products by conducting trend research and user persona mapping"
      ]
    },
    {
      title: "🔹 Machine Learning Intern",
      company: "Claidroid Technologies, Mumbai",
      timeline: "Dec 2024 – Jan 2025",
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
      skills: ["Python", "C", "TensorFlow", "Keras", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: ["Business Communication", "Content Writing", "Presentation Design", "Case Solving", "Stakeholder Mapping"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Scroll className="w-12 h-12 text-primary" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-4">
            Guild Records
          </h2>
          <p className="font-garamond text-xl text-muted-foreground italic">
            Chronicles of professional endeavors and mastered arts
          </p>
        </div>

        {/* Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-cinzel text-2xl font-semibold text-foreground mb-8 text-center">
            Professional Chronicles
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-scroll hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-cinzel text-xl text-card-foreground">
                    {exp.title}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-garamond text-lg text-primary">{exp.company}</span>
                    <span className="font-garamond text-muted-foreground italic">{exp.timeline}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="font-lora text-card-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-cinzel text-2xl font-semibold text-foreground mb-8 text-center">
            Mastered Arts & Spells
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-scroll hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="font-cinzel text-lg flex items-center gap-2 text-card-foreground">
                    <span className="text-primary">{category.icon}</span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="font-garamond text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;