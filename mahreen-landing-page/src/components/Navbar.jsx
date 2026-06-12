import { Sun, Moon } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
  return (
    <nav className={`fixed w-full top-0 z-50 px-8 py-6 flex justify-between items-center transition-colors duration-300 ${isDark ? 'bg-neutral-950/80 backdrop-blur-sm text-white/90' : 'bg-white/80 backdrop-blur-sm text-neutral-900'}`}>
      {/* Logo Placeholder */}
      <div className="font-serif text-xl italic font-semibold tracking-wider">
        M<span className="text-sm not-italic ml-1">Mahreen</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase">
        <a href="#about" className="hover:opacity-70 transition">Tentang Program</a>
        <a href="#initiatives" className="hover:opacity-70 transition">Aksi Nyata</a>
      </div>

      {/* Theme Toggle */}
      <button onClick={toggleTheme} className="hover:opacity-70 transition">
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </nav>
  );
}