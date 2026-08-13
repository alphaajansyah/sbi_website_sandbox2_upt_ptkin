'use client';

import React, { useEffect, useRef, useState } from 'react';

const partners = [
  {
    name: 'Kementerian Agama Republik Indonesia',
    role: 'Penyelenggara Program Nasional',
    desc: 'Kementerian Agama RI sebagai penyelenggara dan penanggung jawab program MBI secara nasional, memastikan implementasi yang selaras dengan kebijakan pendidikan Islam Indonesia.',
    logo: '/assets/images/Kementerian_Agama_new_logo-1785946257791.png',
    logoAlt: 'Kementerian Agama Republik Indonesia',
    logoHeight: '56px',
    logoBg: false,
    logoFilter: 'brightness(0) invert(1)',
  },
  {
    name: 'Cambridge English',
    role: 'Mitra Standar Internasional',
    desc: 'Cambridge English Language Assessment sebagai mitra internasional yang menyediakan standar kualifikasi, kerangka pengajaran, dan sertifikasi yang diakui secara global.',
    logo: '/assets/images/Cambridge_Landscape_Logo_POS_RGB-1785945867572.png',
    logoAlt: 'Cambridge English Language Assessment',
    logoHeight: '36px',
    logoBg: false,
    logoFilter: 'brightness(0) invert(1)',
  },
  {
    name: 'Briton English Education',
    role: 'Mitra Implementasi Program',
    desc: 'Briton English Education sebagai Cambridge English Authorised Exam Centre ID003 yang bertanggung jawab atas implementasi teknis, pelatihan, dan pengelolaan program MBI.',
    logo: '/assets/images/briton_and_cambridge_logo_white-1785419771590.png',
    logoAlt: 'Briton English Education',
    logoHeight: '44px',
    logoBg: false,
    logoFilter: 'none',
  },
  {
    name: 'BELTA',
    role: 'Mitra Pengembangan Profesional',
    desc: 'British English Language Teaching Association (BELTA) sebagai mitra pengembangan profesional yang mendukung standar kualitas pengajaran Bahasa Inggris dalam program MBI.',
    logo: '/assets/images/Belta_Logo-1786649849195.jpeg',
    logoAlt: 'BELTA — British English Language Teaching Association',
    logoHeight: '44px',
    logoBg: true,
    logoFilter: 'none',
  },
];

const credentials = [
  {
    title: 'Cambridge English Qualifications',
    desc: 'Kualifikasi Bahasa Inggris Cambridge yang diakui secara internasional, tersedia untuk peserta didik di semua jenjang madrasah.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    title: 'Cambridge Teaching Qualifications',
    desc: 'Kualifikasi pengajaran Cambridge (TKT, CELT-P, CELT-S) untuk guru madrasah yang membuktikan kompetensi profesional bertaraf internasional.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: 'Cambridge Teaching Framework',
    desc: 'Kerangka pengembangan guru Cambridge yang menjadi standar kompetensi dan panduan pengajaran Bahasa Inggris dalam program MBI.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
];

export default function MitraKredibilitasSection() {
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
      id="mitra-kredibilitas"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Mitra dan Kredibilitas
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 max-w-3xl leading-tight">
            Kemitraan Strategis untuk Kualitas Pendidikan Madrasah
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Program MBI didukung oleh kemitraan strategis antara Kementerian Agama RI, Cambridge English, Briton English Education, dan BELTA untuk memastikan standar kualitas internasional dalam setiap aspek program.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {partners?.map((partner, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="h-full p-7 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(184,150,60,0.2)',
                }}
              >
                {/* Logo */}
                <div className="mb-5 h-14 flex items-center">
                  {partner?.logoBg ? (
                    <div
                      className="flex items-center justify-center rounded-lg px-4 py-2"
                      style={{ background: 'rgba(255,255,255,0.95)', display: 'inline-flex' }}
                    >
                      <img
                        src={partner?.logo}
                        alt={partner?.logoAlt}
                        style={{ height: partner?.logoHeight, width: 'auto', objectFit: 'contain' }}
                      />
                    </div>
                  ) : (
                    <img
                      src={partner?.logo}
                      alt={partner?.logoAlt}
                      style={{ height: partner?.logoHeight, width: 'auto', objectFit: 'contain', filter: partner?.logoFilter }}
                    />
                  )}
                </div>
                <div className="w-full h-px mb-4" style={{ background: 'rgba(184,150,60,0.2)' }} />
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                  {partner?.role}
                </p>
                <h3 className="text-base font-bold text-white mb-3">{partner?.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {partner?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div
          className={`transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-6 text-center" style={{ color: 'var(--gold)' }}>
            Standar dan Kualifikasi Cambridge
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {credentials?.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(184,150,60,0.15)', color: 'var(--gold)' }}
                >
                  {item?.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item?.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
