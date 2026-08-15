'use client';

import React, { useEffect, useRef, useState } from 'react';

const challenges = [
  {
    num: '01',
    title: 'Kompetensi Guru Bahasa Inggris',
    body: 'Sebagian besar guru Bahasa Inggris madrasah belum memiliki kualifikasi internasional yang terstandar, sehingga kualitas pembelajaran belum merata secara nasional.',
  },
  {
    num: '02',
    title: 'Implementasi Permendikdasmen No. 13/2025',
    body: 'Kebijakan nasional mewajibkan penguatan pembelajaran Bahasa Inggris di madrasah, yang membutuhkan sistem pengembangan guru yang terstruktur dan berkelanjutan.',
  },
  {
    num: '03',
    title: 'Kesenjangan Kompetensi Antar Wilayah',
    body: 'Terdapat kesenjangan signifikan dalam kompetensi Bahasa Inggris guru madrasah antara wilayah perkotaan dan daerah terpencil di seluruh Indonesia.',
  },
  {
    num: '04',
    title: 'Penguatan Pembelajaran Bahasa Inggris',
    body: 'Madrasah membutuhkan pendekatan pembelajaran yang terstandar secara internasional, berbasis CEFR, dan selaras dengan Kurikulum Nasional Madrasah.',
  },
  {
    num: '05',
    title: 'Sistem Pengembangan Guru Berkelanjutan',
    body: 'Diperlukan sistem pengembangan guru yang tidak hanya bersifat pelatihan sesaat, tetapi mencakup asesmen, pelatihan, pengimbasan, dan pengukuran hasil secara menyeluruh.',
  },
  {
    num: '06',
    title: 'Kapasitas Trainer Nasional',
    body: 'Indonesia membutuhkan Master Trainer dan Lead Trainer yang berkualifikasi internasional untuk memastikan keberlanjutan program pengembangan guru secara mandiri.',
  },
];

export default function TantanganLatarBelakangSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.08 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="latar-belakang"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Text — 55% */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="rule-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Tantangan dan Latar Belakang
                </span>
              </div>
              <h2 className="question-serif text-3xl md:text-5xl mb-6 max-w-3xl">
                Mengapa Program MBI Diperlukan?
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
                Kementerian Agama RI mengelola lebih dari 43.000 guru Bahasa Inggris madrasah di seluruh Indonesia. Peningkatan kompetensi guru secara sistematis dan terstandar menjadi kebutuhan mendesak untuk mewujudkan madrasah yang berdaya saing internasional.
              </p>
              {/* Key stat */}
              <div
                className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl"
                style={{
                  background: 'var(--green-deep)',
                  border: '1px solid rgba(184,150,60,0.25)',
                }}
              >
                <div>
                  <p className="text-3xl md:text-4xl font-serif font-bold" style={{ color: 'var(--gold)' }}>43.000+</p>
                  <p className="text-xs font-semibold text-white/70 mt-0.5">Guru Bahasa Inggris Madrasah Nasional</p>
                </div>
                <div className="w-px h-12 flex-shrink-0" style={{ background: 'rgba(184,150,60,0.3)' }} />
                <p className="text-xs text-white/60 leading-relaxed max-w-[160px]">
                  Membutuhkan sistem pengembangan kompetensi yang terstruktur dan berkelanjutan
                </p>
              </div>
            </div>
            {/* Image — 45% */}
            <div className="lg:col-span-2">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src="/assets/images/ChatGPT_Image_Aug_14__2026__05_05_29_AM__1_-1786655207389.png"
                  alt="Guru Bahasa Inggris madrasah dalam kegiatan pelatihan dan pengembangan kompetensi profesional"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(15,35,24,0.5) 100%)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges?.map((item, i) => (
            <div
              key={item?.num}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="h-full p-8 rounded-2xl"
                style={{
                  background: 'white',
                  border: '1px solid rgba(168,176,154,0.2)',
                  boxShadow: '0 4px 24px rgba(26,58,42,0.06)',
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="text-xs font-mono font-bold flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--gold)' }}
                  >
                    {item?.num}
                  </span>
                  <h3 className="text-base font-bold leading-snug" style={{ color: 'var(--green-deep)' }}>
                    {item?.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {item?.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className={`mt-12 p-8 md:p-10 rounded-2xl transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'var(--green-deep)',
            border: '1px solid rgba(184,150,60,0.2)',
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Respons Kebijakan Nasional
              </p>
              <p className="text-white text-base md:text-lg font-semibold leading-snug">
                Program MBI dirancang sebagai respons strategis terhadap kebutuhan peningkatan kualitas pendidikan Bahasa Inggris di madrasah secara nasional, terstruktur, dan berkelanjutan.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('konsultasi');
                if (el) window.scrollTo({ top: el?.getBoundingClientRect()?.top + window.scrollY - 72, behavior: 'smooth' });
              }}
              className="btn-gold flex-shrink-0 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Konsultasi Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
