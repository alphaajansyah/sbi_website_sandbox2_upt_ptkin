'use client';

import React, { useEffect, useRef, useState } from 'react';

const stages = [
  {
    num: '01',
    name: 'National Teacher Population',
    count: '43,000+',
    descriptor: 'English teachers',
    widthPct: 100,
    isGold: false,
    isFinal: false,
  },
  {
    num: '02',
    name: 'Initial Assessment',
    count: '2,000',
    descriptor: 'CEST',
    widthPct: 80,
    isGold: false,
    isFinal: false,
  },
  {
    num: '03',
    name: 'Teacher Development',
    count: '1,000',
    descriptor: 'CEfT',
    widthPct: 62,
    isGold: false,
    isFinal: false,
  },
  {
    num: '04',
    name: 'Intensive Immersion',
    count: '500',
    descriptor: 'PBI',
    widthPct: 46,
    isGold: false,
    isFinal: false,
  },
  {
    num: '05',
    name: 'International Trainer Development',
    count: '150+',
    descriptor: 'National Trainers',
    widthPct: 34,
    isGold: true,
    isFinal: false,
  },
  {
    num: '06',
    name: 'National Multiplier Capacity',
    count: null,
    descriptor: 'Master & Lead Trainers',
    widthPct: 26,
    isGold: true,
    isFinal: true,
  },
];

const interpretations = [
  {
    tag: 'NATIONAL SCALE',
    body: '43,000+ English teachers form the national population addressed by the programme — the full base of madrasah English educators across Indonesia.',
  },
  {
    tag: 'SELECTIVE DEVELOPMENT',
    body: 'The pathway progressively identifies and develops high-potential teachers through rigorous assessment, Cambridge-accredited training, residential immersion, and international trainer development.',
  },
  {
    tag: 'NATIONAL MULTIPLIER EFFECT',
    body: 'Master Trainers and Lead Trainers extend the impact far beyond initial participants, sustaining teacher development across madrasah without continued external dependency.',
  },
];

export default function PipelinePengembanganGuruSection() {
  const [revealed, setRevealed] = useState(false);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          setTimeout(() => setAnimated(true), 400);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="pengembangan-guru"
      ref={sectionRef}
      className="py-28 px-6 overflow-hidden"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div
          className="mb-16"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Pipeline Pengembangan Guru
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 max-w-3xl leading-tight">
            Jalur Pengembangan Talenta Guru Nasional
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Program MBI membangun jalur pengembangan guru yang sistematis — dari pemetaan kompetensi awal hingga pembentukan Master Trainer berkualifikasi internasional yang siap mengimbaskan ke seluruh madrasah Indonesia.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

          {/* ── LEFT: Progressive funnel pathway ── */}
          <div className="lg:col-span-7">

            {/* Column label */}
            <div
              className="mb-6"
              style={{
                opacity: revealed ? 1 : 0,
                transition: 'opacity 0.7s 0.1s',
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.28)' }}
              >
                What happens?
              </span>
            </div>

            {/* Funnel stages — centered, each narrower than the last */}
            <div className="flex flex-col items-center gap-0">
              {stages?.map((stage, i) => {
                const isLast = i === stages?.length - 1;
                const delay = i * 110;

                return (
                  <div
                    key={i}
                    className="w-full flex flex-col items-center"
                    style={{
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? 'translateY(0)' : 'translateY(18px)',
                      transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease`,
                    }}
                  >
                    {/* Stage bar */}
                    <div
                      className="relative flex items-center overflow-hidden"
                      style={{
                        width: `${stage?.widthPct}%`,
                        minWidth: '220px',
                        background: stage?.isFinal
                          ? 'linear-gradient(135deg, rgba(184,150,60,0.45) 0%, rgba(184,150,60,0.25) 100%)'
                          : stage?.isGold
                          ? 'rgba(184,150,60,0.12)'
                          : i === 0
                          ? 'rgba(255,255,255,0.10)'
                          : 'rgba(255,255,255,0.06)',
                        border: stage?.isFinal
                          ? '1.5px solid rgba(184,150,60,0.75)'
                          : stage?.isGold
                          ? '1px solid rgba(184,150,60,0.32)'
                          : '1px solid rgba(255,255,255,0.10)',
                        borderRadius: i === 0
                          ? '10px 10px 0 0'
                          : isLast
                          ? '0 0 10px 10px' :'0',
                        borderBottom: !isLast ? 'none' : undefined,
                        paddingLeft: stage?.isGold ? '14px' : '12px',
                      }}
                    >
                      {/* Gold left accent bar for gold stages */}
                      {stage?.isGold && (
                        <div
                          className="absolute left-0 top-0 bottom-0"
                          style={{
                            width: '3px',
                            background: 'var(--gold)',
                            opacity: stage?.isFinal ? 1 : 0.6,
                          }}
                        />
                      )}

                      <div className="flex items-center w-full py-3 pr-4 gap-3 pl-1">
                        {/* Stage number */}
                        <span
                          className="flex-shrink-0 font-mono text-xs font-bold"
                          style={{
                            color: stage?.isGold ? 'var(--gold)' : 'rgba(255,255,255,0.30)',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {stage?.num}
                        </span>

                        {/* Stage name + descriptor */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-xs font-semibold leading-snug"
                            style={{
                              color: stage?.isFinal
                                ? 'var(--gold)'
                                : stage?.isGold
                                ? 'rgba(255,255,255,0.90)'
                                : 'rgba(255,255,255,0.75)',
                              whiteSpace: 'normal',
                              wordBreak: 'break-word',
                            }}
                          >
                            {stage?.name}
                          </p>
                          <p
                            className="text-xs mt-0.5"
                            style={{
                              color: stage?.isGold
                                ? 'rgba(184,150,60,0.65)'
                                : 'rgba(255,255,255,0.35)',
                            }}
                          >
                            {stage?.descriptor}
                          </p>
                        </div>

                        {/* Count — dominant visual element */}
                        <div className="flex-shrink-0 text-right pl-1">
                          {stage?.count ? (
                            <p
                              className="font-serif font-bold leading-none"
                              style={{
                                color: stage?.isGold ? 'var(--gold)' : '#ffffff',
                                fontSize: i === 0 ? '1.55rem' : '1.25rem',
                                letterSpacing: '-0.02em',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {stage?.count}
                            </p>
                          ) : (
                            <p
                              className="font-serif font-bold leading-none text-right"
                              style={{
                                color: 'var(--gold)',
                                fontSize: '0.75rem',
                                letterSpacing: '0.02em',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              ★
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Connector arrow between stages */}
                    {!isLast && (
                      <div
                        style={{
                          opacity: animated ? 1 : 0,
                          transition: `opacity 0.45s ${(i + 1) * 120}ms`,
                        }}
                      >
                        <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
                          <line x1="3" y1="0" x2="16" y2="10" stroke="rgba(184,150,60,0.28)" strokeWidth="1" />
                          <line x1="29" y1="0" x2="16" y2="10" stroke="rgba(184,150,60,0.28)" strokeWidth="1" />
                          <path d="M11 9 L16 14 L21 9" fill="none" stroke="rgba(184,150,60,0.40)" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom note */}
            <div
              className="mt-7 flex items-center gap-2"
              style={{
                opacity: animated ? 1 : 0,
                transition: 'opacity 0.8s 1s',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Progressive selection — from national population to internationally qualified trainers
              </p>
            </div>
          </div>

          {/* ── RIGHT: Strategic interpretation ── */}
          <div
            className="lg:col-span-5 flex flex-col gap-6"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1s 0.55s ease, transform 1s 0.55s ease',
            }}
          >
            {/* Column label */}
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.28)' }}
              >
                Why does this matter?
              </span>
            </div>

            {/* 1:287 ratio — strong visual metric */}
            <div
              className="px-7 py-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(184,150,60,0.20) 0%, rgba(184,150,60,0.07) 100%)',
                border: '1.5px solid rgba(184,150,60,0.40)',
              }}
            >
              <p
                className="font-serif font-bold leading-none mb-2"
                style={{ color: 'var(--gold)', fontSize: '2.8rem', letterSpacing: '-0.03em' }}
              >
                1 : 287
              </p>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Selection Ratio
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
                Approximate ratio from the national teacher population to the 150+ national trainer cohort — reflecting the rigour of the development pathway.
              </p>
            </div>

            {/* Three interpretation panels */}
            {interpretations?.map((item, i) => (
              <div
                key={i}
                className="px-6 py-5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.7s ${0.7 + i * 0.15}s ease, transform 0.7s ${0.7 + i * 0.15}s ease`,
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--gold)' }}
                >
                  {item?.tag}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                  {item?.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
