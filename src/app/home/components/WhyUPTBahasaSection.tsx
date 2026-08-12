'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PhotoFrame } from '@/components/ui/ImageComponents';

const reasons = [
  {
    num: '01',
    title: 'Kompetensi Bahasa Inggris',
    body: 'Meningkatkan kemampuan Bahasa Inggris mahasiswa, dosen, dan tenaga kependidikan secara terstruktur dan berkelanjutan.',
  },
  {
    num: '02',
    title: 'Mobilitas Internasional',
    body: 'Mendukung kesiapan studi lanjut, pertukaran akademik, dan mobilitas internasional sivitas akademika PTKIN.',
  },
  {
    num: '03',
    title: 'Layanan Profesional',
    body: 'Menyediakan layanan pelatihan dan sertifikasi Bahasa Inggris yang profesional, terstandar, dan dapat diakses oleh seluruh sivitas akademika.',
  },
  {
    num: '04',
    title: 'Internasionalisasi Perguruan Tinggi',
    body: 'Mendukung agenda internasionalisasi PTKIN melalui penguatan kapasitas bahasa dan kesiapan akademik bertaraf internasional.',
  },
  {
    num: '05',
    title: 'Daya Saing Lulusan',
    body: 'Meningkatkan daya saing lulusan PTKIN di pasar kerja nasional dan internasional melalui kompetensi bahasa yang terukur.',
  },
  {
    num: '06',
    title: 'Keberlanjutan Layanan',
    body: 'Membangun layanan bahasa yang dapat dikelola secara mandiri dan berkelanjutan oleh UPT Pusat Bahasa PTKIN.',
  },
];

export default function WhyUPTBahasaSection() {
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
      id="mengapa-upt-bahasa"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header — 2-column editorial layout */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Text — 55% */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="rule-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Urgensi Program
                </span>
              </div>
              <h2 className="question-serif text-3xl md:text-5xl mb-6 max-w-3xl">
                Mengapa UPT Pusat Bahasa Perlu Diperkuat?
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                PTKIN semakin dituntut untuk memiliki kapasitas kelembagaan yang kuat dalam mendukung internasionalisasi dan daya saing institusi. UPT Pusat Bahasa menjadi unit strategis yang perlu dikembangkan secara profesional.
              </p>
            </div>
            {/* Image — 45% */}
            <div className="lg:col-span-2">
              <PhotoFrame
                src="/assets/images/pembelajaran_di_upt__1_-1785552244176.png"
                alt="Mahasiswa dan dosen PTKIN dalam kegiatan pembelajaran Bahasa Inggris di lingkungan kampus"
                caption="Kegiatan pembelajaran bahasa di lingkungan PTKIN"
                objectPosition="center 30%"
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons?.map((item, i) => (
            <div
              key={item?.num}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="h-full p-8 rounded-2xl"
                style={{
                  background: 'white',
                  border: '1px solid rgba(168,176,154,0.2)',
                  boxShadow: '0 4px 24px rgba(26,58,42,0.06)',
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="text-xs font-mono font-bold flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--gold)' }}
                  >
                    {item?.num}
                  </span>
                  <h3 className="text-base font-bold leading-snug" style={{ color: 'var(--green-deep)' }}>
                    {item?.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {item?.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className={`mt-12 p-8 md:p-10 rounded-2xl transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'var(--green-deep)',
            border: '1px solid rgba(184,150,60,0.2)',
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                Penguatan Layanan Bahasa dan Daya Saing PTKIN
              </p>
              <p className="text-white text-base md:text-lg font-semibold leading-snug">
                Program ini dirancang khusus untuk membantu PTKIN membangun UPT Pusat Bahasa yang profesional, mandiri, dan berdaya saing internasional.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('konsultasi');
                if (el) window.scrollTo({ top: el?.getBoundingClientRect()?.top + window.scrollY - 72, behavior: 'smooth' });
              }}
              className="btn-gold flex-shrink-0 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Konsultasi Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
