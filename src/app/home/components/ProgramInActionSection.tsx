'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ImpactGallery } from '@/components/ui/ImageComponents';

const galleryImages = [
  {
    src: '/assets/images/ToT-Graduation-Australia-Kabupat-Hulu-Sungai-Tengah-768x576-1784053872193.jpeg',
    alt: 'International Exposure — wisuda program ToT di Australia, pendidik Indonesia dalam program pengembangan internasional',
    caption: 'Pengembangan SDM',
    category: '01 Pengembangan SDM',
  },
  {
    src: '/assets/images/pembelajaran_di_upt__1_-1785552244176.png',
    alt: 'Pembelajaran dan pelatihan Bahasa Inggris di kelas — suasana program Cambridge English di UPT Bahasa',
    caption: 'Pembelajaran & Pelatihan',
    category: '02 Pembelajaran & Pelatihan',
  },
  {
    src: '/assets/images/professional_english-1785553842151.png',
    alt: 'Kemitraan institusi — penandatanganan kerja sama dan seremoni program antara PTKIN dan mitra pengembangan',
    caption: 'Kemitraan Institusi',
    category: '03 Kemitraan Institusi',
  },
  {
    src: '/assets/images/ToT-Australia-Kabupaten-Tanah-Bumbub-768x346-1784054533193.jpeg',
    alt: 'Pengembangan SDM — pelatihan tenaga pengajar dan pengelola UPT Bahasa dalam program Training of Trainers',
    caption: 'International Exposure',
    category: '04 International Exposure',
  },
];

export default function ProgramInActionSection() {
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
      id="program-dalam-implementasi"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Program dalam Implementasi
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Program dalam Implementasi
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Gambaran kegiatan pengembangan SDM, pembelajaran, pendampingan, dan kerja sama institusi.
          </p>
        </div>

        {/* Asymmetric photo grid */}
        <div className={`transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ImpactGallery images={galleryImages} />
        </div>

        {/* Category legend */}
        <div
          className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {galleryImages?.map((img) => (
            <div key={img?.category} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'var(--gold)' }}
              />
              <span className="text-xs font-medium" style={{ color: 'var(--ink-soft)' }}>
                {img?.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
