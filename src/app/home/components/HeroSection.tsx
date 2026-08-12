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
            alt="Lingkungan akademik universitas Islam Indonesia — suasana kampus PTKIN yang profesional"
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

      {/* Briton credential badge — desktop right side */}
      <div
        className="absolute z-10 hidden lg:flex items-center justify-center"
        style={{ right: '5%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <div
          className="flex flex-col items-center gap-4 px-8 py-8 rounded-2xl"
          style={{
            background: 'rgba(15,35,24,0.65)',
            border: '1px solid rgba(184,150,60,0.3)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            minWidth: '220px',
          }}
        >
          <img
            src="/assets/images/briton_and_cambridge_logo_white-1785419771590.png"
            alt="Briton English Education"
            className="h-14 w-auto object-contain"
          />
          <div className="w-full h-px" style={{ background: 'rgba(184,150,60,0.3)' }} />
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
              Mitra Pengembangan
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              UPT Pusat Bahasa<br />PTKIN
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Cambridge English</p>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Authorised Centre</p>
            <p className="text-sm font-serif mt-1" style={{ color: 'var(--gold)' }}>ID003</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto w-full flex flex-col flex-1">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Program Penguatan Kelembagaan PTKIN
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

          {/* Briton badge — mobile */}
          <div className="lg:hidden mb-8 flex">
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(184,150,60,0.25)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <img
                src="/assets/images/briton_and_cambridge_logo_white-1785419771590.png"
                alt="Briton English Education"
                className="h-8 w-auto object-contain"
              />
              <div>
                <p className="text-xs font-semibold text-white/80">Briton English Education</p>
                <p className="text-xs" style={{ color: 'var(--gold)' }}>Mitra Pengembangan UPT Bahasa PTKIN</p>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className={`mb-6 ${titleRevealed ? 'reveal-active' : ''}`}>
            <h1 className="font-serif text-white leading-none">
              <span className="text-reveal-wrapper block">
                <span
                  className="text-reveal-content text-4xl md:text-6xl lg:text-7xl"
                  style={{ transitionDelay: '0.1s' }}
                >
                  UPT Pusat Bahasa
                </span>
              </span>
              <span className="text-reveal-wrapper block">
                <span
                  className="text-reveal-content text-4xl md:text-6xl lg:text-7xl italic"
                  style={{ color: 'var(--gold)', transitionDelay: '0.25s' }}
                >
                  Bertaraf Internasional
                </span>
              </span>
            </h1>
          </div>

          {/* Supporting headline */}
          <p
            className="text-lg md:text-xl font-semibold leading-snug max-w-2xl mb-5"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            Membangun Pusat Bahasa PTKIN yang Profesional, Mandiri, dan Berdaya Saing
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mb-10"
            style={{ color: 'rgba(255,255,255,0.72)' }}
          >
            Program pengembangan dan pendampingan UPT Pusat Bahasa untuk memperkuat layanan Bahasa Inggris, kompetensi SDM, sistem pengelolaan, serta akses terhadap standar dan kualifikasi internasional.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => handleNavClick('#mengapa-upt-bahasa')}
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
                Dikembangkan oleh{' '}
                <span style={{ color: 'var(--gold)' }}>Briton English Education</span>
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Penguatan Layanan Bahasa dan Daya Saing Perguruan Tinggi Keagamaan Islam Negeri
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
