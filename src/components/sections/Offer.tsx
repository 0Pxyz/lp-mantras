import { motion } from "motion/react";
import { Button, GlassCard } from "@/src/components/ui/Shared";
import { Check } from "lucide-react";

export function Offer() {
  const items = [
    "Ebook completo MANTRAS",
    "21 códigos de ativação",
    "Protocolo prático de utilização",
    "Guia rápido de repetição",
    "Acesso vitalício",
  ];

  const handleCTA = () => {
    window.open("https://pay.hotmart.com/X105758290Y", "_blank");
  };

  return (
    <section
      id="offer"
      className="py-24 md:py-32 relative overflow-hidden bg-bg-dark"
    >
      {/* Radial Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom, rgba(201, 168, 76, 0.3), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <GlassCard className="max-w-4xl mx-auto p-12 md:p-20 !bg-white/5 space-y-12 backdrop-blur-2xl">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-marcellus">
              Você recebe acesso imediato a:
            </h2>
            <div className="w-24 h-px bg-gold-primary/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-text-secondary font-sans font-light"
                >
                  <Check className="text-gold-primary w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col justify-center items-center md:items-end space-y-6">
              <div className="text-center md:text-right">
                <span className="text-text-secondary text-sm uppercase tracking-widest opacity-60">
                  Invista na sua frequência por
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-lg font-marcellus text-text-secondary">
                    €
                  </span>
                  <span className="text-7xl font-marcellus gold-gradient-text">
                    12,90
                  </span>
                </div>
                <p className="text-[10px] text-text-secondary/40 mt-1 uppercase tracking-widest font-sans">
                  Sem IVA — o valor final pode variar conforme o país
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col items-center gap-6">
            <Button
              onClick={handleCTA}
              className="w-full md:w-auto px-16 scale-110 !py-6 text-base"
            >
              QUERO ATIVAR MINHA FREQUÊNCIA
            </Button>
            <div className="flex items-center gap-8">
              <img
                src="/safecheckout.png"
                alt="Safe Checkout"
                className="h-9 opacity-20"
                referrerPolicy="no-referrer"
              />{" "}
              Checkout Seguro
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
