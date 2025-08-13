import { Scroll, Star, Zap, Code, Users } from "lucide-react";
const ExperienceSection = () => {
  const experiences = [{
    title: "🔹 Founder's Office Intern",
    company: "WittingAI (Remote)",
    timeline: "Jun 2025 – Present",
    details: ["Wrote and structured pitch decks for client presentations, investor outreach, and government grant applications", "Conducted competitive benchmarking across 8+ AI startups; built positioning matrices to define whitespace opportunities", "Supported GTM strategies for new AI products by conducting trend research and user persona mapping"]
  }, {
    title: "🔹 Machine Learning Intern",
    company: "Claidroid Technologies, Mumbai",
    timeline: "Dec 2024 – Jan 2025",
    details: ["Developed a deep learning image classifier using MobileNetV2 via transfer learning on the CIFAR-100 dataset", "Achieved 75% validation accuracy on over 100 image categories", "Tech Stack: Python, TensorFlow, Keras"]
  }];
  const skillCategories = [{
    category: "Product & Strategy",
    icon: <Star className="w-5 h-5" />,
    skills: ["MVP Planning", "Roadmapping", "A/B Testing", "Positioning Maps", "Competitive Benchmarking", "User Personas", "Lean Six Sigma"]
  }, {
    category: "Tools",
    icon: <Zap className="w-5 h-5" />,
    skills: ["Figma", "Canva", "GitHub", "SurveyMonkey", "Google Workspace", "Google Colab"]
  }, {
    category: "AI & Development",
    icon: <Code className="w-5 h-5" />,
    skills: ["Python", "C", "TensorFlow", "Keras", "HTML", "CSS", "JavaScript","MERN Stack","AI Tools"]
  }, {
    category: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: ["Business Communication", "Content Writing", "Presentation Design", "Case Solving", "Stakeholder Mapping"]
  }];
  return <section id="experience" className="py-20 bg-gradient-to-b from-crimson/10 to-maroon/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Scroll className="w-12 h-12 text-gold animate-glow" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mahogany mb-4">CHAPTER 3</h2>
          <p className="font-garamond text-leather italic text-2xl">Work Experience</p>
        </div>

        {/* Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          
          <div className="space-y-6">
            {experiences.map((exp, index) => <div key={index} className="bg-gradient-scroll rounded-lg p-6 shadow-deep border border-leather/20 hover:shadow-glow transition-all duration-300">
                <h3 className="font-cinzel text-xl font-bold text-crimson mb-2">{exp.title}</h3>
                <p className="font-garamond text-gold font-semibold mb-2">{exp.company} • {exp.timeline}</p>
                <ul className="space-y-2">
                  {exp.details.map((detail, detailIndex) => <li key={detailIndex} className="font-garamond text-leather flex items-start gap-2">
                      <span className="text-amber mt-2 flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-4xl mx-auto bg-gradient-scroll rounded-lg p-8 shadow-deep border border-leather/20 mt-12">
          <h3 className="font-cinzel text-2xl font-bold text-crimson mb-6 text-center flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-gold" />
            Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => <div key={index} className="bg-gradient-to-r from-bronze/10 to-mahogany/10 rounded-lg p-4 border border-caramel/20">
                <h4 className="font-cinzel font-bold text-gold mb-2 flex items-center gap-2">
                  <span className="text-amber">{category.icon}</span>
                  {category.category}
                </h4>
                <p className="font-garamond text-leather text-sm">{category.skills.join(", ")}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;
