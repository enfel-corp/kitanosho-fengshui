export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[520px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://static.readdy.ai/image/53d6c73466efbf45e55be1eb9933e975/ede0b716874e3b5ecdbdb369d7acb54d.png"
        alt="北海道札幌市の風景"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Hokkaido, Sapporo
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            北海道から全国へ、<br />
            <span className="text-amber-400">運氣を広めて将となる</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            AI関連事業・電子書籍出版・風水を使ったコンサルティングを通じて、<br />
            お客様の人生と事業をサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap text-base"
            >
              <i className="ri-line-fill text-xl"></i>
              公式LINEで相談する
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); handleScroll('#services'); }}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap text-base backdrop-blur-sm"
            >
              サービスを見る
              <i className="ri-arrow-down-line text-base"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest">SCROLL</span>
        <i className="ri-arrow-down-s-line text-white/60 text-xl"></i>
      </div>
    </section>
  );
}
