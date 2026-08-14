'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function InternationalToTSection() {
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
      id="tot-internasional"
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
              International Training of Trainers
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Pembentukan Trainer Nasional Berkualifikasi Internasional
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program ToT Internasional mengirimkan guru-guru terbaik Indonesia ke Inggris dan Australia untuk mengikuti pelatihan Cambridge bertaraf internasional, membentuk Master Trainer dan Lead Trainer yang akan menjadi tulang punggung sistem pengembangan guru nasional.
          </p>
        </div>

        {/* Two country cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* UK */}
          <div
            className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div
              className="h-full rounded-2xl overflow-hidden"
              style={{
                background: 'var(--green-deep)',
                border: '1px solid rgba(184,150,60,0.2)',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
                <img
                  src="/assets/images/Untitled-1784305093040.png"
                  alt="Peserta Training of Trainers internasional — guru madrasah Indonesia di depan landmark Inggris dalam program CELT"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(15,35,24,0.85) 100%)' }}
                />
                <div className="absolute bottom-4 left-4">
                  <div
                    className="px-3 py-1.5 rounded-lg inline-flex items-center gap-2"
                    style={{ background: 'rgba(15,35,24,0.9)', border: '1px solid rgba(184,150,60,0.3)' }}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span className="text-xs font-bold text-white">United Kingdom</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">United Kingdom</h3>
                    <p className="text-xs" style={{ color: 'var(--gold)' }}>CELT-P — Certificate in English Language Teaching to Primary</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Program CELT-P di Inggris mempersiapkan Master Trainer dengan kualifikasi Cambridge untuk pengajaran Bahasa Inggris di tingkat dasar (Madrasah Ibtidaiyah). Peserta mendapatkan pengalaman langsung di lingkungan pendidikan Inggris yang autentik.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Kualifikasi CELT-P Cambridge',
                    'Pengalaman langsung di sekolah Inggris',
                    'Jaringan internasional Cambridge educators',
                    'Sertifikat pengajaran bertaraf internasional',
                  ]?.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: 'var(--gold)' }} />
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Australia */}
          <div
            className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div
              className="h-full rounded-2xl overflow-hidden"
              style={{
                background: 'var(--green-deep)',
                border: '1px solid rgba(184,150,60,0.2)',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
                <img
                  src="/assets/images/ToT-Graduation-Australia-Kabupat-Hulu-Sungai-Tengah-768x576-1784053872193.jpeg"
                  alt="Peserta Training of Trainers di Australia — guru madrasah Indonesia dalam program CELT-S"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(15,35,24,0.85) 100%)' }}
                />
                <div className="absolute bottom-4 left-4">
                  <div
                    className="px-3 py-1.5 rounded-lg inline-flex items-center gap-2"
                    style={{ background: 'rgba(15,35,24,0.9)', border: '1px solid rgba(184,150,60,0.3)' }}
                  >
                    <span className="text-lg">🇦🇺</span>
                    <span className="text-xs font-bold text-white">Australia</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇦🇺</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Australia</h3>
                    <p className="text-xs" style={{ color: 'var(--gold)' }}>CELT-S — Certificate in English Language Teaching to Secondary</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Program CELT-S di Australia mempersiapkan Master Trainer dengan kualifikasi Cambridge untuk pengajaran Bahasa Inggris di tingkat menengah (MTs dan MA). Peserta mendapatkan eksposur terhadap praktik terbaik pendidikan Australia.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Kualifikasi CELT-S Cambridge',
                    'Pengalaman di sekolah menengah Australia',
                    'Metodologi pengajaran tingkat lanjut',
                    'Sertifikat pengajaran bertaraf internasional',
                  ]?.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: 'var(--gold)' }} />
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trainer multiplication callout */}
        <div
          className={`p-8 md:p-10 rounded-2xl transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'var(--green-deep)',
            border: '1px solid rgba(184,150,60,0.2)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
                Keberlanjutan melalui Trainer Multiplication
              </p>
              <h3 className="text-xl font-bold text-white mb-3">
                Dari 150 Trainer Nasional ke 43.000+ Guru Madrasah
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Master Trainer dan Lead Trainer yang terbentuk melalui program ToT Internasional akan mengimbaskan kompetensi mereka kepada seluruh guru Bahasa Inggris madrasah di Indonesia, memastikan keberlanjutan dan kemandirian sistem pengembangan guru nasional.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { num: '150', label: 'Trainer Nasional' },
                { num: '43.000+', label: 'Guru Madrasah' },
                { num: '∞', label: 'Keberlanjutan Sistem' },
              ]?.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(184,150,60,0.1)', border: '1px solid rgba(184,150,60,0.15)' }}
                >
                  <p className="text-xl font-serif font-bold w-16 flex-shrink-0" style={{ color: 'var(--gold)' }}>{stat?.num}</p>
                  <p className="text-xs text-white/60">{stat?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
