import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Shared";

export function Hero() {
  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  const featureStrip = [
    {
      id: "01 // MENTAL",
      title: "PHAT",
      desc: "O Botão de Emergência. Interrompe loops mentais.",
    },
    {
      id: "02 // ABUNDÂNCIA",
      title: "SHREEM",
      desc: "Magnetismo e prosperidade. Fluxo financeiro.",
    },
    {
      id: "03 // PRESENÇA",
      title: "SO HUM",
      desc: "Silenciamento. A mente ancorada no agora.",
    },
    {
      id: "04 // CURA",
      title: "RA MA DA SA",
      desc: "Equilíbrio emocional e regeneração profunda.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-bg-dark">
      {/* Background Glow Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 168, 76, 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Editorial Rail Labels */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 uppercase text-[9px] tracking-[0.6em] opacity-20 whitespace-nowrap hidden lg:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Digital Product • Ritual Experience • Frequency Protocol
      </div>
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 uppercase text-[9px] tracking-[0.6em] opacity-20 whitespace-nowrap hidden lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Ancestral Wisdom • Modern Interface • Est. MMXXIV
      </div>

      <div className="flex-1 flex flex-col items-center justify-center container mx-auto px-6 relative z-10 text-center pb-20">
        {/* Decorative Frame */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <svg
            width="800"
            height="800"
            viewBox="0 0 100 100"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.08"
          >
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="35" />
            <path d="M50 5 L50 95 M5 50 L95 50" />
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              transform="rotate(45 50 50)"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 relative"
        >
          <div className="space-y-6">
            <span className="inline-block text-[10px] md:text-[11px] font-sans tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold-primary font-bold animate-pulse">
              TECNOLOGIA ANCESTRAL • REPROGRAMAÇÃO DE FREQUÊNCIA
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-marcellus leading-[1.2] md:leading-[1.1] max-w-5xl mx-auto font-light px-4 md:px-0">
              21 Mantras Ancestrais para <br className="hidden md:block" />
              <span className="italic gold-gradient-text opacity-90">
                Reprogramar sua Frequência
              </span>
            </h1>
            <p className="text-text-secondary text-base md:text-xl max-w-2xl mx-auto font-sans font-light leading-relaxed px-6 md:px-0">
              Um protocolo prático de ativação sonora criado para reduzir o
              ruído mental, restaurar energia interior e alinhar sua frequência
              através do poder do som.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 pt-4 md:pt-8">
            <Button
              onClick={scrollToOffer}
              className="scale-100 md:scale-110 shadow-[0_0_40px_rgba(201,168,76,0.2)] w-[90%] md:w-auto"
            >
              QUERO COMEÇAR OS 21 DIAS
            </Button>
            <p className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] text-text-secondary/40 px-6 text-center">
              Acesso imediato • PDF premium • Múltiplos dispositivos
            </p>
          </div>

          {/* Visualization Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="relative mt-12 md:mt-20 max-w-5xl mx-auto w-full px-4 md:px-0"
          >
            <div className="absolute inset-x-0 -top-20 h-full bg-gold-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Ebook Mockup */}
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative aspect-[3/4] bg-zinc-900 rounded-xl border border-gold-primary/20 p-2 cinematic-glow animate-float overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-tr from-black to-zinc-800/50" />
                  <div className="relative h-full flex flex-col items-center justify-center border border-gold-primary/10 rounded-lg p-6 md:p-8">
                    <svg
                      className="absolute w-3/4 h-3/4 opacity-10"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gold-primary"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gold-primary"
                      />
                      <path
                        d="M50 5 L50 95 M5 50 L95 50"
                        stroke="currentColor"
                        strokeWidth="0.2"
                        className="text-gold-primary"
                      />
                    </svg>
                    <h2 className="text-5xl md:text-6xl font-cinzel tracking-tighter gold-gradient-text z-10">
                      MANTRAS
                    </h2>
                    <p className="mt-4 text-[9px] md:text-[10px] tracking-[0.4em] font-sans text-gold-bright uppercase z-10">
                      Tecnologia Ancestral
                    </p>
                  </div>
                </div>
              </div>

              {/* Meditation Image */}
              <div className="lg:col-span-7 relative order-1 lg:order-2">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1577344718665-3e7c0c1ecf6b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cinematic Meditation"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-bg-dark via-transparent to-transparent hidden lg:block" />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-transparent to-transparent" />

                  {/* Floating Particle overlay for image */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold-primary/40 rounded-full blur-[1px] animate-pulse" />
                    <div
                      className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-gold-primary/20 rounded-full blur-[2px] animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Feature Strip */}
      <div className="relative z-20 border-t border-gold-primary/20 bg-bg-secondary/80 backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-primary/10">
          {featureStrip.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              className="p-6 md:p-8 flex flex-col justify-between group hover:bg-gold-primary/5 transition-colors h-44 md:h-48"
            >
              <span className="text-[9px] text-gold-primary font-mono tracking-[0.2em] uppercase opacity-60">
                {feature.id}
              </span>
              <div>
                <h4 className="text-gold-pale text-sm uppercase tracking-wider mb-2 font-marcellus">
                  {feature.title}
                </h4>
                <p className="text-[11px] text-text-secondary leading-relaxed font-light font-sans uppercase tracking-tight">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
