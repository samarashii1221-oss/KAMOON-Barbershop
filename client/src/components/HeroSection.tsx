/* =============================================================
   KAMOON HERO — Full-bleed dark luxury, Ken Burns bg, editorial text
   ============================================================= */
import { useEffect, useRef } from "react";
import { Phone, MapPin, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-hero-bg-SSF6QVnfMwev78PZNthVEU.webp";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".hero-anim").forEach((child, i) => {
            (child as HTMLElement).style.animationDelay = `${i * 0.15}s`;
            child.classList.add("animate-fade-up");
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Kamoon Barbershop interior"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.05_0.005_285/0.92)] via-[oklch(0.05_0.005_285/0.75)] to-[oklch(0.05_0.005_285/0.40)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/0.85)] via-transparent to-transparent" />
      </div>

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[oklch(0.72_0.12_75/0.3)] to-transparent hidden lg:block" style={{ right: "20%" }} />

      {/* Content */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32 lg:pb-40">
        <div className="max-w-3xl">
          {/* Section label */}
          <div className="hero-anim opacity-0 flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
            <span className="section-label">Dubai · JVC · Est. 2024</span>
          </div>

          {/* Main headline */}
          <h1 className="hero-anim opacity-0 font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] text-[oklch(0.94_0.008_75)] mb-2">
            WHERE
          </h1>
          <h1 className="hero-anim opacity-0 font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] text-[oklch(0.72_0.12_75)] mb-2">
            STYLE
          </h1>
          <h1 className="hero-anim opacity-0 font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] text-[oklch(0.94_0.008_75)] mb-8">
            MEETS SKILL
          </h1>

          {/* Tagline */}
          <p className="hero-anim opacity-0 font-body text-base lg:text-lg text-[oklch(0.75_0.008_75)] max-w-lg leading-relaxed mb-10">
            Your go-to destination for men's grooming in the heart of Jumeirah Village Circle. Precise cuts, classic shaves, and tailored grooming — crafted for the modern man.
          </p>

          {/* CTAs */}
          <div className="hero-anim opacity-0 flex flex-wrap gap-4 mb-12">
            <a href="tel:0586691339" className="btn-gold">
              <Phone size={14} />
              <span>Call to Book</span>
            </a>
            <button onClick={scrollToServices} className="btn-outline-gold">
              <span>Our Services</span>
            </button>
          </div>

          {/* Info strip */}
          <div className="hero-anim opacity-0 flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-[oklch(0.60_0.008_75)]">
              <MapPin size={14} className="text-[oklch(0.72_0.12_75)] flex-shrink-0" />
              <span className="font-body text-sm">Taraf 1 Residence, JVC, Dubai</span>
            </div>
            <div className="w-px h-4 bg-[oklch(0.30_0.005_285)] hidden sm:block" />
            <div className="flex items-center gap-2 text-[oklch(0.60_0.008_75)]">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-body text-sm">Open Daily · 9 AM – 1 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[oklch(0.50_0.008_75)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
      >
        <span className="font-label text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>

      {/* Stats bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block" style={{ paddingBottom: 0 }}>
        <div className="bg-[oklch(0.10_0.005_285/0.9)] backdrop-blur-sm border-t border-[oklch(0.22_0.005_285)]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-4 divide-x divide-[oklch(0.22_0.005_285)]">
              {[
                { num: "7", label: "Days a Week" },
                { num: "16+", label: "Hours Open Daily" },
                { num: "100%", label: "Satisfaction" },
                { num: "JVC", label: "Dubai Location" },
              ].map((stat) => (
                <div key={stat.label} className="px-8 py-4 flex items-center gap-4">
                  <span className="font-label text-2xl text-[oklch(0.72_0.12_75)]">{stat.num}</span>
                  <span className="font-body text-xs text-[oklch(0.55_0.008_75)] uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
