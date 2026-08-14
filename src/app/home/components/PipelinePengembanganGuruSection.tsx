'use client';

import React, { useEffect, useRef, useState } from 'react';

interface PipelineNode {
  id: string;
  label: string;
  sublabel: string;
  count: string | null;
  countSub?: string;
  isGold?: boolean;
  isFinal?: boolean;
  isExpansion?: boolean;
}

const pipelineNodes: PipelineNode[] = [
  {
    id: 'n1',
    label: 'Guru Bahasa Inggris Madrasah',
    sublabel: 'Populasi nasional',
    count: '43.000+',
    countSub: 'guru',
  },
  {
    id: 'n2',
    label: 'Asesmen Awal / CEST',
    sublabel: 'Seleksi kompetensi awal',
    count: '2.000',
    countSub: 'peserta',
  },
  {
    id: 'n3',
    label: 'Cambridge English for Teachers',
    sublabel: 'CEfT — Pengembangan profesional',
    count: '1.000',
    countSub: 'peserta',
  },
  {
    id: 'n4',
    label: 'Pesantren Bahasa Inggris',
    sublabel: 'PBI — Imersi intensif residensial',
    count: '500',
    countSub: 'peserta',
  },
  {
    id: 'n5',
    label: 'International Training of Trainers',
    sublabel: 'Pengembangan trainer internasional',
    count: '150+',
    countSub: 'Trainer Nasional',
    isGold: true,
  },
  {
    id: 'n6',
    label: 'Master Trainer & Lead Trainer',
    sublabel: 'Kapasitas nasional berkelanjutan',
    count: null,
    isFinal: true,
    isGold: true,
  },
];

const expansionNodes = [
  { label: 'Madrasah Ibtidaiyah', region: 'Seluruh Indonesia' },
  { label: 'Madrasah Tsanawiyah', region: 'Seluruh Indonesia' },
  { label: 'Madrasah Aliyah', region: 'Seluruh Indonesia' },
];

// Widths for the pipeline bars (narrowing funnel)
const barWidths = [100, 78, 60, 44, 32, 22];

export default function PipelinePengembanganGuruSection() {
  const [revealed, setRevealed] = useState(false);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          setTimeout(() => setAnimated(true), 500);
        }
      },
      { threshold: 0.04 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="pengembangan-guru"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 sm:px-6 overflow-hidden relative"
      style={{ background: 'var(--green-deep)' }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,150,60,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">

        {/* ── Header ── */}
        <div
          className="mb-16 md:mb-20"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="rule-gold" />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--gold)' }}
            >
              Arsitektur Pengembangan Guru
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-5 max-w-3xl leading-tight">
            Jalur Pengembangan Talenta Guru Nasional
          </h2>
          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.52)' }}
          >
            Program MBI membangun jalur pengembangan guru yang sistematis — dari pemetaan kompetensi awal hingga pembentukan Master Trainer berkualifikasi internasional yang siap mengimbaskan ke seluruh madrasah Indonesia.
          </p>
        </div>

        {/* ── DESKTOP: Full pipeline diagram ── */}
        <div className="hidden lg:block">
          <DesktopPipeline
            revealed={revealed}
            animated={animated}
          />
        </div>

        {/* ── MOBILE / TABLET: Vertical pathway ── */}
        <div className="block lg:hidden">
          <MobilePipeline revealed={revealed} animated={animated} />
        </div>

        {/* ── Strategic outcome banner ── */}
        <div
          className="mt-14 md:mt-20"
          style={{
            opacity: animated ? 1 : 0,
            transform: animated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s 1.2s ease, transform 0.9s 1.2s ease',
          }}
        >
          <OutcomeBanner />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP PIPELINE
───────────────────────────────────────────── */
function DesktopPipeline({
  revealed,
  animated,
}: {
  revealed: boolean;
  animated: boolean;
}) {
  return (
    <div className="relative">
      {/* Section label row */}
      <div className="grid grid-cols-12 gap-4 mb-3">
        <div className="col-span-5">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Jalur seleksi &amp; pengembangan
          </span>
        </div>
        <div className="col-span-2 flex justify-center">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Titik puncak
          </span>
        </div>
        <div className="col-span-5 flex justify-end">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Pengimbasan nasional
          </span>
        </div>
      </div>

      {/* Main pipeline row */}
      <div className="grid grid-cols-12 gap-0 items-center">

        {/* LEFT: Funnel stages */}
        <div className="col-span-5 flex flex-col gap-0 items-end pr-2">
          {pipelineNodes?.map((node, i) => {
            const delay = i * 100;
            const w = barWidths[i];
            const isLast = i === pipelineNodes.length - 1;

            return (
              <div
                key={node.id}
                className="w-full flex flex-col items-end"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease`,
                }}
              >
                <div
                  className="relative flex items-center overflow-hidden"
                  style={{
                    width: `${w}%`,
                    minWidth: '160px',
                    background: node.isFinal
                      ? 'linear-gradient(90deg, rgba(184,150,60,0.35) 0%, rgba(184,150,60,0.15) 100%)'
                      : node.isGold
                      ? 'rgba(184,150,60,0.10)'
                      : i === 0
                      ? 'rgba(255,255,255,0.09)'
                      : 'rgba(255,255,255,0.055)',
                    border: node.isFinal
                      ? '1.5px solid rgba(184,150,60,0.65)'
                      : node.isGold
                      ? '1px solid rgba(184,150,60,0.28)'
                      : '1px solid rgba(255,255,255,0.09)',
                    borderRadius: i === 0 ? '8px 8px 0 0' : isLast ? '0 0 8px 8px' : '0',
                    borderBottom: !isLast ? 'none' : undefined,
                  }}
                >
                  {/* Gold left accent */}
                  {node.isGold && (
                    <div
                      className="absolute left-0 top-0 bottom-0"
                      style={{
                        width: '3px',
                        background: 'var(--gold)',
                        opacity: node.isFinal ? 1 : 0.55,
                      }}
                    />
                  )}

                  <div className="flex items-center w-full py-2.5 px-3 gap-2 pl-4">
                    {/* Stage index */}
                    <span
                      className="flex-shrink-0 font-mono text-xs font-bold w-5"
                      style={{
                        color: node.isGold
                          ? 'var(--gold)'
                          : 'rgba(255,255,255,0.25)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Label */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold leading-snug"
                        style={{
                          color: node.isFinal
                            ? 'var(--gold)'
                            : node.isGold
                            ? 'rgba(255,255,255,0.90)'
                            : 'rgba(255,255,255,0.72)',
                          whiteSpace: 'normal',
                          wordBreak: 'break-word',
                        }}
                      >
                        {node.label}
                      </p>
                      <p
                        className="text-xs mt-0.5 leading-snug"
                        style={{
                          color: node.isGold
                            ? 'rgba(184,150,60,0.60)'
                            : 'rgba(255,255,255,0.32)',
                          whiteSpace: 'normal',
                        }}
                      >
                        {node.sublabel}
                      </p>
                    </div>

                    {/* Count */}
                    <div className="flex-shrink-0 text-right pl-1">
                      {node.count ? (
                        <div>
                          <p
                            className="font-serif font-bold leading-none"
                            style={{
                              color: node.isGold ? 'var(--gold)' : '#ffffff',
                              fontSize: i === 0 ? '1.4rem' : '1.1rem',
                              letterSpacing: '-0.02em',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {node.count}
                          </p>
                          {node.countSub && (
                            <p
                              className="text-xs mt-0.5"
                              style={{ color: 'rgba(255,255,255,0.30)', whiteSpace: 'nowrap' }}
                            >
                              {node.countSub}
                            </p>
                          )}
                        </div>
                      ) : (
                        <span
                          style={{ color: 'var(--gold)', fontSize: '1rem' }}
                        >
                          ★
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CENTER: Convergence + Expansion node */}
        <div className="col-span-2 flex flex-col items-center justify-center gap-0 relative">
          {/* Converging lines from left */}
          <svg
            className="absolute left-0 top-0 bottom-0"
            width="50%"
            height="100%"
            viewBox="0 0 50 300"
            preserveAspectRatio="none"
            style={{ opacity: animated ? 0.35 : 0, transition: 'opacity 0.8s 0.8s' }}
          >
            {[0, 50, 100, 150, 200, 250].map((y, i) => (
              <line
                key={i}
                x1="0"
                y1={y}
                x2="50"
                y2="150"
                stroke="rgba(184,150,60,0.8)"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Central node */}
          <div
            className="relative z-10 flex flex-col items-center justify-center text-center px-3 py-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(184,150,60,0.30) 0%, rgba(184,150,60,0.12) 100%)',
              border: '2px solid rgba(184,150,60,0.70)',
              minWidth: '110px',
              opacity: animated ? 1 : 0,
              transform: animated ? 'scale(1)' : 'scale(0.85)',
              transition: 'opacity 0.7s 0.6s ease, transform 0.7s 0.6s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center mb-2"
              style={{ background: 'rgba(184,150,60,0.25)', border: '1.5px solid rgba(184,150,60,0.6)' }}
            >
              <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>★</span>
            </div>
            <p
              className="font-serif font-bold leading-tight text-center"
              style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.02em' }}
            >
              Master Trainer
              <br />&amp; Lead Trainer
            </p>
            <p
              className="text-xs mt-1 leading-snug"
              style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.65rem' }}
            >
              Kapasitas nasional
            </p>
          </div>

          {/* Diverging lines to right */}
          <svg
            className="absolute right-0 top-0 bottom-0"
            width="50%"
            height="100%"
            viewBox="0 0 50 300"
            preserveAspectRatio="none"
            style={{ opacity: animated ? 0.35 : 0, transition: 'opacity 0.8s 1.0s' }}
          >
            {[30, 90, 150, 210, 270].map((y, i) => (
              <line
                key={i}
                x1="0"
                y1="150"
                x2="50"
                y2={y}
                stroke="rgba(184,150,60,0.8)"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* RIGHT: Pengimbasan expansion */}
        <div className="col-span-5 flex flex-col gap-3 pl-2">
          {/* Pengimbasan label */}
          <div
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.6s 0.9s ease, transform 0.6s 0.9s ease',
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: 'var(--gold)' }}
            >
              Pengimbasan ke Madrasah
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              di Seluruh Indonesia
            </p>
          </div>

          {/* Expansion cards */}
          {expansionNodes?.map((node, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(184,150,60,0.18)',
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateX(0)' : 'translateX(24px)',
                transition: `opacity 0.6s ${1.0 + i * 0.12}s ease, transform 0.6s ${1.0 + i * 0.12}s ease`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'rgba(184,150,60,0.55)' }}
              />
              <div>
                <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.80)' }}>
                  {node.label}
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {node.region}
                </p>
              </div>
            </div>
          ))}

          {/* Multiplier metric */}
          <div
            className="mt-2 px-5 py-4 rounded-xl"
            style={{
              background: 'rgba(184,150,60,0.08)',
              border: '1px solid rgba(184,150,60,0.25)',
              opacity: animated ? 1 : 0,
              transition: 'opacity 0.7s 1.35s ease',
            }}
          >
            <p
              className="font-serif font-bold leading-none mb-1"
              style={{ color: 'var(--gold)', fontSize: '2rem', letterSpacing: '-0.03em' }}
            >
              1 : 287
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Rasio seleksi nasional
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Dari 43.000+ guru nasional menuju 150+ Trainer Nasional — mencerminkan ketatnya jalur pengembangan.
            </p>
          </div>
        </div>
      </div>

      {/* Flow direction label */}
      <div
        className="mt-6 flex items-center justify-center gap-3"
        style={{
          opacity: animated ? 1 : 0,
          transition: 'opacity 0.7s 1.5s ease',
        }}
      >
        <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div className="flex items-center gap-2">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
            Seleksi progresif
          </span>
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
            <path d="M0 5 H22 M18 1 L26 5 L18 9" stroke="rgba(184,150,60,0.40)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
            Pengimbasan nasional
          </span>
        </div>
        <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE PIPELINE
───────────────────────────────────────────── */
function MobilePipeline({
  revealed,
  animated,
}: {
  revealed: boolean;
  animated: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Pipeline stages */}
      {pipelineNodes?.map((node, i) => {
        const delay = i * 110;
        const isLast = i === pipelineNodes.length - 1;

        return (
          <div
            key={node.id}
            className="w-full flex flex-col items-center"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(18px)',
              transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease`,
            }}
          >
            {/* Stage card */}
            <div
              className="w-full relative flex items-center overflow-hidden rounded-xl px-4 py-3 gap-3"
              style={{
                background: node.isFinal
                  ? 'linear-gradient(135deg, rgba(184,150,60,0.32) 0%, rgba(184,150,60,0.12) 100%)'
                  : node.isGold
                  ? 'rgba(184,150,60,0.09)'
                  : i === 0
                  ? 'rgba(255,255,255,0.09)'
                  : 'rgba(255,255,255,0.055)',
                border: node.isFinal
                  ? '1.5px solid rgba(184,150,60,0.65)'
                  : node.isGold
                  ? '1px solid rgba(184,150,60,0.28)'
                  : '1px solid rgba(255,255,255,0.09)',
              }}
            >
              {node.isGold && (
                <div
                  className="absolute left-0 top-0 bottom-0"
                  style={{
                    width: '3px',
                    background: 'var(--gold)',
                    opacity: node.isFinal ? 1 : 0.55,
                    borderRadius: '8px 0 0 8px',
                  }}
                />
              )}

              {/* Stage number */}
              <span
                className="flex-shrink-0 font-mono text-xs font-bold w-6"
                style={{
                  color: node.isGold ? 'var(--gold)' : 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.04em',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Label */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-semibold leading-snug"
                  style={{
                    color: node.isFinal
                      ? 'var(--gold)'
                      : node.isGold
                      ? 'rgba(255,255,255,0.90)'
                      : 'rgba(255,255,255,0.78)',
                  }}
                >
                  {node.label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: node.isGold
                      ? 'rgba(184,150,60,0.60)'
                      : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {node.sublabel}
                </p>
              </div>

              {/* Count */}
              {node.count && (
                <div className="flex-shrink-0 text-right">
                  <p
                    className="font-serif font-bold leading-none"
                    style={{
                      color: node.isGold ? 'var(--gold)' : '#ffffff',
                      fontSize: i === 0 ? '1.35rem' : '1.1rem',
                      letterSpacing: '-0.02em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {node.count}
                  </p>
                  {node.countSub && (
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: 'rgba(255,255,255,0.30)', whiteSpace: 'nowrap' }}
                    >
                      {node.countSub}
                    </p>
                  )}
                </div>
              )}
              {!node.count && (
                <span style={{ color: 'var(--gold)', fontSize: '1rem', flexShrink: 0 }}>★</span>
              )}
            </div>

            {/* Connector */}
            {!isLast && (
              <div
                className="flex flex-col items-center"
                style={{
                  opacity: animated ? 1 : 0,
                  transition: `opacity 0.4s ${(i + 1) * 120}ms`,
                }}
              >
                <div className="w-px h-4" style={{ background: 'rgba(184,150,60,0.30)' }} />
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1 L6 7 L11 1" stroke="rgba(184,150,60,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        );
      })}

      {/* Expansion arrow */}
      <div
        className="flex flex-col items-center mt-1"
        style={{
          opacity: animated ? 1 : 0,
          transition: 'opacity 0.6s 0.9s ease',
        }}
      >
        <div className="w-px h-5" style={{ background: 'rgba(184,150,60,0.40)' }} />
        <div
          className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest"
          style={{
            background: 'rgba(184,150,60,0.12)',
            border: '1px solid rgba(184,150,60,0.35)',
            color: 'var(--gold)',
          }}
        >
          Pengimbasan Nasional
        </div>
        <div className="w-px h-5" style={{ background: 'rgba(184,150,60,0.40)' }} />
      </div>

      {/* Expansion cards */}
      <div
        className="w-full flex flex-col gap-2"
        style={{
          opacity: animated ? 1 : 0,
          transition: 'opacity 0.7s 1.1s ease',
        }}
      >
        {expansionNodes?.map((node, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(184,150,60,0.18)',
            }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: 'rgba(184,150,60,0.55)' }}
            />
            <div>
              <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.80)' }}>
                {node.label}
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {node.region}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Ratio metric */}
      <div
        className="w-full mt-4 px-5 py-4 rounded-xl"
        style={{
          background: 'rgba(184,150,60,0.08)',
          border: '1px solid rgba(184,150,60,0.25)',
          opacity: animated ? 1 : 0,
          transition: 'opacity 0.7s 1.4s ease',
        }}
      >
        <p
          className="font-serif font-bold leading-none mb-1"
          style={{ color: 'var(--gold)', fontSize: '2rem', letterSpacing: '-0.03em' }}
        >
          1 : 287
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Rasio seleksi nasional
        </p>
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.40)' }}>
          Dari 43.000+ guru nasional menuju 150+ Trainer Nasional.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   OUTCOME BANNER
───────────────────────────────────────────── */
function OutcomeBanner() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl px-6 md:px-10 py-8 md:py-10"
      style={{
        background: 'linear-gradient(135deg, rgba(184,150,60,0.18) 0%, rgba(184,150,60,0.06) 60%, rgba(255,255,255,0.03) 100%)',
        border: '1.5px solid rgba(184,150,60,0.35)',
      }}
    >
      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(184,150,60,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center relative">
        {/* Left: headline */}
        <div>
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Dampak Strategis
          </p>
          <h3
            className="font-serif text-2xl md:text-3xl text-white leading-tight mb-3"
          >
            Dari pengembangan individu menuju kapasitas nasional
          </h3>
          <div className="flex items-center gap-2 mt-4">
            <div className="rule-gold" />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Program MBI — Kementerian Agama RI
            </span>
          </div>
        </div>

        {/* Right: description */}
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
            Master Trainer dan Lead Trainer menjadi penggerak pengembangan guru Bahasa Inggris madrasah secara berkelanjutan melalui pengimbasan ke berbagai wilayah — memastikan dampak program tidak berhenti pada peserta langsung, melainkan menjangkau seluruh ekosistem madrasah di Indonesia.
          </p>
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
              style={{ background: 'rgba(184,150,60,0.20)', border: '1px solid rgba(184,150,60,0.45)' }}
            >
              <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>↗</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Satu Trainer Nasional mampu mengimbaskan kompetensi kepada puluhan guru di wilayahnya, menciptakan efek pengganda yang berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
