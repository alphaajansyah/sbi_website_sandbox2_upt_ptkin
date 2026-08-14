'use client';

import React, { useEffect, useRef, useState } from 'react';

const aspects = [
  {
    title: 'Integrasi Kurikulum Nasional Madrasah',
    desc: 'Implementasi pembelajaran Bahasa Inggris yang sepenuhnya selaras dengan Kurikulum Nasional Madrasah, memastikan relevansi dan kesesuaian dengan standar pendidikan nasional.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
  },
  {
    title: 'Keselarasan Kurikulum Cambridge',
    desc: 'Materi dan pendekatan pembelajaran diselaraskan dengan standar Cambridge, memastikan kualitas internasional dalam setiap sesi pembelajaran di madrasah.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'Progresivitas Berbasis CEFR',
    desc: 'Pembelajaran dirancang dengan progresivitas yang jelas berdasarkan kerangka CEFR, dari A1 di MI hingga B1 di MA, memastikan perkembangan kompetensi yang terukur.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Perencanaan Pembelajaran',
    desc: 'Guru dilengkapi dengan kemampuan merancang rencana pembelajaran yang efektif, berbasis kompetensi, dan sesuai dengan standar Cambridge Teaching Framework.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Standar Asesmen',
    desc: 'Penerapan standar asesmen yang konsisten dan terukur, selaras dengan kerangka Cambridge, untuk memastikan pengukuran kompetensi peserta didik yang akurat dan adil.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Implementasi di Kelas',
    desc: 'Dukungan praktis bagi guru dalam mengimplementasikan metodologi pengajaran Cambridge di kelas, termasuk teknik pengelolaan kelas, penggunaan media, dan strategi pembelajaran aktif.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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

export default function StandarCapaianSection() {
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
      id="standar-capaian"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`mb-4 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Standar &amp; Capaian
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl text-white">
            Standar Cambridge → Pembelajaran → Asesmen → Capaian Siswa
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Kerangka terpadu yang menghubungkan standar internasional Cambridge dengan kurikulum madrasah, proses pembelajaran di kelas, sistem asesmen, dan capaian kompetensi siswa yang terukur.
          </p>
        </div>

        {/* Divider */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ${revealed ? 'opacity-100' : 'opacity-0'}`}
          style={{ height: '1px', background: 'rgba(184,150,60,0.2)' }}
        />

        {/* Sub-heading: Pembelajaran Bahasa Inggris Terstandar */}
        <div className={`mb-8 transition-all duration-1000 delay-150 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 text-white">
            Pembelajaran Bahasa Inggris Terstandar di Madrasah
          </h3>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Program MBI memastikan implementasi pembelajaran Bahasa Inggris yang berkualitas, terstandar, dan berkelanjutan di seluruh madrasah Indonesia melalui integrasi kurikulum nasional dengan standar Cambridge.
          </p>
        </div>

        {/* Aspects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {aspects?.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div
                className="h-full p-7 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(184,150,60,0.18)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(184,150,60,0.15)', color: 'var(--gold)' }}
                >
                  {item?.icon}
                </div>
                <h3 className="text-sm font-bold mb-2 text-white">{item?.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cambridge books and certificates image */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-10 mb-14 transition-all duration-1000 delay-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Left: supporting text */}
          <div className="lg:w-2/5 w-full flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="rule-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Standar Cambridge
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-white">
              Pembelajaran &amp; Asesmen Berstandar Cambridge
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Seluruh materi, metodologi, dan asesmen dalam program MBI mengacu pada standar internasional Cambridge — mulai dari buku teks, modul pelatihan guru, hingga sertifikasi yang diakui secara global. Hal ini memastikan kualitas pembelajaran Bahasa Inggris di madrasah setara dengan standar terbaik dunia.
            </p>
          </div>

          {/* Right: Cambridge books and certificates image */}
          <div className="lg:w-3/5 w-full">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
                border: '1px solid rgba(184,150,60,0.2)',
              }}
            >
              <img
                src="/assets/images/cambridge_books_and_ceqs-1786749977702.png"
                alt="Buku teks dan sertifikat Cambridge yang digunakan dalam program pembelajaran dan asesmen Bahasa Inggris berstandar internasional"
                className="w-full h-auto object-contain block"
                style={{ maxHeight: '420px', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>

        {/* CEFR progression visual */}
        <div
          className={`p-8 md:p-10 rounded-2xl transition-all duration-1000 delay-900 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(184,150,60,0.25)',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: 'var(--gold)' }}>
            Progresivitas CEFR dalam Kurikulum Madrasah
          </p>
          <p className="text-xs text-center mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Target capaian kompetensi Bahasa Inggris siswa berdasarkan jenjang madrasah
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { level: 'MI', cefr: 'A1', label: 'Madrasah Ibtidaiyah', color: 'rgba(184,150,60,0.12)' },
              { level: 'MTs', cefr: 'A2', label: 'Madrasah Tsanawiyah', color: 'rgba(184,150,60,0.22)' },
              { level: 'MA', cefr: 'B1', label: 'Madrasah Aliyah', color: 'rgba(184,150,60,0.38)' },
            ]?.map((item, i) => (
              <React.Fragment key={i}>
                <div
                  className="flex flex-col items-center px-8 py-5 rounded-xl"
                  style={{ background: item?.color, border: '1px solid rgba(184,150,60,0.3)', minWidth: '160px' }}
                >
                  <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{item?.label}</p>
                  <p className="text-2xl font-serif font-bold text-white">{item?.level}</p>
                  <div className="w-full h-px my-2" style={{ background: 'rgba(184,150,60,0.3)' }} />
                  <p className="text-xl font-bold" style={{ color: 'var(--gold)' }}>{item?.cefr}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>Target CEFR Siswa</p>
                </div>
                {i < 2 && (
                  <div className="flex md:flex-row flex-col items-center">
                    <svg className="hidden md:block" width="32" height="16" viewBox="0 0 32 16" fill="none">
                      <path d="M0 8H28M28 8L22 2M28 8L22 14" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg className="md:hidden" width="16" height="32" viewBox="0 0 16 32" fill="none">
                      <path d="M8 0V28M8 28L2 22M8 28L14 22" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Divider before Target Capaian Siswa */}
        <div
          className={`my-14 transition-all duration-700 ${revealed ? 'opacity-100' : 'opacity-0'}`}
          style={{ height: '1px', background: 'rgba(184,150,60,0.2)' }}
        />

        {/* Target Capaian Siswa — header */}
        <div className={`mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Target Capaian Siswa
            </span>
          </div>
          <h3 className="question-serif text-2xl md:text-4xl mb-4 max-w-3xl text-white">
            Standar Kompetensi Bahasa Inggris Peserta Didik Madrasah
          </h3>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Program MBI menetapkan target capaian kompetensi Bahasa Inggris yang jelas dan terukur bagi peserta didik di setiap jenjang madrasah, sesuai dengan standar CEFR internasional dan kualifikasi Cambridge.
          </p>
        </div>

        {/* Student target cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {studentTargets?.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="h-full rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.97)',
                  border: '1px solid rgba(168,176,154,0.2)',
                  boxShadow: '0 4px 24px rgba(26,58,42,0.12)',
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

        {/* CEFR scale reference panel */}
        <div
          className={`p-8 rounded-2xl transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(184,150,60,0.2)',
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Common European Framework of Reference (CEFR)
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
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
