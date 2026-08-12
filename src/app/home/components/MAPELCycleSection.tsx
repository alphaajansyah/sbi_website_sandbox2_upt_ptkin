'use client';

import React, { useEffect, useRef, useState } from 'react';

const phases = [
  {
    id: 'pre',
    label: 'Pre-MAPEL',
    title: 'Persiapan Program & Kesiapan Implementasi',
    items: [
      'Penetapan sekolah dan peserta didik',
      'Baseline / Diagnostic Assessment',
      'Target CEFR',
      'Level pembelajaran',
      'Integrated Curriculum',
      'Materi Ajar Cambridge',
      '1 Siswa, 1 Buku Cambridge',
      'Kesiapan SBI Teachers',
      'Refreshment Training',
      'Programme Orientation',
      'Implementation Planning',
    ],
  },
  {
    id: 'during',
    label: 'During-MAPEL',
    title: 'Pembelajaran & Penjaminan Mutu',
    items: [
      'Pembelajaran MAPEL Cambridge English',
      'Learning Progression',
      'Assessment',
      'Mentoring',
      'InSERTT',
      'CPD',
      'School Visits',
      'Classroom Observation',
      'Professional Feedback',
      'Quality Assurance',
      'Data Analysis',
      'Periodic Reporting',
    ],
  },
  {
    id: 'post',
    label: 'Post-MAPEL',
    title: 'Evaluasi, Pengakuan Capaian & Continuous Improvement',
    items: [
      'Cambridge English Qualifications',
      'Analisis capaian peserta didik',
      'Evaluasi sekolah dan program',
      'Annual Report',
      'Cambridge Graduation & Awards',
      'Rekomendasi peningkatan mutu',
      'Perencanaan siklus implementasi berikutnya',
    ],
  },
];

export default function MAPELCycleSection() {
  const [revealed, setRevealed] = useState(false);
  const [activePhase, setActivePhase] = useState('pre');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = phases.find((p) => p.id === activePhase)!;

  return (
    <section
      id="siklus-mapel"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Dari Perencanaan Menuju Peningkatan Mutu
            </span>
          </div>
          <h2 className="question-serif text-4xl md:text-6xl mb-4">
            MAPEL Cambridge English
          </h2>
          <p className="text-base md:text-lg mb-6 max-w-2xl" style={{ color: 'var(--ink-light, #6b6b6b)' }}>
            MAPEL Cambridge English adalah mata pelajaran berbasis kurikulum Cambridge yang dirancang untuk meningkatkan kemampuan bahasa Inggris peserta didik secara terstruktur, terukur, dan berstandar internasional — mulai dari perencanaan hingga pengakuan capaian resmi dari Cambridge Assessment English.
          </p>
          <h3 className="question-serif text-3xl md:text-5xl mb-4">
            Satu siklus implementasi.{' '}
            <span className="italic">Data untuk perbaikan berikutnya.</span>
          </h3>
        </div>

        {/* Cycle visual */}
        <div className={`transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Phase selector */}
          <div className="flex flex-col sm:flex-row gap-0 mb-10 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(181,170,154,0.25)' }}>
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className="flex-1 px-6 py-5 text-center transition-all duration-300 relative"
                style={{
                  background: activePhase === phase.id ? 'var(--navy)' : 'white',
                  borderRight: i < 2 ? '1px solid rgba(181,170,154,0.25)' : 'none',
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: activePhase === phase.id ? 'var(--gold)' : 'var(--stone-dark)' }}
                >
                  {phase.label}
                </p>
                <p
                  className="text-xs leading-snug"
                  style={{ color: activePhase === phase.id ? 'rgba(255,255,255,0.7)' : 'var(--ink-soft)' }}
                >
                  {phase.title}
                </p>
                {activePhase === phase.id && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: 'var(--gold)' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active phase detail */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'white', border: '1px solid rgba(181,170,154,0.2)', boxShadow: '0 8px 32px rgba(27,42,74,0.06)' }}
          >
            <h3 className="font-semibold text-lg mb-6" style={{ color: 'var(--navy)' }}>{active.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {active.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: 'var(--fog)', border: '1px solid rgba(181,170,154,0.15)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--gold)' }} />
                  <span className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cycle arrow */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {phases.map((phase, i) => (
              <React.Fragment key={phase.id}>
                <div
                  className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: activePhase === phase.id ? 'var(--navy)' : 'rgba(181,170,154,0.2)',
                    color: activePhase === phase.id ? 'white' : 'var(--stone-dark)',
                  }}
                >
                  {phase.label}
                </div>
                {i < 2 && (
                  <span style={{ color: 'var(--gold)', fontSize: '16px' }}>→</span>
                )}
              </React.Fragment>
            ))}
            <span style={{ color: 'var(--gold)', fontSize: '16px' }}>↺</span>
          </div>
        </div>
      </div>
    </section>
  );
}
