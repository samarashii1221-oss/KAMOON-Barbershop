/* =============================================================
   KAMOON ABOUT — Split-screen, barber portrait, editorial text
   ============================================================= */
import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-about-4rZHaTEKTSEJ4xEeLLyV5v.png";
const TOOLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-tools-gXjDwgTPg5mKJkgeLnCqFA.webp";

const highlights = [
  "Skilled barbers dedicated to precision and style",
  "Premium grooming products used in every service",
  "Modern techniques for contemporary men's styles",
  "Welcoming atmosphere in the heart of JVC",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-[oklch(0.10_0.005_285)] relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[oklch(0.72_0.12_75/0.15)] to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <div className="reveal relative">
            {/* Main image */}
            <div className="relative overflow-hidden">
              <img
                src={ABOUT_IMG}
                alt="Kamoon Barbershop barber"
                className="w-full object-cover h-[500px] lg:h-[620px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_285/0.4)] to-transparent" />
            </div>

            {/* Floating tools card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-10 w-48 lg:w-56 overflow-hidden border-2 border-[oklch(0.08_0.005_285)] shadow-2xl">
              <img
                src={TOOLS_IMG}
                alt="Barber tools"
                className="w-full h-32 lg:h-40 object-cover"
              />
              <div className="bg-[oklch(0.11_0.005_285)] px-4 py-3">
                <span className="section-label text-[10px]">Premium Tools</span>
                <p className="font-body text-xs text-[oklch(0.60_0.008_75)] mt-1">Only the finest instruments</p>
              </div>
            </div>

            {/* Gold accent corner */}
            <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[oklch(0.72_0.12_75)]" />
          </div>

          {/* Right: Text */}
          <div>
            <div className="reveal flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
              <span className="section-label">Our Story</span>
            </div>

            <h2 className="reveal font-display text-4xl lg:text-5xl font-bold text-[oklch(0.94_0.008_75)] leading-tight mb-6">
              Crafted for the <span className="text-gold">Modern Man</span>
            </h2>

            <div className="gold-rule mb-8 reveal" />

            <p className="reveal font-body text-[oklch(0.65_0.008_75)] leading-relaxed mb-6">
              Kamoon Barbershop is your go-to destination for men's grooming, where style meets skill. Located in the heart of Jumeirah Village Circle, our skilled barbers are dedicated to providing precise haircuts, classic shaves, and tailored grooming services that cater to modern men's styles.
            </p>

            <p className="reveal font-body text-[oklch(0.65_0.008_75)] leading-relaxed mb-8">
              We believe that a great haircut is more than just a trim — it's an experience. From the moment you walk in, you're treated to an atmosphere of focused craftsmanship, premium products, and genuine care for your appearance.
            </p>

            {/* Highlights */}
            <div className="reveal space-y-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-[oklch(0.65_0.008_75)]">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-4">
              {[
                { num: "7", label: "Days Open" },
                { num: "16h", label: "Daily Hours" },
                { num: "JVC", label: "Dubai" },
              ].map((stat) => (
                <div key={stat.label} className="border border-[oklch(0.22_0.005_285)] p-4 text-center hover:border-[oklch(0.72_0.12_75/0.4)] transition-colors duration-300">
                  <div className="font-label text-2xl text-gold">{stat.num}</div>
                  <div className="font-body text-xs text-[oklch(0.50_0.008_75)] mt-1 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
