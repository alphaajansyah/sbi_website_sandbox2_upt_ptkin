'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Kebijakan Nasional',
    desc: 'Landasan kebijakan Kementerian Agama RI dan Permendikdasmen No. 13 Tahun 2025 sebagai dasar implementasi program MBI secara nasional.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    color: 'rgba(184,150,60,0.9)',
  },
  {
    num: '02',
    title: 'Asesmen Awal Nasional',
    desc: 'Pemetaan kompetensi awal seluruh guru Bahasa Inggris madrasah secara nasional untuk menentukan jalur pengembangan yang tepat.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
      </svg>
    ),
    color: 'rgba(184,150,60,0.85)',
  },
  {
    num: '03',
    title: 'Cambridge English Skills Test (CEST)',
    desc: 'Tes kompetensi Bahasa Inggris berbasis Cambridge untuk mengidentifikasi 2.000 guru terbaik yang akan mengikuti program CEfT.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    color: 'rgba(184,150,60,0.8)',
  },
  {
    num: '04',
    title: 'Cambridge English for Teachers (CEfT)',
    desc: 'Program pelatihan guru berbasis Cambridge dengan pendekatan hybrid learning, flipped learning, dan LIFT Mobile Learning App untuk 1.000 guru terpilih.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    color: 'rgba(184,150,60,0.75)',
  },
  {
    num: '05',
    title: 'Pesantren Bahasa Inggris (PBI)',
    desc: 'Program residensial intensif 200+ jam pembelajaran untuk mempersiapkan 500 guru terbaik mengikuti Cambridge Qualifications dan TKT.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: 'rgba(184,150,60,0.7)',
  },
  {
    num: '06',
    title: 'International Training of Trainers',
    desc: 'Program ToT internasional di Inggris (CELT-P) dan Australia (CELT-S) untuk membentuk 150 Trainer Nasional berkualifikasi Cambridge.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    color: 'rgba(184,150,60,0.65)',
  },
  {
    num: '07',
    title: 'Master Trainer & Lead Trainer',
    desc: 'Pembentukan jaringan Master Trainer dan Lead Trainer nasional yang siap mengimbaskan kompetensi kepada seluruh guru Bahasa Inggris madrasah di wilayah masing-masing.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: 'rgba(184,150,60,0.6)',
  },
  {
    num: '08',
    title: 'Implementasi Pembelajaran',
    desc: 'Penerapan pembelajaran Bahasa Inggris terstandar Cambridge di madrasah, selaras dengan Kurikulum Nasional Madrasah dan berbasis CEFR.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    color: 'rgba(184,150,60,0.55)',
  },
  {
    num: '09',
    title: 'Capaian Kompetensi Siswa',
    desc: 'Peningkatan capaian kompetensi Bahasa Inggris peserta didik madrasah sesuai standar CEFR: MI (A1), MTs (A2), MA (B1).',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    color: 'rgba(184,150,60,1)',
  },
];

export default function AlurProgramSection() {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const isRevealed = mounted && revealed;

  return (
    <section
      id="alur-program"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-1000"
          style={{ opacity: isRevealed ? 1 : 0, transform: isRevealed ? 'translateY(0)' : 'translateY(32px)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Alur Program Nasional
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Perjalanan Program MBI dari Kebijakan hingga Kompetensi Siswa
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program MBI dirancang sebagai alur terpadu yang menghubungkan kebijakan nasional dengan peningkatan kompetensi nyata guru dan peserta didik madrasah.
          </p>
        </div>

        {/* Desktop: Connected roadmap grid — 3 columns, 3 rows */}
        <div className="hidden md:block">
          {/* Row 1: steps 1-3 */}
          <div className="grid grid-cols-3 gap-0 mb-0">
            {steps?.slice(0, 3)?.map((step, i) => (
              <div
                key={step?.num}
                className="relative"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ${i * 80}ms, transform 0.6s ${i * 80}ms`,
                }}
              >
                <div
                  className="mx-3 p-6 rounded-2xl h-full"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(26,58,42,0.1)',
                    boxShadow: '0 2px 16px rgba(26,58,42,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--green-deep)', color: step?.color }}
                    >
                      {step?.icon}
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>{step?.num}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-2 leading-snug" style={{ color: 'var(--green-deep)' }}>{step?.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{step?.desc}</p>
                </div>
                {/* Right connector arrow (not last in row) */}
                {i < 2 && (
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-10 flex items-center">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                      <path d="M0 8H20M14 2L20 8L14 14" stroke="rgba(184,150,60,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Down arrow right side */}
          <div className="flex justify-end pr-6 my-2">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path d="M8 0V20M2 14L8 20L14 14" stroke="rgba(184,150,60,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Row 2: steps 4-6 reversed (right to left flow) */}
          <div className="grid grid-cols-3 gap-0 mb-0">
            {steps?.slice(3, 6)?.reverse()?.map((step, i) => (
              <div
                key={step?.num}
                className="relative"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ${(i + 3) * 80}ms, transform 0.6s ${(i + 3) * 80}ms`,
                }}
              >
                <div
                  className="mx-3 p-6 rounded-2xl h-full"
                  style={{
                    background: 'var(--green-deep)',
                    border: '1px solid rgba(184,150,60,0.2)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(184,150,60,0.15)', color: 'var(--gold)' }}
                    >
                      {step?.icon}
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>{step?.num}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-2 leading-snug text-white">{step?.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{step?.desc}</p>
                </div>
                {/* Left connector arrow (not last in reversed row) */}
                {i < 2 && (
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-10 flex items-center">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                      <path d="M24 8H4M10 2L4 8L10 14" stroke="rgba(184,150,60,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Down arrow left side */}
          <div className="flex justify-start pl-6 my-2">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path d="M8 0V20M2 14L8 20L14 14" stroke="rgba(184,150,60,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Row 3: steps 7-9 */}
          <div className="grid grid-cols-3 gap-0">
            {steps?.slice(6, 9)?.map((step, i) => (
              <div
                key={step?.num}
                className="relative"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ${(i + 6) * 80}ms, transform 0.6s ${(i + 6) * 80}ms`,
                }}
              >
                <div
                  className="mx-3 p-6 rounded-2xl h-full"
                  style={{
                    background: i === 2
                      ? 'linear-gradient(135deg, rgba(184,150,60,0.2) 0%, rgba(184,150,60,0.1) 100%)'
                      : 'white',
                    border: i === 2
                      ? '1px solid rgba(184,150,60,0.5)'
                      : '1px solid rgba(26,58,42,0.1)',
                    boxShadow: i === 2
                      ? '0 4px 24px rgba(184,150,60,0.15)'
                      : '0 2px 16px rgba(26,58,42,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: i === 2 ? 'rgba(184,150,60,0.2)' : 'var(--green-deep)',
                        color: 'var(--gold)',
                      }}
                    >
                      {step?.icon}
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>{step?.num}</span>
                  </div>
                  <h3
                    className="text-sm font-bold mb-2 leading-snug"
                    style={{ color: i === 2 ? 'var(--green-deep)' : 'var(--green-deep)' }}
                  >
                    {step?.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: i === 2 ? 'rgba(26,58,42,0.7)' : 'var(--ink-soft)' }}>
                    {step?.desc}
                  </p>
                  {i === 2 && (
                    <div className="mt-3 flex gap-2">
                      {['MI: A1', 'MTs: A2', 'MA: B1']?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(184,150,60,0.2)', color: 'var(--green-deep)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {/* Right connector arrow (not last) */}
                {i < 2 && (
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-10 flex items-center">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                      <path d="M0 8H20M14 2L20 8L14 14" stroke="rgba(184,150,60,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline — all steps visible */}
        <div className="md:hidden flex flex-col gap-0">
          {steps?.map((step, i) => (
            <div
              key={step?.num}
              className="flex gap-4"
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${i * 60}ms, transform 0.6s ${i * 60}ms`,
              }}
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--green-deep)', color: 'var(--gold)', border: '1px solid rgba(184,150,60,0.3)' }}
                >
                  {step?.icon}
                </div>
                {i < steps?.length - 1 && (
                  <div className="w-px flex-1 my-1" style={{ background: 'rgba(184,150,60,0.25)', minHeight: '24px' }} />
                )}
              </div>
              {/* Content */}
              <div className="pb-5 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>{step?.num}</span>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--green-deep)' }}>{step?.title}</h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{step?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
