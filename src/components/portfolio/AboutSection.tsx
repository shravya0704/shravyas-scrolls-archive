import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-12 h-12 text-primary" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Personal Codex
          </h2>
          <p className="font-garamond text-xl text-muted-foreground italic">
            Chronicles of curiosity and strategic thinking
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 shadow-scroll hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-cinzel text-2xl flex items-center gap-3">
                <Star className="w-6 h-6 text-primary" />
                Chapter I: Origins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-lora text-lg leading-relaxed text-card-foreground">
                In a world of noise, I find meaning in structure. Whether it's decoding product-market fit 
                or crafting a pitch for an early-stage idea, I enjoy bringing strategy, research, and 
                storytelling together. My journey spans across AI, market research, and startup ideation, 
                where I've learned to transform complex problems into clear, actionable narratives.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-scroll hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-cinzel text-2xl flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-garamond text-xl font-semibold text-card-foreground">
                    B.Tech in Computer Engineering
                  </h3>
                  <ul className="font-lora text-muted-foreground mt-2 space-y-1">
                    <li>• Honours in Data Science</li>
                    <li>• Specialization in Entrepreneurship</li>
                    <li>• Expected Graduation: 2027</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;