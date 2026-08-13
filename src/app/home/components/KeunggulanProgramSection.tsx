'use client';

import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    num: '01',
    title: 'End-to-End Programme Design',
    subtitle: 'Program Komprehensif dari Asesmen hingga Hasil Belajar',
    body: 'Program MBI tidak berhenti pada pelatihan guru semata. Dirancang secara menyeluruh mencakup asesmen nasional, pelatihan terstandar, pengimbasan, ToT internasional, implementasi mapel, hingga pengukuran hasil belajar siswa secara terstruktur.',
    points: [
      'Asesmen Awal Nasional Guru Madrasah',
      'Cambridge English Skills Test (CEST)',
      'Cambridge English for Teachers (CEfT)',
      'Pesantren Bahasa Inggris (PBI)',
      'International Training of Trainers',
      'Implementasi Mapel & Pengukuran Hasil Belajar',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Outcome-Oriented & Sustainability Driven',
    subtitle: 'Berorientasi Hasil dan Keberlanjutan Sistem Nasional',
    body: 'Setiap tahapan program dirancang dengan target capaian yang terukur. Fokus pada peningkatan kompetensi guru, peningkatan kompetensi siswa sesuai standar CEFR, serta pembangunan sistem pengembangan guru yang dapat berlanjut secara mandiri.',
    points: [
      'Peningkatan kompetensi guru terstandar Cambridge',
      'Peningkatan capaian CEFR peserta didik madrasah',
      'Pembentukan Master Trainer dan Lead Trainer Nasional',
      'Keberlanjutan sistem pengembangan guru secara mandiri',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Top-to-Bottom Reform Logic',
    subtitle: 'Transformasi Sistemik dari Trainer hingga Peserta Didik',
    body: 'Program MBI menggunakan pendekatan transformasi sistemik dari atas ke bawah. Dimulai dari pembentukan Master Trainer berkualifikasi internasional, diteruskan melalui Lead Trainer, hingga menjangkau seluruh guru madrasah dan berdampak pada peserta didik.',
    points: [
      'Master Trainer — kualifikasi CELT-P/CELT-S internasional',
      'Lead Trainer — pengimbasan ke guru madrasah',
      'Guru Madrasah — implementasi pembelajaran terstandar',
      'Peserta Didik — capaian CEFR A1, A2, B1',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function KeunggulanProgramSection() {
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
      id="keunggulan-program"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Keunggulan Program MBI
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 max-w-3xl leading-tight">
            Tiga Pilar Keunggulan Program Nasional
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Program MBI dirancang dengan pendekatan yang komprehensif, terukur, dan berkelanjutan untuk memastikan dampak nyata bagi guru dan peserta didik madrasah di seluruh Indonesia.
          </p>
        </div>

        {/* Two-column layout: cards left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Feature cards — left 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-6">
            {features?.map((item, i) => (
              <div
                key={item?.num}
                className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className="h-full p-7 rounded-2xl flex flex-col"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(184,150,60,0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {/* Icon + number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(184,150,60,0.15)', color: 'var(--gold)' }}
                    >
                      {item?.icon}
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>
                      {item?.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 leading-snug">{item?.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--gold)' }}>{item?.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {item?.body}
                  </p>

                  {/* Points */}
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5">
                    {item?.points?.map((point, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: 'var(--gold)' }}
                        />
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual element — right 2 columns */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-300 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Main image */}
              <div
                className="overflow-hidden rounded-2xl"
                style={{ border: '1px solid rgba(184,150,60,0.2)' }}
              >
                <img
                  src="/assets/images/mbi_image_refined_via_chatgpt-1786649818622.png"
                  alt="Transformasi Kompetensi Guru Madrasah Berbasis Standar Cambridge — programme implementation"
                  className="w-full h-auto object-cover"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Caption card */}
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(184,150,60,0.15)',
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                  Visi Program
                </p>
                <p className="text-sm font-semibold text-white leading-snug">
                  Transformasi Kompetensi Guru Madrasah Berbasis Standar Cambridge
                </p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Membangun ekosistem pembelajaran Bahasa Inggris yang berkelanjutan di seluruh madrasah Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
