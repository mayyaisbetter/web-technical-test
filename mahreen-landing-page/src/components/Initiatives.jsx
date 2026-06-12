import AnimatedContent from './animations/AnimatedContent';

export default function Initiatives() {
  // Saya tambahkan properti 'img' dengan placeholder Unsplash berkualitas tinggi
  const cards = [
    { 
      num: "01", category: "Kreativitas", title: "Digital Creative Hub", 
      desc: "Wadah pengembangan ide dan karya visual secara kolaboratif.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
    },
    { 
      num: "02", category: "Teknologi", title: "Tech for Impact", 
      desc: "Pemanfaatan teknologi tepat guna untuk memecahkan masalah sosial.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    { 
      num: "03", category: "Sosial", title: "Community Empowerment", 
      desc: "Kolaborasi aktif membangun masyarakat yang adaptif dan inklusif.",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="initiatives" className="py-32 px-8 md:px-24 max-w-7xl mx-auto overflow-hidden">
      <AnimatedContent className="flex justify-between items-end border-b border-neutral-200 dark:border-neutral-800 pb-8 mb-16">
        <h2 className="text-5xl font-serif">Aksi Nyata</h2>
        <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 hidden md:block">Karya & Inovasi</span>
      </AnimatedContent>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Kolom Kiri: Kartu Utama yang Besar */}
        <AnimatedContent delay={0.2} className="group flex flex-col h-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden cursor-pointer">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
             {/* Gambar dengan efek grayscale dan zoom saat hover */}
             <img src={cards[0].img} alt={cards[0].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
          </div>
          <div className="p-10 md:p-12 flex flex-col flex-grow justify-between bg-neutral-100 dark:bg-neutral-900">
            <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 block mb-6">{cards[0].category}</span>
            <div>
              <h3 className="text-3xl font-serif mb-4">{cards[0].title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{cards[0].desc}</p>
            </div>
            <span className="text-xs text-neutral-400 self-end font-serif italic mt-8">{cards[0].num}</span>
          </div>
        </AnimatedContent>

        {/* Kolom Kanan: 2 Kartu Bertumpuk dengan Thumbnail di Samping */}
        <div className="flex flex-col gap-12 lg:gap-16 justify-center">
          {[cards[1], cards[2]].map((card, i) => (
            <AnimatedContent key={card.num} delay={0.4 + (i * 0.2)} className="group cursor-pointer flex flex-col sm:flex-row gap-6 lg:gap-8 items-start">
              <div className="relative w-full sm:w-48 aspect-[3/2] sm:aspect-square overflow-hidden shrink-0">
                 {/* Gambar Thumbnail untuk kartu kecil */}
                 <img src={card.img} alt={card.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col h-full justify-center py-2">
                <div className="flex items-center gap-4 mb-3 lg:mb-4">
                  <span className="text-xs text-neutral-400 font-serif italic">{card.num}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">{card.category}</span>
                </div>
                <h3 className="text-2xl font-serif mb-2 lg:mb-3 group-hover:translate-x-2 transition-transform duration-300">{card.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">{card.desc}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
        
      </div>
    </section>
  );
}