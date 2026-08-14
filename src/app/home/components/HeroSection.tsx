'use client';

import React, { useState, useEffect, useRef } from 'react';

const funnelSteps = [
  { num: '43.210+', label: 'Guru Bahasa Inggris', sub: 'Populasi Nasional' },
  { num: '2.000', label: 'Peserta Asesmen', sub: 'CEPT' },
  { num: '1.000', label: 'Peserta Pelatihan', sub: 'CEfT' },
  { num: '500', label: 'Peserta Imersi', sub: 'PBI' },
  { num: '150', label: 'Master Trainer', sub: 'Nasional' },
];

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
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(15,35,24,0.85) 0%, rgba(26,58,42,0.65) 40%, rgba(15,35,24,0.92) 100%)'
          }}
        />
        <div className="noise-overlay" />
      </div>

      {/* Credential card — desktop right side */}
      <div
        className="absolute z-10 hidden lg:flex items-center justify-center"
        style={{ right: '4%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <div
          className="flex flex-col items-center gap-4 px-8 py-8 rounded-2xl"
          style={{
            background: 'rgba(15,35,24,0.75)',
            border: '1px solid rgba(184,150,60,0.3)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            minWidth: '240px',
            maxWidth: '280px',
          }}
        >
          <img
            src="/assets/images/mbi_image_refined_via_chatgpt-1786649818622.png"
            alt="MBI — Madrasah Berbahasa Inggris"
            className="w-full h-auto object-contain"
            style={{ maxHeight: '100px' }}
          />
          <img
            src="/assets/images/Group-1076-1-1-1786685465389.png"
            alt="Briton English Education"
            className="w-auto h-auto object-contain"
            style={{ maxHeight: '46px', maxWidth: '160px' }}
          />
          <div className="w-full h-px" style={{ background: 'rgba(184,150,60,0.25)' }} />
          <div className="text-center">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Cambridge English</p>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Authorised Centre</p>
            <p className="text-sm font-serif mt-1" style={{ color: 'var(--gold)' }}>ID003</p>
          </div>
          <div className="w-full h-px" style={{ background: 'rgba(184,150,60,0.12)' }} />
          {/* Mini funnel */}
          <div className="w-full flex flex-col gap-1">
            {funnelSteps.map((step, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-xs font-bold font-serif" style={{ color: i === 4 ? 'var(--gold)' : 'rgba(255,255,255,0.8)' }}>
                  {step.num}
                </span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 lg:mr-[320px]">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Program Nasional Kementerian Agama RI
            </span>
          </div>

          {/* Kementerian Agama RI Logo */}
          <div className="mb-6">
            <img
              src="/assets/images/Kementerian_Agama_new_logo-1785946257791.png"
              alt="Kementerian Agama Republik Indonesia"
              style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* MBI badge — mobile */}
          <div className="lg:hidden mb-7 flex">
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(184,150,60,0.22)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex flex-col items-center gap-1.5">
                <img
                  src="/assets/images/mbi_image_refined_via_chatgpt-1786649818622.png"
                  alt="MBI — Madrasah Berbahasa Inggris"
                  className="h-10 w-auto object-contain"
                />
                <img
                  src="/assets/images/Group-1076-1-1-1786685465389.png"
                  alt="Briton English Education"
                  className="h-5 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-white/80">Cambridge English for Kemenag</p>
                <p className="text-xs" style={{ color: 'var(--gold)' }}>Madrasah Berbahasa Inggris (MBI)</p>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className={`mb-3 ${titleRevealed ? 'reveal-active' : ''}`}>
            <h1 className="font-serif text-white" style={{ lineHeight: 1.1 }}>
              <span className="text-reveal-wrapper block">
                <span
                  className="text-reveal-content text-4xl md:text-6xl lg:text-7xl"
                  style={{ transitionDelay: '0.1s' }}
                >
                  Madrasah Berbahasa
                </span>
              </span>
              <span className="text-reveal-wrapper block">
                <span
                  className="text-reveal-content text-4xl md:text-6xl lg:text-7xl italic"
                  style={{ color: 'var(--gold)', transitionDelay: '0.25s' }}
                >
                  Inggris (MBI)
                </span>
              </span>
            </h1>
          </div>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl font-semibold leading-snug max-w-2xl mb-3"
            style={{ color: 'rgba(255,255,255,0.90)' }}
          >
            Cambridge English untuk Kementerian Agama RI
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mb-8"
            style={{ color: 'rgba(255,255,255,0.68)' }}
          >
            Program nasional pengembangan guru dan pendidikan Bahasa Inggris untuk madrasah di seluruh Indonesia — berbasis standar Cambridge, dirancang untuk skala nasional.
          </p>

          {/* National Funnel — mobile/tablet visible */}
          <div className="lg:hidden mb-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
              Skala Program Nasional
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {funnelSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-serif font-bold" style={{ color: i === 4 ? 'var(--gold)' : 'white' }}>
                      {step.num}
                    </span>
                    <span className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '70px' }}>
                      {step.label}
                    </span>
                  </div>
                  {i < funnelSteps.length - 1 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="rgba(184,150,60,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => handleNavClick('#tantangan-nasional')}
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
            <button
              onClick={() => handleNavClick('#konsultasi')}
              className="px-8 py-4 rounded-full text-sm font-semibold border transition-colors duration-200"
              style={{
                borderColor: 'rgba(184,150,60,0.35)',
                color: 'rgba(255,255,255,0.7)',
                background: 'transparent',
              }}
            >
              Unduh Programme Brief
            </button>
          </div>

          {/* Institutional credential */}
          <div className="flex items-center gap-3">
            <div className="w-px h-8" style={{ background: 'rgba(184,150,60,0.4)' }} />
            <div>
              <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Diimplementasikan oleh{' '}
                <span style={{ color: 'var(--gold)' }}>Briton English Education</span>
                {' '}bersama{' '}
                <span style={{ color: 'var(--gold)' }}>Cambridge English</span>
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Program Nasional Kementerian Agama RI — 2026–2027
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, rgba(184,150,60,0.6), transparent)' }}
        />
      </div>
    </section>
  );
}
