'use client';

import React, { useEffect, useRef, useState } from 'react';

const anchors = [
  {
    num: '43.210+',
    label: 'Guru Bahasa Inggris',
    sub: 'Skala Nasional',
  },
  {
    num: 'CEFR',
    label: 'Kerangka Kompetensi',
    sub: 'Standar Internasional',
  },
  {
    num: 'Cambridge',
    label: 'Asesmen & Pengembangan',
    sub: 'Ekosistem Guru',
  },
  {
    num: '2026–27',
    label: 'Cakrawala Implementasi',
    sub: 'Tahun Program',
  },
];

const funnelSteps = [
  { num: '43.210+', label: 'Guru', color: 'rgba(255,255,255,0.9)', width: '100%' },
  { num: '2.000', label: 'Diasesmen', color: 'rgba(255,255,255,0.8)', width: '82%' },
  { num: '1.000', label: 'Dilatih', color: 'rgba(255,255,255,0.75)', width: '64%' },
  { num: '500', label: 'Imersi', color: 'rgba(255,255,255,0.7)', width: '46%' },
  { num: '150', label: 'Master Trainer', color: 'var(--gold)', width: '30%' },
];

export default function MBIAtAGlanceSection() {
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
      id="sekilas-mbi"
      ref={sectionRef}
      className="py-20 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Gambaran Program
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
            MBI Sekilas Pandang
          </h2>
        </div>

        {/* Two-column: anchors + funnel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: anchor stats */}
          <div className={`transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {anchors?.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(184,150,60,0.18)',
                  }}
                >
                  <p
                    className="font-serif font-bold leading-none mb-1"
                    style={{
                      color: 'var(--gold)',
                      fontSize: item?.num?.length > 6 ? '1.4rem' : '1.8rem',
                    }}
                  >
                    {item?.num}
                  </p>
                  <p className="text-sm font-semibold text-white leading-snug">{item?.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{item?.sub}</p>
                </div>
              ))}
            </div>

            {/* Programme description */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(184,150,60,0.08)',
                border: '1px solid rgba(184,150,60,0.2)',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Tentang Program
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                MBI adalah program nasional pengembangan guru dan pendidikan Bahasa Inggris untuk madrasah di seluruh Indonesia. Program ini menggabungkan asesmen berbasis Cambridge, pelatihan terstruktur, imersi intensif, dan pengembangan trainer nasional dalam satu sistem terpadu.
              </p>
            </div>
          </div>

          {/* Right: funnel visual */}
          <div className={`transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>
              Jalur Pengembangan Guru Nasional
            </p>
            <div className="flex flex-col items-center gap-0">
              {funnelSteps?.map((step, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  <div
                    className="flex items-center justify-between px-5 py-3 rounded-lg"
                    style={{
                      width: step?.width,
                      minWidth: '200px',
                      background: i === funnelSteps?.length - 1
                        ? 'rgba(184,150,60,0.2)'
                        : 'rgba(255,255,255,0.06)',
                      border: i === funnelSteps?.length - 1
                        ? '1px solid rgba(184,150,60,0.5)'
                        : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: i === 0 ? '12px 12px 0 0' : i === funnelSteps?.length - 1 ? '0 0 12px 12px' : '0',
                      borderBottom: i < funnelSteps?.length - 1 ? 'none' : undefined,
                      transition: `opacity 0.7s ${i * 100}ms`,
                      opacity: revealed ? 1 : 0,
                    }}
                  >
                    <span
                      className="font-serif font-bold text-xl"
                      style={{ color: step?.color }}
                    >
                      {step?.num}
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: i === funnelSteps?.length - 1 ? 'var(--gold)' : 'rgba(255,255,255,0.5)' }}
                    >
                      {step?.label}
                    </span>
                  </div>
                  {i < funnelSteps?.length - 1 && (
                    <div className="flex flex-col items-center">
                      <div className="w-px h-3" style={{ background: 'rgba(184,150,60,0.3)' }} />
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M0 0L5 6L10 0" fill="rgba(184,150,60,0.35)" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Logos row */}
            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              <img
                src="/assets/images/Kementerian_Agama_new_logo-1785946257791.png"
                alt="Kementerian Agama RI"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
              <div className="w-px h-8" style={{ background: 'rgba(184,150,60,0.25)' }} />
              <div className="px-3 py-1.5 rounded" style={{ background: 'rgba(255,255,255,0.9)' }}>
                <img
                  src="/assets/images/Cambridge_Landscape_Logo_POS_RGB-1785945867572.png"
                  alt="Cambridge English"
                  style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(184,150,60,0.25)' }} />
              <img
                src="/assets/images/Group-1076-1-1-1786654354676.png"
                alt="Briton English Education"
                style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
