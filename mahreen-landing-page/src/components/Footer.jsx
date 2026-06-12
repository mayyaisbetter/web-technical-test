import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-12 px-8 md:px-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none grid grid-cols-6 -z-10">
        {[...Array(6)].map((_, i) => <div key={i} className="border-r border-black dark:border-white h-full"></div>)}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-32"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 block mb-8">Bergabung Dalam Gerakan</span>
        <h2 className="text-6xl md:text-8xl font-serif mb-12">
          <span className="italic opacity-80">Mari</span> Berkolaborasi.
        </h2>
        <button className="px-8 py-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs tracking-widest uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
          Gabung Bersama Kami
        </button>
      </motion.div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800 pt-12 flex flex-col lg:flex-row justify-between gap-12">
        <div className="max-w-xs">
          <div className="font-serif text-xl italic font-semibold mb-6">M.</div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Memberdayakan kreativitas dan teknologi untuk masa depan bangsa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-xs">
          <div className="flex flex-col gap-4">
            <span className="tracking-[0.2em] uppercase text-neutral-400 mb-2 text-[10px]">Program</span>
            <a href="#" className="hover:text-neutral-500 transition">Tentang Kami</a>
            <a href="#" className="hover:text-neutral-500 transition">Aksi Nyata</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="tracking-[0.2em] uppercase text-neutral-400 mb-2 text-[10px]">Legal</span>
            <a href="#" className="hover:text-neutral-500 transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-neutral-500 transition">Syarat & Ketentuan</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="tracking-[0.2em] uppercase text-neutral-400 mb-2 text-[10px]">Terhubung</span>
            <a href="#" className="hover:text-neutral-500 transition">Instagram</a>
            <a href="#" className="hover:text-neutral-500 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 text-[9px] tracking-[0.2em] uppercase text-neutral-400">
        © 2026 MAHREEN INDONESIA. BERKARYA UNTUK BANGSA.
      </div>
    </footer>
  );
}