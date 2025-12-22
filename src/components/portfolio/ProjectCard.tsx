import { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

interface DocumentLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  timeline?: string;
  documents?: DocumentLink[];
  points?: string[];
}

const ProjectCard = ({ title, description, icon, timeline, documents, points }: ProjectCardProps) => {
  return (
    <div className="glass-card hover-card-sleek p-8 h-full flex flex-col group">
      {/* Icon */}
      <div className="flex items-center justify-center mb-6">
        <div className="icon-container w-16 h-16 group-hover:scale-110 transition-all duration-500">
          <span className="text-crimson">{icon}</span>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="font-cinzel text-xl md:text-2xl font-bold text-mahogany mb-3 text-center leading-tight">
        {title}
      </h3>
      
      {/* Timeline */}
      {timeline && (
        <p className="font-inter text-bronze/80 text-sm mb-4 text-center tracking-wide uppercase">
          {timeline}
        </p>
      )}
      
      {/* Description */}
      {description && (
        <p className="font-garamond text-leather/90 text-base md:text-lg mb-4 leading-relaxed">
          {description}
        </p>
      )}

      {/* Points */}
      {points && points.length > 0 && (
        <ul className="font-garamond text-leather/90 text-base md:text-lg mb-4 leading-relaxed space-y-3 flex-grow">
          {points.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Document Links */}
      {documents && documents.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gold/10">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-crimson to-maroon hover:from-maroon hover:to-burgundy text-parchment px-4 py-2 rounded-lg text-sm font-inter font-medium transition-all duration-300 hover:shadow-lg hover:shadow-crimson/20 hover:-translate-y-0.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {doc.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
