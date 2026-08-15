'use client';

import React, { useEffect, useRef, useState } from 'react';

const frameworkComponents = [
  {
    title: 'Integrasi Kurikulum Nasional Madrasah',
    desc: 'Implementasi pembelajaran Bahasa Inggris yang sepenuhnya selaras dengan Kurikulum Nasional Madrasah, memastikan relevansi dan kesesuaian dengan standar pendidikan nasional.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
  },
  {
    title: 'Keselarasan Kurikulum Cambridge',
    desc: 'Materi dan pendekatan pembelajaran diselaraskan dengan standar Cambridge, memastikan kualitas internasional dalam setiap sesi pembelajaran di madrasah.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Progresivitas Berbasis CEFR',
    desc: 'Pembelajaran dirancang dengan progresivitas yang jelas berdasarkan kerangka CEFR, dari A1 di MI hingga B1 di MA, memastikan perkembangan kompetensi yang terukur.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Perencanaan Pembelajaran',
    desc: 'Guru dilengkapi dengan kemampuan merancang rencana pembelajaran yang efektif, berbasis kompetensi, dan sesuai dengan standar Cambridge Teaching Framework.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Standar Asesmen',
    desc: 'Penerapan standar asesmen yang konsisten dan terukur, selaras dengan kerangka Cambridge, untuk memastikan pengukuran kompetensi peserta didik yang akurat dan adil.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Implementasi di Kelas',
    desc: 'Dukungan praktis bagi guru dalam mengimplementasikan metodologi pengajaran Cambridge di kelas, termasuk teknik pengelolaan kelas, penggunaan media, dan strategi pembelajaran aktif.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      </svg>
    ),
  },
];

const studentTargets = [
  {
    jenjang: 'Madrasah Ibtidaiyah',
    abbr: 'MI',
    cefr: 'A1',
    cefrLabel: 'Beginner',
    qualification: 'Cambridge English: Young Learners — Movers',
    skills: ['Memahami instruksi sederhana', 'Berkomunikasi dalam situasi sehari-hari', 'Membaca teks pendek', 'Menulis kalimat dasar'],
  },
  {
    jenjang: 'Madrasah Tsanawiyah',
    abbr: 'MTs',
    cefr: 'A2',
    cefrLabel: 'Elementary',
    qualification: 'Cambridge English: Key (KET)',
    skills: ['Memahami teks dan percakapan sederhana', 'Berkomunikasi dalam topik familiar', 'Menulis teks pendek', 'Memahami informasi faktual'],
  },
  {
    jenjang: 'Madrasah Aliyah',
    abbr: 'MA',
    cefr: 'B1',
    cefrLabel: 'Intermediate',
    qualification: 'Cambridge English: Preliminary (PET)',
    skills: ['Memahami poin utama teks kompleks', 'Berkomunikasi dengan penutur asli', 'Menulis teks terstruktur', 'Mengekspresikan pendapat dan argumen'],
  },
];

const backboneSteps = [
  { label: 'Kurikulum Nasional Madrasah', sub: 'Landasan regulasi & standar nasional' },
  { label: 'MAPEL Cambridge English', sub: 'Kerangka mata pelajaran terintegrasi' },
  { label: 'Standar Pengajaran & Asesmen Cambridge', sub: 'Metodologi & penilaian berstandar internasional' },
  { label: 'Progresivitas CEFR', sub: 'A1 → A2 → B1 sesuai jenjang madrasah' },
  { label: 'Capaian Kompetensi Siswa', sub: 'Hasil terukur & diakui secara global' },
];

export default function StandarCapaianSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.04 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="standar-capaian"
      ref={sectionRef}
      className="py-24 md:py-32 px-5 md:px-8"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── SECTION HEADER ── */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Standar &amp; Capaian
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ maxWidth: '720px', color: 'white' }}>
            MAPEL Cambridge English
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '680px' }}>
            Program MBI mengintegrasikan Cambridge English ke dalam pengembangan Mata Pelajaran (MAPEL) Bahasa Inggris di madrasah, dengan menghubungkan Kurikulum Nasional Madrasah, standar pembelajaran Cambridge, asesmen, dan target kompetensi berbasis CEFR.
          </p>
        </div>

        {/* ── CONCEPTUAL BACKBONE PATHWAY ── */}
        <div
          className={`mb-20 transition-all duration-1000 delay-150 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,150,60,0.18)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--gold)' }}>
              Kerangka Konseptual Program
            </p>
            {/* Desktop: horizontal pathway */}
            <div className="hidden md:flex items-stretch gap-0">
              {backboneSteps?.map((step, i) => (
                <React.Fragment key={i}>
                  <div
                    className="flex-1 flex flex-col items-center text-center px-3 py-4 rounded-xl"
                    style={{
                      background: i === 1 ? 'rgba(184,150,60,0.14)' : 'rgba(255,255,255,0.03)',
                      border: i === 1 ? '1px solid rgba(184,150,60,0.35)' : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-3 flex-shrink-0"
                      style={{
                        background: i === 1 ? 'var(--gold)' : 'rgba(184,150,60,0.2)',
                        color: i === 1 ? 'var(--green-deep)' : 'var(--gold)',
                      }}
                    >
                      {i + 1}
                    </div>
                    <p
                      className="text-xs font-bold leading-snug mb-1.5"
                      style={{ color: i === 1 ? 'var(--gold)' : 'rgba(255,255,255,0.9)' }}
                    >
                      {step?.label}
                    </p>
                    <p className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {step?.sub}
                    </p>
                  </div>
                  {i < backboneSteps?.length - 1 && (
                    <div className="flex items-center px-1 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M12 5l5 5-5 5" stroke="rgba(184,150,60,0.45)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            {/* Mobile: vertical pathway */}
            <div className="flex md:hidden flex-col gap-0">
              {backboneSteps?.map((step, i) => (
                <React.Fragment key={i}>
                  <div
                    className="flex items-start gap-4 px-4 py-4 rounded-xl"
                    style={{
                      background: i === 1 ? 'rgba(184,150,60,0.14)' : 'transparent',
                      border: i === 1 ? '1px solid rgba(184,150,60,0.3)' : '1px solid transparent',
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: i === 1 ? 'var(--gold)' : 'rgba(184,150,60,0.2)',
                        color: i === 1 ? 'var(--green-deep)' : 'var(--gold)',
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold leading-snug mb-0.5"
                        style={{ color: i === 1 ? 'var(--gold)' : 'rgba(255,255,255,0.9)' }}
                      >
                        {step?.label}
                      </p>
                      <p className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        {step?.sub}
                      </p>
                    </div>
                  </div>
                  {i < backboneSteps?.length - 1 && (
                    <div className="flex justify-start pl-7 py-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2v10M3 8l5 5 5-5" stroke="rgba(184,150,60,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── STAGE 1: STANDAR PEMBELAJARAN ── */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Standar Pembelajaran</h3>
            <div className="flex-1 h-px ml-2" style={{ background: 'rgba(184,150,60,0.15)' }} />
          </div>

          <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px' }}>
            Kerangka MAPEL Cambridge English memastikan implementasi pembelajaran Bahasa Inggris yang berkualitas, terstandar, dan berkelanjutan di seluruh madrasah Indonesia melalui enam komponen inti.
          </p>

          {/* Framework components — 2-col on tablet, 3-col on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworkComponents?.map((item, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${300 + i * 70}ms` }}
              >
                <div
                  className="h-full flex gap-4 p-5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(184,150,60,0.15)', color: 'var(--gold)' }}
                  >
                    {item?.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1.5 text-white leading-snug">{item?.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{item?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── STAGE 2: ASESMEN & CEFR — Cambridge Standards ── */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Asesmen &amp; CEFR</h3>
            <div className="flex-1 h-px ml-2" style={{ background: 'rgba(184,150,60,0.15)' }} />
          </div>

          {/* Cambridge standards subsection — two-column on desktop */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(184,150,60,0.2)' }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: text */}
              <div
                className="lg:w-2/5 p-8 md:p-10 flex flex-col justify-center"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>
                  Pembelajaran &amp; Asesmen Berstandar Cambridge
                </p>
                <h4 className="text-lg md:text-xl font-serif font-bold mb-4 text-white leading-snug">
                  Sumber Belajar &amp; Ekosistem Asesmen Cambridge
                </h4>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Seluruh materi, metodologi, dan asesmen dalam program MBI mengacu pada standar internasional Cambridge — mulai dari buku teks, modul pelatihan guru, hingga sertifikasi yang diakui secara global. Hal ini memastikan kualitas pembelajaran Bahasa Inggris di madrasah setara dengan standar terbaik dunia.
                </p>
                {/* CEFR mini-scale */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Skala CEFR — Target Program MBI
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {['A1', 'A2', 'B1', 'B2', 'C1', 'C2']?.map((level, i) => (
                      <div
                        key={level}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
                        style={{
                          background: i < 3 ? 'rgba(184,150,60,0.28)' : 'rgba(255,255,255,0.05)',
                          border: i < 3 ? '1px solid rgba(184,150,60,0.5)' : '1px solid rgba(255,255,255,0.08)',
                          color: i < 3 ? 'var(--gold)' : 'rgba(255,255,255,0.25)',
                        }}
                      >
                        {level}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Cambridge books and certificates image */}
              <div
                className="lg:w-3/5 flex items-center justify-center p-6 lg:p-0"
                style={{ background: 'rgba(0,0,0,0.15)' }}
              >
                <img
                  src="/assets/images/cambridge_books_and_ceqs-1786749977702.png"
                  alt="Buku teks dan sertifikat Cambridge yang digunakan dalam program pembelajaran dan asesmen Bahasa Inggris berstandar internasional di madrasah"
                  className="w-full h-auto object-contain block"
                  style={{ maxHeight: '400px', objectPosition: 'center' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── STAGE 3: TARGET CAPAIAN SISWA ── */}
        <div className={`transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section heading */}
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Target Capaian Siswa</h3>
            <div className="flex-1 h-px ml-2" style={{ background: 'rgba(184,150,60,0.15)' }} />
          </div>

          <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px' }}>
            Program MBI menetapkan target capaian kompetensi Bahasa Inggris yang jelas dan terukur bagi peserta didik di setiap jenjang madrasah, sesuai dengan standar CEFR internasional dan kualifikasi Cambridge.
          </p>

          {/* CEFR progression pathway */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 mb-10">
            {studentTargets?.map((item, i) => (
              <React.Fragment key={i}>
                <div
                  className={`flex-1 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <div
                    className="h-full rounded-xl md:rounded-none md:first:rounded-l-xl md:last:rounded-r-xl overflow-hidden flex flex-col"
                    style={{
                      background: 'rgba(255,255,255,0.97)',
                      border: '1px solid rgba(168,176,154,0.2)',
                    }}
                  >
                    {/* Header band */}
                    <div
                      className="px-5 py-5"
                      style={{
                        background: i === 0 ? 'rgba(184,150,60,0.08)' : i === 1 ? 'rgba(184,150,60,0.14)' : 'rgba(184,150,60,0.22)',
                        borderBottom: '1px solid rgba(184,150,60,0.2)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--ink-soft)' }}>{item?.jenjang}</p>
                          <p className="text-2xl font-serif font-bold" style={{ color: 'var(--green-deep)' }}>{item?.abbr}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-4xl font-serif font-bold leading-none" style={{ color: 'var(--gold)' }}>{item?.cefr}</p>
                          <p className="text-xs font-semibold mt-1" style={{ color: 'var(--ink-soft)' }}>{item?.cefrLabel}</p>
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
                    <div className="p-5 flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
                        Capaian Kompetensi
                      </p>
                      <div className="flex flex-col gap-2.5">
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
                {i < studentTargets?.length - 1 && (
                  <div className="flex md:flex-col items-center justify-center px-0 md:px-1 py-2 md:py-0 flex-shrink-0">
                    <svg className="hidden md:block" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 10h14M12 5l5 5-5 5" stroke="rgba(184,150,60,0.5)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg className="md:hidden" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 3v14M5 12l5 5 5-5" stroke="rgba(184,150,60,0.5)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CEFR reference panel */}
          <div
            className={`p-6 md:p-8 rounded-2xl transition-all duration-1000 delay-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(184,150,60,0.18)',
            }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                  Common European Framework of Reference (CEFR)
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Target capaian CEFR Program MBI selaras dengan standar internasional yang diakui secara global. Pencapaian B1 di tingkat MA menempatkan lulusan madrasah pada level yang setara dengan standar komunikasi profesional dasar internasional.
                </p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 flex-wrap">
                {['A1', 'A2', 'B1', 'B2', 'C1', 'C2']?.map((level, i) => (
                  <div
                    key={level}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      background: i < 3 ? 'rgba(184,150,60,0.28)' : 'rgba(255,255,255,0.05)',
                      border: i < 3 ? '1px solid rgba(184,150,60,0.5)' : '1px solid rgba(255,255,255,0.08)',
                      color: i < 3 ? 'var(--gold)' : 'rgba(255,255,255,0.25)',
                    }}
                  >
                    {level}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
