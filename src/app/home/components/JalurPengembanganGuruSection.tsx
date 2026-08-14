'use client';

import React, { useEffect, useRef, useState } from 'react';

const pathway = [
  {
    num: '01',
    stage: 'ASSESS',
    title: 'Asesmen',
    desc: 'CEPT menetapkan titik awal kompetensi setiap guru.',
    detail: 'Cambridge English Placement Test (CEPT) digunakan untuk memetakan kompetensi awal guru secara nasional, memastikan penempatan yang tepat dalam jalur pengembangan.',
  },
  {
    num: '02',
    stage: 'DEVELOP',
    title: 'Kembangkan',
    desc: 'CEfT membangun kompetensi bahasa dan kemampuan mengajar.',
    detail: 'Cambridge English for Teachers (CEfT) memberikan pelatihan terstruktur yang meningkatkan kompetensi bahasa dan metodologi pengajaran guru berbasis standar Cambridge.',
  },
  {
    num: '03',
    stage: 'IMMERSE',
    title: 'Imersi',
    desc: 'Guru terpilih mengikuti imersi Bahasa Inggris intensif.',
    detail: 'Pesantren Bahasa Inggris (PBI) memberikan lingkungan imersi residensial intensif 200+ jam bagi guru-guru terpilih untuk mempercepat peningkatan kompetensi.',
  },
  {
    num: '04',
    stage: 'INTERNATIONALISE',
    title: 'Internasionalisasi',
    desc: 'Guru berprestasi mengikuti pengembangan trainer bertaraf internasional.',
    detail: 'Guru berprestasi tinggi mengikuti program pengembangan trainer yang selaras dengan standar Cambridge internasional, memperluas wawasan dan kompetensi global mereka.',
  },
  {
    num: '05',
    stage: 'MULTIPLY',
    title: 'Perbanyak',
    desc: 'Master Trainer mendukung pengembangan guru yang lebih luas.',
    detail: 'Master Trainer yang telah terbentuk mengimbaskan kompetensi kepada guru-guru lain di wilayah masing-masing, memperluas jangkauan program secara berkelanjutan.',
  },
  {
    num: '06',
    stage: 'IMPLEMENT',
    title: 'Implementasi',
    desc: 'Peningkatan pengajaran menjangkau ruang kelas madrasah.',
    detail: 'Kompetensi yang telah dikembangkan diterapkan langsung dalam pembelajaran Bahasa Inggris di madrasah, meningkatkan capaian peserta didik sesuai standar CEFR.',
  },
];

export default function JalurPengembanganGuruSection() {
  const [revealed, setRevealed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
      id="jalur-pengembangan-guru"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-14 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Jalur Pengembangan Guru Nasional
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Dari Guru ke Trainer Nasional
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Enam tahap terstruktur yang membawa guru dari asesmen awal hingga menjadi Master Trainer yang siap mengimbaskan kompetensi ke seluruh madrasah Indonesia.
          </p>
        </div>

        {/* Desktop: interactive step selector */}
        <div className="hidden md:block">
          {/* Step tabs */}
          <div className="flex items-stretch gap-0 mb-8 overflow-x-auto">
            {pathway?.map((step, i) => (
              <button
                key={step?.num}
                onClick={() => setActiveStep(i)}
                className={`flex-1 min-w-[120px] flex flex-col items-center gap-2 px-4 py-4 transition-all duration-300 border-b-2 ${
                  activeStep === i ? 'border-b-2' : 'border-b border-transparent'
                }`}
                style={{
                  borderBottomColor: activeStep === i ? 'var(--gold)' : 'rgba(168,176,154,0.2)',
                  background: activeStep === i ? 'rgba(184,150,60,0.06)' : 'white',
                  borderTop: '1px solid rgba(168,176,154,0.15)',
                  borderLeft: i === 0 ? '1px solid rgba(168,176,154,0.15)' : 'none',
                  borderRight: '1px solid rgba(168,176,154,0.15)',
                }}
              >
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: activeStep === i ? 'var(--gold)' : 'rgba(168,176,154,0.6)' }}
                >
                  {step?.num}
                </span>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: activeStep === i ? 'var(--green-deep)' : 'var(--ink-soft)' }}
                >
                  {step?.stage}
                </span>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div
            className="p-8 md:p-10 rounded-2xl transition-all duration-500"
            style={{
              background: 'var(--green-deep)',
              border: '1px solid rgba(184,150,60,0.2)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-4xl font-serif font-bold"
                    style={{ color: 'var(--gold)' }}
                  >
                    {pathway?.[activeStep]?.num}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                      {pathway?.[activeStep]?.stage}
                    </p>
                    <h3 className="text-xl font-bold text-white">{pathway?.[activeStep]?.title}</h3>
                  </div>
                </div>
                <p className="text-base font-semibold text-white mb-3 leading-snug">
                  {pathway?.[activeStep]?.desc}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {pathway?.[activeStep]?.detail}
                </p>
              </div>
              {/* Progress indicator */}
              <div className="flex flex-col gap-2">
                {pathway?.map((step, i) => (
                  <div
                    key={step?.num}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setActiveStep(i)}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 transition-all duration-300"
                      style={{
                        background: i === activeStep ? 'var(--gold)' : i < activeStep ? 'rgba(184,150,60,0.3)' : 'rgba(255,255,255,0.08)',
                        color: i === activeStep ? 'var(--green-deep)' : i < activeStep ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {i < activeStep ? '✓' : step?.num}
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-xs font-semibold"
                        style={{ color: i === activeStep ? 'white' : 'rgba(255,255,255,0.4)' }}
                      >
                        {step?.stage} — {step?.title}
                      </p>
                    </div>
                    {i < pathway?.length - 1 && (
                      <div className="w-px h-3 absolute left-3" style={{ background: 'rgba(184,150,60,0.2)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {pathway?.map((step, i) => (
            <div
              key={step?.num}
              className={`flex gap-4 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                  style={{
                    background: i === pathway?.length - 1 ? 'var(--gold)' : 'var(--green-deep)',
                    color: i === pathway?.length - 1 ? 'var(--green-deep)' : 'var(--gold)',
                    border: '1px solid rgba(184,150,60,0.4)',
                  }}
                >
                  {step?.num}
                </div>
                {i < pathway?.length - 1 && (
                  <div className="w-px flex-1 my-1" style={{ background: 'rgba(26,58,42,0.15)', minHeight: '20px' }} />
                )}
              </div>
              {/* Content */}
              <div className="pb-6 flex-1">
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--gold)' }}>
                  {step?.stage}
                </p>
                <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--green-deep)' }}>{step?.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{step?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome summary */}
        <div
          className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 delay-600 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { num: '43.210+', label: 'Guru Bahasa Inggris', sub: 'Populasi Nasional' },
            { num: '↓', label: 'Jalur Terstruktur', sub: '6 Tahap Pengembangan' },
            { num: '150', label: 'Master Trainer', sub: 'Kapasitas Nasional' },
          ]?.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl text-center"
              style={{
                background: 'white',
                border: '1px solid rgba(168,176,154,0.2)',
                boxShadow: '0 4px 16px rgba(26,58,42,0.05)',
              }}
            >
              <p className="text-2xl font-serif font-bold mb-1" style={{ color: 'var(--green-deep)' }}>{item?.num}</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--green-deep)' }}>{item?.label}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--ink-soft)' }}>{item?.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
