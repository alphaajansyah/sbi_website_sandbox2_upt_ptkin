'use client';

import React, { useEffect, useRef, useState } from 'react';

const pipeline = [
  {
    num: '43.210',
    label: 'Guru Bahasa Inggris Madrasah',
    sublabel: 'Populasi Nasional',
    width: '100%',
    highlight: false,
  },
  {
    num: '2.000',
    label: 'Peserta Cambridge English Skills Test (CEST)',
    sublabel: 'Seleksi Kompetensi Awal',
    width: '85%',
    highlight: false,
  },
  {
    num: '1.000',
    label: 'Peserta Cambridge English for Teachers (CEfT)',
    sublabel: 'Pelatihan Berbasis Cambridge',
    width: '70%',
    highlight: false,
  },
  {
    num: '500',
    label: 'Peserta Pesantren Bahasa Inggris (PBI)',
    sublabel: 'Residensial Intensif 200+ Jam',
    width: '55%',
    highlight: false,
  },
  {
    num: '150',
    label: 'Trainer Nasional',
    sublabel: 'International Training of Trainers',
    width: '40%',
    highlight: false,
  },
  {
    num: 'Master Trainer',
    label: '& Lead Trainer',
    sublabel: 'Kapasitas Nasional Berkelanjutan',
    width: '28%',
    highlight: true,
  },
];

export default function PipelinePengembanganGuruSection() {
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
      id="pengembangan-guru"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-5xl mx-auto">
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

        {/* Funnel visualization */}
        <div className="flex flex-col items-center gap-3">
          {pipeline?.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 w-full flex justify-center ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="relative flex items-center justify-between px-6 py-4 rounded-xl"
                style={{
                  width: item?.width,
                  background: item?.highlight
                    ? 'linear-gradient(135deg, rgba(184,150,60,0.25) 0%, rgba(184,150,60,0.15) 100%)'
                    : 'rgba(255,255,255,0.06)',
                  border: item?.highlight
                    ? '1px solid rgba(184,150,60,0.5)'
                    : '1px solid rgba(255,255,255,0.1)',
                  minWidth: '280px',
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <p
                      className="font-serif font-bold leading-none"
                      style={{
                        color: item?.highlight ? 'var(--gold)' : 'white',
                        fontSize: item?.highlight ? '1.25rem' : '1.5rem',
                      }}
                    >
                      {item?.num}
                    </p>
                  </div>
                  {/* Label */}
                  <div>
                    <p
                      className="text-sm font-semibold leading-snug"
                      style={{ color: item?.highlight ? 'var(--gold)' : 'rgba(255,255,255,0.9)' }}
                    >
                      {item?.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {item?.sublabel}
                    </p>
                  </div>
                </div>

                {/* Step indicator */}
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                  style={{
                    background: item?.highlight ? 'var(--gold)' : 'rgba(184,150,60,0.2)',
                    color: item?.highlight ? 'var(--green-deep)' : 'var(--gold)',
                  }}
                >
                  {i + 1}
                </div>
              </div>

              {/* Arrow connector */}
              {i < pipeline?.length - 1 && (
                <div className="absolute mt-[52px] flex flex-col items-center" style={{ zIndex: 1 }}>
                  <div className="w-px h-3" style={{ background: 'rgba(184,150,60,0.3)' }} />
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M0 0L5 6L10 0" fill="rgba(184,150,60,0.4)" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-12 p-6 rounded-2xl transition-all duration-1000 delay-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(184,150,60,0.15)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Keberlanjutan Sistem Nasional
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Master Trainer dan Lead Trainer yang terbentuk akan menjadi tulang punggung sistem pengembangan guru Bahasa Inggris madrasah yang berkelanjutan dan mandiri di seluruh Indonesia.
              </p>
            </div>
            <div
              className="flex-shrink-0 px-6 py-4 rounded-xl text-center"
              style={{ background: 'rgba(184,150,60,0.1)', border: '1px solid rgba(184,150,60,0.2)' }}
            >
              <p className="text-2xl font-serif font-bold" style={{ color: 'var(--gold)' }}>150+</p>
              <p className="text-xs text-white/60 mt-1">Trainer Nasional<br />Berkualifikasi Cambridge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
