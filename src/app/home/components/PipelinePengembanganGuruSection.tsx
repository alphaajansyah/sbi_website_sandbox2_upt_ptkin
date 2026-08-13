'use client';

import React, { useEffect, useRef, useState } from 'react';

const pipeline = [
  {
    num: '43.000+',
    unit: 'Guru',
    label: 'Guru Bahasa Inggris Madrasah',
    sublabel: 'Populasi Nasional',
    pct: 100,
    highlight: false,
    isTop: true,
  },
  {
    num: '2.000',
    unit: 'Peserta',
    label: 'Cambridge English Skills Test (CEST)',
    sublabel: 'Seleksi Kompetensi Awal',
    pct: 80,
    highlight: false,
    isTop: false,
  },
  {
    num: '1.000',
    unit: 'Peserta',
    label: 'Cambridge English for Teachers (CEfT)',
    sublabel: 'Pelatihan Berbasis Cambridge',
    pct: 62,
    highlight: false,
    isTop: false,
  },
  {
    num: '500',
    unit: 'Peserta',
    label: 'Pesantren Bahasa Inggris (PBI)',
    sublabel: 'Residensial Intensif 200+ Jam',
    pct: 46,
    highlight: false,
    isTop: false,
  },
  {
    num: '150',
    unit: 'Trainer',
    label: 'Trainer Nasional',
    sublabel: 'International Training of Trainers',
    pct: 32,
    highlight: false,
    isTop: false,
  },
  {
    num: 'Master',
    unit: 'Trainer',
    label: '& Lead Trainer',
    sublabel: 'Kapasitas Nasional Berkelanjutan',
    pct: 20,
    highlight: true,
    isTop: false,
  },
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
          setTimeout(() => setAnimated(true), 400);
        }
      },
      { threshold: 0.06 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="pengembangan-guru"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Pipeline Pengembangan Guru
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 max-w-3xl leading-tight">
            Jalur Pengembangan Talenta Guru Nasional
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Program MBI membangun jalur pengembangan guru yang sistematis — dari pemetaan kompetensi awal hingga pembentukan Master Trainer berkualifikasi internasional yang siap mengimbaskan ke seluruh madrasah Indonesia.
          </p>
        </div>

        {/* Two-column layout: funnel left, stats right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Funnel — left 3 cols */}
          <div className="lg:col-span-3 flex flex-col items-center gap-0">
            {pipeline?.map((item, i) => (
              <div
                key={i}
                className="w-full flex flex-col items-center"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.7s ${i * 110}ms, transform 0.7s ${i * 110}ms`,
                }}
              >
                {/* Bar */}
                <div
                  className="relative flex items-center overflow-hidden"
                  style={{
                    width: `${item?.pct}%`,
                    minWidth: '260px',
                    minHeight: item?.highlight ? '72px' : '60px',
                    height: 'auto',
                    borderRadius: item?.isTop ? '16px 16px 0 0' : i === pipeline?.length - 1 ? '0 0 16px 16px' : '0',
                    background: item?.highlight
                      ? 'linear-gradient(135deg, rgba(184,150,60,0.35) 0%, rgba(184,150,60,0.2) 100%)'
                      : i === 0
                      ? 'rgba(255,255,255,0.1)'
                      : 'rgba(255,255,255,0.06)',
                    border: item?.highlight
                      ? '1px solid rgba(184,150,60,0.6)'
                      : '1px solid rgba(255,255,255,0.08)',
                    borderBottom: i < pipeline?.length - 1 && !item?.highlight ? 'none' : undefined,
                    transition: 'width 1s ease',
                  }}
                >
                  {/* Animated shimmer */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
                      animation: animated ? 'shimmer 3s infinite' : 'none',
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-between w-full px-5 py-3">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Number */}
                      <div className="flex-shrink-0 text-right" style={{ minWidth: '72px' }}>
                        <p
                          className="font-serif font-bold leading-none"
                          style={{
                            color: item?.highlight ? 'var(--gold)' : i === 0 ? 'white' : 'rgba(255,255,255,0.85)',
                            fontSize: item?.highlight ? '1.1rem' : i === 0 ? '1.6rem' : '1.3rem',
                          }}
                        >
                          {item?.num}
                        </p>
                        <p
                          className="text-xs font-semibold mt-0.5"
                          style={{ color: item?.highlight ? 'var(--gold)' : 'rgba(255,255,255,0.4)' }}
                        >
                          {item?.unit}
                        </p>
                      </div>
                      {/* Divider */}
                      <div className="w-px self-stretch" style={{ background: 'rgba(184,150,60,0.25)', minHeight: '32px' }} />
                      {/* Label */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-semibold leading-snug"
                          style={{ color: item?.highlight ? 'var(--gold)' : 'rgba(255,255,255,0.9)', wordBreak: 'break-word' }}
                        >
                          {item?.label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          {item?.sublabel}
                        </p>
                      </div>
                    </div>
                    {/* Step badge */}
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ml-3"
                      style={{
                        background: item?.highlight ? 'var(--gold)' : 'rgba(184,150,60,0.15)',
                        color: item?.highlight ? 'var(--green-deep)' : 'var(--gold)',
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                </div>

                {/* Flow arrow between bars */}
                {i < pipeline?.length - 1 && (
                  <div
                    className="flex flex-col items-center"
                    style={{
                      opacity: animated ? 1 : 0,
                      transition: `opacity 0.5s ${(i + 1) * 150}ms`,
                    }}
                  >
                    <div
                      className="w-px"
                      style={{
                        height: '14px',
                        background: 'linear-gradient(to bottom, rgba(184,150,60,0.5), rgba(184,150,60,0.2))',
                      }}
                    />
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M0 0L6 8L12 0" fill="rgba(184,150,60,0.45)" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats panel — right 2 cols */}
          <div
            className={`lg:col-span-2 flex flex-col gap-5 transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Headline stat */}
            <div
              className="p-7 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(184,150,60,0.2) 0%, rgba(184,150,60,0.08) 100%)',
                border: '1px solid rgba(184,150,60,0.35)',
              }}
            >
              <p className="text-4xl font-serif font-bold mb-1" style={{ color: 'var(--gold)' }}>43.000+</p>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Guru Bahasa Inggris Madrasah
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Populasi Nasional Target Program</p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '2.000', label: 'Peserta CEST', sub: 'Seleksi Awal' },
                { val: '1.000', label: 'Peserta CEfT', sub: 'Pelatihan Cambridge' },
                { val: '500', label: 'Peserta PBI', sub: 'Residensial Intensif' },
                { val: '150+', label: 'Trainer Nasional', sub: 'Berkualifikasi Intl.' },
              ]?.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="text-xl font-serif font-bold text-white mb-0.5">{stat?.val}</p>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--gold)' }}>{stat?.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat?.sub}</p>
                </div>
              ))}
            </div>

            {/* Sustainability note */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(184,150,60,0.15)',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Keberlanjutan Sistem Nasional
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Master Trainer dan Lead Trainer yang terbentuk akan menjadi tulang punggung sistem pengembangan guru Bahasa Inggris madrasah yang berkelanjutan dan mandiri di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
