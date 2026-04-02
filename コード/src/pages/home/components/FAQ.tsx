import { useState } from 'react';

const faqs = [
  {
    q: 'どのようなサービスを提供していますか？',
    a: 'AI解説本の制作・電子書籍の出版・書籍の執筆代行・風水引き講座・お誕生日鑑定・店舗経営コンサルなど、AI関連事業と伝統的な風水・占いサービスを幅広く提供しています。',
  },
  {
    q: '北海道以外の方でも利用できますか？',
    a: 'はい、全国対応しております。オンラインでのご相談・講座受講も可能ですので、お気軽に公式LINEよりお問い合わせください。',
  },
  {
    q: 'お問い合わせはどのようにすればよいですか？',
    a: '公式LINEからお問い合わせいただくのが最もスムーズです。24時間メッセージを受け付けており、担当者が確認次第ご返信いたします。',
  },
  {
    q: '風水や占いサービスは初めてでも大丈夫ですか？',
    a: 'もちろんです。初めての方にも丁寧にご説明しながら進めますので、ご安心ください。まずはお気軽にご相談ください。',
  },
  {
    q: 'AI解説本はどこで購入できますか？',
    a: '主にAmazon Kindleにて販売しております。詳細は公式LINEまたはメールにてお問い合わせいただければ、最新の出版情報をお伝えします。',
  },
  {
    q: '書籍の執筆代行はどのような流れで進みますか？',
    a: 'まずはヒアリングを行い、お客様の想いや経歴・伝えたいメッセージを丁寧にお聞きします。その後、構成案の作成・執筆・校正という流れで進めます。詳細は公式LINEよりご相談ください。',
  },
  {
    q: '店舗経営コンサルはどのような内容ですか？',
    a: '店舗の売上向上を目的に、風水の観点から店内レイアウトの改善提案や、従業員の生年月日をもとにした人事配置のアドバイスを行います。まずはお気軽にご相談ください。',
  },
  {
    q: '講座はオンラインでも受講できますか？',
    a: 'はい、オンライン受講にも対応しております。詳細な日程や受講方法については、公式LINEよりお問い合わせください。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 md:py-28 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
            よくある質問
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            お客様からよくいただくご質問にお答えします。<br />
            その他のご質問は公式LINEよりお気軽にどうぞ。
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                openIndex === i ? 'border-amber-300 bg-white' : 'border-gray-200 bg-white'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-amber-500 font-black text-base mt-0.5 flex-shrink-0">Q</span>
                  <span className="text-gray-800 text-sm md:text-base font-semibold leading-relaxed">
                    {faq.q}
                  </span>
                </div>
                <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 ml-4 transition-colors ${openIndex === i ? 'bg-amber-500' : 'bg-gray-100'}`}>
                  <i className={`text-sm transition-transform duration-200 ${openIndex === i ? 'ri-subtract-line text-white' : 'ri-add-line text-gray-500'}`}></i>
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 flex gap-4">
                  <span className="text-gray-400 font-black text-base flex-shrink-0">A</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">解決しない場合はお気軽にご連絡ください</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-line-fill text-xl"></i>
            公式LINEで質問する
          </a>
        </div>
      </div>
    </section>
  );
}
