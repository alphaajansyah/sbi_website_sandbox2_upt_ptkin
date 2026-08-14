'use client';

import React, { useEffect, useRef, useState } from 'react';

const targets = [
  {
    jenjang: 'Madrasah Ibtidaiyah',
    abbr: 'MI',
    cefr: 'A1',
    cefrLabel: 'Beginner',
    color: 'rgba(184,150,60,0.10)',
    borderColor: 'rgba(184,150,60,0.22)',
  },
  {
    jenjang: 'Madrasah Tsanawiyah',
    abbr: 'MTs',
    cefr: 'A2',
    cefrLabel: 'Elementary',
    color: 'rgba(184,150,60,0.16)',
    borderColor: 'rgba(184,150,60,0.32)',
  },
  {
    jenjang: 'Madrasah Aliyah',
    abbr: 'MA',
    cefr: 'B1',
    cefrLabel: 'Intermediate',
    color: 'rgba(184,150,60,0.22)',
    borderColor: 'rgba(184,150,60,0.45)',
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
      className="py-24 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Capaian Peserta Didik yang Diharapkan
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Standar Kompetensi Bahasa Inggris Peserta Didik Madrasah
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program MBI tidak memandang pelatihan guru sebagai titik akhir. Pengembangan guru dirancang untuk memperkuat implementasi di ruang kelas dan pada akhirnya meningkatkan kompetensi Bahasa Inggris peserta didik.
          </p>
        </div>

        {/* Logic chain */}
        <div
          className={`mb-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { label: 'Kompetensi Guru', icon: '👨‍🏫' },
            { label: 'Implementasi Kelas', icon: '🏫' },
            { label: 'Kompetensi Bahasa Inggris Siswa', icon: '🎓' },
          ]?.map((item, i) => (
            <React.Fragment key={i}>
              <div
                className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl"
                style={{
                  background: 'white',
                  border: '1px solid rgba(168,176,154,0.2)',
                  boxShadow: '0 4px 16px rgba(26,58,42,0.05)',
                  minWidth: '160px',
                }}
              >
                <span className="text-2xl">{item?.icon}</span>
                <p className="text-xs font-semibold text-center" style={{ color: 'var(--green-deep)' }}>{item?.label}</p>
              </div>
              {i < 2 && (
                <div className="flex items-center justify-center px-2">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="hidden sm:block">
                    <path d="M0 7H16M10 1L16 7L10 13" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="sm:hidden">
                    <path d="M7 0V16M1 10L7 16L13 10" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CEFR target cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
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
                  boxShadow: '0 4px 20px rgba(26,58,42,0.06)',
                }}
              >
                {/* Header band */}
                <div
                  className="px-6 py-5"
                  style={{ background: item?.color, borderBottom: `1px solid ${item?.borderColor}` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold" style={{ color: 'var(--ink-soft)' }}>{item?.jenjang}</p>
                      <p className="text-2xl font-serif font-bold" style={{ color: 'var(--green-deep)' }}>{item?.abbr}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-serif font-bold" style={{ color: 'var(--gold)' }}>{item?.cefr}</p>
                      <p className="text-xs font-semibold" style={{ color: 'var(--ink-soft)' }}>{item?.cefrLabel}</p>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                    Target Capaian CEFR
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                    Peserta didik {item?.jenjang} diharapkan mencapai level {item?.cefr} ({item?.cefrLabel}) pada kerangka CEFR internasional melalui pembelajaran Bahasa Inggris yang diperkuat oleh guru terlatih.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CEFR scale */}
        <div
          className={`p-7 rounded-2xl transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
            <div className="flex items-center gap-1.5 flex-shrink-0 flex-wrap">
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
