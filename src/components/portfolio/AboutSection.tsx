import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Star } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-mahogany/10 to-burgundy/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-12 h-12 text-gold animate-glow" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mahogany mb-4">CHAPTER 1</h2>
          <p className="font-garamond text-leather italic text-2xl">
        </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-scroll rounded-lg p-8 shadow-deep border border-leather/20 mb-8 hover:shadow-glow transition-all duration-300">
            
            <p className="font-garamond text-lg text-leather leading-relaxed mb-6">In a world of noise, I find meaning in structure. Whether it's decoding product-market fit or crafting a pitch for an early-stage idea, I enjoy bringing strategy, research, technology and storytelling together. My journey spans across AI, product, and consulting, where I've learned to transform complex problems into clear, actionable narratives.</p>
          </div>

          <div className="bg-gradient-to-r from-bronze/10 to-mahogany/10 rounded-lg p-6 border border-caramel/20 shadow-deep hover:shadow-glow transition-all duration-300">
            <h4 className="font-cinzel text-xl font-bold text-gold mb-3 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-amber" />
              Education
            </h4>
            <ul className="space-y-2">
              <li className="font-garamond text-leather flex items-start gap-2">
                <span className="text-amber mt-1">•</span>
                <span><strong>B.Tech in Computer Engineering</strong></span>
              </li>
              <li className="font-garamond text-leather flex items-start gap-2">
                <span className="text-amber mt-1">•</span>
                <span>Honours in Data Science</span>
              </li>
              <li className="font-garamond text-leather flex items-start gap-2">
                <span className="text-amber mt-1">•</span>
                <span>Minor degree in Entrepreneurship</span>
              </li>
              <li className="font-garamond text-leather flex items-start gap-2">
                <span className="text-amber mt-1">•</span>
                <span>Expected Graduation: 2027</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;