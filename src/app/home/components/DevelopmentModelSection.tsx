'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ImageFeature } from '@/components/ui/ImageComponents';

const pillars = [
  {
    num: '01',
    title: 'Penguatan SDM',
    body: 'Pelatihan dan pengembangan profesional bagi tenaga akademik, administrasi, manajemen, pemasaran, dan tenaga pendukung UPT Bahasa.',
  },
  {
    num: '02',
    title: 'Program Bahasa Berstandar Internasional',
    body: 'Pengembangan program bahasa terstruktur yang selaras dengan standar internasional, mencakup kurikulum, metodologi, dan materi pembelajaran.',
  },
  {
    num: '03',
    title: 'Sistem Pengelolaan',
    body: 'Prosedur operasional, administrasi akademik, manajemen keuangan, dan sistem pengelolaan digital untuk UPT Bahasa yang profesional.',
  },
  {
    num: '04',
    title: 'Layanan Assessment & Sertifikasi',
    body: 'Pengembangan layanan assessment, ujian, pelatihan, dan sertifikasi internasional untuk mendukung kebutuhan sivitas akademika dan masyarakat.',
  },
  {
    num: '05',
    title: 'Pengembangan Pasar & Kemitraan',
    body: 'Dukungan pengembangan pasar, strategi sales dan marketing, website institusi, kampanye media sosial, promosi layanan, serta pengembangan jejaring dan kemitraan.',
  },
  {
    num: '06',
    title: 'Pendampingan Berkelanjutan',
    body: 'Monitoring, mentoring, quality assurance, dan pengembangan kelembagaan secara berkelanjutan untuk memastikan pertumbuhan UPT Bahasa.',
  },
];

function PillarCard({ pillar, i, revealed }: { pillar: typeof pillars[0]; i: number; revealed: boolean }) {
  return (
    <div
      className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${i * 90}ms` }}
    >
      <div
        className="h-full p-8 rounded-2xl"
        style={{
          background: 'white',
          border: '1px solid rgba(168,176,154,0.2)',
          boxShadow: '0 4px 24px rgba(26,58,42,0.06)',
        }}
      >
        <div className="mb-5">
          <span className="text-3xl font-serif font-bold" style={{ color: 'var(--gold)', opacity: 0.8 }}>
            {pillar?.num}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-snug mb-3" style={{ color: 'var(--green-deep)' }}>
          {pillar?.title}
        </h3>
        <div className="mb-4" style={{ height: '1px', background: 'rgba(184,150,60,0.25)', width: '48px' }} />
        <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          {pillar?.body}
        </p>
      </div>
    </div>
  );
}

export default function DevelopmentModelSection() {
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
      id="model-pengembangan"
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
              Pendekatan Program
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Model Pengembangan UPT Pusat Bahasa
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program ini mengintegrasikan enam pilar pengembangan yang saling mendukung untuk membangun UPT Bahasa yang komprehensif dan berkelanjutan.
          </p>
        </div>

        {/* Feature photo — full width, immediately after opening paragraph */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <ImageFeature
            src="/assets/images/xxxxxxxxxxxx__1_-1785900710620.png"
            alt="Infografis Model Pengembangan UPT Pusat Bahasa — enam pilar pengembangan yang saling mendukung untuk membangun UPT Bahasa yang komprehensif dan berkelanjutan"
            caption="Enam komponen utama dalam membangun UPT Pusat Bahasa yang profesional, mandiri, dan berkelanjutan."
            objectFit="cover"
            aspectRatio="16/9"
          />
        </div>

        {/* All six pillars in one continuous grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.num} pillar={pillar} i={i} revealed={revealed} />
          ))}
        </div>
      </div>
    </section>
  );
}
