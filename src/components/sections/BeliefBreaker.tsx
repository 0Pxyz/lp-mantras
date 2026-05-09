import { motion } from 'motion/react';
import { GlassCard } from '@/src/components/ui/Shared';

export function BeliefBreaker() {
  return (
    <section className="py-24 md:py-32 bg-bg-dark flex justify-center items-center">
      <div className="container mx-auto px-6">
        <GlassCard className="max-w-4xl mx-auto text-center py-16 px-12 space-y-8 !bg-gold-primary/5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-marcellus">Você não precisa ser “espiritual”.</h2>
            <div className="space-y-2 text-text-secondary text-lg md:text-xl font-sans font-light">
              <p>Não precisa meditar por horas.</p>
              <p>Não precisa seguir nenhuma religião.</p>
              <p>Não precisa acreditar cegamente em nada.</p>
            </div>
            
            <div className="pt-6">
               <p className="text-gold-bright font-cinzel text-3xl md:text-4xl uppercase tracking-widest">Basta praticar.</p>
            </div>

            <p className="max-w-2xl mx-auto text-text-secondary/80 font-sans font-light leading-relaxed pt-6 italic">
              Os mantras funcionam através de repetição, respiração, vibração e presença.
            </p>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
