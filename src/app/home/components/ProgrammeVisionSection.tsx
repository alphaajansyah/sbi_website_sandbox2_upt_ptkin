'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ImageFeature } from '@/components/ui/ImageComponents';

const transformSteps = [
  { label: 'UPT Bahasa Existing', sub: 'Kondisi awal unit bahasa PTKIN', isStart: true },
  { label: 'Penguatan SDM', sub: 'Pelatihan dan pengembangan profesional' },
  { label: 'Standarisasi Program', sub: 'Kurikulum dan metodologi berstandar internasional' },
  { label: 'Sistem Pengelolaan', sub: 'Tata kelola akademik, administrasi, dan keuangan' },
  { label: 'Layanan & Sertifikasi Internasional', sub: 'Akses kualifikasi dan sertifikasi Cambridge English' },
  { label: 'UPT Bahasa Profesional dan Mandiri', sub: 'Profesional • Mandiri • Berdaya Saing', isEnd: true },
];

export default function ProgrammeVisionSection() {
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
      id="visi-program"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Visi Transformasi
            </span>
            <div style={{ height: '2px', background: 'linear-gradient(270deg, var(--gold), transparent)', width: '64px' }} />
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4">
            Dari Unit Bahasa menjadi
          </h2>
          <h2 className="font-serif text-3xl md:text-5xl italic" style={{ color: 'var(--gold)' }}>
            Pusat Layanan Bahasa Profesional
          </h2>
        </div>

        {/* Wide contextual image */}
        <div className={`mb-14 transition-all duration-1000 delay-150 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ImageFeature
            src="/assets/images/facilities__2___1_-1785554218651.png"
            alt="Fasilitas UPT Pusat Bahasa: Laboratorium Komputer, Lobby Layanan, dan Ruang Kerja."
            caption="Contoh fasilitas UPT Pusat Bahasa yang mendukung pelatihan, layanan, dan sertifikasi berstandar internasional."
            objectPosition="center center"
            aspectRatio="16/7"
            objectFit="contain"
          />
        </div>

        {/* Transformation diagram */}
        <div className={`transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center gap-0">
            {transformSteps?.map((step, i) => (
              <React.Fragment key={step?.label}>
                {/* Step card */}
                <div
                  className="w-full max-w-lg"
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div
                    className="px-8 py-5 rounded-2xl text-center"
                    style={
                      step?.isEnd
                        ? {
                            background: 'var(--green-deep)',
                            border: '2px solid var(--gold)',
                            boxShadow: '0 8px 32px rgba(26,58,42,0.25)',
                          }
                        : step?.isStart
                        ? {
                            background: 'var(--fog)',
                            border: '1px solid rgba(168,176,154,0.4)',
                          }
                        : {
                            background: 'white',
                            border: '1px solid rgba(26,58,42,0.12)',
                            boxShadow: '0 2px 12px rgba(26,58,42,0.06)',
                          }
                    }
                  >
                    <p
                      className="font-bold text-base md:text-lg leading-snug mb-1"
                      style={{ color: step?.isEnd ? 'white' : step?.isStart ? 'var(--ink-soft)' : 'var(--green-deep)' }}
                    >
                      {step?.label}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: step?.isEnd ? 'rgba(255,255,255,0.65)' : 'var(--ink-soft)' }}
                    >
                      {step?.sub}
                    </p>
                  </div>
                </div>

                {/* Connector arrow */}
                {i < transformSteps?.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <div className="w-px h-6" style={{ background: 'var(--gold)', opacity: 0.5 }} />
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M6 8L0 0H12L6 8Z" fill="var(--gold)" opacity="0.7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Supporting note */}
        <div
          className={`mt-14 text-center transition-all duration-1000 delay-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--ink-soft)' }}>
            Program ini mendampingi setiap tahap transformasi — dari asesmen awal hingga UPT Bahasa yang beroperasi secara profesional dan mandiri dengan standar internasional.
          </p>
        </div>
      </div>
    </section>
  );
}
