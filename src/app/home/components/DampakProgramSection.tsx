'use client';

import React, { useEffect, useRef, useState } from 'react';

const impacts = [
  {
    num: '01',
    title: 'Peningkatan Kompetensi Guru',
    body: 'Guru Bahasa Inggris madrasah meningkatkan kompetensi sesuai standar internasional melalui jalur pengembangan yang terstruktur dan terukur.',
  },
  {
    num: '02',
    title: 'Implementasi Pembelajaran Terstandar',
    body: 'Pembelajaran Bahasa Inggris di madrasah dilaksanakan dengan metodologi yang terstandar secara internasional, selaras dengan Kurikulum Nasional Madrasah.',
  },
  {
    num: '03',
    title: 'Terbentuknya Master Trainer Nasional',
    body: 'Indonesia memiliki jaringan Master Trainer dan Lead Trainer yang siap mengimbaskan kompetensi ke seluruh madrasah secara berkelanjutan.',
  },
  {
    num: '04',
    title: 'Penguatan Kualitas Madrasah',
    body: 'Madrasah di seluruh Indonesia meningkatkan kualitas pembelajaran Bahasa Inggris, memperkuat posisi madrasah sebagai lembaga pendidikan yang berdaya saing.',
  },
  {
    num: '05',
    title: 'Peningkatan Kompetensi Peserta Didik',
    body: 'Peserta didik madrasah mencapai target CEFR yang ditetapkan: A1 untuk MI, A2 untuk MTs, dan B1 untuk MA.',
  },
  {
    num: '06',
    title: 'Keberlanjutan Sistem Nasional',
    body: 'Terbentuknya sistem pengembangan guru Bahasa Inggris madrasah yang mandiri dan berkelanjutan, tidak bergantung pada intervensi eksternal secara terus-menerus.',
  },
];

export default function DampakProgramSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.06 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="dampak-nasional"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Dampak Nasional
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Dampak Terukur bagi Sistem Pendidikan Madrasah
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program MBI dirancang untuk memberikan dampak yang terukur dan berkelanjutan bagi guru, peserta didik, madrasah, dan sistem pendidikan Islam nasional.
          </p>
        </div>

        {/* Editorial impact grid — 2 columns with strong numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {impacts?.map((item, i) => (
            <div
              key={item?.num}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className="h-full p-6 rounded-2xl flex gap-4"
                style={{
                  background: 'white',
                  border: '1px solid rgba(168,176,154,0.2)',
                  boxShadow: '0 4px 16px rgba(26,58,42,0.05)',
                }}
              >
                <div className="flex-shrink-0">
                  <span
                    className="text-3xl font-serif font-bold"
                    style={{ color: 'rgba(184,150,60,0.25)' }}
                  >
                    {item?.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-snug mb-2" style={{ color: 'var(--green-deep)' }}>
                    {item?.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                    {item?.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kemenag callout */}
        <div
          className={`p-7 md:p-9 rounded-2xl transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'var(--green-deep)',
            border: '1px solid rgba(184,150,60,0.2)',
          }}
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
              Kementerian Agama Republik Indonesia
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Program MBI mendukung agenda strategis Kementerian Agama dalam mewujudkan madrasah yang berkualitas, berdaya saing, dan mampu menghasilkan lulusan yang kompeten di tingkat nasional dan internasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
