'use client';

import React, { useEffect, useRef, useState } from 'react';

const components = [
  {
    num: '01',
    key: 'teacher-dev',
    title: 'Pengembangan Guru',
    subtitle: 'CEfT & Pengembangan Profesional Berbasis Cambridge',
    desc: 'Program pelatihan guru yang selaras dengan standar Cambridge, mencakup pengembangan kompetensi bahasa dan metodologi pengajaran yang terstruktur.',
    objective: 'Meningkatkan kompetensi bahasa dan kemampuan mengajar guru madrasah sesuai standar Cambridge.',
    output: 'Guru dengan kompetensi Bahasa Inggris dan metodologi pengajaran yang terstandar secara internasional.',
    tags: ['Cambridge English for Teachers (CEfT)', 'CEPT', 'Hybrid Learning', 'LIFT Mobile App'],
  },
  {
    num: '02',
    key: 'immersion',
    title: 'Imersi Intensif',
    subtitle: 'Pesantren Bahasa Inggris (PBI)',
    desc: 'Program residensial intensif yang menciptakan lingkungan imersi Bahasa Inggris penuh selama 200+ jam untuk mempercepat peningkatan kompetensi guru terpilih.',
    objective: 'Memberikan pengalaman imersi Bahasa Inggris intensif bagi guru-guru terpilih untuk mempercepat peningkatan kompetensi.',
    output: '500 guru dengan kompetensi Bahasa Inggris yang signifikan meningkat, siap mengikuti tahap pengembangan lanjutan.',
    tags: ['Residensial 200+ Jam', 'Lingkungan Imersi Penuh', 'Persiapan Kualifikasi Cambridge'],
  },
  {
    num: '03',
    key: 'master-trainer',
    title: 'Pengembangan Master Trainer',
    subtitle: 'Pengembangan Trainer Internasional dan Lanjutan',
    desc: 'Program pengembangan trainer bertaraf internasional yang selaras dengan standar Cambridge bagi guru berprestasi tinggi, mempersiapkan mereka sebagai Master Trainer nasional.',
    objective: 'Membentuk Master Trainer berkualifikasi internasional yang siap mengimbaskan kompetensi ke seluruh jaringan madrasah.',
    output: '150 Master Trainer nasional yang mampu mendukung pengembangan guru secara berkelanjutan di seluruh Indonesia.',
    tags: ['International Teacher Development', 'Master Trainer', 'Lead Trainer', 'Selaras Standar Cambridge'],
  },
  {
    num: '04',
    key: 'classroom',
    title: 'Implementasi Kelas',
    subtitle: 'Implementasi MAPEL dan Transfer ke Praktik Kelas',
    desc: 'Penerapan langsung kompetensi yang telah dikembangkan dalam pembelajaran Bahasa Inggris di madrasah, dengan dukungan kerangka observasi dan monitoring yang terstruktur.',
    objective: 'Memastikan peningkatan kompetensi guru berdampak langsung pada kualitas pembelajaran Bahasa Inggris di ruang kelas madrasah.',
    output: 'Pembelajaran Bahasa Inggris terstandar di madrasah dengan capaian peserta didik yang terukur sesuai standar CEFR.',
    tags: ['Implementasi MAPEL', 'Kerangka Observasi', 'Monitoring & Evaluasi', 'Capaian CEFR Siswa'],
  },
];

export default function KomponenProgramSection() {
  const [revealed, setRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.06 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const active = components?.[activeTab];

  return (
    <section
      id="komponen-program"
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
              Komponen Program
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Empat Komponen Program Terintegrasi
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program MBI terdiri dari empat komponen yang saling terhubung — bukan empat program terpisah, melainkan satu sistem pengembangan yang terintegrasi.
          </p>
        </div>

        {/* Desktop: tab selector */}
        <div className="hidden md:block">
          {/* Tabs */}
          <div className="flex gap-0 mb-0 overflow-x-auto">
            {components?.map((comp, i) => (
              <button
                key={comp?.num}
                onClick={() => setActiveTab(i)}
                className="flex-1 min-w-[160px] flex flex-col items-start gap-1 px-6 py-4 transition-all duration-300"
                style={{
                  background: activeTab === i ? 'var(--green-deep)' : 'white',
                  borderTop: `1px solid ${activeTab === i ? 'rgba(184,150,60,0.3)' : 'rgba(168,176,154,0.2)'}`,
                  borderLeft: `1px solid ${activeTab === i ? 'rgba(184,150,60,0.3)' : 'rgba(168,176,154,0.2)'}`,
                  borderRight: i === components?.length - 1 ? `1px solid ${activeTab === i ? 'rgba(184,150,60,0.3)' : 'rgba(168,176,154,0.2)'}` : 'none',
                  borderBottom: activeTab === i ? 'none' : '1px solid rgba(168,176,154,0.2)',
                  borderRadius: i === 0 ? '12px 0 0 0' : i === components?.length - 1 ? '0 12px 0 0' : '0',
                }}
              >
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: activeTab === i ? 'var(--gold)' : 'rgba(168,176,154,0.6)' }}
                >
                  {comp?.num}
                </span>
                <span
                  className="text-sm font-bold leading-snug text-left"
                  style={{ color: activeTab === i ? 'white' : 'var(--green-deep)' }}
                >
                  {comp?.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active content */}
          <div
            className="p-8 md:p-10 rounded-b-2xl rounded-tr-2xl"
            style={{
              background: 'var(--green-deep)',
              border: '1px solid rgba(184,150,60,0.2)',
              borderTop: 'none',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main info */}
              <div className="lg:col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                  {active?.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white mb-4">{active?.title}</h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {active?.desc}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {active?.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: 'rgba(184,150,60,0.15)',
                        border: '1px solid rgba(184,150,60,0.3)',
                        color: 'var(--gold)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Objective + Output */}
              <div className="flex flex-col gap-4">
                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                    Tujuan Utama
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {active?.objective}
                  </p>
                </div>
                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: 'rgba(184,150,60,0.08)',
                    border: '1px solid rgba(184,150,60,0.2)',
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                    Hasil yang Diharapkan
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {active?.output}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden flex flex-col gap-4">
          {components?.map((comp, i) => (
            <div
              key={comp?.num}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                className="w-full text-left"
              >
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    background: activeTab === i ? 'var(--green-deep)' : 'white',
                    border: `1px solid ${activeTab === i ? 'rgba(184,150,60,0.3)' : 'rgba(168,176,154,0.2)'}`,
                    boxShadow: '0 4px 16px rgba(26,58,42,0.05)',
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>{comp?.num}</span>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      style={{
                        transform: activeTab === i ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s',
                        color: activeTab === i ? 'var(--gold)' : 'var(--ink-soft)',
                      }}
                    >
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ color: activeTab === i ? 'white' : 'var(--green-deep)' }}
                  >
                    {comp?.title}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: activeTab === i ? 'var(--gold)' : 'var(--ink-soft)' }}
                  >
                    {comp?.subtitle}
                  </p>
                  {activeTab === i && (
                    <div className="mt-4">
                      <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        {comp?.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {comp?.tags?.map((tag, j) => (
                          <span
                            key={j}
                            className="px-2 py-0.5 rounded-full text-xs font-semibold"
                            style={{
                              background: 'rgba(184,150,60,0.15)',
                              border: '1px solid rgba(184,150,60,0.3)',
                              color: 'var(--gold)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: 'rgba(184,150,60,0.08)', border: '1px solid rgba(184,150,60,0.2)' }}>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>Hasil</p>
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{comp?.output}</p>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
