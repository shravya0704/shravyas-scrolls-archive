import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Create initial particles - reduced from 20 to 8
    const initialParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.5, // Smaller particles
      opacity: Math.random() * 0.3 + 0.1, // More subtle opacity
      speed: Math.random() * 0.3 + 0.1, // Slower movement
      color: Math.random() > 0.7 ? "gold" : Math.random() > 0.4 ? "amber" : "bronze"
    }));
    
    setParticles(initialParticles);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.5,
        // Reset particle when it goes off screen
        ...(particle.y < -10 ? {
          y: window.innerHeight + 10,
          x: Math.random() * window.innerWidth
        } : {})
      })));
    };

    const interval = setInterval(animateParticles, 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Subtle increase in particle intensity on scroll
  const particleIntensity = Math.min(1 + scrollY / 5000, 1.3);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-${particle.color} animate-twinkle`}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size * particleIntensity}px`,
            height: `${particle.size * particleIntensity}px`,
            opacity: particle.opacity * particleIntensity * 0.6, // More subtle
            animationDelay: `${particle.id * 0.3}s`, // Slower stagger
            filter: "blur(1px)", // More blur for softer look
            boxShadow: `0 0 ${particle.size}px currentColor`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;