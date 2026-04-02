import { useState, useEffect } from 'react';

const navLinks = [
  { label: '会社概要', href: '#about' },
  { label: 'サービス', href: '#services' },
  { label: 'お問い合わせ', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500">
            <i className={`ri-compass-3-line text-white text-base`}></i>
          </div>
          <span className={`font-bold text-base md:text-lg tracking-wide whitespace-nowrap ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            株式会社北ノ将
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap hover:text-amber-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-line-fill text-base"></i>
            LINEで相談
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="text-gray-700 text-sm font-medium py-2 border-b border-gray-50 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-5 py-3 rounded-full cursor-pointer whitespace-nowrap"
          >
            <i className="ri-line-fill text-base"></i>
            LINEで相談する
          </a>
        </div>
      )}
    </header>
  );
}
