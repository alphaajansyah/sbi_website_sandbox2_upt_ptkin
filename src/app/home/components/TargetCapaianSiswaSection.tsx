'use client';

import React, { useEffect, useRef, useState } from 'react';

const targets = [
  {
    jenjang: 'Madrasah Ibtidaiyah',
    abbr: 'MI',
    cefr: 'A1',
    cefrLabel: 'Beginner',
    qualification: 'Cambridge English: Young Learners — Starters',
    skills: ['Memahami instruksi sederhana', 'Berkomunikasi dalam situasi sehari-hari', 'Membaca teks pendek', 'Menulis kalimat dasar'],
    color: 'rgba(184,150,60,0.12)',
    borderColor: 'rgba(184,150,60,0.25)',
  },
  {
    jenjang: 'Madrasah Tsanawiyah',
    abbr: 'MTs',
    cefr: 'A2',
    cefrLabel: 'Elementary',
    qualification: 'Cambridge English: Key (KET)',
    skills: ['Memahami teks dan percakapan sederhana', 'Berkomunikasi dalam topik familiar', 'Menulis teks pendek', 'Memahami informasi faktual'],
    color: 'rgba(184,150,60,0.18)',
    borderColor: 'rgba(184,150,60,0.35)',
  },
  {
    jenjang: 'Madrasah Aliyah',
    abbr: 'MA',
    cefr: 'B1',
    cefrLabel: 'Intermediate',
    qualification: 'Cambridge English: Preliminary (PET)',
    skills: ['Memahami poin utama teks kompleks', 'Berkomunikasi dengan penutur asli', 'Menulis teks terstruktur', 'Mengekspresikan pendapat dan argumen'],
    color: 'rgba(184,150,60,0.25)',
    borderColor: 'rgba(184,150,60,0.5)',
  },
];

export default function TargetCapaianSiswaSection() {
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
      id="capaian-siswa"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Target Capaian Siswa
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Standar Kompetensi Bahasa Inggris Peserta Didik Madrasah
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program MBI menetapkan target capaian kompetensi Bahasa Inggris yang jelas dan terukur bagi peserta didik di setiap jenjang madrasah, sesuai dengan standar CEFR internasional dan kualifikasi Cambridge.
          </p>
        </div>

        {/* Target cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {targets?.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="h-full rounded-2xl overflow-hidden"
                style={{
                  background: 'white',
                  border: '1px solid rgba(168,176,154,0.2)',
                  boxShadow: '0 4px 24px rgba(26,58,42,0.06)',
                }}
              >
                {/* Header band */}
                <div
                  className="px-6 py-5"
                  style={{ background: item?.color, borderBottom: `1px solid ${item?.borderColor}` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-xs font-semibold" style={{ color: 'var(--ink-soft)' }}>{item?.jenjang}</p>
                      <p className="text-2xl font-serif font-bold" style={{ color: 'var(--green-deep)' }}>{item?.abbr}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-serif font-bold" style={{ color: 'var(--gold)' }}>{item?.cefr}</p>
                      <p className="text-xs font-semibold" style={{ color: 'var(--ink-soft)' }}>{item?.cefrLabel}</p>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-lg inline-block"
                    style={{ background: 'var(--green-deep)' }}
                  >
                    <p className="text-xs font-semibold text-white">{item?.qualification}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>
                    Capaian Kompetensi
                  </p>
                  <div className="flex flex-col gap-3">
                    {item?.skills?.map((skill, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: 'var(--gold)' }}
                        />
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CEFR scale reference */}
        <div
          className={`p-8 rounded-2xl transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'var(--green-deep)',
            border: '1px solid rgba(184,150,60,0.2)',
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Common European Framework of Reference (CEFR)
              </p>
              <p className="text-white text-sm leading-relaxed">
                Target capaian CEFR Program MBI selaras dengan standar internasional yang diakui secara global. Pencapaian B1 di tingkat MA menempatkan lulusan madrasah pada level yang setara dengan standar komunikasi profesional dasar internasional.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2']?.map((level, i) => (
                <div
                  key={level}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    background: i < 3 ? 'rgba(184,150,60,0.3)' : 'rgba(255,255,255,0.06)',
                    border: i < 3 ? '1px solid rgba(184,150,60,0.5)' : '1px solid rgba(255,255,255,0.1)',
                    color: i < 3 ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                  }}
                >
                  {level}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
