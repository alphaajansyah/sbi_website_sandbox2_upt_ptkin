'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function KepercayaanKemitraanSection() {
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

  return (
    <section
      id="kepercayaan-kemitraan"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Label */}
          <p
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: 'var(--gold)' }}
          >
            Kepercayaan &amp; Kemitraan
          </p>

          {/* Heading */}
          <h2
            className="question-serif text-3xl md:text-5xl mb-8 leading-tight"
            style={{ color: 'var(--navy)' }}
          >
            Briton English Education —{' '}
            <span style={{ color: 'var(--navy)' }}>
              Mitra Strategis Terpercaya bagi Pemerintah dan Institusi Pendidikan
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-base leading-relaxed max-w-3xl mx-auto mb-8"
            style={{ color: 'var(--ink-soft)' }}
          >
            Sebagai Cambridge English Authorised Centre ID003, Briton English Education telah menjadi
            mitra strategis terpercaya bagi berbagai kementerian, lembaga pemerintah, pemerintah
            daerah, dinas pendidikan, perguruan tinggi, serta institusi strategis dalam pengembangan
            pembelajaran Bahasa Inggris, peningkatan kompetensi guru, implementasi Program Sekolah
            Berbahasa Inggris (SBI), pengembangan sumber daya manusia, serta berbagai program
            pendidikan dan pelatihan.
          </p>

          {/* Partner logos image */}
          <div className="flex justify-center">
            <img
              src="/assets/images/ChatGPT_Image_Jul_18__2026__01_34_31_AM-1784311994143.png"
              alt="Logo mitra strategis Briton English Education — kementerian, lembaga pemerintah, pemerintah daerah, dan institusi pendidikan"
              className="w-full object-contain"
              style={{ maxWidth: '1100px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
