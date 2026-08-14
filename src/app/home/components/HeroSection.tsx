'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [titleRevealed, setTitleRevealed] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setTitleRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="program"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--green-deep)' }}
    >
      {/* Ken Burns Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 ken-burns">
          <img
            src="/assets/images/kirsten-drew-xWdwXtgw-Pg-unsplash-1784053430910.jpg"
            alt="Lingkungan akademik madrasah Indonesia — suasana pembelajaran Bahasa Inggris yang profesional"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
        </div>
        {/* Multi-layer overlay — deep green tint */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(15,35,24,0.82) 0%, rgba(26,58,42,0.60) 40%, rgba(15,35,24,0.90) 100%)'
          }}
        />
        <div className="noise-overlay" />
      </div>

      {/* Briton credential card — desktop right side */}
      <div
        className="absolute z-10 hidden lg:flex items-center justify-center"
        style={{ right: '4%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <div
          className="flex flex-col items-center gap-5 px-10 py-10 rounded-2xl"
          style={{
            background: 'rgba(15,35,24,0.70)',
            border: '1px solid rgba(184,150,60,0.35)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            minWidth: '260px',
            maxWidth: '300px',
          }}
        >
          {/* MBI Logo — Primary identity */}
          <img
            src="/assets/images/mbi_image_refined_via_chatgpt-1786649818622.png"
            alt="MBI — Madrasah Berbahasa Inggris"
            className="w-full h-auto object-contain"
            style={{ maxHeight: '110px' }}
          />
          {/* Briton English Education Logo — Secondary identity */}
          <img
            src="/assets/images/Group-1076-1-1-1786685465389.png"
            alt="Briton English Education"
            className="w-auto h-auto object-contain"
            style={{ maxHeight: '52px', maxWidth: '180px' }}
          />
          <div className="w-full h-px" style={{ background: 'rgba(184,150,60,0.3)' }} />
          {/* Cambridge credential */}
          <div className="text-center">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Cambridge English</p>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Authorised Centre</p>
            <p className="text-sm font-serif mt-1.5" style={{ color: 'var(--gold)' }}>ID003</p>
          </div>
          <div className="w-full h-px" style={{ background: 'rgba(184,150,60,0.15)' }} />
          {/* MBI Programme identity */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: 'var(--gold)' }}>
              Mitra Implementasi
            </p>
            <p className="text-xs text-white/60 leading-relaxed">
              Madrasah Berbahasa Inggris (MBI)
            </p>
            <p className="text-xs text-white/40 leading-relaxed mt-1">
              Cambridge English for Kemenag
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 lg:mr-[340px]">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Program Nasional Kementerian Agama RI
            </span>
          </div>

          {/* Kementerian Agama RI Logo */}
          <div className="mb-7">
            <img
              src="/assets/images/Kementerian_Agama_new_logo-1785946257791.png"
              alt="Kementerian Agama Republik Indonesia"
              style={{ height: '54px', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* MBI badge — mobile */}
          <div className="lg:hidden mb-8 flex">
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(184,150,60,0.25)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/assets/images/mbi_image_refined_via_chatgpt-1786649818622.png"
                  alt="MBI — Madrasah Berbahasa Inggris"
                  className="h-12 w-auto object-contain"
                />
                <img
                  src="/assets/images/Group-1076-1-1-1786685465389.png"
                  alt="Briton English Education"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: 'var(--gold)' }}>
                  Mitra Implementasi
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  Madrasah Berbahasa Inggris (MBI)
                </p>
                <p className="text-xs text-white/40 leading-relaxed mt-1">
                  Cambridge English for Kemenag
                </p>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className={`mb-6 ${titleRevealed ? 'reveal-active' : ''}`}>
            <h1 className="font-serif text-white" style={{ lineHeight: 1.1 }}>
              <span className="text-reveal-wrapper block">
                <span
                  className="text-reveal-content text-4xl md:text-6xl lg:text-7xl"
                  style={{ transitionDelay: '0.1s' }}
                >
                  Cambridge English
                </span>
              </span>
              <span className="text-reveal-wrapper block">
                <span
                  className="text-reveal-content text-4xl md:text-6xl lg:text-7xl italic"
                  style={{ color: 'var(--gold)', transitionDelay: '0.25s' }}
                >
                  for Kemenag
                </span>
              </span>
            </h1>
          </div>

          {/* Supporting headline */}
          <p
            className="text-lg md:text-xl font-semibold leading-snug max-w-2xl mb-5"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            Madrasah Berbahasa Inggris (MBI)
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mb-10"
            style={{ color: 'rgba(255,255,255,0.72)' }}
          >
            Program Nasional Peningkatan Kualifikasi dan Kompetensi Guru Bahasa Inggris Madrasah Berbasis Standar Cambridge untuk memperkuat kompetensi guru, implementasi pembelajaran Bahasa Inggris, serta peningkatan capaian peserta didik madrasah sesuai standar internasional.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => handleNavClick('#latar-belakang')}
              className="btn-gold px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Pelajari Program
            </button>
            <button
              onClick={() => handleNavClick('#konsultasi')}
              className="btn-navy px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Konsultasi Program
            </button>
          </div>

          {/* Institutional credential */}
          <div className="flex items-center gap-3">
            <div className="w-px h-8" style={{ background: 'rgba(184,150,60,0.4)' }} />
            <div>
              <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Dikembangkan bersama{' '}
                <span style={{ color: 'var(--gold)' }}>Cambridge English</span>
                {' '}dan{' '}
                <span style={{ color: 'var(--gold)' }}>Briton English Education</span>
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Program Nasional Peningkatan Kompetensi Guru Bahasa Inggris Madrasah — Kementerian Agama RI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, rgba(184,150,60,0.6), transparent)' }}
        />
      </div>
    </section>
  );
}
