'use client';

import React, { useEffect, useRef, useState } from 'react';

const standards = [
  {
    title: 'Standar Cambridge English',
    body: 'Kurikulum dan metodologi pembelajaran yang selaras dengan standar Cambridge English, salah satu otoritas bahasa Inggris terkemuka di dunia.',
  },
  {
    title: 'Pengembangan Guru Profesional',
    body: 'Program pelatihan dan kualifikasi guru yang terstruktur untuk membangun kapasitas tenaga pengajar UPT Bahasa secara berkelanjutan.',
  },
  {
    title: 'Jalur Sertifikasi Internasional',
    body: 'Akses terhadap asesmen dan sertifikasi yang diakui secara internasional, mendukung mobilitas akademik dan profesional sivitas PTKIN.',
  },
  {
    title: 'Paparan Akademik Internasional',
    body: 'Koneksi dengan ekosistem pendidikan bahasa internasional untuk memperkuat perspektif dan kualitas layanan UPT Bahasa.',
  },
  {
    title: 'Quality Assurance',
    body: 'Sistem penjaminan mutu yang terstruktur untuk memastikan konsistensi dan peningkatan kualitas layanan UPT Bahasa secara berkelanjutan.',
  },
  {
    title: 'Pengembangan Kelembagaan',
    body: 'Pendampingan pengembangan kapasitas kelembagaan UPT Bahasa agar dapat beroperasi secara mandiri dan profesional.',
  },
];

export default function InternationalStandardSection() {
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
      id="standar-internasional"
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
              Dimensi Internasional
            </span>
          </div>
          <h2
            className="font-serif text-3xl md:text-5xl mb-4 max-w-3xl text-white leading-tight"
          >
            Standar Internasional,{' '}
            <span className="italic" style={{ color: 'var(--gold)' }}>
              Dikembangkan untuk Kebutuhan PTKIN
            </span>
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Briton English Education berperan sebagai mitra implementasi dan pengembangan, menghadirkan standar internasional yang disesuaikan dengan konteks dan kebutuhan PTKIN di Indonesia.
          </p>
        </div>

        {/* Standards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {standards?.map((item, i) => (
            <div
              key={item?.title}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="h-full p-7 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: 'var(--gold)', opacity: 0.7 }}
                />
                <h3 className="text-base font-bold text-white leading-snug mb-3">
                  {item?.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {item?.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Briton positioning */}
        <div
          className={`p-8 md:p-10 rounded-2xl transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(184,150,60,0.1)',
            border: '1px solid rgba(184,150,60,0.3)',
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src="/assets/images/Group-1076-1-1-1785412782488.png"
              alt="Briton English Education"
              className="h-12 w-auto object-contain flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Mitra Pengembangan dan Pendampingan UPT Bahasa
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Briton English Education — Cambridge English Authorised Centre ID003, beroperasi sejak 1996 — hadir sebagai mitra strategis dalam pengembangan dan pendampingan UPT Pusat Bahasa PTKIN menuju standar internasional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
