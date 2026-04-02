export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-amber-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-400">
                <i className="ri-compass-3-line text-white text-base"></i>
              </div>
              <span className="font-black text-lg">株式会社北ノ将</span>
            </div>
            <p className="text-amber-200 text-sm leading-relaxed mb-4">
              北海道から全国へ元気を！<br />
              AIと伝統の融合で、新しい価値を創造します。
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-amber-300 tracking-widest uppercase">
              <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('#about'); }}>メニュー</a>
            </h4>
            <ul className="space-y-2">
              {[
                { label: '会社概要', href: '#about' },
                { label: 'サービス', href: '#services' },
                { label: 'お問い合わせ', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                    className="text-amber-200 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-amber-300 tracking-widest uppercase">
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}>コンタクト</a>
            </h4>
            <ul className="space-y-2 text-amber-200 text-sm">
              <li>070-8968-5619</li>
              <li>kitanosho0349@gmail.com</li>
            </ul>
            <a
              href="https://lin.ee/w5rqcyZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-green-500 hover:bg-green-400 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-line-fill text-base"></i>
              公式LINE
            </a>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-amber-300 text-xs">© 2024 株式会社北ノ将 All rights reserved.</p>
          <p className="text-amber-400 text-xs">札幌市から全国へサービスを提供</p>
        </div>
      </div>
    </footer>
  );
}
