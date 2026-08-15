'use client';

import React, { useEffect, useRef, useState } from 'react';

const stages = [
  {
    num: '01',
    key: 'ASSESS',
    title: 'Asesmen',
    desc: 'Cambridge English Placement Test (CEPT) memetakan titik awal kompetensi guru secara nasional, memastikan jalur pengembangan yang tepat untuk setiap peserta.',
  },
  {
    num: '02',
    key: 'DEVELOP',
    title: 'Kembangkan',
    desc: 'Cambridge English for Teachers (CEfT) membangun kompetensi bahasa dan kemampuan mengajar guru melalui program pelatihan terstruktur berbasis standar Cambridge.',
  },
  {
    num: '03',
    key: 'IMMERSE',
    title: 'Imersi',
    desc: 'Guru-guru terpilih mengikuti program imersi Bahasa Inggris intensif melalui Pesantren Bahasa Inggris (PBI) — lingkungan belajar residensial 200+ jam.',
  },
  {
    num: '04',
    key: 'INTERNATIONALISE',
    title: 'Internasionalisasi',
    desc: 'Guru berprestasi tinggi mengikuti program pengembangan trainer bertaraf internasional yang selaras dengan standar Cambridge, memperluas wawasan dan kompetensi global.',
  },
  {
    num: '05',
    key: 'MULTIPLY',
    title: 'Perbanyak',
    desc: 'Master Trainer yang telah terbentuk mendukung pengembangan guru yang lebih luas, mengimbaskan kompetensi ke seluruh jaringan madrasah di Indonesia.',
  },
  {
    num: '06',
    key: 'IMPLEMENT',
    title: 'Implementasi',
    desc: 'Peningkatan kualitas pengajaran diterapkan langsung di ruang kelas madrasah, memperkuat kompetensi Bahasa Inggris peserta didik sesuai standar CEFR.',
  },
];

export default function SolusiMBISection() {
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
      id="solusi-mbi"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-14 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Solusi MBI
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 max-w-3xl leading-tight">
            Sistem Pengembangan Nasional yang Terintegrasi
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            MBI bukan sekadar kumpulan kursus terpisah. Program ini adalah sistem pengembangan nasional yang terintegrasi — dari asesmen awal hingga implementasi di ruang kelas.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-5 mb-5">
            {stages?.slice(0, 3)?.map((stage, i) => (
              <div
                key={stage?.num}
                className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="h-full p-6 rounded-2xl relative"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(184,150,60,0.2)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>{stage?.num}</span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(184,150,60,0.2)' }} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
                    {stage?.key}
                  </p>
                  <h3 className="text-base font-bold text-white mb-2">{stage?.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{stage?.desc}</p>
                  {/* Arrow right */}
                  {i < 2 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                        <path d="M0 7H16M10 1L16 7L10 13" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Down arrow */}
          <div className="flex justify-end pr-8 mb-5">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path d="M7 0V16M1 10L7 16L13 10" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {stages?.slice(3, 6)?.reverse()?.map((stage, i) => (
              <div
                key={stage?.num}
                className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 3) * 80}ms` }}
              >
                <div
                  className="h-full p-6 rounded-2xl relative"
                  style={{
                    background: stage?.key === 'IMPLEMENT' ?'rgba(184,150,60,0.12)' :'rgba(255,255,255,0.05)',
                    border: stage?.key === 'IMPLEMENT' ?'1px solid rgba(184,150,60,0.4)' :'1px solid rgba(184,150,60,0.2)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>{stage?.num}</span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(184,150,60,0.2)' }} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
                    {stage?.key}
                  </p>
                  <h3 className="text-base font-bold text-white mb-2">{stage?.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{stage?.desc}</p>
                  {i < 2 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                        <path d="M20 7H4M10 1L4 7L10 13" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Down arrow left */}
          <div className="flex justify-start pl-8 mt-5">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path d="M7 0V16M1 10L7 16L13 10" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {stages?.map((stage, i) => (
            <div
              key={stage?.num}
              className={`flex gap-4 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0"
                  style={{
                    background: i === stages?.length - 1 ? 'var(--gold)' : 'rgba(184,150,60,0.2)',
                    color: i === stages?.length - 1 ? 'var(--green-deep)' : 'var(--gold)',
                    border: '1px solid rgba(184,150,60,0.4)',
                  }}
                >
                  {stage?.num}
                </div>
                {i < stages?.length - 1 && (
                  <div className="w-px flex-1 my-1" style={{ background: 'rgba(184,150,60,0.2)', minHeight: '24px' }} />
                )}
              </div>
              {/* Content */}
              <div className="pb-6 flex-1">
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--gold)' }}>
                  {stage?.key}
                </p>
                <h3 className="text-sm font-bold text-white mb-1">{stage?.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{stage?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-10 p-6 rounded-2xl transition-all duration-1000 delay-600 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p className="text-sm text-center leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Program MBI tidak memandang pelatihan guru sebagai titik akhir. Pengembangan guru dirancang untuk memperkuat implementasi di ruang kelas dan pada akhirnya meningkatkan kompetensi Bahasa Inggris peserta didik.
          </p>
        </div>
      </div>
    </section>
  );
}
