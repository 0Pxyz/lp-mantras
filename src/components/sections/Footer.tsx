import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Shared';

export function Footer() {
  const handleCTA = () => {
    window.open('https://pay.hotmart.com/X105758290Y', '_blank');
  };

  return (
    <footer className="relative py-32 bg-bg-dark overflow-hidden text-center">
      {/* Sacred Geometry Background (Simulated) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
         <div className="w-[800px] h-[800px] border border-gold-primary rounded-full flex items-center justify-center">
            <div className="w-[600px] h-[600px] border border-gold-primary rounded-full rotate-45 flex items-center justify-center">
               <div className="w-[400px] h-[400px] border border-gold-primary rounded-full" />
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-marcellus leading-tight">
              Durante milhares de anos, certas frequências foram preservadas por um motivo.
            </h2>
            <div className="space-y-4 text-text-secondary font-sans font-light text-lg md:text-xl">
              <p>Agora elas estão disponíveis de forma prática, moderna e acessível.</p>
              <p className="pt-4 text-text-primary italic">A pergunta é:</p>
              <p className="text-gold-bright font-cinzel text-2xl tracking-widest">
                Qual frequência você está alimentando todos os dias sem perceber?
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Button onClick={handleCTA} className="scale-125 px-12">
               COMEÇAR OS 21 DIAS AGORA
            </Button>
          </div>

          <div className="pt-24 opacity-40 text-[10px] uppercase font-sans tracking-[0.5em] flex flex-col items-center gap-4">
             <span className="text-gold-bright font-cinzel text-xl">MANTRAS</span>
             <p className="max-w-xs md:max-w-none leading-loose">
               © Orações Decretos Citações e Mantras Poderosos — Todos os direitos reservados.
             </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
