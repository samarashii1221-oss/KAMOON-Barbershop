/* =============================================================
   KAMOON GALLERY — Masonry-style grid with hover overlays
   ============================================================= */
import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

const REAL_HAIRCUT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-real-haircut_e26d757a.jpg";
const REAL_INTERIOR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-interior_9b1f9878.jpg";
const REAL_BARBER_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-customer-portrait_02d93d19.jpg";
const REAL_BARBER_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-customer-2_75c86674.jpg";

const galleryItems = [
  { src: REAL_HAIRCUT, label: "Precision Haircut", span: "lg:row-span-2" },
  { src: REAL_INTERIOR, label: "The Shop", span: "" },
  { src: REAL_BARBER_1, label: "Barber — Team", span: "" },
  { src: REAL_BARBER_2, label: "Barber — Team", span: "lg:row-span-2" },
];

export default function GallerySection() {
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
    <section id="gallery" ref={sectionRef} className="py-24 lg:py-32 bg-[oklch(0.08_0.005_285)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
              <span className="section-label">Visual Story</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-[oklch(0.94_0.008_75)]">
              The <span className="text-gold">Gallery</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2 self-start lg:self-auto"
          >
            <Instagram size={14} />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4" style={{ gridAutoRows: "220px" }}>
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden group cursor-pointer ${item.span}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[oklch(0.05_0.005_285/0)] group-hover:bg-[oklch(0.05_0.005_285/0.6)] transition-all duration-400" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div>
                  <div className="w-6 h-px bg-[oklch(0.72_0.12_75)] mb-2" />
                  <span className="font-label text-sm text-[oklch(0.94_0.008_75)] tracking-widest">{item.label}</span>
                </div>
              </div>
              {/* Gold corner accent on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-[oklch(0.72_0.12_75)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
