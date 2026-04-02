import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  useEffect(() => {
    // Schema.org JSON-LD for LocalBusiness
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: '株式会社北ノ将',
      alternateName: '北ノ将',
      description: '北海道札幌市の株式会社北ノ将。AI関連事業・電子書籍出版・風水コンサルティングを通じて、お客様の人生と事業をサポートします。',
      url: import.meta.env.VITE_SITE_URL || '',
      telephone: '+81-70-8968-5619',
      email: 'kitanosho0349@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '札幌市',
        addressRegion: '北海道',
        addressCountry: 'JP'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.0618,
        longitude: 141.3545
      },
      founder: {
        '@type': 'Person',
        name: '西陰萌恵',
        alternateName: 'にしかげもえ'
      },
      sameAs: [],
      priceRange: '$$',
      areaServed: {
        '@type': 'Country',
        name: '日本'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    script.id = 'schema-localbusiness';
    
    const existingScript = document.getElementById('schema-localbusiness');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('schema-localbusiness');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
