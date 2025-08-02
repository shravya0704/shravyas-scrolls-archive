import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="h-full shadow-scroll hover:shadow-glow transition-all duration-300 hover:scale-105 group">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="text-primary group-hover:animate-glow">
            {icon || <ScrollText className="w-6 h-6" />}
          </div>
          <div className="flex-1">
            <CardTitle className="font-cinzel text-xl text-card-foreground">
              {title}
            </CardTitle>
            {timeline && (
              <CardDescription className="font-garamond italic text-muted-foreground">
                {timeline}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-lora text-card-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 mb-4">
          {details.map((detail, index) => (
            <li key={index} className="font-lora text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="font-garamond text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;