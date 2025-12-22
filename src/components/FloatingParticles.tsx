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

  useEffect(() => {
    // Minimal, elegant particles
    const initialParticles: Particle[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.2 + 0.05,
      speed: Math.random() * 0.2 + 0.05,
      color: Math.random() > 0.6 ? "gold" : "amber"
    }));
    
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        x: particle.x + Math.sin(Date.now() * 0.0005 + particle.id) * 0.3,
        ...(particle.y < -10 ? {
          y: window.innerHeight + 10,
          x: Math.random() * window.innerWidth
        } : {})
      })));
    };

    const interval = setInterval(animateParticles, 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            background: `hsl(var(--${particle.color}))`,
            filter: "blur(0.5px)",
            boxShadow: `0 0 ${particle.size * 2}px hsl(var(--${particle.color}) / 0.3)`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
