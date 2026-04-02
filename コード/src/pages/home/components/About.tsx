export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 leading-tight">
              株式会社北ノ将<br />について
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            北海道から全国へ、AIと伝統の融合で新しい価値を創造し続ける企業です。
            お客様一人ひとりの夢と目標を実現するために、多彩なサービスを提供しています。
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Company Info Card */}
          <div className="md:col-span-1 bg-gray-900 rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Company Info</span>
              <h3 className="text-white text-xl font-bold mt-3 mb-6">会社情報</h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-gray-400 text-xs">会社名</span>
                  <span className="text-white text-sm font-semibold">株式会社北ノ将</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-400 text-xs">代表取締役</span>
                  <span className="text-white text-sm font-semibold">西陰萌恵（にしかげもえ）</span>
                </li>

                <li className="flex flex-col">
                  <span className="text-gray-400 text-xs">電話番号</span>
                  <span className="text-white text-sm font-semibold">070-8968-5619</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-400 text-xs">メール</span>
                  <span className="text-white text-sm font-semibold">kitanosho0349@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission Card */}
          <div className="md:col-span-1 bg-amber-500 rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="text-white/70 text-xs font-bold tracking-widest uppercase">Mission</span>
              <h3 className="text-white text-xl font-bold mt-3 mb-4">私たちの使命</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                最新の情報を積極的に取り、実践して新鮮な知識でたくさんの人を巻き込んで豊かな生活や夢を一緒に叶えていく。<br />
                古くから伝わる技術と、最新の技術の融合で<br />
                将軍のように迷わず頼れる会社を目指しています。
              </p>
            </div>
            <div className="mt-6">
              <p className="text-white/70 text-xs italic">Innovation meets Tradition</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="md:col-span-1 bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Vision</span>
              <h3 className="text-gray-900 text-xl font-bold mt-3 mb-4">目標</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                日本ではまだ馴染みのない風水を、
誰もが無意識的に取り入れシンガポールのような
風水大国へ。
環境・人員配置の改善提案で
クライアントの売上倍増を目指します。
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100">
                <i className="ri-star-line text-amber-500 text-lg"></i>
              </div>
              <div>
                <p className="text-gray-900 text-sm font-bold">お客様満足を最優先に</p>
                <p className="text-gray-400 text-xs">全国対応可能</p>
              </div>
            </div>
          </div>
        </div>

        {/* Representative Profile - removed */}
        <div className="hidden">
          <div className="w-full md:w-48 flex-shrink-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20Japanese%20businesswoman%20portrait%2C%20elegant%20and%20confident%2C%20warm%20smile%2C%20traditional%20meets%20modern%20style%2C%20soft%20neutral%20background%2C%20high%20quality%20professional%20headshot%2C%20natural%20lighting%2C%20sophisticated%20appearance%2C%20clean%20simple%20background&width=200&height=200&seq=rep001&orientation=squarish"
              alt="代表取締役 西端萌恵"
              className="w-full h-48 object-cover object-top rounded-xl"
            />
          </div>
          <div className="flex-1">
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Representative</span>
            <h3 className="text-gray-900 text-xl font-bold mt-2 mb-1">西陰萌恵（にしかげもえ）</h3>
            <p className="text-gray-500 text-sm mb-4">代表取締役</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['国際風水気学協会認定 鑑定士', '風水線引きインストラクター', ''].map((cert) => (
                <span key={cert} className="bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-200">
                  {cert}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              北海道を拠点に、AI関連事業・電子書籍出版・風水コンサルティング・占いサービスなど多岐にわたる事業を展開。
              「北海道から全国へ元気を！」をモットーに、お客様の人生と事業の発展をサポートしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
