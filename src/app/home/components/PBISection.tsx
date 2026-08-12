'use client';

import React, { useEffect, useRef, useState } from 'react';

const highlights = [
  {
    title: 'Program Residensial Intensif',
    desc: 'Peserta tinggal dan belajar dalam lingkungan immersif penuh selama program berlangsung, menciptakan kondisi optimal untuk peningkatan kompetensi Bahasa Inggris secara signifikan.',
  },
  {
    title: '200+ Jam Pembelajaran',
    desc: 'Total jam pembelajaran yang intensif mencakup sesi kelas, praktik komunikasi, workshop metodologi pengajaran, dan kegiatan pengembangan profesional lainnya.',
  },
  {
    title: 'Persiapan Cambridge Qualifications',
    desc: 'Program dirancang untuk mempersiapkan peserta menghadapi ujian kualifikasi Cambridge, termasuk TKT (Teaching Knowledge Test) dan kualifikasi pengajaran Cambridge lainnya.',
  },
  {
    title: 'Immersion Bahasa Inggris',
    desc: 'Seluruh kegiatan dilaksanakan dalam Bahasa Inggris, menciptakan lingkungan immersif yang mempercepat peningkatan kefasihan dan kepercayaan diri berbahasa Inggris.',
  },
  {
    title: 'Persiapan TKT',
    desc: 'Modul khusus persiapan Teaching Knowledge Test (TKT) Cambridge untuk memastikan peserta memiliki pengetahuan metodologi pengajaran yang terstandar secara internasional.',
  },
  {
    title: 'Seleksi 500 Guru Terbaik',
    desc: 'Peserta PBI adalah 500 guru terbaik yang telah melalui seleksi ketat dari program CEfT, memastikan kualitas dan efektivitas program secara keseluruhan.',
  },
];

export default function PBISection() {
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
      id="pbi"
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
              Pesantren Bahasa Inggris
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
                PBI — Program Residensial Intensif Berbasis Immersion
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Pesantren Bahasa Inggris (PBI) adalah program residensial intensif yang menggabungkan tradisi pesantren dengan standar pembelajaran Bahasa Inggris Cambridge. Program ini mempersiapkan guru terbaik untuk meraih kualifikasi internasional.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: '500', label: 'Peserta Terpilih' },
                  { num: '200+', label: 'Jam Pembelajaran' },
                  { num: 'TKT', label: 'Kualifikasi Cambridge' },
                ]?.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl text-center"
                    style={{
                      background: 'rgba(184,150,60,0.1)',
                      border: '1px solid rgba(184,150,60,0.25)',
                    }}
                  >
                    <p className="text-xl font-serif font-bold" style={{ color: 'var(--gold)' }}>{stat?.num}</p>
                    <p className="text-xs text-white/55 mt-1">{stat?.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/assets/images/closing_ceremony_hst_2025-00.01.31.056-1784304615636.jpg"
                  alt="Peserta Pesantren Bahasa Inggris dalam upacara penutupan — guru madrasah meraih kualifikasi Cambridge"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(15,35,24,0.7) 100%)' }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-semibold">Program Residensial Intensif</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--gold)' }}>Immersion Bahasa Inggris — Persiapan Cambridge Qualifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights?.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="h-full p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                  <h3 className="text-sm font-bold text-white">{item?.title}</h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
