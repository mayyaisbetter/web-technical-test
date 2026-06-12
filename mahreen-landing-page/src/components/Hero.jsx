import { motion } from 'framer-motion';
import BlurText from './animations/BlurText';
import AuroraBg from './animations/AuroraBg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-8 md:px-24">
      <AuroraBg />

      <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase hidden lg:block origin-left">
        Berkarya Untuk Bangsa
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        <div className="flex flex-col justify-center mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-[1px] bg-neutral-900 dark:bg-neutral-100"></span>
            <span className="text-xs tracking-[0.2em] uppercase">Inisiatif Pemuda</span>
          </motion.div>
          
          <div className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8">
            <span className="italic opacity-80 block mb-2">Saatnya</span>
            <BlurText text="Anak Muda Berkarya" delay={0.15} />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="text-neutral-600 dark:text-neutral-400 max-w-md mb-12 text-sm leading-relaxed"
          >
            Memberdayakan kreativitas dan teknologi untuk masa depan bangsa. Sebuah gerakan kolaboratif menuju Indonesia progresif.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <a href="#about" className="px-8 py-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs tracking-widest uppercase hover:scale-105 transition-transform duration-300">
              Mulai Berkarya
            </a>
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase hidden sm:block">
              ID: MHRN-2026 • VOL: 01
            </span>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [-15, 15, -15] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex items-center justify-center pointer-events-none"
        >
          <img 
            src="/hero-3d.png" 
            alt="" 
            className="w-[80%] xl:w-[90%] drop-shadow-2xl opacity-90 mix-blend-normal"
          />
        </motion.div>
        
      </div>
    </section>
  );
}