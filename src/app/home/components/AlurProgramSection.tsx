'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Kebijakan Nasional',
    desc: 'Landasan kebijakan Kementerian Agama RI dan Permendikdasmen No. 13 Tahun 2025 sebagai dasar implementasi program MBI secara nasional.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Asesmen Awal Nasional Guru Madrasah',
    desc: 'Pemetaan kompetensi awal seluruh guru Bahasa Inggris madrasah secara nasional untuk menentukan jalur pengembangan yang tepat.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Cambridge English Skills Test (CEST)',
    desc: 'Tes kompetensi Bahasa Inggris berbasis Cambridge untuk mengidentifikasi 2.000 guru terbaik yang akan mengikuti program CEfT.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Cambridge English for Teachers (CEfT)',
    desc: 'Program pelatihan guru berbasis Cambridge dengan pendekatan hybrid learning, flipped learning, dan LIFT Mobile Learning App untuk 1.000 guru terpilih.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Pesantren Bahasa Inggris (PBI)',
    desc: 'Program residensial intensif 200+ jam pembelajaran untuk mempersiapkan 500 guru terbaik mengikuti Cambridge Qualifications dan TKT.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'International Training of Trainers',
    desc: 'Program ToT internasional di Inggris (CELT-P) dan Australia (CELT-S) untuk membentuk 150 Trainer Nasional berkualifikasi Cambridge.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Master Trainer dan Lead Trainer',
    desc: 'Pembentukan jaringan Master Trainer dan Lead Trainer nasional yang siap mengimbaskan kompetensi kepada seluruh guru Bahasa Inggris madrasah di wilayah masing-masing.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Implementasi Mapel Bahasa Inggris',
    desc: 'Penerapan pembelajaran Bahasa Inggris terstandar Cambridge di madrasah, selaras dengan Kurikulum Nasional Madrasah dan berbasis CEFR.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    num: '09',
    title: 'Kompetensi Siswa',
    desc: 'Peningkatan capaian kompetensi Bahasa Inggris peserta didik madrasah sesuai standar CEFR: MI (A1), MTs (A2), MA (B1).',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function AlurProgramSection() {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

        {/* Desktop: Interactive step selector */}
        <div className="hidden md:grid grid-cols-9 gap-2 mb-10">
          {steps?.map((step, i) => (
            <button
              key={step?.num}
              onClick={() => setActiveStep(i)}
              className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300"
              style={{
                background: activeStep === i ? 'var(--green-deep)' : 'white',
                border: activeStep === i ? '1px solid rgba(184,150,60,0.4)' : '1px solid rgba(168,176,154,0.2)',
                boxShadow: activeStep === i ? '0 4px 20px rgba(26,58,42,0.15)' : 'none',
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${i * 60}ms, transform 0.6s ${i * 60}ms, background 0.3s, border 0.3s, box-shadow 0.3s`,
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: activeStep === i ? 'rgba(184,150,60,0.2)' : 'rgba(26,58,42,0.06)',
                  color: activeStep === i ? 'var(--gold)' : 'var(--green-deep)',
                }}
              >
                {step?.icon}
              </div>
              <span
                className="text-xs font-mono font-bold"
                style={{ color: activeStep === i ? 'var(--gold)' : 'var(--ink-soft)' }}
              >
                {step?.num}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop: Active step detail */}
        <div
          className="hidden md:block mb-10 p-8 rounded-2xl transition-all duration-500"
          style={{
            background: 'var(--green-deep)',
            border: '1px solid rgba(184,150,60,0.2)',
            opacity: isRevealed ? 1 : 0,
          }}
        >
          <div className="flex items-start gap-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(184,150,60,0.15)', color: 'var(--gold)' }}
            >
              {steps?.[activeStep]?.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>
                  Tahap {steps?.[activeStep]?.num}
                </span>
                <div className="w-px h-4" style={{ background: 'rgba(184,150,60,0.3)' }} />
                <span className="text-xs text-white/50 uppercase tracking-wider">Alur Program MBI</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{steps?.[activeStep]?.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {steps?.[activeStep]?.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {steps?.map((step, i) => (
            <div
              key={step?.num}
              className="flex gap-4"
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${i * 80}ms, transform 0.6s ${i * 80}ms`,
              }}
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--green-deep)', color: 'var(--gold)', border: '1px solid rgba(184,150,60,0.3)' }}
                >
                  {step?.icon}
                </div>
                {i < steps?.length - 1 && (
                  <div className="w-px flex-1 my-1" style={{ background: 'rgba(184,150,60,0.2)', minHeight: '24px' }} />
                )}
              </div>
              {/* Content */}
              <div className="pb-6 flex-1">
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
