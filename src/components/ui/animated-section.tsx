import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "scale" 
  | "blur";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animationStyles: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  "scale": {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  "blur": {
    initial: "opacity-0 blur-sm",
    animate: "opacity-100 blur-0",
  },
};

export const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? styles.animate : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  animation?: AnimationType;
  baseDelay?: number;
  staggerDelay?: number;
  duration?: number;
}

export const AnimatedItem = ({
  children,
  className,
  index = 0,
  animation = "fade-up",
  baseDelay = 0,
  staggerDelay = 100,
  duration = 600,
}: AnimatedItemProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const styles = animationStyles[animation];
  const delay = baseDelay + index * staggerDelay;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? styles.animate : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
