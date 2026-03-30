/* =============================================================
   KAMOON HOURS & LOCATION — Split layout with hours table and map
   ============================================================= */
import { useEffect, useRef } from "react";
import { Clock, MapPin, Phone, Navigation } from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM – 1:00 AM" },
  { day: "Tuesday", time: "9:00 AM – 1:00 AM" },
  { day: "Wednesday", time: "9:00 AM – 1:00 AM" },
  { day: "Thursday", time: "9:00 AM – 1:00 AM" },
  { day: "Friday", time: "9:00 AM – 1:00 AM" },
  { day: "Saturday", time: "9:00 AM – 1:00 AM" },
  { day: "Sunday", time: "9:00 AM – 1:00 AM" },
];

function getCurrentDay() {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
}

function isCurrentlyOpen() {
  const now = new Date();
  const hour = now.getHours();
  // Open 9 AM to 1 AM next day (9 to 25 in 24h)
  return hour >= 9 || hour < 1;
}

export default function HoursLocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const today = getCurrentDay();
  const open = isCurrentlyOpen();

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
    <section id="hours" ref={sectionRef} className="py-24 lg:py-32 bg-[oklch(0.10_0.005_285)] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/0.4)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
            <span className="section-label">Find Us</span>
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-[oklch(0.94_0.008_75)]">
            Hours & <span className="text-gold">Location</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Hours */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <Clock size={18} className="text-gold" />
              <h3 className="font-display text-2xl text-[oklch(0.94_0.008_75)]">Opening Hours</h3>
              <div className={`ml-auto flex items-center gap-2 px-3 py-1 border ${open ? "border-emerald-500/40 bg-emerald-500/10" : "border-red-500/40 bg-red-500/10"}`}>
                <div className={`w-2 h-2 rounded-full ${open ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
                <span className={`font-label text-xs tracking-widest ${open ? "text-emerald-400" : "text-red-400"}`}>
                  {open ? "OPEN NOW" : "CLOSED"}
                </span>
              </div>
            </div>

            <div className="space-y-0 border border-[oklch(0.22_0.005_285)]">
              {hours.map((item, i) => {
                const isToday = item.day === today;
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between px-5 py-4 border-b border-[oklch(0.22_0.005_285)] last:border-0 transition-colors duration-200 ${
                      isToday
                        ? "bg-[oklch(0.72_0.12_75/0.08)] border-l-2 border-l-[oklch(0.72_0.12_75)]"
                        : "hover:bg-[oklch(0.12_0.005_285)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)]" />}
                      <span className={`font-body text-sm font-medium ${isToday ? "text-[oklch(0.94_0.008_75)]" : "text-[oklch(0.65_0.008_75)]"}`}>
                        {item.day}
                        {isToday && <span className="ml-2 font-label text-[10px] text-gold tracking-widest">TODAY</span>}
                      </span>
                    </div>
                    <span className={`font-body text-sm ${isToday ? "text-gold font-semibold" : "text-[oklch(0.55_0.008_75)]"}`}>
                      {item.time}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Phone CTA */}
            <div className="mt-8 p-6 border border-[oklch(0.22_0.005_285)] bg-[oklch(0.11_0.005_285)]">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={16} className="text-gold" />
                <span className="font-label text-sm tracking-widest text-[oklch(0.94_0.008_75)]">CALL TO BOOK</span>
              </div>
              <a
                href="tel:0586691339"
                className="font-display text-3xl text-gold hover:text-[oklch(0.82_0.10_75)] transition-colors duration-300 block"
              >
                058 669 1339
              </a>
              <p className="font-body text-xs text-[oklch(0.50_0.008_75)] mt-2">Walk-ins welcome · No appointment needed</p>
            </div>
          </div>

          {/* Location */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <MapPin size={18} className="text-gold" />
              <h3 className="font-display text-2xl text-[oklch(0.94_0.008_75)]">Our Location</h3>
            </div>

            {/* Map embed */}
            <div className="relative overflow-hidden mb-6" style={{ height: "320px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0!2d55.2076!3d25.0553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d4b5c3a1f2d%3A0x0!2sJumeirah+Village+Circle%2C+Dubai!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kamoon Barbershop Location"
              />
              <div className="absolute inset-0 pointer-events-none border border-[oklch(0.22_0.005_285)]" />
            </div>

            {/* Address card */}
            <div className="border border-[oklch(0.22_0.005_285)] bg-[oklch(0.11_0.005_285)] p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-[oklch(0.94_0.008_75)] font-medium mb-1">Taraf 1 Residence</p>
                  <p className="font-body text-sm text-[oklch(0.55_0.008_75)]">20 Street, Al Barsha South Fourth</p>
                  <p className="font-body text-sm text-[oklch(0.55_0.008_75)]">Jumeirah Village Circle, Dubai</p>
                  <p className="font-body text-sm text-[oklch(0.55_0.008_75)]">United Arab Emirates</p>
                </div>
              </div>
              <div className="gold-rule mb-4" />
              <a
                href="https://maps.google.com/?q=Kamoon+Barbershop+Jumeirah+Village+Circle+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold inline-flex items-center gap-2 text-xs py-2.5"
              >
                <Navigation size={12} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
