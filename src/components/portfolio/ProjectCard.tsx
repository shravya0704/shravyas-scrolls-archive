import { ReactNode } from "react";
import { FileText } from "lucide-react";

interface DocumentLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  timeline?: string;
  documents?: DocumentLink[];
}

const ProjectCard = ({ title, description, icon, timeline, documents }: ProjectCardProps) => {
  return (
    <div className="bg-gradient-scroll rounded-lg p-6 shadow-deep border border-leather/20 hover:shadow-glow transition-all duration-300 group h-full flex flex-col">
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-mystical flex items-center justify-center group-hover:scale-110 transition-transform">
          <span className="text-parchment text-2xl">{icon || <FileText className="w-8 h-8" />}</span>
        </div>
      </div>
      
      <h3 className="font-cinzel text-xl font-bold text-crimson mb-3 text-center">{title}</h3>
      
      {timeline && (
        <p className="font-garamond italic text-bronze text-sm mb-3 text-center">{timeline}</p>
      )}
      
      <p className="font-garamond text-leather mb-4 leading-relaxed flex-grow">{description}</p>

      {documents && documents.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-crimson hover:bg-burgundy text-parchment px-3 py-1.5 rounded text-sm font-garamond transition-colors duration-200"
            >
              {doc.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
