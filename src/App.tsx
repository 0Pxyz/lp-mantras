import { Hero } from "@/src/components/sections/Hero";
import { Problem } from "@/src/components/sections/Problem";
import { WhatIsMantras } from "@/src/components/sections/WhatIsMantras";
import { Benefits } from "@/src/components/sections/Benefits";
import { Showcase } from "@/src/components/sections/Showcase";
import { BeliefBreaker } from "@/src/components/sections/BeliefBreaker";
import { PremiumExperience } from "@/src/components/sections/PremiumExperience";
import { Offer } from "@/src/components/sections/Offer";
import { Guarantee } from "@/src/components/sections/Guarantee";
import { Footer } from "@/src/components/sections/Footer";
import { FloatingParticles } from "@/src/components/ui/FloatingParticles";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Analytics } from "@vercel/analytics/next";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="relative min-h-screen">
      <FloatingParticles />
      <Analytics />
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-dark/90 backdrop-blur-md py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-8 h-8 border border-gold-primary rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
              <div className="w-4 h-4 border border-gold-primary rotate-45 transform transition-all duration-500 group-hover:scale-110"></div>
            </div>
            <span className="font-marcellus text-xl tracking-[0.3em] font-light uppercase text-text-primary">
              Mantras
            </span>
          </div>

          {/* Desktop Nav */}

          <div className="hidden md:block lg:w-48 text-right text-[9px] tracking-[0.4em] uppercase text-text-secondary opacity-30 font-sans pointer-events-none">
            Orações Decretos Citações e Mantras Poderosos
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gold-primary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-bg-secondary border-b border-gold-primary/10 overflow-hidden"
            ></motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="hero">
        <Hero />
      </section>
      <section id="o-problema">
        <Problem />
      </section>
      <section id="o-que-e">
        <WhatIsMantras />
      </section>
      <section id="beneficios">
        <Benefits />
      </section>
      <section id="mantras">
        <Showcase />
      </section>
      <section id="belief-breaker">
        <BeliefBreaker />
      </section>
      <section id="premium-experience">
        <PremiumExperience />
      </section>
      <section id="oferta">
        <Offer />
      </section>
      <section id="garantia">
        <Guarantee />
      </section>
      <Footer />
    </main>
  );
}
