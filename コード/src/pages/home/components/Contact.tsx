export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            各種お問い合わせは公式LINEから承っております。<br />
            お気軽にメッセージをお送りください。
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden h-72 md:h-96">
            <img
              src="https://readdy.ai/api/search-image?query=Sapporo%20Hokkaido%20Japan%20beautiful%20winter%20cityscape%20at%20night%2C%20warm%20glowing%20lights%20reflecting%20on%20snow%2C%20cozy%20urban%20atmosphere%2C%20amber%20and%20gold%20tones%2C%20professional%20photography%2C%20cinematic%20mood%2C%20city%20streets%20with%20soft%20bokeh%2C%20inviting%20warm%20atmosphere%2C%20clean%20simple%20background&width=700&height=500&seq=contact001&orientation=landscape"
              alt="北海道札幌市"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right: LINE CTA */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-4">
                LINEで簡単<br />
                <span className="text-green-400">お問い合わせ</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                24時間メッセージ受付中。<br />
                サービスのご相談・ご質問・お申し込みなど、<br />
                なんでもお気軽にどうぞ。
              </p>
            </div>

            {/* LINE Button */}
            <a
              href="https://lin.ee/w5rqcyZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black text-lg px-10 py-5 rounded-2xl transition-all cursor-pointer whitespace-nowrap w-full md:w-auto"
            >
              <i className="ri-line-fill text-2xl"></i>
              友だち追加して相談する
            </a>



            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500/20 flex-shrink-0">
                  <i className="ri-phone-line text-amber-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">電話番号</p>
                  <p className="text-white text-sm font-semibold">070-8968-5619</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500/20 flex-shrink-0">
                  <i className="ri-mail-line text-amber-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">メール</p>
                  <p className="text-white text-sm font-semibold">kitanosho0349@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
