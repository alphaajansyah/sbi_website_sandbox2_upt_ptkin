'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import Icon from '@/components/ui/AppIcon';


const benefits = [
  {
    icon: GlobeAltIcon,
    title: 'Kemitraan Internasional',
    description:
      'Kemitraan resmi dengan Cambridge English dan jaringan mitra internasional di Inggris dan Australia untuk mendukung pengembangan UPT Bahasa PTKIN.',
  },
  {
    icon: UserGroupIcon,
    title: 'Penguatan SDM',
    description:
      'Pelatihan berkelanjutan bagi tenaga akademik, administrasi, manajemen, pemasaran, dan pengelola UPT Bahasa.',
  },
  {
    icon: CogIcon,
    title: 'Model Operasional',
    description:
      'Model pengelolaan UPT Bahasa yang terstruktur, profesional, dan mudah diimplementasikan sesuai kebutuhan institusi.',
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Sistem Pengelolaan Digital',
    description:
      'Pengembangan sistem administrasi akademik, manajemen layanan, pelaporan, dan operasional berbasis digital.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Program & Sertifikasi Internasional',
    description:
      'Pengembangan kurikulum, materi pembelajaran, asesmen, dan akses terhadap sertifikasi bahasa berstandar internasional.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Pendampingan Berkelanjutan',
    description:
      'Monitoring, quality assurance, mentoring, evaluasi, dan pengembangan kelembagaan secara berkelanjutan.',
  },
];

export default function BritonPartnershipSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="briton-partnership"
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{ fontFamily: 'inherit' }}
    >
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* ── LEFT COLUMN ── */}
        <div
          className="relative flex flex-col justify-between lg:w-[40%] w-full px-10 pt-14 pb-0 overflow-hidden"
          style={{ background: '#173A2D', minHeight: '520px' }}
        >
          {/* Building rendering — absolutely positioned, anchored to bottom, ~48% panel height */}
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{ height: '48%', pointerEvents: 'none', userSelect: 'none', zIndex: 0 }}
          >
            {/* Building image with brightness/contrast boost */}
            <img
              src="/assets/images/image-1785562186659.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-full object-cover object-bottom"
              style={{
                height: '100%',
                width: '100%',
                filter: 'brightness(1.15) contrast(1.1) saturate(1.05)',
              }}
            />
            {/* Subtle dark green overlay — ~38% opacity to keep building visible */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(23,58,45,0.38)' }}
            />
            {/* Smooth gradient fade: solid green at top, fully transparent at bottom ~40% */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, #173A2D 0%, rgba(23,58,45,0.75) 20%, rgba(23,58,45,0.2) 55%, transparent 100%)',
              }}
            />
          </div>

          {/* Logo */}
          <div
            className={`relative z-10 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <img
              src="/assets/images/Group-1076-1-1-1786654354676.png"
              alt="Briton English Education & Cambridge English logo"
              className="h-12 w-auto object-contain mb-10"
            />
          </div>

          {/* Headline */}
          <div
            className={`relative z-10 flex-1 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2
              className="text-white leading-snug"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                maxWidth: '420px',
              }}
            >
              Peran Briton English Education sebagai Mitra Pengembangan dan Pendampingan UPT Pusat Bahasa PTKIN
            </h2>
          </div>

          {/* Spacer to maintain bottom padding */}
          <div className="relative z-10" style={{ height: '48%' }} />
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div
          className="lg:w-[60%] w-full bg-white flex flex-col justify-center px-10 py-14"
          style={{ borderLeft: '1px solid rgba(184,150,60,0.12)' }}
        >
          <div
            className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="h-px w-8 flex-shrink-0"
                style={{ background: 'var(--gold, #B8963C)' }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--gold, #B8963C)' }}
              >
                Layanan Kemitraan
              </span>
            </div>
          </div>

          <div className="divide-y" style={{ borderColor: 'rgba(184,150,60,0.18)' }}>
            {benefits?.map((item, idx) => {
              const Icon = item?.icon;
              return (
                <div
                  key={item?.title}
                  className={`flex items-start gap-5 py-6 transition-all duration-700 ${
                    revealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${200 + idx * 80}ms` }}
                >
                  {/* Gold outlined icon container */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-lg"
                    style={{
                      width: '44px',
                      height: '44px',
                      border: '1.5px solid var(--gold, #B8963C)',
                      background: 'rgba(184,150,60,0.04)',
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: 'var(--gold, #B8963C)', strokeWidth: 1.5 }}
                    />
                  </div>
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold text-sm mb-1 leading-snug"
                      style={{ color: 'var(--green-deep, #173A2D)' }}
                    >
                      {item?.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--ink-soft, #5a5a5a)' }}
                    >
                      {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
