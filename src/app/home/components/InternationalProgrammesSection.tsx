'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ProgrammeImage, PhotoStrip } from '@/components/ui/ImageComponents';

const programmes = [
  {
    code: 'YLE',
    title: 'Young Learners English',
    desc: 'Program Bahasa Inggris untuk peserta usia sekolah dasar (SD) dengan pendekatan komunikatif, interaktif, dan menyenangkan untuk membangun fondasi kemampuan berbahasa Inggris sejak dini.',
    level: 'Pemula — Menengah',
  },
  {
    code: 'YAE',
    title: 'Young Adults English',
    desc: 'Program Bahasa Inggris untuk remaja usia SMP dan SMA yang berfokus pada pengembangan kemampuan komunikasi, kesiapan akademik, dan kepercayaan diri dalam menggunakan Bahasa Inggris.',
    level: 'Dasar — Lanjutan',
  },
  {
    code: 'EFP',
    title: 'English for Professionals',
    desc: 'Program Bahasa Inggris bagi mahasiswa, lulusan SMA, dosen, tenaga kependidikan, profesional, dan masyarakat umum yang ingin meningkatkan kemampuan Bahasa Inggris untuk kebutuhan akademik, karier, maupun profesional.',
    level: 'Menengah — Lanjutan',
  },
  {
    code: 'IELTS',
    title: 'IELTS Preparation',
    desc: 'Persiapan komprehensif untuk ujian IELTS, mendukung kesiapan studi lanjut dan mobilitas internasional.',
    level: 'Menengah — Lanjutan',
  },
  {
    code: 'TOEFL',
    title: 'TOEFL Preparation',
    desc: 'Program persiapan TOEFL iBT/ITP untuk memenuhi persyaratan akademik dan profesional internasional.',
    level: 'Menengah — Lanjutan',
  },
  {
    code: 'BE',
    title: 'Business English',
    desc: 'Bahasa Inggris untuk konteks bisnis, negosiasi, presentasi, dan komunikasi profesional internasional.',
    level: 'Menengah — Lanjutan',
  },
  {
    code: 'EAW',
    title: 'English for Academic Writing & Presentation',
    desc: 'Program khusus untuk penulisan akademik, publikasi ilmiah, dan presentasi dalam forum internasional.',
    level: 'Lanjutan',
  },
];

const photoStripImages = [
  {
    src: '/assets/images/pembelajaran_di_upt__1_-1785552244176.png',
    alt: 'Kelas Academic English — mahasiswa PTKIN dalam sesi pembelajaran Bahasa Inggris akademik',
    caption: 'Academic English',
  },
  {
    src: '/assets/images/professional_english-1785553842151.png',
    alt: 'Program English for Professionals — pelatihan Bahasa Inggris profesional untuk dosen dan tenaga kependidikan',
    caption: 'Professional English',
  },
  {
    src: '/assets/images/IT_prep__1_-1785554663471.png',
    alt: 'Persiapan ujian internasional IELTS dan TOEFL di UPT Pusat Bahasa PTKIN',
    caption: 'International Test Preparation',
  },
];

export default function InternationalProgrammesSection() {
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
      id="program-internasional"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-6 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Portofolio Program
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Program Bahasa yang Dapat Dikembangkan
          </h2>
        </div>

        {/* 2-column layout: programme portfolio + editorial image */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 mb-12 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left: programme portfolio */}
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink-soft)' }}>
              Berikut adalah contoh program yang dapat dikembangkan dan dioperasikan melalui UPT Pusat Bahasa PTKIN yang berpartisipasi. Portofolio program dapat disesuaikan dengan kebutuhan dan kapasitas institusi.
            </p>

            {/* Note banner */}
            <div
              className="mb-8 px-6 py-4 rounded-xl"
              style={{
                background: 'rgba(26,58,42,0.06)',
                border: '1px solid rgba(26,58,42,0.12)',
              }}
            >
              <p className="text-sm" style={{ color: 'var(--green-deep)' }}>
                <span className="font-semibold">Catatan:</span> Program-program ini merupakan contoh portofolio yang dapat dikembangkan. Implementasi disesuaikan dengan kondisi, kebutuhan, dan kapasitas UPT Bahasa masing-masing PTKIN.
              </p>
            </div>

            {/* Programme cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programmes?.map((prog, i) => (
                <div
                  key={prog?.code}
                  className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className="h-full p-6 rounded-2xl"
                    style={{
                      background: 'var(--fog)',
                      border: '1px solid rgba(168,176,154,0.25)',
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(184,150,60,0.12)',
                          color: 'var(--gold)',
                          border: '1px solid rgba(184,150,60,0.2)',
                        }}
                      >
                        {prog?.code}
                      </span>
                      <span className="text-xs font-medium" style={{ color: 'var(--stone-dark)' }}>
                        {prog?.level}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold leading-snug mb-2" style={{ color: 'var(--green-deep)' }}>
                      {prog?.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                      {prog?.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: large editorial image */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <ProgrammeImage
              src="/assets/images/Lingkungan_pembelajaran_bahasa_yang_mendukung_internasionalisasi_PTKIN-1785553092657.png"
              alt="Mahasiswa internasional dan lokal dalam lingkungan pembelajaran Bahasa Inggris akademik di universitas"
              caption="Lingkungan pembelajaran bahasa yang mendukung internasionalisasi PTKIN"
              objectPosition="center 25%"
              aspectRatio="4/5"
              rounded="2xl"
              hover
            />
          </div>
        </div>

        {/* Photo strip */}
        <div className={`transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <PhotoStrip images={photoStripImages} />
        </div>
      </div>
    </section>
  );
}
