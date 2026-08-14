'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function FinalCTASection() {
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

  const scrollToConsultation = () => {
    const el = document.getElementById('konsultasi');
    if (el) window.scrollTo({ top: el?.getBoundingClientRect()?.top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section
      id="diskusi-implementasi"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Langkah Selanjutnya
            </span>
            <div className="rule-gold" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-5 leading-tight">
            Diskusikan Implementasi MBI
          </h2>

          {/* Supporting text */}
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Jelajahi implementasi program, seleksi guru, asesmen, jalur pelatihan, dan penerapan regional bersama tim MBI.
          </p>

          {/* Audience tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              'Pejabat Kementerian Agama',
              'PTKIN',
              'Pemangku Kepentingan Pendidikan Regional',
              'Mitra Institusional',
              'Mitra Implementasi Program',
            ]?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={scrollToConsultation}
              className="btn-gold px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Minta Programme Brief
            </button>
            <button
              onClick={scrollToConsultation}
              className="btn-navy px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Diskusikan Implementasi
            </button>
            <button
              onClick={scrollToConsultation}
              className="px-8 py-4 rounded-full text-sm font-semibold border transition-colors duration-200"
              style={{
                borderColor: 'rgba(184,150,60,0.35)',
                color: 'rgba(255,255,255,0.7)',
                background: 'transparent',
              }}
            >
              Unduh Programme Overview
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-8" style={{ background: 'rgba(184,150,60,0.15)' }} />

          {/* Logos */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img
              src="/assets/images/Kementerian_Agama_new_logo-1785946257791.png"
              alt="Kementerian Agama RI"
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
            <div className="w-px h-8" style={{ background: 'rgba(184,150,60,0.25)' }} />
            <div className="px-3 py-1.5 rounded" style={{ background: 'rgba(255,255,255,0.9)' }}>
              <img
                src="/assets/images/Cambridge_Landscape_Logo_POS_RGB-1785945867572.png"
                alt="Cambridge English"
                style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <div className="w-px h-8" style={{ background: 'rgba(184,150,60,0.25)' }} />
            <img
              src="/assets/images/Group-1076-1-1-1786654354676.png"
              alt="Briton English Education"
              style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
