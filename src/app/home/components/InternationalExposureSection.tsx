'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function InternationalExposureSection() {
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
      id="pengalaman-internasional"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Large photo — 60% */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div
              className="relative overflow-hidden rounded-2xl aspect-[4/3]"
              style={{
                background: 'rgba(26,58,42,0.05)',
                border: '1px solid rgba(184,150,60,0.2)',
                boxShadow: '0 12px 48px rgba(26,58,42,0.12)',
              }}
            >
              <img
                src="/assets/images/ToT-Graduation-Australia-Kabupat-Hulu-Sungai-Tengah-768x576-1784053872193.jpeg"
                alt="Pendidik Indonesia berpartisipasi dalam program pelatihan internasional di Australia — pengembangan kapasitas guru PTKIN"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              {/* Subtle overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: 'linear-gradient(0deg, rgba(15,35,24,0.4) 0%, transparent 100%)' }}
              />
            </div>
          </div>

          {/* Text — 40% */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="rule-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Pengalaman Internasional
              </span>
            </div>
            <h2 className="question-serif text-2xl md:text-4xl mb-6 leading-snug">
              Pengalaman Internasional yang Memperluas Perspektif
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
              Pengembangan SDM tidak hanya berfokus pada peningkatan kompetensi, tetapi juga membuka kesempatan untuk memperoleh pengalaman akademik, wawasan lintas budaya, dan jejaring profesional internasional.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { label: 'Overseas Teacher Development', desc: 'Program pengembangan guru di luar negeri bersama mitra internasional.' },
                { label: 'Cambridge English Partnership', desc: 'Akses ke standar, metodologi, dan kualifikasi Cambridge English.' },
                { label: 'International Academic Exposure', desc: 'Kunjungan akademik dan jejaring profesional di tingkat internasional.' },
              ]?.map((item) => (
                <div key={item?.label} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: 'var(--gold)' }}
                  />
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--green-deep)' }}>
                      {item?.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                      {item?.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="px-6 py-4 rounded-xl"
              style={{
                background: 'var(--green-deep)',
                border: '1px solid rgba(184,150,60,0.2)',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
                Briton English Education
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Pengalaman pengembangan guru di Australia dan Inggris, serta kemitraan dengan institusi pendidikan internasional, yang diimplementasikan langsung dalam pengembangan program UPT Pusat Bahasa PTKIN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
