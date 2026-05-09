import { Zap, Target, Sparkles } from 'lucide-react';
import { SectionTitle, GlassCard } from '@/src/components/ui/Shared';

export function WhatIsMantras() {
  const cards = [
    {
      icon: <Zap className="w-8 h-8 text-gold-bright" />,
      title: "21 Códigos Sonoros",
      description: "Frequências específicas para ansiedade, foco, abundância, proteção e clareza."
    },
    {
      icon: <Target className="w-8 h-8 text-gold-bright" />,
      title: "Protocolo de 21 Dias",
      description: "Uma estrutura prática para incorporar os mantras na rotina moderna."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-bright" />,
      title: "Experiência Premium",
      description: "Design cinematográfico criado para transformar leitura em ritual."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Mais do que um ebook. Uma tecnologia sonora ancestral."
          subtitle="O MANTRAS foi desenvolvido como um protocolo moderno de ativação vibracional baseado em frequências ancestrais utilizadas há milhares de anos."
          eyebrow="A ESSÊNCIA"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {cards.map((card, index) => (
            <GlassCard key={card.title} delay={index * 0.2} className="flex flex-col items-center text-center space-y-8 py-12">
              <div className="p-5 rounded-full bg-gold-primary/5 border border-gold-primary/20 transition-transform duration-500 group-hover:scale-110">
                {card.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-marcellus text-gold-bright tracking-wide">{card.title}</h3>
                <p className="text-text-secondary font-sans font-light leading-relaxed px-2">
                  {card.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
