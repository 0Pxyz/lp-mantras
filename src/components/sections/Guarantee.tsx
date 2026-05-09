import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-24 bg-bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="inline-block p-4 rounded-full bg-gold-primary/5 text-gold-primary mb-2">
            <ShieldCheck size={40} strokeWidth={1} />
          </div>
          <h2 className="text-3xl md:text-4xl font-marcellus">
            Garantia de 15 dias
          </h2>
          <p className="text-text-secondary font-sans font-light leading-relaxed text-lg">
            Leia, pratique e explore o material. Se sentir que não fez sentido
            para você, basta pedir reembolso dentro do prazo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
