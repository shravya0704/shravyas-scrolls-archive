import { Badge } from "@/components/ui/badge";
import { ScrollText } from "lucide-react";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string[];
  technologies?: string[];
  icon?: ReactNode;
  timeline?: string;
}

const ProjectCard = ({ title, description, details, technologies, icon, timeline }: ProjectCardProps) => {
  return (
    <div className="bg-gradient-scroll rounded-lg p-6 shadow-deep border border-leather/20 hover:shadow-glow transition-all duration-300 group h-full">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-mystical flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="text-mahogany text-xl">{icon || <ScrollText className="w-6 h-6" />}</span>
        </div>
      </div>
      <h3 className="font-cinzel text-xl font-bold text-crimson mb-2">{title}</h3>
      <p className="font-garamond text-leather mb-4 leading-relaxed">{description}</p>
      
      {timeline && (
        <p className="font-garamond italic text-bronze text-sm mb-4">{timeline}</p>
      )}

      <ul className="space-y-2 mb-4">
        {details.map((detail, index) => (
          <li key={index} className="font-garamond text-sm text-leather flex items-start gap-2">
            <span className="text-amber mt-1">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="inline-block bg-bronze/20 text-caramel px-3 py-1 rounded-full text-sm font-garamond border border-bronze/30">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;