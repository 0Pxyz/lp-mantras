import { motion } from 'motion/react';
import { SectionTitle } from '@/src/components/ui/Shared';

export function PremiumExperience() {
  const points = [
    "Visual cinematográfico",
    "Composição ritualística moderna",
    "Leitura imersiva",
    "Tipografia premium",
    "Estrutura feita para desacelerar a mente"
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* CSS Mockup Variation */}
            <div className="relative aspect-square max-w-md mx-auto group">
               <div className="absolute inset-0 bg-gold-primary/10 blur-[80px] rounded-full group-hover:bg-gold-primary/20 transition-all duration-1000" />
               <div className="relative w-full h-full bg-zinc-900 border border-gold-primary/20 rounded-2xl p-6 shadow-2xl overflow-hidden animate-float">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 rounded-full -mr-16 -mt-16 blur-xl" />
                  <div className="h-full border border-gold-primary/10 rounded-xl flex flex-col justify-between p-8">
                     <span className="text-[10px] tracking-[0.4em] text-gold-bright/60 uppercase">Protocolo Ativo</span>
                     <div className="space-y-4">
                        <div className="w-12 h-px bg-gold-primary/40" />
                        <h3 className="text-4xl font-marcellus gold-gradient-text leading-tight">Uma nova forma de silenciar</h3>
                        <p className="text-xs text-text-secondary/60 font-sans leading-loose hidden sm:block">
                           Frequências sonoras que ressoam com a estrutura molecular da consciência...
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <SectionTitle 
              centered={false}
              title="Criado para ser uma experiência."
              eyebrow="RITUAL MODERNO"
              className="mb-10"
            />
            <ul className="space-y-6">
              {points.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-text-secondary font-sans font-light text-lg"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
