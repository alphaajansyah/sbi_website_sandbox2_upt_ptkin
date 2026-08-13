'use client';

import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'Hybrid Learning',
    desc: 'Kombinasi pembelajaran tatap muka dan daring yang fleksibel, memungkinkan guru madrasah dari seluruh Indonesia mengikuti program tanpa meninggalkan tugas mengajar.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: 'Flipped Learning',
    desc: 'Pendekatan pembelajaran terbalik di mana guru mempelajari materi secara mandiri sebelum sesi tatap muka, memaksimalkan waktu interaksi untuk praktik dan diskusi mendalam.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
  },
  {
    title: 'LIFT Mobile Learning App',
    desc: 'Aplikasi pembelajaran mobile Cambridge yang memungkinkan guru belajar kapan saja dan di mana saja, dengan konten yang disesuaikan dengan kebutuhan guru madrasah Indonesia.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: 'Coaching & Mentoring',
    desc: 'Pendampingan individual dari trainer berpengalaman Cambridge untuk memastikan setiap peserta mencapai target kompetensi yang ditetapkan.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Cambridge Teaching Framework',
    desc: 'Kerangka pengembangan guru berbasis Cambridge yang mencakup kompetensi linguistik, metodologi pengajaran, dan praktik kelas yang terstandar secara internasional.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: 'Kualifikasi Cambridge',
    desc: 'Peserta yang berhasil menyelesaikan program akan mendapatkan kualifikasi Cambridge yang diakui secara internasional sebagai bukti kompetensi profesional.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

export default function CEfTSection() {
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
      id="ceft"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="rule-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Cambridge English for Teachers
                </span>
              </div>
              <h2 className="question-serif text-3xl md:text-5xl mb-6 max-w-3xl">
                CEfT — Program Pelatihan Guru Berbasis Cambridge
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
                Cambridge English for Teachers (CEfT) adalah program pelatihan komprehensif yang dirancang khusus untuk meningkatkan kompetensi guru Bahasa Inggris madrasah melalui pendekatan pembelajaran inovatif berbasis standar Cambridge.
              </p>
              {/* Key stats */}
              <div className="flex flex-wrap gap-4">
                {[
                  { num: '1.000', label: 'Peserta CEfT' },
                  { num: '120+', label: 'Jam Pembelajaran' },
                  { num: 'B2', label: 'Target CEFR' },
                ]?.map((stat, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 rounded-xl"
                    style={{
                      background: 'var(--green-deep)',
                      border: '1px solid rgba(184,150,60,0.2)',
                    }}
                  >
                    <p className="text-xl font-serif font-bold" style={{ color: 'var(--gold)' }}>{stat?.num}</p>
                    <p className="text-xs text-white/60 mt-0.5">{stat?.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/assets/images/ChatGPT_Image_Aug_14__2026__05_05_29_AM__1_-1786655207389.png"
                  alt="Guru madrasah dalam sesi Cambridge English for Teachers — pelatihan kompetensi Bahasa Inggris profesional"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(15,35,24,0.6) 100%)' }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="px-4 py-2 rounded-lg inline-block"
                    style={{ background: 'rgba(15,35,24,0.85)', border: '1px solid rgba(184,150,60,0.3)' }}
                  >
                    <p className="text-xs font-semibold" style={{ color: 'var(--gold)' }}>Cambridge English Authorised Programme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features?.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="h-full p-6 rounded-2xl"
                style={{
                  background: 'white',
                  border: '1px solid rgba(168,176,154,0.2)',
                  boxShadow: '0 4px 24px rgba(26,58,42,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(26,58,42,0.08)', color: 'var(--green-deep)' }}
                >
                  {item?.icon}
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--green-deep)' }}>{item?.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
