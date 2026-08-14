'use client';

import React, { useEffect, useRef, useState } from 'react';

const pipeline = [
  {
    num: '43.000+',
    unit: 'Guru',
    label: 'Guru Bahasa Inggris Madrasah',
    sublabel: 'Populasi Nasional',
    widthPct: 100,
    highlight: false,
    isTop: true,
    isBottom: false,
    color: 'rgba(255,255,255,0.10)',
    borderColor: 'rgba(255,255,255,0.13)',
    numColor: '#ffffff',
  },
  {
    num: '2.000',
    unit: 'Peserta',
    label: 'Cambridge English Skills Test (CEST)',
    sublabel: 'Seleksi Kompetensi Awal',
    widthPct: 82,
    highlight: false,
    isTop: false,
    isBottom: false,
    color: 'rgba(255,255,255,0.07)',
    borderColor: 'rgba(255,255,255,0.10)',
    numColor: 'rgba(255,255,255,0.92)',
  },
  {
    num: '1.000',
    unit: 'Peserta',
    label: 'Cambridge English for Teachers (CEfT)',
    sublabel: 'Pelatihan Berbasis Cambridge',
    widthPct: 65,
    highlight: false,
    isTop: false,
    isBottom: false,
    color: 'rgba(255,255,255,0.07)',
    borderColor: 'rgba(255,255,255,0.10)',
    numColor: 'rgba(255,255,255,0.92)',
  },
  {
    num: '500',
    unit: 'Peserta',
    label: 'Pesantren Bahasa Inggris (PBI)',
    sublabel: 'Residensial Intensif 200+ Jam',
    widthPct: 50,
    highlight: false,
    isTop: false,
    isBottom: false,
    color: 'rgba(255,255,255,0.07)',
    borderColor: 'rgba(255,255,255,0.10)',
    numColor: 'rgba(255,255,255,0.92)',
  },
  {
    num: '150',
    unit: 'Trainer',
    label: 'Trainer Nasional',
    sublabel: 'International Training of Trainers',
    widthPct: 36,
    highlight: false,
    isTop: false,
    isBottom: false,
    color: 'rgba(184,150,60,0.12)',
    borderColor: 'rgba(184,150,60,0.30)',
    numColor: 'var(--gold)',
  },
  {
    num: 'Master',
    unit: 'Trainer',
    label: '& Lead Trainer',
    sublabel: 'Kapasitas Nasional Berkelanjutan',
    widthPct: 24,
    highlight: true,
    isTop: false,
    isBottom: true,
    color: 'linear-gradient(135deg, rgba(184,150,60,0.40) 0%, rgba(184,150,60,0.22) 100%)',
    borderColor: 'rgba(184,150,60,0.70)',
    numColor: 'var(--gold)',
  },
];

const stats = [
  { val: '2.000', label: 'Peserta CEST', sub: 'Seleksi Awal' },
  { val: '1.000', label: 'Peserta CEfT', sub: 'Pelatihan Cambridge' },
  { val: '500', label: 'Peserta PBI', sub: 'Residensial Intensif' },
  { val: '150+', label: 'Trainer Nasional', sub: 'Berkualifikasi Intl.' },
];

export default function PipelinePengembanganGuruSection() {
  const [revealed, setRevealed] = useState(false);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          setTimeout(() => setAnimated(true), 300);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="pengembangan-guru"
      ref={sectionRef}
      className="py-28 px-6 overflow-hidden"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div
          className="mb-16"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Pipeline Pengembangan Guru
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 max-w-3xl leading-tight">
            Jalur Pengembangan Talenta Guru Nasional
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.60)' }}>
            Program MBI membangun jalur pengembangan guru yang sistematis — dari pemetaan kompetensi awal hingga pembentukan Master Trainer berkualifikasi internasional yang siap mengimbaskan ke seluruh madrasah Indonesia.
          </p>
        </div>

        {/* ── Desktop: two-column / Mobile: stacked ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── LEFT: Funnel ── */}
          <div className="lg:col-span-7 flex flex-col items-center">

            {/* Funnel label */}
            <div
              className="w-full flex justify-between items-center mb-5 px-1"
              style={{
                opacity: revealed ? 1 : 0,
                transition: 'opacity 0.8s 0.2s',
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Tahap Seleksi &amp; Pengembangan
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Peserta
              </span>
            </div>

            {/* Funnel stages */}
            <div className="w-full flex flex-col items-center gap-0">
              {pipeline?.map((item, i) => {
                const isLast = i === pipeline?.length - 1;
                const delay = i * 120;

                return (
                  <div
                    key={i}
                    className="w-full flex flex-col items-center"
                    style={{
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.65s ${delay}ms ease, transform 0.65s ${delay}ms ease`,
                    }}
                  >
                    {/* Stage row */}
                    <div
                      className="relative flex items-stretch overflow-hidden mx-auto"
                      style={{
                        width: `${item?.widthPct}%`,
                        minWidth: '220px',
                        background: item?.color,
                        border: `1px solid ${item?.borderColor}`,
                        borderRadius: item?.isTop
                          ? '12px 12px 0 0'
                          : isLast
                          ? '0 0 12px 12px' :'0',
                        borderBottom: !isLast ? 'none' : undefined,
                      }}
                    >
                      {/* Gold left accent for final two stages */}
                      {(i >= 4) && (
                        <div
                          className="absolute left-0 top-0 bottom-0 w-1"
                          style={{
                            background: 'var(--gold)',
                            opacity: i === 5 ? 1 : 0.55,
                          }}
                        />
                      )}

                      <div className="flex items-center w-full px-4 py-3 gap-3 pl-5">
                        {/* Step number badge */}
                        <div
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono"
                          style={{
                            background: item?.highlight ? 'var(--gold)' : 'rgba(184,150,60,0.18)',
                            color: item?.highlight ? 'var(--green-deep)' : 'var(--gold)',
                          }}
                        >
                          {i + 1}
                        </div>

                        {/* Label block */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-xs font-semibold leading-snug truncate"
                            style={{ color: item?.highlight ? 'var(--gold)' : 'rgba(255,255,255,0.80)' }}
                          >
                            {item?.label}
                          </p>
                          <p className="text-xs mt-0.5 truncate" style={{ color: 'rgba(255,255,255,0.38)' }}>
                            {item?.sublabel}
                          </p>
                        </div>

                        {/* Number — dominant visual element */}
                        <div className="flex-shrink-0 text-right pl-2">
                          <p
                            className="font-serif font-bold leading-none"
                            style={{
                              color: item?.numColor,
                              fontSize: item?.isTop ? '1.65rem' : item?.highlight ? '1.25rem' : '1.35rem',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {item?.num}
                          </p>
                          <p
                            className="text-xs font-semibold mt-0.5"
                            style={{ color: item?.highlight ? 'var(--gold)' : 'rgba(255,255,255,0.38)' }}
                          >
                            {item?.unit}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Connector arrow */}
                    {!isLast && (
                      <div
                        className="flex flex-col items-center"
                        style={{
                          opacity: animated ? 1 : 0,
                          transition: `opacity 0.5s ${(i + 1) * 130}ms`,
                        }}
                      >
                        {/* Tapered connector: wide top, narrow bottom */}
                        <svg
                          width="40"
                          height="18"
                          viewBox="0 0 40 18"
                          fill="none"
                          style={{ display: 'block' }}
                        >
                          {/* Side lines converging */}
                          <line x1="4" y1="0" x2="20" y2="14" stroke="rgba(184,150,60,0.30)" strokeWidth="1" />
                          <line x1="36" y1="0" x2="20" y2="14" stroke="rgba(184,150,60,0.30)" strokeWidth="1" />
                          {/* Arrowhead */}
                          <path d="M14 12 L20 18 L26 12" fill="none" stroke="rgba(184,150,60,0.45)" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom caption */}
            <div
              className="mt-6 flex items-center gap-2"
              style={{
                opacity: animated ? 1 : 0,
                transition: 'opacity 0.8s 0.9s',
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--gold)' }} />
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.40)' }}>
                Seleksi ketat berbasis kompetensi — dari 43.000+ menuju 150 Trainer Nasional
              </p>
            </div>
          </div>

          {/* ── RIGHT: Stats panel ── */}
          <div
            className="lg:col-span-5 flex flex-col gap-5"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1s 0.5s ease, transform 1s 0.5s ease',
            }}
          >
            {/* Headline stat */}
            <div
              className="p-7 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(184,150,60,0.22) 0%, rgba(184,150,60,0.08) 100%)',
                border: '1px solid rgba(184,150,60,0.38)',
              }}
            >
              <p className="text-5xl font-serif font-bold mb-1 leading-none" style={{ color: 'var(--gold)' }}>
                43.000+
              </p>
              <p className="text-xs font-bold uppercase tracking-widest mt-2 mb-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Guru Bahasa Inggris Madrasah
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.42)' }}>
                Populasi Nasional Target Program
              </p>
            </div>

            {/* Funnel ratio indicator */}
            <div
              className="px-6 py-4 rounded-xl flex items-center gap-4"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.40)' }}>
                  Rasio Seleksi Nasional
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-serif font-bold text-white leading-none">1 : 287</span>
                </div>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  Dari 43.000+ → 150 Trainer
                </p>
              </div>
              <div className="flex-shrink-0">
                {/* Mini funnel icon */}
                <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
                  <rect x="0" y="0" width="36" height="7" rx="2" fill="rgba(255,255,255,0.15)" />
                  <rect x="4" y="10" width="28" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
                  <rect x="8" y="19" width="20" height="6" rx="2" fill="rgba(255,255,255,0.10)" />
                  <rect x="12" y="28" width="12" height="6" rx="2" fill="rgba(184,150,60,0.35)" />
                  <rect x="14" y="37" width="8" height="7" rx="2" fill="rgba(184,150,60,0.65)" />
                </svg>
              </div>
            </div>

            {/* Key metrics grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats?.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="text-xl font-serif font-bold text-white mb-0.5 leading-none">{stat?.val}</p>
                  <p className="text-xs font-semibold mt-1 mb-0.5" style={{ color: 'var(--gold)' }}>{stat?.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{stat?.sub}</p>
                </div>
              ))}
            </div>

            {/* Sustainability note */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(184,150,60,0.18)',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Keberlanjutan Sistem Nasional
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
                Master Trainer dan Lead Trainer yang terbentuk akan menjadi tulang punggung sistem pengembangan guru Bahasa Inggris madrasah yang berkelanjutan dan mandiri di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
