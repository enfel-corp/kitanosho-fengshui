const services = [
  {
    id: 1,
    icon: 'ri-robot-2-line',
    title: 'AI解説本の制作',
    category: 'AIコンテンツ事業',
    description:
      'AIに関する最新の使い方や活用方法を学習してもらいやすいガイド本を制作しています。これからAIを使いたい初心者の方にもわかりやすいガイド本を制作しています。',
    image:
      'https://readdy.ai/api/search-image?query=modern%20AI%20technology%20book%20publication%2C%20digital%20artificial%20intelligence%20guide%20book%20cover%20design%2C%20clean%20minimalist%20style%2C%20tech%20aesthetic%2C%20soft%20white%20and%20amber%20tones%2C%20professional%20publishing%2C%20futuristic%20yet%20approachable%20design%2C%20simple%20background&width=600&height=400&seq=svc001&orientation=landscape',
    tag: 'AI',
  },
  {
    id: 2,
    icon: 'ri-book-open-line',
    title: '電子書籍の出版',
    category: '出版事業',
    description:
      '主にAmazonのKindleに出版して販売しています。ビジネス本や自己啓発本を中心に各ジャンル展開中。',
    image:
      'https://readdy.ai/api/search-image?query=digital%20ebook%20publishing%20concept%2C%20tablet%20with%20ebook%20library%2C%20Amazon%20Kindle%20style%2C%20modern%20digital%20reading%2C%20clean%20white%20background%2C%20warm%20amber%20accent%20colors%2C%20professional%20business%20books%2C%20self%20improvement%20books%2C%20minimalist%20aesthetic&width=600&height=400&seq=svc002&orientation=landscape',
    tag: '出版',
  },
  {
    id: 3,
    icon: 'ri-pen-nib-line',
    title: '書籍の執筆代行',
    category: 'ライティング事業',
    description:
      'コンサルをしていく中で、公私共にクライアント様の生活や人生経歴をお聞きするので、ご希望の方に自社商品や想いをお伝えする手伝いをしていきたいと思っています。',
    image:
      'https://readdy.ai/api/search-image?query=professional%20ghostwriting%20book%20writing%20service%2C%20elegant%20pen%20on%20paper%2C%20manuscript%20writing%2C%20warm%20desk%20atmosphere%2C%20soft%20lighting%2C%20cream%20and%20amber%20tones%2C%20professional%20writing%20concept%2C%20clean%20simple%20background%2C%20literary%20aesthetic&width=600&height=400&seq=svc003&orientation=landscape',
    tag: '執筆',
  },
  {
    id: 4,
    icon: 'ri-compass-3-line',
    title: '風水引き講座',
    category: 'インストラクター業',
    description:
      'ご自宅や店舗の、風水の線引き方法が実践を通じて学べる講座です。どういう理由でどんな現象が起こりやすいか等、テキストを用いてわかりやすく丁寧に指導します。',
    image:
      'https://readdy.ai/api/search-image?query=feng%20shui%20compass%20luopan%20traditional%20Chinese%20divination%20tool%2C%20elegant%20wooden%20desk%2C%20warm%20amber%20candlelight%20atmosphere%2C%20mystical%20yet%20professional%2C%20soft%20bokeh%20background%2C%20rich%20earth%20tones%2C%20spiritual%20consultation%20setting%2C%20clean%20simple%20background&width=600&height=400&seq=svc004&orientation=landscape',
    tag: '風水',
  },
  {
    id: 5,
    icon: 'ri-star-smile-line',
    title: 'お誕生日鑑定',
    category: '風水コンサルティング事業',
    description:
      '陰陽五行説に基づき、生年月日から割り出した情報から、生まれながらに持ち合わせた能力についてお伝えします。',
    image:
      'https://readdy.ai/api/search-image?query=birthday%20astrology%20fortune%20telling%20Japanese%20style%2C%20elegant%20numerology%20chart%2C%20mystical%20stars%20and%20numbers%2C%20warm%20golden%20amber%20tones%2C%20spiritual%20divination%20concept%2C%20soft%20glowing%20light%2C%20professional%20consultation%20atmosphere%2C%20clean%20simple%20background&width=600&height=400&seq=svc005&orientation=landscape',
    tag: '風水',
  },
  {
    id: 6,
    icon: 'ri-store-2-line',
    title: '店舗経営コンサルなど',
    category: '経営コンサルティング',
    description:
      '店舗の売上に悩む方に対して店内の店配置を変えることで売上アップを後押しします。また、従業員の生年月日をもとに正式入社人事配置を行い相性の良い人材配置のアドバイスをします。',
    image:
      'https://readdy.ai/api/search-image?query=Japanese%20business%20store%20management%20consulting%2C%20modern%20retail%20interior%20design%2C%20professional%20business%20consultation%2C%20clean%20minimalist%20store%20layout%2C%20warm%20amber%20and%20white%20tones%2C%20successful%20business%20atmosphere%2C%20elegant%20professional%20setting%2C%20simple%20background&width=600&height=400&seq=svc006&orientation=landscape',
    tag: 'コンサル',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 leading-tight">
              私たちの<br />サービス
            </h2>
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:bg-amber-50 transition-colors duration-300 cursor-default"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                    <i className={`${service.icon} text-amber-500 text-base`}></i>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-1">{service.category}</p>
                <h3 className="text-gray-900 text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              ご不明な点はお気軽にご相談ください
            </h3>
            <p className="text-gray-400 text-sm">
              公式LINEから24時間受付中。まずはお気軽にメッセージをどうぞ。
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-line-fill text-xl"></i>
            LINEで問い合わせる
          </a>
        </div>
      </div>
    </section>
  );
}
