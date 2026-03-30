/* =============================================================
   KAMOON QUOTE SECTION — Full-width brand statement
   ============================================================= */
import { useEffect, useRef } from "react";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[oklch(0.72_0.12_75)] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, oklch(0.08 0.005 285) 0px, oklch(0.08 0.005 285) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal">
          <div className="font-label text-6xl lg:text-8xl text-[oklch(0.08_0.005_285/0.15)] leading-none mb-4">"</div>
          <blockquote className="font-display text-2xl lg:text-4xl font-bold text-[oklch(0.08_0.005_285)] leading-tight mb-6">
            Your Go-To Destination for Men's Grooming, where style meets skill.
          </blockquote>
          <div className="font-body text-sm text-[oklch(0.20_0.005_285)] tracking-widest uppercase mb-2">
            — Kamoon Barbershop
          </div>
          <div className="font-body text-xs text-[oklch(0.30_0.005_285)] tracking-wider">
            Jumeirah Village Circle · Dubai
          </div>
        </div>
      </div>
    </section>
  );
}
