import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            <span className="italic text-neutral-500">Membangun</span><br />
            Masa Depan.
          </h2>
          <div className="w-16 h-[1px] bg-neutral-300 dark:bg-neutral-700 mb-6"></div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">Visi & Misi</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 lg:pl-12 flex flex-col gap-8 text-neutral-600 dark:text-neutral-400"
        >
          <p className="text-lg leading-relaxed">
            Mahreen Indonesia adalah wadah bagi pemuda Indonesia untuk menciptakan dampak sosial positif melalui kreativitas dan teknologi. Kami percaya bahwa inovasi sejati lahir dari perpaduan antara kearifan lokal dan pemikiran global yang progresif.
          </p>
          <p className="text-sm leading-relaxed pl-8 border-l border-neutral-200 dark:border-neutral-800">
            Kami memfasilitasi kolaborasi lintas disiplin, mendorong pemuda untuk keluar dari zona nyaman dan mengeksplorasi solusi inovatif untuk tantangan sosial masa kini.
          </p>
        </motion.div>
      </div>
    </section>
  );
}