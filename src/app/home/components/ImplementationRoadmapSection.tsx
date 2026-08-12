'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    id: 'Proposal Kemitraan',
    desc: 'Penyampaian proposal kemitraan strategis dan rencana pengembangan program secara komprehensif.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: '02',
    id: 'Penjajakan & Pembahasan Program',
    desc: 'Penjajakan kebutuhan, diskusi strategis, dan pembahasan program bersama pimpinan institusi.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    num: '03',
    id: 'Asesmen UPT',
    desc: 'Identifikasi lokasi dan asesmen mendalam terhadap kondisi UPT Bahasa yang ada.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    num: '04',
    id: 'Penandatanganan Kerja Sama',
    desc: 'Penandatanganan MoU atau perjanjian kemitraan resmi sebagai landasan hukum program.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
        <path d="m21 3 1 11h-2"/>
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
        <path d="M3 4h8"/>
      </svg>
    ),
  },
  {
    num: '05',
    id: 'Persiapan Operasional',
    desc: 'Persiapan sarana, prasarana, kurikulum, dan sistem operasional UPT Bahasa secara menyeluruh.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    num: '06',
    id: 'Pelatihan SDM',
    desc: 'Pelatihan intensif tenaga lokal — pengajar, administrasi, dan manajemen UPT Bahasa.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    num: '07',
    id: 'Sosialisasi',
    desc: 'Sosialisasi dan promosi program kepada sivitas akademika dan komunitas kampus.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    num: '08',
    id: 'Peluncuran UPT',
    desc: 'Grand opening dan peluncuran resmi layanan UPT Pusat Bahasa kepada publik.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    num: '09',
    id: 'Sertifikasi & Lisensi Internasional',
    desc: 'Pemberian sertifikasi dan lisensi internasional bagi PTKIN sebagai Cambridge Authorised Preparation Centre dan NEAS Quality Endorsed Centre.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    num: '10',
    id: 'Pendampingan Berkelanjutan',
    desc: 'Pendampingan operasional, monitoring, evaluasi, dan pengembangan program secara berkelanjutan.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
];

// Phase groupings for visual separation
const phases = [
  { label: 'Fase Inisiasi', color: '#173A2D', steps: steps.slice(0, 3) },
  { label: 'Fase Persiapan', color: '#1e4d3a', steps: steps.slice(3, 5) },
  { label: 'Fase Implementasi', color: '#C9A03A', steps: steps.slice(5, 7) },
  { label: 'Fase Operasional', color: '#173A2D', steps: steps.slice(7, 9) },
];

export default function ImplementationRoadmapSection() {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Use revealed only after mount to avoid hydration mismatch
  const isRevealed = mounted && revealed;

  return (
    <section
      id="tahapan-implementasi"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-1000"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Alur Kemitraan
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl">
            Tahapan Implementasi Program
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
            Perjalanan pengembangan UPT Pusat Bahasa PTKIN dari penjajakan awal hingga operasional penuh dengan pendampingan berkelanjutan.
          </p>
        </div>

        {/* Desktop / Tablet: Horizontal flow rows */}
        <div className="hidden md:block">
          {/* Row 1: Steps 01–05 */}
          <TimelineRow steps={steps.slice(0, 5)} startIndex={0} revealed={isRevealed} isLast={false} />
          {/* Row connector: right-to-left turn */}
          <TurnConnector revealed={isRevealed} />
          {/* Row 2: Steps 06–10 (reversed visual flow) */}
          <TimelineRow steps={steps.slice(5, 10)} startIndex={5} revealed={isRevealed} isLast={true} reversed />
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden">
          <VerticalTimeline steps={steps} revealed={isRevealed} />
        </div>
      </div>
    </section>
  );
}

/* ─── Horizontal Timeline Row ─────────────────────────────────────────── */
function TimelineRow({
  steps: rowSteps,
  startIndex,
  revealed,
  isLast,
  reversed = false,
}: {
  steps: typeof steps;
  startIndex: number;
  revealed: boolean;
  isLast: boolean;
  reversed?: boolean;
}) {
  const displaySteps = reversed ? [...rowSteps].reverse() : rowSteps;

  return (
    <div className="relative flex items-stretch gap-0">
      {displaySteps.map((step, i) => {
        const originalIndex = reversed ? startIndex + (rowSteps.length - 1 - i) : startIndex + i;
        const isLastInRow = i === displaySteps.length - 1;
        const showConnector = !isLastInRow;

        return (
          <React.Fragment key={step.num}>
            <StepCard
              step={step}
              index={originalIndex}
              revealed={revealed}
              delay={originalIndex * 80}
              isTerminal={isLast && isLastInRow && !reversed}
            />
            {showConnector && (
              <HorizontalConnector
                reversed={reversed}
                revealed={revealed}
                delay={originalIndex * 80 + 40}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ─── Individual Step Card ─────────────────────────────────────────────── */
function StepCard({
  step,
  index,
  revealed,
  delay,
  isTerminal,
}: {
  step: typeof steps[0];
  index: number;
  revealed: boolean;
  delay: number;
  isTerminal: boolean;
}) {
  const isHighlight = index === 4 || index === 9;

  return (
    <div
      className="flex-1 transition-all duration-700"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="h-full flex flex-col p-5 rounded-2xl relative overflow-hidden"
        style={{
          background: isHighlight ? '#173A2D' : 'white',
          border: isHighlight ? '1.5px solid #C9A03A' : '1px solid rgba(23,58,45,0.1)',
          boxShadow: isHighlight
            ? '0 8px 32px rgba(23,58,45,0.18), 0 2px 8px rgba(201,160,58,0.12)'
            : '0 2px 16px rgba(23,58,45,0.06)',
        }}
      >
        {/* Subtle top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
          style={{ background: isHighlight ? '#C9A03A' : 'rgba(201,160,58,0.3)' }}
        />

        {/* Number badge */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center mb-4 text-xs font-bold flex-shrink-0"
          style={{
            background: isHighlight ? 'rgba(201,160,58,0.15)' : 'rgba(201,160,58,0.1)',
            color: '#C9A03A',
            border: '1.5px solid rgba(201,160,58,0.4)',
            fontFamily: 'var(--font-mono, monospace)',
            letterSpacing: '0.05em',
          }}
        >
          {step.num}
        </div>

        {/* Icon */}
        <div
          className="mb-3"
          style={{ color: isHighlight ? 'rgba(201,160,58,0.8)' : 'rgba(23,58,45,0.5)' }}
        >
          {step.icon}
        </div>

        {/* Title */}
        <p
          className="font-bold text-sm leading-snug mb-2"
          style={{ color: isHighlight ? 'white' : '#173A2D' }}
        >
          {step.id}
        </p>

        {/* Description */}
        <p
          className="text-xs leading-relaxed mt-auto"
          style={{ color: isHighlight ? 'rgba(255,255,255,0.65)' : 'var(--ink-soft)' }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Horizontal Connector Arrow ───────────────────────────────────────── */
function HorizontalConnector({
  reversed,
  revealed,
  delay,
}: {
  reversed: boolean;
  revealed: boolean;
  delay: number;
}) {
  return (
    <div
      className="flex items-center flex-shrink-0 transition-all duration-500"
      style={{
        opacity: revealed ? 1 : 0,
        transitionDelay: `${delay}ms`,
        width: '28px',
      }}
    >
      <div className="relative w-full flex items-center">
        {reversed ? (
          <>
            {/* Arrowhead at the LEFT end, pointing left (toward next card in reversed flow) */}
            <svg
              className="flex-shrink-0 -mr-1"
              width="8"
              height="10"
              viewBox="0 0 8 10"
              fill="none"
              style={{ transform: 'rotate(180deg)' }}
            >
              <path d="M0 0L8 5L0 10V0Z" fill="#C9A03A" opacity="0.7" />
            </svg>
            <div
              className="flex-1 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(201,160,58,0.7), rgba(201,160,58,0.4))' }}
            />
          </>
        ) : (
          <>
            {/* Arrowhead at the RIGHT end, pointing right (toward next card in forward flow) */}
            <div
              className="flex-1 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(201,160,58,0.4), rgba(201,160,58,0.7))' }}
            />
            <svg
              className="flex-shrink-0 -ml-1"
              width="8"
              height="10"
              viewBox="0 0 8 10"
              fill="none"
            >
              <path d="M0 0L8 5L0 10V0Z" fill="#C9A03A" opacity="0.7" />
            </svg>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Turn Connector (end of row 1 → start of row 2) ───────────────────── */
function TurnConnector({ revealed }: { revealed: boolean }) {
  return (
    <div
      className="flex justify-end items-center my-2 pr-0 transition-all duration-700"
      style={{ opacity: revealed ? 1 : 0, transitionDelay: '500ms' }}
    >
      {/* The connector sits in the rightmost column (same width as a step card ~20%) */}
      <div
        className="flex flex-col items-center"
        style={{ width: 'calc(20% - 14px)' }}
      >
        {/* Vertical line down from bottom center of Card 05 */}
        <div
          style={{
            width: '2px',
            height: '28px',
            background: 'linear-gradient(180deg, rgba(201,160,58,0.7), rgba(201,160,58,0.5))',
          }}
        />
        {/* Downward arrowhead pointing into top center of Card 06 */}
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M0 0H10L5 8L0 0Z" fill="#C9A03A" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Mobile Vertical Timeline ─────────────────────────────────────────── */
function VerticalTimeline({ steps: allSteps, revealed }: { steps: typeof steps; revealed: boolean }) {
  return (
    <div className="flex flex-col gap-0">
      {allSteps.map((step, i) => {
        const isLast = i === allSteps.length - 1;
        const isHighlight = i === 4 || i === 9;

        return (
          <div
            key={step.num}
            className="flex gap-4 transition-all duration-700"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: `${i * 70}ms`,
            }}
          >
            {/* Timeline spine */}
            <div className="flex flex-col items-center flex-shrink-0" style={{ width: '40px' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{
                  background: isHighlight ? '#173A2D' : 'white',
                  border: `2px solid ${isHighlight ? '#C9A03A' : 'rgba(201,160,58,0.35)'}`,
                  color: '#C9A03A',
                  fontFamily: 'var(--font-mono, monospace)',
                  boxShadow: isHighlight ? '0 4px 12px rgba(23,58,45,0.2)' : '0 2px 8px rgba(23,58,45,0.06)',
                }}
              >
                {step.num}
              </div>
              {!isLast && (
                <div
                  className="flex-1 my-1"
                  style={{
                    width: '2px',
                    minHeight: '32px',
                    background: 'linear-gradient(180deg, rgba(201,160,58,0.5), rgba(201,160,58,0.15))',
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div
              className="flex-1 mb-4 p-4 rounded-xl"
              style={{
                background: isHighlight ? '#173A2D' : 'white',
                border: isHighlight ? '1px solid rgba(201,160,58,0.4)' : '1px solid rgba(23,58,45,0.08)',
                boxShadow: isHighlight ? '0 4px 16px rgba(23,58,45,0.15)' : '0 2px 8px rgba(23,58,45,0.05)',
              }}
            >
              <div className="flex items-start gap-3">
                <div style={{ color: isHighlight ? 'rgba(201,160,58,0.8)' : 'rgba(23,58,45,0.45)', marginTop: '1px' }}>
                  {step.icon}
                </div>
                <div>
                  <p
                    className="font-bold text-sm leading-snug mb-1"
                    style={{ color: isHighlight ? 'white' : '#173A2D' }}
                  >
                    {step.id}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: isHighlight ? 'rgba(255,255,255,0.65)' : 'var(--ink-soft)' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
