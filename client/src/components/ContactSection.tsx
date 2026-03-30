/* =============================================================
   KAMOON CONTACT — Full-width CTA with phone, social, address
   ============================================================= */
import { useEffect, useRef } from "react";
import { Phone, Instagram, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";

const TOOLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663420148555/n9G7SEkzQ3muhyAqiWHQSJ/kamoon-tools-gXjDwgTPg5mKJkgeLnCqFA.webp";

export default function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="relative overflow-hidden">
      {/* Full-bleed CTA banner */}
      <div className="relative py-24 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={TOOLS_IMG} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[oklch(0.08_0.005_285/0.92)]" />
        </div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/0.5)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/0.5)] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
            <span className="section-label">Ready to Look Sharp?</span>
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
          </div>

          <h2 className="reveal font-display text-5xl lg:text-7xl xl:text-8xl font-black text-[oklch(0.94_0.008_75)] leading-tight mb-4">
            BOOK YOUR
          </h2>
          <h2 className="reveal font-display text-5xl lg:text-7xl xl:text-8xl font-black text-gold leading-tight mb-10">
            APPOINTMENT
          </h2>

          <p className="reveal font-body text-[oklch(0.60_0.008_75)] max-w-lg mx-auto mb-10 text-sm leading-relaxed">
            Walk-ins are always welcome. Give us a call to secure your preferred time slot and experience the Kamoon difference.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:0586691339" className="btn-gold text-base py-4 px-8 w-full sm:w-auto justify-center">
              <Phone size={16} />
              <span>058 669 1339</span>
            </a>
            <a
              href="https://wa.me/971586691339"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-base py-4 px-8 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-base py-4 px-8 w-full sm:w-auto justify-center"
            >
              <Instagram size={16} />
              <span>Follow Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[oklch(0.06_0.005_285)] border-t border-[oklch(0.15_0.005_285)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border border-[oklch(0.72_0.12_75)] flex items-center justify-center">
                  <span className="font-label text-gold text-xs">K</span>
                </div>
                <div>
                  <div className="font-label text-lg text-[oklch(0.94_0.008_75)] tracking-widest">KAMOON</div>
                  <div className="font-body text-[10px] text-gold tracking-[0.2em] uppercase">Barbershop</div>
                </div>
              </div>
              <p className="font-body text-xs text-[oklch(0.45_0.008_75)] leading-relaxed max-w-xs">
                Your go-to destination for men's grooming in Jumeirah Village Circle, Dubai. Where style meets skill.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-label text-sm tracking-widest text-[oklch(0.94_0.008_75)] mb-4">QUICK LINKS</h4>
              <div className="space-y-2">
                {["Services", "About", "Gallery", "Hours", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block font-body text-sm text-[oklch(0.45_0.008_75)] hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-label text-sm tracking-widest text-[oklch(0.94_0.008_75)] mb-4">CONTACT</h4>
              <div className="space-y-3">
                <a href="tel:0586691339" className="flex items-center gap-2 font-body text-sm text-[oklch(0.45_0.008_75)] hover:text-gold transition-colors duration-300">
                  <Phone size={13} />
                  058 669 1339
                </a>
                <div className="flex items-start gap-2 font-body text-sm text-[oklch(0.45_0.008_75)]">
                  <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                  <span>Taraf 1 Residence, 20 Street,<br />JVC, Dubai, UAE</span>
                </div>
                <a
                  href="https://wa.me/971586691339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-[oklch(0.45_0.008_75)] hover:text-gold transition-colors duration-300"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                  <ArrowUpRight size={11} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-[oklch(0.45_0.008_75)] hover:text-gold transition-colors duration-300"
                >
                  <Instagram size={13} />
                  Instagram
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>

          <div className="gold-rule mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-[oklch(0.35_0.008_75)]">
              © {new Date().getFullYear()} Kamoon Barbershop. All rights reserved.
            </p>
            <p className="font-body text-xs text-[oklch(0.35_0.008_75)]">
              Jumeirah Village Circle · Dubai · UAE
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
