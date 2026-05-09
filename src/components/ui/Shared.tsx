import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
}

export function Button({ children, className, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(201, 168, 76, 0.4)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative px-10 py-4 rounded-full font-sans font-semibold tracking-wider transition-all duration-300 uppercase text-sm",
        variant === 'primary' 
          ? "bg-gold-primary text-bg-dark hover:bg-gold-bright" 
          : "border border-gold-primary/50 text-gold-primary hover:bg-gold-primary/10",
        className
      )}
    >
      {children}
    </motion.button>
  );
}

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

export function GlassCard({ children, className, delay = 0, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        "glass-card p-8 rounded-xl border border-gold-primary/10 hover:border-gold-primary/30 transition-colors duration-500",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ 
  eyebrow, 
  title, 
  subtitle, 
  centered = true,
  className 
}: { 
  eyebrow?: string; 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 md:mb-16 space-y-4 md:space-y-6", centered && "text-center", className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 0.6, letterSpacing: '0.3em' }}
          transition={{ duration: 1 }}
          className="block text-[10px] md:text-xs font-sans uppercase font-bold text-gold-primary"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl lg:text-6xl font-marcellus leading-[1.2] md:leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed px-4 md:px-0"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
