'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function VisiMisiSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const missions = [
    {
      number: '01',
      text: 'Mengembangkan kompetensi guru secara berkelanjutan melalui Cambridge English Teacher Framework.',
    },
    {
      number: '02',
      text: 'Mengimplementasikan Cambridge English sebagai mata pelajaran terintegrasi Kurikulum Nasional menjadi pembelajaran Bahasa Inggris berstandar internasional.',
    },
    {
      number: '03',
      text: 'Membangun kapasitas daerah melalui pengembangan Master Trainers, Lead Trainers, dan sistem Pengimbasan.',
    },
    {
      number: '04',
      text: 'Mendukung peningkatan kualitas sumber daya manusia daerah melalui sistem pendidikan yang berkelanjutan.',
    },
  ];

  return (
    <section
      id="visi-misi"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Visi &amp; Misi Program SBI
            </span>
          </div>
          <h2 className="question-serif text-4xl md:text-5xl">
            Arah &amp;{' '}
            <span className="italic" style={{ color: 'var(--navy)' }}>Tujuan Program</span>
          </h2>
        </div>

        {/* Vision Card */}
        <div
          className={`rounded-2xl p-8 md:p-10 mb-8 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'var(--navy)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Visi
            </span>
          </div>
          <p
            className="text-xl md:text-2xl font-serif leading-relaxed"
            style={{ color: 'white' }}
          >
            Mewujudkan ekosistem pendidikan daerah yang menghasilkan sumber daya manusia berdaya saing global melalui pembelajaran Bahasa Inggris berstandar internasional.
          </p>
        </div>

        {/* Mission Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {missions?.map((mission, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: 'var(--fog)',
                border: '1px solid rgba(181,170,154,0.2)',
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: 'var(--gold)' }}
                >
                  {mission?.number}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--navy)', opacity: 0.5 }}
                >
                  Misi
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {mission?.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
