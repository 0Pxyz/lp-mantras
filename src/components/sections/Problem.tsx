import { motion } from "motion/react";
import { SectionTitle } from "@/src/components/ui/Shared";

export function Problem() {
  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-bg-dark to-[#0E0E18] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <SectionTitle
              centered={false}
              title="Sua mente nunca desliga?"
              className="mb-8"
            />
            <div className="space-y-6 text-text-secondary text-lg font-sans font-light leading-relaxed">
              <p className="transition-all hover:text-text-primary">
                Pensamentos repetitivos.
              </p>
              <p className="transition-all hover:text-text-primary">
                Ansiedade silenciosa.
              </p>
              <p className="transition-all hover:text-text-primary">
                Excesso de estímulo.
              </p>
              <p className="transition-all hover:text-text-primary">
                Sensação constante de cansaço mental.
              </p>

              <div className="h-px w-20 bg-gold-primary/30 my-8" />

              <p>
                A maioria das pessoas tenta resolver isso apenas{" "}
                <span className="text-text-primary font-medium">
                  “pensando mais”
                </span>
                .
              </p>
              <p>Mas tradições ancestrais descobriram algo diferente:</p>
              <p className="text-gold-bright font-marcellus text-3xl italic mt-6 leading-tight">
                O som altera estados internos.
              </p>
              <p className="opacity-80">
                E certas frequências específicas podem reorganizar a forma como
                você sente, pensa e reage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-primary/5 blur-3xl rounded-full" />
            <img
              src="/problem.avif"
              alt="Cinematic Meditation"
              className="relative rounded-xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
