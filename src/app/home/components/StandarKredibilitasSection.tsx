'use client';

import React, { useEffect, useRef, useState } from 'react';

const partners = [
  {
    name: 'Kementerian Agama RI',
    role: 'Pemilik Program / Konteks Pemerintah',
    desc: 'Kementerian Agama RI adalah pemilik program dan penyelenggara nasional MBI. Program ini merupakan inisiatif kebijakan Kementerian Agama untuk meningkatkan kualitas pendidikan Bahasa Inggris di madrasah seluruh Indonesia.',
    logo: '/assets/images/Kementerian_Agama_new_logo-1785946257791.png',
    logoAlt: 'Kementerian Agama Republik Indonesia',
    logoHeight: '52px',
    logoBg: false,
    points: [
      'Pemilik dan penyelenggara program nasional',
      'Konteks kebijakan pendidikan Islam Indonesia',
      'Otoritas implementasi di seluruh madrasah',
    ],
  },
  {
    name: 'Cambridge English',
    role: 'Standar, Asesmen & Komponen Program',
    desc: 'Cambridge English menyediakan standar internasional, kerangka asesmen, dan komponen program yang relevan. Penggunaan standar dan materi Cambridge dalam program ini sesuai dengan ketentuan yang berlaku.',
    logo: '/assets/images/Cambridge_Landscape_Logo_POS_RGB-1785945867572.png',
    logoAlt: 'Cambridge English Language Assessment',
    logoHeight: '32px',
    logoBg: true,
    points: [
      'Standar kompetensi internasional (CEFR)',
      'Asesmen dan kualifikasi yang relevan',
      'Kerangka pengajaran Cambridge',
    ],
  },
  {
    name: 'Briton English Education',
    role: 'Implementasi, Pengembangan & Koordinasi Program',
    desc: 'Briton English Education bertanggung jawab atas implementasi teknis, pengembangan program, pelatihan, dan koordinasi seluruh aspek operasional MBI sebagai Cambridge English Authorised Exam Centre ID003.',
    logo: '/assets/images/Group-1076-1-1-1786654354676.png',
    logoAlt: 'Briton English Education',
    logoHeight: '40px',
    logoBg: false,
    points: [
      'Implementasi dan koordinasi program',
      'Pengembangan dan pengelolaan pelatihan',
      'Cambridge English Authorised Centre ID003',
    ],
  },
];

export default function StandarKredibilitasSection() {
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
      id="standar-kredibilitas"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Standar & Kerangka Institusional
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Peran Institusional yang Jelas
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Program MBI melibatkan tiga institusi dengan peran yang berbeda dan saling melengkapi. Memahami peran masing-masing institusi penting untuk memahami struktur dan tata kelola program.
          </p>
        </div>

        {/* Partners — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {partners?.map((partner, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="h-full p-7 rounded-2xl flex flex-col"
                style={{
                  background: 'white',
                  border: '1px solid rgba(168,176,154,0.2)',
                  boxShadow: '0 4px 20px rgba(26,58,42,0.06)',
                }}
              >
                {/* Logo */}
                <div className="mb-5 h-14 flex items-center">
                  {partner?.logoBg ? (
                    <div
                      className="flex items-center justify-center rounded-lg px-4 py-2"
                      style={{ background: 'rgba(26,58,42,0.06)', display: 'inline-flex' }}
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
                      style={{ height: partner?.logoHeight, width: 'auto', objectFit: 'contain' }}
                    />
                  )}
                </div>
                <div className="w-full h-px mb-4" style={{ background: 'rgba(184,150,60,0.15)' }} />
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                  {partner?.role}
                </p>
                <h3 className="text-base font-bold mb-3" style={{ color: 'var(--green-deep)' }}>{partner?.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-soft)' }}>
                  {partner?.desc}
                </p>
                {/* Points */}
                <div className="mt-auto flex flex-col gap-2">
                  {partner?.points?.map((point, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: 'var(--gold)' }}
                      />
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div
          className={`p-5 rounded-xl transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(184,150,60,0.06)',
            border: '1px solid rgba(184,150,60,0.18)',
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            <span className="font-bold" style={{ color: 'var(--green-deep)' }}>Catatan: </span>
            Penggunaan standar, materi, dan kerangka Cambridge dalam program ini sesuai dengan ketentuan yang berlaku. Program MBI dirancang selaras dengan standar Cambridge dan menggunakan komponen Cambridge yang relevan. Informasi lebih lanjut mengenai ketentuan spesifik dapat diperoleh melalui tim program.
          </p>
        </div>
      </div>
    </section>
  );
}
