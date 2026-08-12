'use client';

import React, { useEffect, useRef, useState } from 'react';

const impacts = [
  {
    num: '01',
    title: 'Peningkatan Kualitas SDM',
    body: 'Peningkatan kompetensi Bahasa Inggris dan kapabilitas profesional dosen, tenaga kependidikan, dan mahasiswa PTKIN.',
  },
  {
    num: '02',
    title: 'Penguatan Layanan Institusi',
    body: 'PTKIN memiliki layanan bahasa yang lebih profesional, terstruktur, dan dapat diakses oleh seluruh sivitas akademika.',
  },
  {
    num: '03',
    title: 'Dukungan Internasionalisasi',
    body: 'Kesiapan yang lebih baik untuk keterlibatan akademik internasional, pertukaran pelajar, dan kemitraan global.',
  },
  {
    num: '04',
    title: 'Akses Lebih Luas',
    body: 'Mahasiswa, dosen, dan komunitas mendapatkan akses terhadap program Bahasa Inggris berkualitas dan sertifikasi internasional.',
  },
  {
    num: '05',
    title: 'Kemandirian UPT',
    body: 'UPT Bahasa mengembangkan kapasitas untuk mengoperasikan dan mengembangkan programnya secara mandiri dan berkelanjutan.',
  },
  {
    num: '06',
    title: 'Daya Saing PTKIN',
    body: 'Penguatan posisi kelembagaan PTKIN dan daya saing lulusan di tingkat nasional dan internasional.',
  },
  {
    num: '07',
    title: 'Pusat Pelatihan Guru Bahasa Inggris Madrasah',
    body: 'UPT Bahasa berkembang menjadi pusat pelatihan dan pengembangan profesional bagi guru Bahasa Inggris Madrasah melalui pelatihan, pendampingan, sertifikasi, dan program peningkatan kompetensi secara berkelanjutan.',
  },
];

export default function DampakProgramSection() {
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
      id="dampak-program"
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
              Nilai Program
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Dampak bagi PTKIN dan Kementerian Agama
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program ini dirancang untuk memberikan dampak nyata dan terukur bagi institusi, sivitas akademika, dan agenda strategis Kementerian Agama RI.
          </p>
        </div>

        {/* Wide emotional image before impact grid */}
        <div
          className={`mb-14 relative overflow-hidden rounded-2xl transition-all duration-1000 delay-150 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ aspectRatio: '16/7' }}
        >
          <img
            src="/assets/images/Lingkungan_pembelajaran_bahasa_yang_mendukung_internasionalisasi_PTKIN-1785553092657.png"
            alt="Mahasiswa, dosen, dan komunitas PTKIN — penerima manfaat nyata dari program pengembangan UPT Pusat Bahasa"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          {/* Overlay with statement */}
          <div
            className="absolute inset-0 flex items-end"
            style={{ background: 'linear-gradient(0deg, rgba(15,35,24,0.80) 0%, rgba(15,35,24,0.20) 55%, transparent 100%)' }}
          >
            <div className="p-8 md:p-12 max-w-3xl">
              <p className="text-white text-lg md:text-2xl font-serif leading-snug">
                "UPT Bahasa yang kuat membuka lebih banyak peluang bagi mahasiswa, dosen, dan institusi."
              </p>
            </div>
          </div>
        </div>

        {/* Impact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts?.map((item, i) => (
            <div
              key={item?.num}
              className={`transition-all duration-700 ${i === impacts?.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''} ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)' }}>
                    {item?.num}
                  </span>
                  <div className="flex-1 h-px" style={{ background: 'rgba(184,150,60,0.2)' }} />
                </div>
                <h3 className="text-base font-bold leading-snug mb-3" style={{ color: 'var(--green-deep)' }}>
                  {item?.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {item?.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Kemenag callout */}
        <div
          className={`mt-12 p-8 md:p-10 rounded-2xl transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'var(--green-deep)',
            border: '1px solid rgba(184,150,60,0.2)',
          }}
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
              Kementerian Agama Republik Indonesia
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Program ini mendukung agenda strategis Kementerian Agama dalam memperkuat kualitas dan daya saing Perguruan Tinggi Keagamaan Islam Negeri di tingkat nasional dan internasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
