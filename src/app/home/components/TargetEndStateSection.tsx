'use client';

import React, { useEffect, useRef, useState } from 'react';

const outcomes = [
  { label: 'SDM Kompeten',                   desc: 'Tenaga pengajar dan pengelola UPT Bahasa yang terlatih dan berkualifikasi.' },
  { label: 'Program Berkualitas',             desc: 'Kurikulum dan metodologi pembelajaran berstandar internasional.' },
  { label: 'Sistem Pengelolaan Profesional',  desc: 'Tata kelola akademik, administrasi, dan keuangan yang terstruktur.' },
  { label: 'Layanan Bahasa Berstandar',       desc: 'Layanan pelatihan dan sertifikasi Bahasa Inggris bertaraf internasional.' },
  { label: 'Jaringan & Kemitraan',            desc: 'Koneksi dengan ekosistem pendidikan bahasa internasional.' },
  { label: 'Model Operasional Berkelanjutan', desc: 'Kapasitas untuk beroperasi, berkembang, dan mandiri secara finansial.' },
];

export default function TargetEndStateSection() {
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
      id="target-akhir"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Target Capaian
            </span>
            <div style={{ height: '2px', background: 'linear-gradient(270deg, var(--gold), transparent)', width: '64px' }} />
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-3">
            UPT Bahasa yang Dibangun Bersama
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--ink-soft)' }}>
            Enam komponen yang membentuk UPT Pusat Bahasa profesional, mandiri, dan berdaya saing internasional.
          </p>
        </div>

        {/* Outcomes grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {outcomes?.map((item, i) => (
            <div
              key={item?.label}
              className="p-6 rounded-2xl text-center"
              style={{
                background: 'var(--fog)',
                border: '1px solid rgba(168,176,154,0.25)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'rgba(184,150,60,0.12)',
                  border: '1px solid rgba(184,150,60,0.25)',
                }}
              >
                <span className="text-sm font-bold" style={{ color: 'var(--gold)' }}>
                  {String(i + 1)?.padStart(2, '0')}
                </span>
              </div>
              <p className="font-bold text-sm leading-snug mb-2" style={{ color: 'var(--green-deep)' }}>
                {item?.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {item?.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Final outcome banner */}
        <div
          className={`rounded-2xl overflow-hidden transition-all duration-1000 delay-600 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'var(--green-deep)',
            border: '2px solid rgba(184,150,60,0.35)',
            boxShadow: '0 16px 48px rgba(15,35,24,0.2)',
          }}
        >
          <div className="px-8 py-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
              Hasil Akhir Program
            </p>
            <h3 className="font-serif text-2xl md:text-4xl text-white mb-3">
              UPT Pusat Bahasa
            </h3>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {['Profesional', 'Mandiri', 'Berdaya Saing']?.map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                    {tag}
                  </span>
                  {i < 2 && (
                    <span className="text-sm" style={{ color: 'rgba(184,150,60,0.4)' }}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
