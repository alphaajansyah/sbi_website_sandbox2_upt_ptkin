'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

// ─── Data: Omzet per NS Target per Year (from document) ──────────────────────
const OMZET_DATA: Record<number, number[]> = {
  25:  [517179869,  734000722,  748900538,  749925671,  749994808],
  50:  [1034359738, 1468001445, 1497801076, 1499851341, 1499989616],
  100: [2068719477, 2936002890, 2995602152, 2999702682, 2999979232],
};

const NS_OPTIONS = [25, 50, 100];

// ─── Formatters ───────────────────────────────────────────────────────────────
function fmtIDR(n: number): string {
  if (n >= 1_000_000_000) return `Rp${(n / 1_000_000_000).toFixed(2).replace('.', ',')} M`;
  if (n >= 1_000_000) return `Rp${(n / 1_000_000).toFixed(1).replace('.', ',')} Jt`;
  return `Rp${new Intl.NumberFormat('id-ID').format(Math.round(n))}`;
}

function fmtIDRFull(n: number): string {
  return `Rp${new Intl.NumberFormat('id-ID').format(Math.round(n))}`;
}

// ─── Animated Counter Hook ────────────────────────────────────────────────────
function useAnimatedValue(target: number, duration = 600): number {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = prevRef.current;
    const end = target;
    if (start === end) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + (end - start) * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(end);
        prevRef.current = end;
      }
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return display;
}

// ─── KPI Card ─────────────────────────────────────────────────────────────────
interface KPICardProps {
  label: string;
  rawValue: number;
  formatter: (n: number) => string;
  highlight?: boolean;
  icon: React.ReactNode;
  delay?: number;
  revealed: boolean;
  sublabel?: string;
}

function KPICard({ label, rawValue, formatter, highlight, icon, delay = 0, revealed, sublabel }: KPICardProps) {
  const animated = useAnimatedValue(rawValue);
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-2 transition-all duration-700"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
        background: highlight ? 'linear-gradient(135deg, #173A2D 0%, #1e4d3a 100%)' : '#ffffff',
        border: highlight ? '1.5px solid rgba(196,164,74,0.45)' : '1px solid #e8ede9',
        boxShadow: highlight
          ? '0 8px 32px rgba(23,58,45,0.18)'
          : '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center mb-1"
        style={{
          background: highlight ? 'rgba(196,164,74,0.18)' : 'rgba(23,58,45,0.07)',
          color: highlight ? '#C4A44A' : '#173A2D',
        }}
      >
        {icon}
      </div>
      <p
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: highlight ? 'rgba(255,255,255,0.55)' : '#6b7280' }}
      >
        {label}
      </p>
      <p
        className="font-serif text-2xl md:text-3xl font-bold leading-tight"
        style={{ color: highlight ? '#C4A44A' : '#173A2D' }}
      >
        {formatter(animated)}
      </p>
      {sublabel && (
        <p className="text-xs" style={{ color: highlight ? 'rgba(255,255,255,0.4)' : '#6b7280' }}>
          {sublabel}
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SimulasiProyeksiSection() {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [nsTarget, setNsTarget] = useState<number>(25);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isRevealed = mounted && revealed;

  // Compute 5-year data using standard document projections
  const baseOmzet = OMZET_DATA[nsTarget];

  const years = baseOmzet.map((omzet, i) => {
    const soma = omzet * 0.40;
    const feeSupervisi = omzet * 0.15;
    const totalCost = omzet * 0.55;
    const margin = omzet * 0.45;
    return { year: i + 1, omzet, soma, feeSupervisi, totalCost, margin };
  });

  // Year 1 values for KPI cards
  const year1 = years[0];
  const totalOmzet5yr = years.reduce((acc, y) => acc + y.omzet, 0);
  const totalCost5yr = years.reduce((acc, y) => acc + y.totalCost, 0);
  const totalMargin5yr = years.reduce((acc, y) => acc + y.margin, 0);

  const totalOmzet5yrAnimated = useAnimatedValue(totalOmzet5yr);
  const totalCost5yrAnimated = useAnimatedValue(totalCost5yr);
  const totalMargin5yrAnimated = useAnimatedValue(totalMargin5yr);

  const handleReset = useCallback(() => {
    setNsTarget(25);
  }, []);

  return (
    <section
      id="simulasi-proyeksi"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: '#f7f8f5' }}
      aria-label="Simulasi Proyeksi Income UPT Bahasa PTKIN"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div
          className="mb-14 transition-all duration-1000"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#C4A44A' }}>
              Perencanaan Keuangan
            </span>
          </div>
          <h2 className="question-serif text-3xl md:text-5xl mb-5 max-w-3xl">
            Simulasi Proyeksi Pendapatan UPT Pusat Bahasa
          </h2>
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: '#6b7280' }}>
            Simulasi berbasis target New Students (NS) per bulan sesuai model bisnis UPT Bahasa PTKIN. Pilih target NS untuk melihat proyeksi omzet, biaya, dan margin selama 5 tahun.
          </p>
        </div>

        {/* ── Inputs ── */}
        <div
          className="rounded-2xl p-7 mb-10 transition-all duration-1000 delay-100"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
            background: '#ffffff',
            border: '1px solid #e8ede9',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#173A2D' }}>
              Parameter Simulasi
            </p>
            <button
              onClick={handleReset}
              className="text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
              style={{
                color: '#6b7280',
                border: '1px solid #e2e8f0',
                background: 'transparent',
              }}
            >
              Reset
            </button>
          </div>

          {/* Target NS per Bulan */}
          <div className="max-w-md">
            <label className="block text-sm font-semibold mb-3" style={{ color: '#1a1a1a' }}>
              Target New Students (NS) per Bulan
            </label>
            <div className="flex gap-3">
              {NS_OPTIONS.map((ns) => {
                const isActive = nsTarget === ns;
                return (
                  <button
                    key={ns}
                    onClick={() => setNsTarget(ns)}
                    className="flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200"
                    style={{
                      background: isActive ? '#173A2D' : '#f7f8f5',
                      color: isActive ? '#ffffff' : '#173A2D',
                      border: isActive ? '1.5px solid #173A2D' : '1.5px solid #d1d5db',
                      boxShadow: isActive ? '0 4px 12px rgba(23,58,45,0.18)' : 'none',
                    }}
                  >
                    {ns} NS
                  </button>
                );
              })}
            </div>
            <p className="text-xs mt-2" style={{ color: '#6b7280' }}>
              Siswa baru yang bergabung per bulan
            </p>
          </div>

          {/* Cost Structure Info */}
          <div
            className="mt-6 rounded-xl p-4 flex flex-wrap gap-4"
            style={{ background: '#f7f8f5', border: '1px solid #e8ede9' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#3b82f6' }} />
              <span className="text-xs font-semibold" style={{ color: '#1a1a1a' }}>SOMA 40%</span>
              <span className="text-xs" style={{ color: '#6b7280' }}>Salary, Operational, Marketing &amp; Academic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#f59e0b' }} />
              <span className="text-xs font-semibold" style={{ color: '#1a1a1a' }}>Fee Supervisi 15%</span>
              <span className="text-xs" style={{ color: '#6b7280' }}>Biaya supervisi program</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#ef4444' }} />
              <span className="text-xs font-semibold" style={{ color: '#1a1a1a' }}>Total Cost 55%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#173A2D' }} />
              <span className="text-xs font-semibold" style={{ color: '#1a1a1a' }}>Margin 45%</span>
            </div>
          </div>
        </div>

        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <KPICard
            label="Target New Students/Bulan"
            rawValue={nsTarget}
            formatter={(n) => `${Math.round(n)} NS`}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            }
            sublabel="siswa baru per bulan"
            revealed={isRevealed}
            delay={0}
          />
          <KPICard
            label="Total Omzet Tahunan"
            rawValue={year1.omzet}
            formatter={fmtIDR}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            }
            sublabel="Tahun 1"
            revealed={isRevealed}
            delay={80}
          />
          <KPICard
            label="Total Cost (55%)"
            rawValue={year1.totalCost}
            formatter={fmtIDR}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            }
            sublabel="SOMA 40% + Fee Supervisi 15%"
            revealed={isRevealed}
            delay={160}
          />
          <KPICard
            label="Total Margin (45%)"
            rawValue={year1.margin}
            formatter={fmtIDR}
            highlight
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
              </svg>
            }
            sublabel="Tahun 1"
            revealed={isRevealed}
            delay={240}
          />
        </div>

        {/* ── 5-Year Projection + Summary Card ── */}
        <div
          className="flex flex-col lg:flex-row gap-6 transition-all duration-1000 delay-300"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* Table — 70% */}
          <div
            className="lg:w-[70%] rounded-2xl overflow-hidden"
            style={{
              background: '#ffffff',
              border: '1px solid #e8ede9',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            }}
          >
            <div className="px-6 py-5 border-b" style={{ borderColor: '#e8ede9' }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#173A2D' }}>
                Proyeksi 5 Tahun — Target {nsTarget} NS/Bulan
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: '#f7f8f5' }}>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#6b7280' }}>Tahun</th>
                    <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#6b7280' }}>Omzet</th>
                    <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#6b7280' }}>SOMA 40%</th>
                    <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#6b7280' }}>Fee Supervisi 15%</th>
                    <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#6b7280' }}>Total Cost</th>
                    <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#6b7280' }}>Margin 45%</th>
                  </tr>
                </thead>
                <tbody>
                  {years.map((y, i) => (
                    <tr
                      key={y.year}
                      className="transition-colors"
                      style={{
                        borderTop: '1px solid #f0f4f1',
                        background: i % 2 === 0 ? '#ffffff' : '#fafbf9',
                      }}
                    >
                      <td className="px-4 py-4 font-semibold" style={{ color: '#173A2D' }}>
                        Tahun {y.year}
                      </td>
                      <td className="px-4 py-4 text-right font-medium tabular-nums" style={{ color: '#1a1a1a' }}>
                        {fmtIDRFull(y.omzet)}
                      </td>
                      <td className="px-4 py-4 text-right font-medium tabular-nums" style={{ color: '#6b7280' }}>
                        {fmtIDRFull(y.soma)}
                      </td>
                      <td className="px-4 py-4 text-right font-medium tabular-nums" style={{ color: '#6b7280' }}>
                        {fmtIDRFull(y.feeSupervisi)}
                      </td>
                      <td className="px-4 py-4 text-right font-medium tabular-nums" style={{ color: '#ef4444' }}>
                        {fmtIDRFull(y.totalCost)}
                      </td>
                      <td className="px-4 py-4 text-right font-bold tabular-nums" style={{ color: '#173A2D' }}>
                        {fmtIDRFull(y.margin)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Card — 30% */}
          <div
            className="lg:w-[30%] rounded-2xl p-7 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(160deg, #173A2D 0%, #0f2318 100%)',
              border: '1.5px solid rgba(196,164,74,0.35)',
              boxShadow: '0 8px 40px rgba(23,58,45,0.22)',
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div style={{ height: '2px', width: '32px', background: '#C4A44A' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#C4A44A' }}>
                  Proyeksi Margin 5 Tahun
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Kumulatif 5 tahun berdasarkan target {nsTarget} NS/bulan.
              </p>

              {/* Total Omzet */}
              <div
                className="rounded-xl p-4 mb-3"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Total Omzet Kumulatif
                </p>
                <p className="font-serif text-xl font-bold" style={{ color: '#ffffff' }}>
                  {fmtIDR(totalOmzet5yrAnimated)}
                </p>
              </div>

              {/* Total Cost */}
              <div
                className="rounded-xl p-4 mb-3"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Total Cost Kumulatif (55%)
                </p>
                <p className="font-serif text-xl font-bold" style={{ color: '#fca5a5' }}>
                  {fmtIDR(totalCost5yrAnimated)}
                </p>
              </div>

              {/* Total Margin */}
              <div
                className="rounded-xl p-5 mb-4"
                style={{
                  background: 'rgba(196,164,74,0.1)',
                  border: '1px solid rgba(196,164,74,0.25)',
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Total Margin Kumulatif (45%)
                </p>
                <p className="font-serif text-3xl font-bold leading-tight" style={{ color: '#C4A44A' }}>
                  {fmtIDR(totalMargin5yrAnimated)}
                </p>
              </div>

              {/* Trend bars */}
              <div className="space-y-2">
                {years.map((y) => (
                  <div key={y.year} className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Tahun {y.year}</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-1 rounded-full"
                        style={{
                          width: `${Math.round((y.margin / totalMargin5yr) * 80)}px`,
                          background: 'rgba(196,164,74,0.45)',
                        }}
                      />
                      <span className="text-xs font-semibold tabular-nums" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        {fmtIDR(y.margin)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Nilai merupakan simulasi perencanaan bisnis. Dapat disesuaikan dengan kondisi masing-masing PTKIN.
              </p>
            </div>
          </div>
        </div>

        {/* ── Notes ── */}
        <div
          className="mt-8 rounded-2xl p-6 transition-all duration-1000 delay-400"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'translateY(0)' : 'translateY(16px)',
            background: '#ffffff',
            border: '1px solid #e8ede9',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#173A2D' }}>
            Catatan Simulasi
          </p>
          <ul className="space-y-1.5">
            {[
              'Simulasi menggunakan model bisnis UPT Bahasa PTKIN.',
              'SOMA (Salary, Operational, Marketing & Academic) dialokasikan sebesar 40% dari omzet.',
              'Fee supervisi sebesar 15% dari omzet.',
              'Total margin ditargetkan sebesar 45% dari omzet.',
              'Nilai merupakan simulasi perencanaan bisnis dan dapat disesuaikan dengan kondisi masing-masing PTKIN.',
            ].map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#6b7280' }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C4A44A' }} />
                {note}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
