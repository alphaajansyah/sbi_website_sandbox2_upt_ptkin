'use client';

import React, { useEffect, useRef, useState } from 'react';

const semesters = [
  {
    id: 'sem1',
    number: 'I',
    title: 'Pengembangan Kompetensi Guru Tahap I',
    items: ['CET A2', 'CEP', 'TKT Module 1 Preparation', '200 jam'],
    qualifications: ['Official Cambridge English Qualification A2', 'Official TKT Module 1'],
    color: 'var(--navy)',
  },
  {
    id: 'sem2',
    number: 'II',
    title: 'Pengembangan Kompetensi Guru Tahap II',
    items: ['CET B1', 'CEP', 'TKT Modules 2 & 3 Preparation', '200 jam'],
    qualifications: ['Official Cambridge English Qualification B1', 'Official TKT Modules 2 & 3'],
    note: 'Peserta terpilih dapat melanjutkan ke TOT Master Trainers / Lead Trainers.',
    color: 'var(--navy-light)',
  },
  {
    id: 'sem3',
    number: 'III',
    title: 'Implementasi Pembelajaran & Pendampingan Profesional',
    items: ['MAPEL Cambridge English', 'InSERTT', 'Input Sessions', 'Peer Teaching & Feedback', 'Master Class', 'Lesson Plan Guide', 'Teaching Practice', 'Classroom Observation', 'Post-Teaching Feedback'],
    qualifications: ['120 jam InSERTT'],
    color: 'var(--navy)',
  },
  {
    id: 'sem4',
    number: 'IV',
    title: 'Pengimbasan & Penguatan Kapasitas Daerah',
    items: ['Teacher Development', 'Lesson Planning Support', 'Classroom Observation', 'Post-Teaching Feedback', 'Mentoring', 'Professional Support'],
    qualifications: ['Supervision & Quality Assurance by Briton Trainers'],
    note: 'Tahap ini merupakan CEfT (Cambridge English for Teachers) yang dijalankan secara mandiri oleh Master Trainers dan Lead Trainers lokal dari angkatan sebelumnya — sehingga daerah lebih mandiri dan tidak bergantung pada trainers eksternal.',
    color: 'var(--navy-light)',
  },
];

export default function ImplementationJourneySection() {
  const [revealed, setRevealed] = useState(false);
  const [activeSem, setActiveSem] = useState('sem1');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = semesters.find((s) => s.id === activeSem)!;

  return (
    <section
      id="jalur-implementasi"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--navy-deep)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Jalur Implementasi Program SBI
            </span>
          </div>
          <h2 className="font-serif text-white text-4xl md:text-6xl mb-4">
            Empat semester.{' '}
            <span className="italic" style={{ color: 'var(--gold)' }}>Satu sistem pengembangan berkelanjutan.</span>
          </h2>
        </div>

        {/* QA Banner */}
        <div
          className={`mb-10 px-6 py-3 rounded-full text-center text-xs font-bold uppercase tracking-widest transition-all duration-1000 delay-100 ${revealed ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'rgba(196,164,74,0.08)',
            border: '1px solid rgba(196,164,74,0.2)',
            color: 'var(--gold)',
          }}
        >
          Monitoring • Evaluasi • Supervisi • Quality Assurance
        </div>

        {/* Semester tabs — horizontal on desktop, vertical on mobile */}
        <div className={`transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Tab buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {semesters.map((sem) => (
              <button
                key={sem.id}
                onClick={() => setActiveSem(sem.id)}
                className="rounded-xl px-4 py-4 text-left transition-all duration-300"
                style={{
                  background: activeSem === sem.id ? 'rgba(196,164,74,0.15)' : 'rgba(255,255,255,0.05)',
                  border: activeSem === sem.id ? '1px solid rgba(196,164,74,0.4)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
                  Semester {sem.number}
                </p>
                <p className="text-xs text-white/70 leading-snug">{sem.title}</p>
              </button>
            ))}
          </div>

          {/* Active semester detail */}
          <div
            className="rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{
              background: 'rgba(27,42,74,0.6)',
              border: '1px solid rgba(196,164,74,0.2)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Semester {active.number}
              </p>
              <h3 className="font-serif text-white text-xl md:text-2xl mb-6">{active.title}</h3>
              <div className="space-y-2">
                {active.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Kualifikasi & Capaian
              </p>
              <div className="space-y-3">
                {active.qualifications.map((q) => (
                  <div
                    key={q}
                    className="px-4 py-3 rounded-xl text-sm font-medium"
                    style={{ background: 'rgba(196,164,74,0.12)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.25)' }}
                  >
                    {q}
                  </div>
                ))}
              </div>
              {active.note && (
                <p className="text-xs mt-6 italic" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {active.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
