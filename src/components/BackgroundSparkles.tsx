import { useEffect, useMemo, useRef, useState } from "react";

// Subtle, site-wide golden sparkles that gently appear as the user scrolls.
// Fixed behind all content, pointer-events-none, and performance-friendly.
const BackgroundSparkles = () => {
  const [intensity, setIntensity] = useState(0); // 0 to 1
  const rafRef = useRef<number | null>(null);

  // Precompute sparkle positions once
  const sparkles = useMemo(() => {
    const count = 28; // keep subtle
    const arr = Array.from({ length: count }).map((_, i) => {
      // deterministic-ish positions
      const top = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 100;
      const left = Math.abs(Math.sin((i + 1) * 78.233)) * 100;
      const size = 2 + ((i * 7) % 2); // 2-3px
      const delay = (i % 10) * 0.35;
      return { top: `${top}%`, left: `${left}%`, size, delay };
    });
    return arr;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        // Map scroll to subtle opacity: 0.08 -> 0.35
        const t = Math.min(1, Math.max(0, y / 800));
        setIntensity(0.08 + t * 0.27);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Deep, elegant library gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-library opacity-95" />

      {/* Very subtle vignette to add depth */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,hsl(var(--maroon)/0.20)_0%,transparent_60%)]" />

      {/* Sparkles layer */}
      <div
        className="absolute inset-0"
        style={{ opacity: intensity }}
      >
        {sparkles.map((s, i) => (
          <div
            key={i}
            className={
              // use semantic colors; twinkle animation exists in theme
              "absolute rounded-full bg-gold shadow-[0_0_8px_hsl(var(--gold)/0.45)] animate-twinkle"
            }
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              opacity: 0.9,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSparkles;
