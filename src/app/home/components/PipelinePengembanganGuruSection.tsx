'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const stages = [
  {
    num: '43.000+',
    unit: 'Guru',
    title: 'Populasi Guru Nasional',
    desc: 'Guru Bahasa Inggris Madrasah di seluruh Indonesia',
    tag: 'Titik awal',
    isGold: false,
  },
  {
    num: '2.000',
    unit: 'Peserta',
    title: 'Asesmen Awal',
    desc: 'Cambridge English Skills Test (CEST) — pemetaan kompetensi awal',
    tag: 'Seleksi I',
    isGold: false,
  },
  {
    num: '1.000',
    unit: 'Peserta',
    title: 'Cambridge English for Teachers',
    desc: 'CEfT — pengembangan kompetensi pedagogis berbasis Cambridge',
    tag: 'Seleksi II',
    isGold: false,
  },
  {
    num: '500',
    unit: 'Peserta',
    title: 'Pesantren Bahasa Inggris',
    desc: 'PBI — imersi intensif residensial untuk penguatan kompetensi',
    tag: 'Seleksi III',
    isGold: false,
  },
  {
    num: '150+',
    unit: 'Trainer',
    title: 'International Training of Trainers',
    desc: 'Pengembangan Trainer Nasional berkualifikasi internasional',
    tag: 'Seleksi IV',
    isGold: true,
  },
];

const disseminationTargets = [
  {
    label: 'Madrasah Ibtidaiyah',
    abbr: 'MI',
    desc: 'Tingkat dasar',
  },
  {
    label: 'Madrasah Tsanawiyah',
    abbr: 'MTs',
    desc: 'Tingkat menengah pertama',
  },
  {
    label: 'Madrasah Aliyah',
    abbr: 'MA',
    desc: 'Tingkat menengah atas',
  },
];

/* ─── Arrow SVG ─────────────────────────────────────────────────────────── */
function ArrowRight({ animated, delay = 0 }: { animated: boolean; delay?: number }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center"
      style={{
        opacity: animated ? 1 : 0,
        transition: `opacity 0.5s ${delay}ms ease`,
      }}
    >
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
        <path
          d="M0 8 H18 M13 2 L22 8 L13 14"
          stroke="rgba(184,150,60,0.55)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArrowDown({ animated, delay = 0 }: { animated: boolean; delay?: number }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        opacity: animated ? 1 : 0,
        transition: `opacity 0.5s ${delay}ms ease`,
      }}
    >
      <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
        <path
          d="M8 0 V22 M2 17 L8 26 L14 17"
          stroke="rgba(184,150,60,0.55)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */
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
      { threshold: 0.04 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="pengembangan-guru"
      ref={sectionRef}
      className="py-20 md:py-28 px-4 sm:px-6 overflow-hidden relative"
      style={{ background: 'var(--green-deep)' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 40% at 50% 10%, rgba(184,150,60,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Header ── */}
        <div
          className="mb-14 md:mb-18"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--gold)' }}
            >
              Arsitektur Pengembangan Guru
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-3xl leading-tight">
            Jalur Pengembangan Talenta Guru Nasional
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            Program MBI membangun jalur pengembangan guru yang sistematis — dari pemetaan kompetensi awal hingga pembentukan Master Trainer berkualifikasi internasional yang siap mengimbaskan ke seluruh madrasah Indonesia.
          </p>
        </div>

        {/* ── Desktop layout (lg+) ── */}
        <div className="hidden lg:block">
          <DesktopLayout revealed={revealed} animated={animated} />
        </div>

        {/* ── Tablet layout (md–lg) ── */}
        <div className="hidden md:block lg:hidden">
          <TabletLayout revealed={revealed} animated={animated} />
        </div>

        {/* ── Mobile layout (< md) ── */}
        <div className="block md:hidden">
          <MobileLayout revealed={revealed} animated={animated} />
        </div>

        {/* ── Strategic outcome banner ── */}
        <OutcomeBanner animated={animated} />
      </div>
    </section>
  );
}

/* ─── Desktop Layout ────────────────────────────────────────────────────── */
function DesktopLayout({ revealed, animated }: { revealed: boolean; animated: boolean }) {
  return (
    <div>
      {/* Row label */}
      <div
        className="flex items-center gap-2 mb-5"
        style={{ opacity: revealed ? 0.5 : 0, transition: 'opacity 0.6s 0.2s' }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'rgba(255,255,255,0.30)' }}>
          Seleksi &amp; pengembangan progresif
        </span>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'rgba(184,150,60,0.50)' }}>
          Titik puncak
        </span>
        <div className="w-8 h-px" style={{ background: 'rgba(184,150,60,0.20)' }} />
        <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'rgba(255,255,255,0.30)' }}>
          Pengimbasan nasional
        </span>
      </div>

      {/* Main horizontal flow */}
      <div className="flex items-stretch gap-0">

        {/* ── Left: 5 stages ── */}
        <div className="flex items-center gap-0 flex-1 min-w-0">
          {stages.map((stage, i) => (
            <React.Fragment key={i}>
              <StageCard
                stage={stage}
                index={i}
                revealed={revealed}
                delay={i * 80}
              />
              {i < stages.length - 1 && (
                <ArrowRight animated={animated} delay={100 + i * 80} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Arrow to Master Trainer */}
        <ArrowRight animated={animated} delay={500} />

        {/* ── Centre: Master Trainer node ── */}
        <MasterTrainerNode animated={animated} />

        {/* Arrow to Pengimbasan */}
        <ArrowRight animated={animated} delay={700} />

        {/* ── Right: Pengimbasan ── */}
        <DisseminationPanel animated={animated} />
      </div>

      {/* Flow caption */}
      <div
        className="mt-8 flex items-center justify-center gap-3"
        style={{ opacity: animated ? 0.6 : 0, transition: 'opacity 0.7s 1.2s ease' }}
      >
        <div className="h-px w-16" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
          43.000+ guru → seleksi progresif → 150+ Trainer Nasional → pengimbasan ke seluruh madrasah Indonesia
        </span>
        <div className="h-px w-16" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>
    </div>
  );
}

/* ─── Tablet Layout ─────────────────────────────────────────────────────── */
function TabletLayout({ revealed, animated }: { revealed: boolean; animated: boolean }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Top row: first 3 stages */}
      <div className="flex items-stretch gap-0">
        {stages.slice(0, 3).map((stage, i) => (
          <React.Fragment key={i}>
            <StageCard stage={stage} index={i} revealed={revealed} delay={i * 80} />
            {i < 2 && <ArrowRight animated={animated} delay={100 + i * 80} />}
          </React.Fragment>
        ))}
      </div>

      {/* Down arrow */}
      <div className="flex justify-start pl-8">
        <ArrowDown animated={animated} delay={300} />
      </div>

      {/* Bottom row: stages 4 & 5 + Master Trainer + Pengimbasan */}
      <div className="flex items-stretch gap-0">
        {stages.slice(3).map((stage, i) => (
          <React.Fragment key={i}>
            <StageCard stage={stage} index={i + 3} revealed={revealed} delay={350 + i * 80} />
            <ArrowRight animated={animated} delay={450 + i * 80} />
          </React.Fragment>
        ))}
        <MasterTrainerNode animated={animated} />
        <ArrowRight animated={animated} delay={650} />
        <DisseminationPanel animated={animated} />
      </div>
    </div>
  );
}

/* ─── Mobile Layout ─────────────────────────────────────────────────────── */
function MobileLayout({ revealed, animated }: { revealed: boolean; animated: boolean }) {
  return (
    <div className="flex flex-col items-center gap-0">
      {stages.map((stage, i) => (
        <React.Fragment key={i}>
          <MobileStageCard stage={stage} index={i} revealed={revealed} delay={i * 90} />
          <ArrowDown animated={animated} delay={80 + i * 90} />
        </React.Fragment>
      ))}

      {/* Master Trainer */}
      <MobileMasterTrainerNode animated={animated} />
      <ArrowDown animated={animated} delay={600} />

      {/* Dissemination */}
      <MobileDisseminationPanel animated={animated} />
    </div>
  );
}

/* ─── Stage Card (Desktop/Tablet) ───────────────────────────────────────── */
function StageCard({
  stage,
  index,
  revealed,
  delay,
}: {
  stage: (typeof stages)[0];
  index: number;
  revealed: boolean;
  delay: number;
}) {
  return (
    <div
      className="flex flex-col justify-between relative overflow-hidden"
      style={{
        minWidth: '140px',
        width: '160px',
        flexShrink: 0,
        padding: '14px 14px 14px 16px',
        background: stage.isGold
          ? 'rgba(184,150,60,0.10)'
          : index === 0
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(255,255,255,0.05)',
        border: stage.isGold
          ? '1px solid rgba(184,150,60,0.35)'
          : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease`,
      }}
    >
      {/* Gold left accent for stage 5 */}
      {stage.isGold && (
        <div
          className="absolute left-0 top-0 bottom-0"
          style={{ width: '3px', background: 'var(--gold)', borderRadius: '10px 0 0 10px' }}
        />
      )}

      {/* Tag */}
      <div className="mb-2">
        <span
          className="text-xs font-mono font-bold uppercase tracking-wider"
          style={{ color: stage.isGold ? 'var(--gold)' : 'rgba(255,255,255,0.22)' }}
        >
          {stage.tag}
        </span>
      </div>

      {/* Number */}
      <div className="mb-2">
        <p
          className="font-serif font-bold leading-none"
          style={{
            color: stage.isGold ? 'var(--gold)' : '#ffffff',
            fontSize: index === 0 ? '1.6rem' : '1.35rem',
            letterSpacing: '-0.02em',
          }}
        >
          {stage.num}
        </p>
        <p
          className="text-xs mt-0.5"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          {stage.unit}
        </p>
      </div>

      {/* Title */}
      <p
        className="text-xs font-semibold leading-snug mb-1"
        style={{
          color: stage.isGold ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.75)',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {stage.title}
      </p>

      {/* Desc */}
      <p
        className="text-xs leading-snug"
        style={{
          color: 'rgba(255,255,255,0.35)',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {stage.desc}
      </p>
    </div>
  );
}

/* ─── Mobile Stage Card ─────────────────────────────────────────────────── */
function MobileStageCard({
  stage,
  index,
  revealed,
  delay,
}: {
  stage: (typeof stages)[0];
  index: number;
  revealed: boolean;
  delay: number;
}) {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        padding: '14px 16px 14px 20px',
        background: stage.isGold
          ? 'rgba(184,150,60,0.10)'
          : index === 0
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(255,255,255,0.05)',
        border: stage.isGold
          ? '1px solid rgba(184,150,60,0.35)'
          : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease`,
      }}
    >
      {stage.isGold && (
        <div
          className="absolute left-0 top-0 bottom-0"
          style={{ width: '3px', background: 'var(--gold)', borderRadius: '10px 0 0 10px' }}
        />
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span
            className="text-xs font-mono font-bold uppercase tracking-wider"
            style={{ color: stage.isGold ? 'var(--gold)' : 'rgba(255,255,255,0.25)' }}
          >
            {stage.tag}
          </span>
          <p
            className="text-sm font-semibold leading-snug mt-1 mb-1"
            style={{
              color: stage.isGold ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.80)',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {stage.title}
          </p>
          <p
            className="text-xs leading-snug"
            style={{
              color: 'rgba(255,255,255,0.38)',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {stage.desc}
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <p
            className="font-serif font-bold leading-none"
            style={{
              color: stage.isGold ? 'var(--gold)' : '#ffffff',
              fontSize: index === 0 ? '1.5rem' : '1.25rem',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            {stage.num}
          </p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {stage.unit}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Master Trainer Node (Desktop/Tablet) ──────────────────────────────── */
function MasterTrainerNode({ animated }: { animated: boolean }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{
        minWidth: '150px',
        width: '165px',
        flexShrink: 0,
        padding: '18px 16px',
        background: 'linear-gradient(135deg, rgba(184,150,60,0.28) 0%, rgba(184,150,60,0.10) 100%)',
        border: '2px solid rgba(184,150,60,0.65)',
        borderRadius: '12px',
        opacity: animated ? 1 : 0,
        transform: animated ? 'scale(1)' : 'scale(0.88)',
        transition: 'opacity 0.7s 0.55s ease, transform 0.7s 0.55s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(184,150,60,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center mb-3 relative z-10"
        style={{ background: 'rgba(184,150,60,0.22)', border: '1.5px solid rgba(184,150,60,0.60)' }}
      >
        <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>★</span>
      </div>
      <p
        className="font-serif font-bold leading-tight relative z-10"
        style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.01em' }}
      >
        Master Trainer
        <br />&amp; Lead Trainer
      </p>
      <p
        className="text-xs mt-2 leading-snug relative z-10"
        style={{ color: 'rgba(255,255,255,0.48)' }}
      >
        Kapasitas nasional berkelanjutan
      </p>
    </div>
  );
}

/* ─── Mobile Master Trainer Node ────────────────────────────────────────── */
function MobileMasterTrainerNode({ animated }: { animated: boolean }) {
  return (
    <div
      className="w-full flex items-center gap-4 relative overflow-hidden"
      style={{
        padding: '16px 20px',
        background: 'linear-gradient(135deg, rgba(184,150,60,0.28) 0%, rgba(184,150,60,0.10) 100%)',
        border: '2px solid rgba(184,150,60,0.65)',
        borderRadius: '12px',
        opacity: animated ? 1 : 0,
        transform: animated ? 'scale(1)' : 'scale(0.92)',
        transition: 'opacity 0.7s 0.55s ease, transform 0.7s 0.55s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(184,150,60,0.22)', border: '1.5px solid rgba(184,150,60,0.60)' }}
      >
        <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>★</span>
      </div>
      <div>
        <p
          className="font-serif font-bold leading-tight"
          style={{ color: 'var(--gold)', fontSize: '1rem' }}
        >
          Master Trainer &amp; Lead Trainer
        </p>
        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.48)' }}>
          Kapasitas nasional berkelanjutan
        </p>
      </div>
    </div>
  );
}

/* ─── Dissemination Panel (Desktop/Tablet) ──────────────────────────────── */
function DisseminationPanel({ animated }: { animated: boolean }) {
  return (
    <div
      className="flex flex-col justify-center gap-2"
      style={{
        minWidth: '170px',
        width: '185px',
        flexShrink: 0,
        opacity: animated ? 1 : 0,
        transform: animated ? 'translateX(0)' : 'translateX(20px)',
        transition: 'opacity 0.7s 0.85s ease, transform 0.7s 0.85s ease',
      }}
    >
      <p
        className="text-xs font-bold uppercase tracking-widest mb-1"
        style={{ color: 'var(--gold)' }}
      >
        Pengimbasan ke Madrasah
      </p>
      <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.32)' }}>
        di Seluruh Indonesia
      </p>

      {disseminationTargets.map((t, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(184,150,60,0.18)',
            opacity: animated ? 1 : 0,
            transform: animated ? 'translateX(0)' : 'translateX(16px)',
            transition: `opacity 0.5s ${0.95 + i * 0.10}s ease, transform 0.5s ${0.95 + i * 0.10}s ease`,
          }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
            style={{
              background: 'rgba(184,150,60,0.15)',
              border: '1px solid rgba(184,150,60,0.35)',
              color: 'var(--gold)',
            }}
          >
            {t.abbr}
          </div>
          <div className="min-w-0">
            <p
              className="text-xs font-semibold leading-snug"
              style={{ color: 'rgba(255,255,255,0.78)', wordBreak: 'break-word' }}
            >
              {t.label}
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>
              {t.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Multiplier ratio */}
      <div
        className="mt-1 px-3 py-3 rounded-lg"
        style={{
          background: 'rgba(184,150,60,0.08)',
          border: '1px solid rgba(184,150,60,0.22)',
          opacity: animated ? 1 : 0,
          transition: 'opacity 0.6s 1.25s ease',
        }}
      >
        <p
          className="font-serif font-bold leading-none"
          style={{ color: 'var(--gold)', fontSize: '1.5rem', letterSpacing: '-0.03em' }}
        >
          1 : 287
        </p>
        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.40)' }}>
          Rasio seleksi nasional — dari 43.000+ guru menuju 150+ Trainer Nasional
        </p>
      </div>
    </div>
  );
}

/* ─── Mobile Dissemination Panel ────────────────────────────────────────── */
function MobileDisseminationPanel({ animated }: { animated: boolean }) {
  return (
    <div
      className="w-full flex flex-col gap-2"
      style={{
        opacity: animated ? 1 : 0,
        transition: 'opacity 0.7s 0.85s ease',
      }}
    >
      <p
        className="text-xs font-bold uppercase tracking-widest mb-1"
        style={{ color: 'var(--gold)' }}
      >
        Pengimbasan ke Madrasah di Seluruh Indonesia
      </p>

      {disseminationTargets.map((t, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(184,150,60,0.18)',
          }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
            style={{
              background: 'rgba(184,150,60,0.15)',
              border: '1px solid rgba(184,150,60,0.35)',
              color: 'var(--gold)',
            }}
          >
            {t.abbr}
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.80)' }}>
              {t.label}
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {t.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Ratio */}
      <div
        className="mt-2 px-4 py-4 rounded-xl"
        style={{
          background: 'rgba(184,150,60,0.08)',
          border: '1px solid rgba(184,150,60,0.25)',
        }}
      >
        <p
          className="font-serif font-bold leading-none mb-1"
          style={{ color: 'var(--gold)', fontSize: '2rem', letterSpacing: '-0.03em' }}
        >
          1 : 287
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.50)' }}>
          Rasio seleksi nasional
        </p>
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
          Dari 43.000+ guru nasional menuju 150+ Trainer Nasional.
        </p>
      </div>
    </div>
  );
}

/* ─── Outcome Banner ────────────────────────────────────────────────────── */
function OutcomeBanner({ animated }: { animated: boolean }) {
  return (
    <div
      className="mt-14 md:mt-18 relative overflow-hidden rounded-2xl px-6 md:px-10 py-8 md:py-10"
      style={{
        background:
          'linear-gradient(135deg, rgba(184,150,60,0.18) 0%, rgba(184,150,60,0.06) 60%, rgba(255,255,255,0.03) 100%)',
        border: '1.5px solid rgba(184,150,60,0.32)',
        opacity: animated ? 1 : 0,
        transform: animated ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.9s 1.3s ease, transform 0.9s 1.3s ease',
      }}
    >
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(184,150,60,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center relative">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Dampak Strategis
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-3">
            Dari pengembangan individu menuju kapasitas nasional
          </h3>
          <div className="flex items-center gap-2 mt-4">
            <div className="rule-gold" />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Program MBI — Kementerian Agama RI
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
            Master Trainer dan Lead Trainer menjadi penggerak pengembangan guru Bahasa Inggris madrasah secara berkelanjutan melalui pengimbasan ke berbagai wilayah — memastikan dampak program tidak berhenti pada peserta langsung, melainkan menjangkau seluruh ekosistem madrasah di Indonesia.
          </p>
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
              style={{
                background: 'rgba(184,150,60,0.20)',
                border: '1px solid rgba(184,150,60,0.45)',
              }}
            >
              <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>↗</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
              Satu Trainer Nasional mampu mengimbaskan kompetensi kepada puluhan guru di wilayahnya, menciptakan efek pengganda yang berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
