'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function FinalCTASection() {
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

  const handleConsultation = () => {
    const el = document.getElementById('konsultasi');
    if (el) {
      const top = el?.getBoundingClientRect()?.top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta-final"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background institutional photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/kirsten-drew-xWdwXtgw-Pg-unsplash-1784053430910.jpg"
          alt="Lingkungan kampus universitas Islam Indonesia — suasana akademik PTKIN yang profesional dan berdaya saing"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Deep green transparent overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(15,35,24,0.92) 0%, rgba(26,58,42,0.88) 50%, rgba(15,35,24,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold))', width: '64px' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--gold)' }} />
            <div style={{ height: '2px', background: 'linear-gradient(270deg, transparent, var(--gold))', width: '64px' }} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
            Konsultasi Pengembangan UPT Bahasa
          </span>
          <h2 className="font-serif text-white text-3xl md:text-5xl mt-6 mb-6 leading-snug">
            Bangun UPT Bahasa yang Lebih Profesional dan Berdaya Saing
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Program pengembangan dan pendampingan UPT Pusat Bahasa PTKIN dapat disesuaikan dengan kebutuhan, kondisi, dan kapasitas institusi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleConsultation}
              className="btn-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Konsultasikan Pengembangan UPT Bahasa
            </button>
            <button
              onClick={handleConsultation}
              className="px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider border"
              style={{
                borderColor: 'rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.06)',
              }}
            >
              Minta Informasi Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
