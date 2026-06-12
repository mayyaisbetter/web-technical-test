import { motion } from 'framer-motion';

export default function AuroraBg() {
  return (
    <div className="absolute top-0 right-0 w-full md:w-[70%] h-full overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.4, 0.7, 0.4] // Opacity dinamis
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-tr from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 blur-[80px] md:blur-[120px]"
      />
    </div>
  );
}