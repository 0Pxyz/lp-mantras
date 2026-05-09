import { motion } from 'motion/react';
import { SectionTitle } from '@/src/components/ui/Shared';

const mantras = [
  {
    name: "PHAT",
    subtitle: "O Botão de Emergência Mental",
    description: "Interrompe loops mentais, ansiedade repentina e excesso de pensamentos."
  },
  {
    name: "SHREEM",
    subtitle: "O Magneto da Abundância",
    description: "Associado à prosperidade, magnetismo e fluxo financeiro."
  },
  {
    name: "SO HUM",
    subtitle: "A Presença Pura",
    description: "Técnica ancestral para reduzir ansiedade e trazer a mente ao presente."
  },
  {
    name: "RA MA DA SA",
    subtitle: "Cura Universal",
    description: "Utilizado tradicionalmente para equilíbrio emocional e regeneração energética."
  }
];

export function Showcase() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Alguns dos códigos presentes no protocolo"
          eyebrow="DOWNLOADS VIBRACIONAIS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mantras.map((mantra, index) => (
            <motion.div
              key={mantra.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group relative p-10 md:p-12 rounded-xl bg-bg-dark border border-gold-primary/10 hover:border-gold-primary/40 transition-all duration-700 hover:shadow-[0_0_50px_rgba(201,168,76,0.1)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                 <span className="text-9xl font-cinzel font-bold text-gold-bright">{index + 1}</span>
              </div>
              
              <div className="relative space-y-6">
                <h3 className="text-5xl font-cinzel font-bold text-gold-bright tracking-widest group-hover:tracking-[0.1em] transition-all duration-700 origin-left">
                  {mantra.name}
                </h3>
                <h4 className="text-gold-pale/60 font-marcellus text-xs tracking-[0.3em] uppercase">
                  {mantra.subtitle}
                </h4>
                <p className="text-text-secondary font-sans font-light leading-relaxed max-w-sm text-sm">
                  {mantra.description}
                </p>
              </div>

              {/* Subtle line animation */}
              <div className="absolute bottom-4 left-10 right-10 h-px bg-linear-to-r from-transparent via-gold-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
