/* =============================================================
   KAMOON SERVICES — Staggered grid, service cards with gold accents
   ============================================================= */
import { useEffect, useRef } from "react";
import { Scissors, Zap, Star, Wind, Sparkles, Crown } from "lucide-react";

const HAIRCUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-service-haircut-HbLRDZh34kokMDo5KrgSes.webp";
const SHAVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-service-shave-JGs2Xap7PRspDp9onSKw8G.webp";

const services = [
  {
    id: "01",
    icon: Scissors,
    title: "Precision Haircut",
    description: "Expert scissor and clipper work tailored to your face shape and personal style. From classic cuts to modern fades.",
    tag: "Most Popular",
  },
  {
    id: "02",
    icon: Zap,
    title: "Skin Fade",
    description: "Seamless gradient fade from skin to length. Clean lines, sharp edges, zero compromise on precision.",
    tag: null,
  },
  {
    id: "03",
    icon: Star,
    title: "Classic Shave",
    description: "Hot towel preparation, premium shaving cream, and a straight razor finish. The ultimate grooming ritual.",
    tag: "Signature",
  },
  {
    id: "04",
    icon: Wind,
    title: "Beard Trim & Shape",
    description: "Sculpted beard lines and precise shaping to define your look. Clean edges, natural contours.",
    tag: null,
  },
  {
    id: "05",
    icon: Sparkles,
    title: "Hair Wash & Style",
    description: "Deep cleanse with premium products followed by professional blow-dry and styling to perfection.",
    tag: null,
  },
  {
    id: "06",
    icon: Crown,
    title: "Full Grooming Package",
    description: "The complete experience — haircut, beard trim, hot towel shave, and styling. The Kamoon signature treatment.",
    tag: "Premium",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-[oklch(0.08_0.005_285)] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.72 0.12 75) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
              <span className="section-label">What We Offer</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-[oklch(0.94_0.008_75)] leading-tight">
              Our <span className="text-gold">Services</span>
            </h2>
          </div>
          <p className="font-body text-[oklch(0.55_0.008_75)] max-w-md text-sm leading-relaxed lg:text-right">
            Every service is performed with precision tools, premium products, and the skill of experienced barbers dedicated to your look.
          </p>
        </div>

        {/* Featured images + services grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Featured image 1 */}
          <div className="reveal lg:row-span-2 relative overflow-hidden group">
            <img
              src={HAIRCUT_IMG}
              alt="Precision haircut service"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-0 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/0.8)] to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="section-label text-xs">Featured</span>
              <h3 className="font-display text-2xl text-[oklch(0.94_0.008_75)] mt-1">The Art of the Cut</h3>
            </div>
          </div>

          {/* Service cards — top row */}
          {services.slice(0, 2).map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="reveal service-card p-6 lg:p-8"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.12_75/0.4)] flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <span className="font-label text-xs text-[oklch(0.40_0.005_285)] tracking-widest">{service.id}</span>
                </div>
                {service.tag && (
                  <span className="inline-block font-label text-[10px] tracking-widest text-[oklch(0.08_0.005_285)] bg-[oklch(0.72_0.12_75)] px-2 py-0.5 mb-3">
                    {service.tag}
                  </span>
                )}
                <h3 className="font-display text-xl text-[oklch(0.94_0.008_75)] mb-3">{service.title}</h3>
                <p className="font-body text-sm text-[oklch(0.55_0.008_75)] leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Service cards — middle row */}
          {services.slice(2, 4).map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="reveal service-card p-6 lg:p-8"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.12_75/0.4)] flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <span className="font-label text-xs text-[oklch(0.40_0.005_285)] tracking-widest">{service.id}</span>
                </div>
                {service.tag && (
                  <span className="inline-block font-label text-[10px] tracking-widest text-[oklch(0.08_0.005_285)] bg-[oklch(0.72_0.12_75)] px-2 py-0.5 mb-3">
                    {service.tag}
                  </span>
                )}
                <h3 className="font-display text-xl text-[oklch(0.94_0.008_75)] mb-3">{service.title}</h3>
                <p className="font-body text-sm text-[oklch(0.55_0.008_75)] leading-relaxed">{service.description}</p>
              </div>
            );
          })}

          {/* Featured image 2 */}
          <div className="reveal relative overflow-hidden group">
            <img
              src={SHAVE_IMG}
              alt="Classic shave service"
              className="w-full h-full object-cover min-h-[280px] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/0.8)] to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="section-label text-xs">Classic</span>
              <h3 className="font-display text-2xl text-[oklch(0.94_0.008_75)] mt-1">The Perfect Shave</h3>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {services.slice(4, 6).map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="reveal service-card p-6 lg:p-8"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.12_75/0.4)] flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <span className="font-label text-xs text-[oklch(0.40_0.005_285)] tracking-widest">{service.id}</span>
                </div>
                {service.tag && (
                  <span className="inline-block font-label text-[10px] tracking-widest text-[oklch(0.08_0.005_285)] bg-[oklch(0.72_0.12_75)] px-2 py-0.5 mb-3">
                    {service.tag}
                  </span>
                )}
                <h3 className="font-display text-xl text-[oklch(0.94_0.008_75)] mb-3">{service.title}</h3>
                <p className="font-body text-sm text-[oklch(0.55_0.008_75)] leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <a href="tel:0586691339" className="btn-gold inline-flex">
            <span>Book Your Appointment — 058 669 1339</span>
          </a>
        </div>
      </div>
    </section>
  );
}
