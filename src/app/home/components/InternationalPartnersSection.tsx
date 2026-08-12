'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Partner {
  logo: string;
  logoAlt: string;
  orgName: string;
  bullets: string[];
}

const partners: Partner[] = [
  {
    logo: '/assets/images/Cambridge_Landscape_Logo_POS_RGB-1785945867572.png',
    logoAlt: 'Cambridge University Press & Assessment logo',
    orgName: 'Cambridge University Press & Assessment',
    bullets: [
      'Cambridge English Qualifications',
      'Cambridge English Teaching',
      'International English assessment and teacher development framework',
    ],
  },
  {
    logo: '/assets/images/neas-logo-website-01-e1530764222287-1785945867573.png',
    logoAlt: 'NEAS Australia – Quality Endorsed Centre logo',
    orgName: 'NEAS Australia',
    bullets: [
      'Quality Endorsed Centre',
      'Independent international quality assurance for English language education',
      'Recognition of institutional quality standards',
    ],
  },
];

export default function InternationalPartnersSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.06 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="mitra-internasional"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: '#FAFAF8' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left column — ~35% */}
          <div
            className={`lg:w-[35%] flex-shrink-0 transition-all duration-1000 ${
              revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-px w-10 flex-shrink-0"
                style={{ background: 'var(--gold)' }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--gold)' }}
              >
                Standar &amp; Mitra
              </span>
            </div>

            <h2
              className="font-serif text-3xl md:text-4xl leading-tight mb-6"
              style={{ color: 'var(--green-deep)' }}
            >
              Didukung oleh Standar dan Mitra Internasional
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{ color: 'rgba(30,50,40,0.65)' }}
            >
              Program pengembangan UPT Pusat Bahasa dirancang berdasarkan standar internasional serta didukung oleh kemitraan dengan lembaga pendidikan dan quality assurance yang diakui secara global. UPT Pusat Bahasa dipersiapkan untuk bergabung dalam jaringan{" "} <strong>Cambridge Authorised Preparation Centre</strong> serta memperoleh pengakuan sebagai{" "} <strong>NEAS Quality Endorsed Centre</strong>.
            </p>
          </div>

          {/* Right column — ~65% */}
          <div className="lg:w-[65%] flex flex-col sm:flex-row gap-6 w-full">
            {partners?.map((partner, i) => (
              <div
                key={partner?.orgName}
                className={`flex-1 transition-all duration-700 ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div
                  className="h-full flex flex-col p-9 rounded-2xl bg-white group cursor-default"
                  style={{
                    border: '1px solid #E5E5E5',
                    borderRadius: '18px',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      '0 12px 40px rgba(0,0,0,0.10)';
                    (e.currentTarget as HTMLDivElement).style.transform =
                      'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLDivElement).style.transform =
                      'translateY(0)';
                  }}
                >
                  {/* Logo area */}
                  <div
                    className="flex items-center justify-start mb-8"
                    style={{ minHeight: '80px' }}
                  >
                    <img
                      src={partner?.logo}
                      alt={partner?.logoAlt}
                      style={{
                        maxHeight: '80px',
                        width: 'auto',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>

                  {/* CEQ & CET logos — shown only below the Cambridge card */}
                  {i === 0 && (
                    <div className="flex items-center gap-5 mb-6">
                      <img
                        src="/assets/images/ceq-1786004441407.png"
                        alt="Cambridge English Qualifications logo"
                        style={{
                          maxHeight: '44px',
                          width: 'auto',
                          maxWidth: '48%',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                      <img
                        src="/assets/images/CET_logo_Stacked_RGB-640x242-1786004451992.png"
                        alt="Cambridge English Teaching logo"
                        style={{
                          maxHeight: '44px',
                          width: 'auto',
                          maxWidth: '48%',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </div>
                  )}

                  {/* Divider */}
                  <div
                    className="mb-6"
                    style={{
                      height: '1px',
                      background: '#E5E5E5',
                    }}
                  />

                  {/* Org name */}
                  <p
                    className="text-sm font-bold mb-4 leading-snug"
                    style={{ color: 'var(--green-deep)' }}
                  >
                    {partner?.orgName}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3">
                    {partner?.bullets?.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'rgba(30,50,40,0.65)' }}
                      >
                        <span
                          className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--gold)' }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
