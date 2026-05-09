import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '@/src/components/ui/Shared';
import { motion } from 'motion/react';

export function Benefits() {
  const benefits = [
    "Mais silêncio mental",
    "Redução do excesso de pensamentos",
    "Mais presença e clareza emocional",
    "Melhor qualidade do sono",
    "Sensação de energia renovada",
    "Mais foco e direção"
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-dark">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="O objetivo não é acreditar. É sentir."
          eyebrow="BENEFÍCIOS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-gold-primary/20 transition-all duration-300 group"
            >
              <div className="p-2 rounded-full bg-gold-primary/10 text-gold-primary group-hover:scale-110 transition-transform">
                <CheckCircle2 size={20} />
              </div>
              <span className="font-sans font-light text-text-secondary group-hover:text-gold-bright transition-colors">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
