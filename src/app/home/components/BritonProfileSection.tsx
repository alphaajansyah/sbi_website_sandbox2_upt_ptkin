'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PhotoStrip } from '@/components/ui/ImageComponents';

const credentials = [
  { label: 'Tahun Berdiri', value: '1996', sub: 'Beroperasi sejak 1996' },
  { label: 'Cambridge Centre', value: 'ID003', sub: 'Authorised Examination Centre' },
  { label: 'Kota & Kabupaten', value: '20+', sub: 'Pengalaman di berbagai daerah Indonesia' },
  { label: 'Tahun Kemitraan', value: '25+', sub: 'Pengalaman kemitraan program' },
];

const expertise = [
  'Pendidikan Bahasa Inggris',
  'Pelatihan dan kualifikasi guru',
  'Persiapan studi lanjut ke luar negeri',
  'Program kemitraan institusional',
  'Asesmen dan sertifikasi Cambridge English',
  'Pengembangan kurikulum berstandar internasional',
  'Pendampingan program berkelanjutan',
  'Pengembangan kapasitas kelembagaan',
];

const implementationPhotos = [
  {
    src: '/assets/images/ToT-Australia-Kabupaten-Tanah-Bumbub-768x346-1784054533193.jpeg',
    alt: 'Program Training of Trainers Briton di Australia — pengembangan kapasitas guru dan pelatih bahasa Indonesia',
    caption: 'Overseas Teacher Development',
  },
  {
    src: '/assets/images/pembelajaran_di_upt__1_-1785552244176.png',
    alt: 'Kelas pelatihan guru Cambridge TKT — program kualifikasi pengajar Bahasa Inggris oleh Briton English Education',
    caption: 'Teacher Training & Qualification',
  },
  {
    src: '/assets/images/ToT-Graduation-Australia-Kabupat-Hulu-Sungai-Tengah-768x576-1784053872193.jpeg',
    alt: 'Wisuda program ToT di Australia — pendidik Indonesia menyelesaikan program pengembangan internasional bersama Briton',
    caption: 'International Programme',
  },
];

export default function BritonProfileSection() {
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
      id="tentang-briton"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: content */}
          <div className={`transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="rule-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Tentang Briton
              </span>
            </div>
            <h2 className="question-serif text-3xl md:text-5xl mb-4">
              Mitra Pengembangan dan Pendampingan UPT Bahasa
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
              Briton English Education adalah lembaga pendidikan Bahasa Inggris yang telah beroperasi sejak 1996 dan menjadi Cambridge English Authorised Examination Centre (ID003) sejak 2001.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--ink-soft)' }}>
              Dengan pengalaman panjang dalam pendidikan bahasa, pelatihan guru, persiapan studi lanjut, dan program kemitraan di berbagai kota dan kabupaten di Indonesia, Briton hadir sebagai mitra strategis dalam pengembangan dan pendampingan UPT Pusat Bahasa PTKIN.
            </p>

            {/* Expertise list */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--green-deep)' }}>
                Bidang Keahlian
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {expertise?.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: 'var(--gold)' }} />
                    <span className="text-sm" style={{ color: 'var(--ink-soft)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cambridge badge */}
            <div
              className="inline-flex items-center gap-4 px-6 py-4 rounded-xl"
              style={{
                background: 'var(--green-deep)',
                border: '1px solid rgba(184,150,60,0.2)',
              }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Cambridge English
                </p>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">
                  Authorised Examination Centre
                </p>
              </div>
              <div className="w-px h-10 flex-shrink-0" style={{ background: 'rgba(184,150,60,0.3)' }} />
              <p className="text-2xl font-serif flex-shrink-0" style={{ color: 'var(--gold)' }}>
                ID003
              </p>
            </div>
          </div>

          {/* Right: logo + credentials + implementation photos */}
          <div className={`transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Logo card */}
            <div
              className="flex items-center justify-center mb-8"
              style={{
                padding: '40px 48px',
                borderRadius: '22px',
                background: '#F9F8F5',
                border: '1px solid rgba(168,176,154,0.35)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <img
                src="/assets/images/Logo_Briton_2026-1784033894327.png"
                alt="Briton English Education"
                className="h-20 w-auto object-contain"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, black 40%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, black 40%, transparent 100%)',
                }}
              />
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {credentials?.map((cred) => (
                <div
                  key={cred?.label}
                  className="p-6 rounded-xl text-center"
                  style={{
                    background: 'var(--fog)',
                    border: '1px solid rgba(168,176,154,0.2)',
                  }}
                >
                  <p className="text-2xl md:text-3xl font-serif font-bold mb-1" style={{ color: 'var(--green-deep)' }}>
                    {cred?.value}
                  </p>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--gold)' }}>
                    {cred?.label}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>
                    {cred?.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Implementation photo grid */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--green-deep)' }}>
                Pengalaman yang Dibawa ke PTKIN
              </p>
              <PhotoStrip images={implementationPhotos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
