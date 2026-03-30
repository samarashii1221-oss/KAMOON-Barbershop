/* =============================================================
   KAMOON NAVBAR — Dark Forge / Industrial Luxury
   Sticky header that transforms on scroll, gold accents
   ============================================================= */
import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.08_0.005_285/0.97)] backdrop-blur-md border-b border-[oklch(0.22_0.005_285)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 border border-[oklch(0.72_0.12_75)] flex items-center justify-center group-hover:bg-[oklch(0.72_0.12_75)] transition-all duration-300">
                <Scissors size={16} className="text-gold group-hover:text-[oklch(0.08_0.005_285)] transition-colors duration-300" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-label text-xl text-[oklch(0.94_0.008_75)] tracking-widest">KAMOON</span>
                <span className="font-body text-[10px] text-[oklch(0.72_0.12_75)] tracking-[0.25em] uppercase">Barbershop</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-body text-sm font-medium text-[oklch(0.70_0.008_75)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300 tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[oklch(0.72_0.12_75)] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href="tel:0586691339"
                className="hidden lg:inline-flex btn-gold text-xs py-2.5 px-5"
              >
                <span>Book Now</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center border border-[oklch(0.22_0.005_285)] text-[oklch(0.94_0.008_75)] hover:border-[oklch(0.72_0.12_75)] hover:text-[oklch(0.72_0.12_75)] transition-all duration-300"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[oklch(0.08_0.005_285/0.98)] backdrop-blur-lg flex flex-col items-center justify-center animate-slide-down lg:hidden">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-label text-3xl text-[oklch(0.94_0.008_75)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300 tracking-widest"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0586691339"
              className="btn-gold mt-4 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              <span>Book Now — 058 669 1339</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
