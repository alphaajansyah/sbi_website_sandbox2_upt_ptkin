'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ProgrammeComponentsSection() {
  const [revealed, setRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState<'ceft' | 'mapel' | 'tot' | 'pengimbasan'>('ceft');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setRevealed(true);},
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleConsultation = () => {
    const el = document.getElementById('konsultasi');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="program-komponen"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}>

      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Komponen Program SBI
            </span>
          </div>
          <h2 className="question-serif text-4xl md:text-6xl mb-4 italic">Arsitektur Implementasi Program SBI

          </h2>
          <p className="text-lg md:text-xl font-medium mb-4" style={{ color: 'var(--navy)' }}>
            Satu sistem implementasi yang membangun guru, peserta didik, dan kapasitas daerah secara berkelanjutan.
          </p>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--ink-soft)' }}>
            Program SBI dirancang sebagai framework implementasi yang menghubungkan pengembangan kompetensi guru, implementasi pembelajaran, pengembangan trainer daerah, dan keberlanjutan program dalam satu sistem yang saling terintegrasi.
          </p>
        </div>

        {/* ── Implementation Architecture Diagram ── */}
        <div className={`mb-10 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-2xl p-6 md:p-10" style={{ background: 'var(--navy)', border: '1px solid rgba(196,164,74,0.2)' }}>
            {/* Diagram title */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full" style={{ background: 'var(--gold)' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Implementation Architecture
              </span>
            </div>

            {/* ── DESKTOP / TABLET layout (md+) ── */}
            <div className="hidden md:block">
              <div className="flex flex-col items-center gap-0">

                {/* TAHAP 1 — CEfT (foundation, full width) */}
                <div className="w-full max-w-md">
                  <div
                    className="rounded-2xl p-5 text-center"
                    style={{ background: 'rgba(196,164,74,0.18)', border: '2px solid var(--gold)' }}>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>TAHAP 1</span>
                    <p className="text-white font-bold text-base mt-1">Cambridge English for Teachers (CEfT)</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Fondasi Kompetensi Guru</p>
                  </div>
                </div>

                {/* Branching zone: vertical stem then split */}
                {/* SVG branching connector — desktop */}
                <div className="w-full max-w-2xl relative" style={{ height: '120px' }}>
                  <svg
                    viewBox="0 0 600 120"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full"
                    style={{ overflow: 'visible' }}>

                    {/* Vertical stem down from CEfT */}
                    <line x1="300" y1="0" x2="300" y2="30" stroke="rgba(196,164,74,0.8)" strokeWidth="2" />

                    {/* Branch point label */}
                    <text x="310" y="28" fill="rgba(196,164,74,0.7)" fontSize="9" fontFamily="sans-serif">Selama CEfT berlangsung</text>

                    {/* Left branch to MAPEL (mid-point, ~y=30) */}
                    <line x1="300" y1="30" x2="120" y2="80" stroke="rgba(196,164,74,0.65)" strokeWidth="1.5" strokeDasharray="5,3" />
                    {/* Dashed = parallel/concurrent */}
                    <line x1="120" y1="80" x2="120" y2="120" stroke="rgba(196,164,74,0.65)" strokeWidth="1.5" strokeDasharray="5,3" />

                    {/* Right branch to ToT (end of CEfT, ~y=30 but labeled "after") */}
                    <line x1="300" y1="30" x2="480" y2="80" stroke="rgba(196,164,74,0.8)" strokeWidth="2" />
                    <line x1="480" y1="80" x2="480" y2="120" stroke="rgba(196,164,74,0.8)" strokeWidth="2" />

                    {/* MAPEL label on branch */}
                    <text x="170" y="55" fill="rgba(196,164,74,0.6)" fontSize="8.5" fontFamily="sans-serif" fontStyle="italic">Dapat berjalan paralel</text>

                    {/* ToT label on branch */}
                    <text x="390" y="55" fill="rgba(196,164,74,0.8)" fontSize="8.5" fontFamily="sans-serif">Setelah CEfT selesai</text>

                    {/* Arrow heads */}
                    <polygon points="120,120 115,110 125,110" fill="rgba(196,164,74,0.65)" />
                    <polygon points="480,120 475,110 485,110" fill="rgba(196,164,74,0.8)" />
                  </svg>
                </div>

                {/* Two parallel cards: MAPEL (left) and ToT (right) */}
                <div className="w-full max-w-2xl grid grid-cols-2 gap-6">

                  {/* TAHAP 2A — MAPEL */}
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: 'rgba(196,164,74,0.07)', border: '1.5px dashed rgba(196,164,74,0.55)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>TAHAP 2A</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: 'rgba(196,164,74,0.15)', color: 'rgba(196,164,74,0.9)', border: '1px solid rgba(196,164,74,0.3)' }}>
                        Paralel
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">Cambridge English for Students (MAPEL)</p>
                    <p className="text-xs mt-1 mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Implementasi Pembelajaran</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      Dapat berjalan selama pengembangan kompetensi guru melalui CEfT masih berlangsung.
                    </p>
                  </div>

                  {/* TAHAP 2B — ToT */}
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: 'rgba(196,164,74,0.12)', border: '1.5px solid var(--gold)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>TAHAP 2B</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.5)' }}>
                        Setelah CEfT
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">Training of Trainers (ToT)</p>
                    <p className="text-xs mt-1 mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Pengembangan Kapasitas Daerah</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      Dilaksanakan setelah guru terpilih menyelesaikan CEfT.
                    </p>
                  </div>
                </div>

                {/* Merging connector */}
                <div className="w-full max-w-2xl relative" style={{ height: '80px' }}>
                  <svg
                    viewBox="0 0 600 80"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full"
                    style={{ overflow: 'visible' }}>
                    {/* Left branch merging */}
                    <line x1="120" y1="0" x2="300" y2="60" stroke="rgba(196,164,74,0.65)" strokeWidth="1.5" strokeDasharray="5,3" />
                    {/* Right branch merging */}
                    <line x1="480" y1="0" x2="300" y2="60" stroke="rgba(196,164,74,0.8)" strokeWidth="2" />
                    {/* Stem to Pengimbasan */}
                    <line x1="300" y1="60" x2="300" y2="80" stroke="rgba(196,164,74,0.8)" strokeWidth="2" />
                    <polygon points="300,80 294,70 306,70" fill="rgba(196,164,74,0.8)" />
                  </svg>
                </div>

                {/* TAHAP 3 — Pengimbasan */}
                <div className="w-full max-w-sm">
                  <div
                    className="rounded-2xl p-5 text-center"
                    style={{ background: 'rgba(196,164,74,0.12)', border: '1.5px solid rgba(196,164,74,0.7)' }}>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>TAHAP 3</span>
                    <p className="text-white font-bold text-base mt-1">Pengimbasan</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Skalabilitas dan Keberlanjutan</p>
                  </div>
                </div>

                {/* Arrow to final outcome */}
                <div className="flex flex-col items-center" style={{ height: '36px' }}>
                  <div className="w-px flex-1" style={{ background: 'var(--gold)' }} />
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M7 8L0.937822 0.5H13.0622L7 8Z" fill="var(--gold)" />
                  </svg>
                </div>

                {/* HASIL AKHIR */}
                <div className="w-full max-w-sm">
                  <div
                    className="rounded-2xl p-5 flex items-center gap-4"
                    style={{ background: 'var(--gold)' }}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <path d="M8 2L10.5 6.5H14L10.5 9.5L12 14L8 11L4 14L5.5 9.5L2 6.5H5.5L8 2Z" fill="var(--navy)" />
                    </svg>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--navy)', opacity: 0.65 }}>Hasil Akhir</p>
                      <p className="font-bold text-sm" style={{ color: 'var(--navy)' }}>Ekosistem Pendidikan Daerah Berkelanjutan</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Parallel note */}
              <div
                className="mt-8 rounded-xl p-4 flex items-start gap-3"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(196,164,74,0.2)' }}>
                <div className="w-1 shrink-0 self-stretch rounded-full" style={{ background: 'var(--gold)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>Catatan: </span>
                  MAPEL dapat berjalan secara paralel dengan CEfT, sementara ToT dilaksanakan setelah guru terpilih menyelesaikan CEfT.
                </p>
              </div>
            </div>

            {/* ── MOBILE layout (below md) ── */}
            <div className="md:hidden flex flex-col items-stretch gap-0">

              {/* TAHAP 1 — CEfT */}
              <div
                className="rounded-2xl p-5"
                style={{ background: 'rgba(196,164,74,0.18)', border: '2px solid var(--gold)' }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>TAHAP 1</span>
                <p className="text-white font-bold text-sm mt-1">Cambridge English for Teachers (CEfT)</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Fondasi Kompetensi Guru</p>
              </div>

              {/* Connector + MAPEL branch label */}
              <div className="flex items-stretch gap-3 pl-5 py-2">
                <div className="flex flex-col items-center gap-0">
                  <div className="w-px flex-1" style={{ background: 'rgba(196,164,74,0.5)', minHeight: '12px' }} />
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: 'rgba(196,164,74,0.5)' }} />
                  <div className="w-px flex-1" style={{ background: 'rgba(196,164,74,0.5)', minHeight: '12px' }} />
                </div>
                <div className="flex items-center">
                  <span
                    className="text-xs px-2 py-1 rounded-full font-semibold"
                    style={{ background: 'rgba(196,164,74,0.12)', color: 'rgba(196,164,74,0.85)', border: '1px dashed rgba(196,164,74,0.4)' }}>
                    ↙ Selama CEfT berlangsung
                  </span>
                </div>
              </div>

              {/* TAHAP 2A — MAPEL */}
              <div
                className="rounded-2xl p-5"
                style={{ background: 'rgba(196,164,74,0.07)', border: '1.5px dashed rgba(196,164,74,0.55)' }}>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>TAHAP 2A</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: 'rgba(196,164,74,0.15)', color: 'rgba(196,164,74,0.9)', border: '1px solid rgba(196,164,74,0.3)' }}>
                    Dapat berjalan paralel dengan CEfT
                  </span>
                </div>
                <p className="text-white font-semibold text-sm">Cambridge English for Students (MAPEL)</p>
                <p className="text-xs mt-1 mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Implementasi Pembelajaran</p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Dapat berjalan selama pengembangan kompetensi guru melalui CEfT masih berlangsung.
                </p>
              </div>

              {/* Connector + ToT branch label */}
              <div className="flex items-stretch gap-3 pl-5 py-2">
                <div className="flex flex-col items-center gap-0">
                  <div className="w-px flex-1" style={{ background: 'rgba(196,164,74,0.7)', minHeight: '12px' }} />
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                  <div className="w-px flex-1" style={{ background: 'rgba(196,164,74,0.7)', minHeight: '12px' }} />
                </div>
                <div className="flex items-center">
                  <span
                    className="text-xs px-2 py-1 rounded-full font-semibold"
                    style={{ background: 'rgba(196,164,74,0.15)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.4)' }}>
                    Setelah CEfT selesai →
                  </span>
                </div>
              </div>

              {/* TAHAP 2B — ToT */}
              <div
                className="rounded-2xl p-5"
                style={{ background: 'rgba(196,164,74,0.12)', border: '1.5px solid var(--gold)' }}>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>TAHAP 2B</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.5)' }}>
                    Setelah CEfT
                  </span>
                </div>
                <p className="text-white font-semibold text-sm">Training of Trainers (ToT)</p>
                <p className="text-xs mt-1 mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Pengembangan Kapasitas Daerah</p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Dilaksanakan setelah guru terpilih menyelesaikan CEfT.
                </p>
              </div>

              {/* Merge connector */}
              <div className="flex items-stretch gap-3 pl-5 py-2">
                <div className="flex flex-col items-center">
                  <div className="w-px flex-1" style={{ background: 'rgba(196,164,74,0.7)', minHeight: '20px' }} />
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="shrink-0">
                    <path d="M7 8L0.937822 0.5H13.0622L7 8Z" fill="rgba(196,164,74,0.8)" />
                  </svg>
                </div>
                <div className="flex items-center">
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>MAPEL &amp; ToT berkontribusi ke Pengimbasan</span>
                </div>
              </div>

              {/* TAHAP 3 — Pengimbasan */}
              <div
                className="rounded-2xl p-5"
                style={{ background: 'rgba(196,164,74,0.12)', border: '1.5px solid rgba(196,164,74,0.7)' }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>TAHAP 3</span>
                <p className="text-white font-bold text-sm mt-1">Pengimbasan</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Skalabilitas dan Keberlanjutan</p>
              </div>

              {/* Arrow down */}
              <div className="flex flex-col items-center py-2" style={{ height: '32px' }}>
                <div className="w-px flex-1" style={{ background: 'var(--gold)' }} />
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M7 8L0.937822 0.5H13.0622L7 8Z" fill="var(--gold)" />
                </svg>
              </div>

              {/* HASIL AKHIR */}
              <div
                className="rounded-2xl p-5 flex items-center gap-3"
                style={{ background: 'var(--gold)' }}>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M8 2L10.5 6.5H14L10.5 9.5L12 14L8 11L4 14L5.5 9.5L2 6.5H5.5L8 2Z" fill="var(--navy)" />
                </svg>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--navy)', opacity: 0.65 }}>Hasil Akhir</p>
                  <p className="font-bold text-sm" style={{ color: 'var(--navy)' }}>Ekosistem Pendidikan Daerah Berkelanjutan</p>
                </div>
              </div>

              {/* Mobile parallel note */}
              <div
                className="mt-5 rounded-xl p-4 flex items-start gap-3"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(196,164,74,0.2)' }}>
                <div className="w-1 shrink-0 self-stretch rounded-full" style={{ background: 'var(--gold)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>Catatan: </span>
                  MAPEL dapat berjalan secara paralel dengan CEfT, sementara ToT dilaksanakan setelah guru terpilih menyelesaikan CEfT.
                </p>
              </div>

            </div>

            {/* ── Catatan Penting card (shown on all breakpoints, below diagram) ── */}
            <div
              className="mt-8 rounded-xl p-5"
              style={{ background: 'rgba(196,164,74,0.08)', border: '1px solid rgba(196,164,74,0.25)' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Catatan Penting
                </span>
              </div>
              <div className="flex items-stretch gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-1 flex-1 rounded-full" style={{ background: 'linear-gradient(to bottom, var(--gold), rgba(196,164,74,0.3))' }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white mb-2">Jalur Pengembangan: Paralel &amp; Bertahap</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    CEfT adalah fondasi kompetensi guru. MAPEL dapat dimulai dan berjalan selama CEfT masih berlangsung. ToT dilaksanakan setelah guru terpilih menyelesaikan CEfT. Kedua jalur — MAPEL dan ToT — kemudian berkontribusi pada Pengimbasan dan keberlanjutan kapasitas daerah jangka panjang.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Important Information Card ── */}
        <div className={`mb-10 transition-all duration-1000 delay-150 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="rounded-2xl p-7 md:p-8"
            style={{ background: 'white', border: '2px solid rgba(196,164,74,0.35)' }}>
            <div className="flex items-start gap-4">
              <div className="w-1 shrink-0 rounded-full self-stretch" style={{ background: 'var(--gold)' }} />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                  Informasi Penting
                </p>
                <h3 className="font-semibold text-base md:text-lg mb-3" style={{ color: 'var(--navy)' }}>
                  Implementasi Berjalan Secara Bertahap dan Berkelanjutan
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  Program SBI tidak dilaksanakan secara terpisah. CEfT merupakan program pengembangan guru yang terus berjalan selama implementasi Cambridge English for Students. Setelah menyelesaikan seluruh rangkaian CEfT dan memenuhi kompetensi yang dipersyaratkan, guru terbaik mengikuti Training of Trainers (ToT) untuk menjadi Master Trainers atau Lead Trainers yang selanjutnya memimpin tahap Pengimbasan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tab navigation ── */}
        <div className={`overflow-x-auto transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex gap-2 mb-10 min-w-max sm:min-w-0 sm:flex-wrap">
            {[
            { id: 'ceft' as const, label: 'Tahap 1 — CEfT' },
            { id: 'mapel' as const, label: 'Tahap 2 — MAPEL Cambridge English' },
            { id: 'tot' as const, label: 'Tahap 3 — ToT' },
            { id: 'pengimbasan' as const, label: 'Tahap 4 — Pengimbasan' }].
            map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
              className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap"
              style={{
                background: activeTab === tab.id ? 'var(--navy)' : 'rgba(181,170,154,0.2)',
                color: activeTab === tab.id ? 'white' : 'var(--stone-dark)'
              }}>
                {tab.label}
              </button>
            )}
          </div>
        </div>

        {/* ── Tahap 1 Panel (CEfT) ── */}
        {activeTab === 'ceft' &&
        <div className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Overview */}
              <div className="rounded-2xl p-8" style={{ background: 'var(--navy)', border: '1px solid rgba(196,164,74,0.15)' }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Tahap 1
                </span>
                <h3 className="font-serif text-white text-2xl md:text-3xl mt-3 mb-1">
                  Cambridge English for Teachers (CEfT)
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: 'var(--gold)' }}>Fondasi Kompetensi Guru</p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Mengembangkan kompetensi Bahasa Inggris, pedagogi, dan profesionalisme guru melalui Cambridge English Teacher Framework sebagai fondasi implementasi Program SBI.
                </p>

                {/* Core Components */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Core Components</p>
                <div className="space-y-2 mb-8">
                  {[
                'Cambridge English for Teaching (CET)',
                'Cambridge English Exam Preparation (CEP)',
                'Teaching Knowledge Test (TKT)'].
                map((item) =>
                <div key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--gold)' }} />
                      <p className="text-sm text-white">{item}</p>
                    </div>
                )}
                </div>

                {/* Outcome */}
                <div className="rounded-xl p-5" style={{ background: 'rgba(196,164,74,0.12)', border: '1px solid rgba(196,164,74,0.3)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>Outcome</p>
                  <p className="text-sm leading-relaxed text-white">
                    Guru memiliki kompetensi yang dipersyaratkan untuk mengimplementasikan pembelajaran Bahasa Inggris berstandar internasional.
                  </p>
                </div>
              </div>

              {/* Right: Programme structure */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl p-7" style={{ background: 'white', border: '1px solid rgba(181,170,154,0.2)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-base" style={{ color: 'var(--navy)' }}>CEfT Tahap I</h4>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'var(--gold-pale)', color: 'var(--navy)' }}>200 jam</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {['CET A2 — 120 jam', 'CEP — 40 jam', 'TKT Module 1 Preparation — 40 jam'].map((item) =>
                  <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ background: 'var(--gold)' }} />
                        <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>{item}</span>
                      </div>
                  )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--navy)', color: 'white' }}>Official Cambridge English Qualification A2</span>
                    <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--navy)', color: 'white' }}>Official TKT Module 1</span>
                  </div>
                </div>

                <div className="rounded-2xl p-7" style={{ background: 'white', border: '1px solid rgba(181,170,154,0.2)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-base" style={{ color: 'var(--navy)' }}>CEfT Tahap II</h4>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'var(--gold-pale)', color: 'var(--navy)' }}>200 jam</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {['CET B1 — 120 jam', 'CEP — 40 jam', 'TKT Modules 2 & 3 Preparation — 40 jam'].map((item) =>
                  <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ background: 'var(--gold)' }} />
                        <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>{item}</span>
                      </div>
                  )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--navy)', color: 'white' }}>Official Cambridge English Qualification B1</span>
                    <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--navy)', color: 'white' }}>Official TKT Modules 2 &amp; 3</span>
                  </div>
                </div>

                <button
                onClick={handleConsultation}
                className="btn-gold px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider">
                  Pelajari CEfT
                </button>
              </div>
            </div>
          </div>
        }

        {/* ── Tahap 2 Panel (MAPEL) ── */}
        {activeTab === 'mapel' &&
        <div className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left */}
              <div className="rounded-2xl p-8" style={{ background: 'var(--navy)', border: '1px solid rgba(196,164,74,0.15)' }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Tahap 2
                </span>
                <h3 className="font-serif text-white text-2xl md:text-3xl mt-3 mb-1">
                  Cambridge English for Students (MAPEL)
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: 'var(--gold)' }}>Implementasi Pembelajaran</p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Mengimplementasikan Cambridge English sebagai mata pelajaran yang terintegrasi dengan Kurikulum Nasional bagi guru yang telah memenuhi kompetensi yang dipersyaratkan.
                </p>

                {/* Core Components */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Core Components</p>
                <div className="space-y-2 mb-8">
                  {[
                'Cambridge English Curriculum',
                'Cambridge Coursebooks',
                'Cambridge Assessments',
                'Cambridge English Qualifications (CEQ)'].
                map((item) =>
                <div key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--gold)' }} />
                      <p className="text-sm text-white">{item}</p>
                    </div>
                )}
                </div>

                {/* Outcome */}
                <div className="rounded-xl p-5" style={{ background: 'rgba(196,164,74,0.12)', border: '1px solid rgba(196,164,74,0.3)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>Outcome</p>
                  <p className="text-sm leading-relaxed text-white">
                    Peserta didik memperoleh pembelajaran Bahasa Inggris berstandar internasional dan kesempatan memperoleh sertifikasi Cambridge yang diakui secara global.
                  </p>
                </div>
              </div>

              {/* Right: Implementation pathway */}
              <div className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid rgba(181,170,154,0.2)' }}>
                <h4 className="font-semibold text-base mb-6" style={{ color: 'var(--navy)' }}>Jalur Implementasi</h4>
                <div className="flex flex-col gap-0">
                  {[
                'Baseline / Diagnostic Assessment',
                'Target & Level CEFR',
                'Integrated Curriculum & Perangkat Akademik',
                '1 Siswa, 1 Buku Cambridge',
                'Pembelajaran oleh SBI Teachers',
                'Asesmen & Monitoring Perkembangan',
                'Mentoring • InSERTT • CPD • Classroom Observation',
                'Cambridge English Qualifications',
                'Analisis Data • Evaluasi • Peningkatan Mutu'].
                map((step, i) =>
                <div key={i} className="flex flex-col items-start">
                      <div className="flex items-center gap-3">
                        <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ background: 'var(--navy)', color: 'white' }}>
                          {i + 1}
                        </div>
                        <span className="text-xs font-medium" style={{ color: 'var(--ink)' }}>{step}</span>
                      </div>
                      {i < 8 && <div className="w-px h-4 ml-3" style={{ background: 'rgba(196,164,74,0.3)' }} />}
                    </div>
                )}
                </div>
                <button
                onClick={handleConsultation}
                className="btn-gold mt-6 w-full px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider">
                  Pelajari MAPEL Cambridge English
                </button>
              </div>
            </div>
          </div>
        }

        {/* ── Tahap 3 Panel (ToT) ── */}
        {activeTab === 'tot' &&
        <div className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left */}
              <div className="rounded-2xl p-8" style={{ background: 'var(--navy)', border: '1px solid rgba(196,164,74,0.15)' }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Tahap 3
                </span>
                <h3 className="font-serif text-white text-2xl md:text-3xl mt-3 mb-1">
                  Training of Trainers (ToT)
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: 'var(--gold)' }}>Pengembangan Kapasitas Daerah</p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Guru yang telah berhasil menyelesaikan seluruh rangkaian CEfT dan menunjukkan kompetensi terbaik dipersiapkan menjadi Master Trainers atau Lead Trainers untuk mendukung keberlanjutan Program SBI.
                </p>

                {/* Core Components */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Core Components</p>
                <div className="space-y-2 mb-8">
                  {[
                'Advanced Professional Development',
                'Leadership',
                'Mentoring',
                'International Exposure'].
                map((item) =>
                <div key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--gold)' }} />
                      <p className="text-sm text-white">{item}</p>
                    </div>
                )}
                </div>

                {/* Outcome */}
                <div className="rounded-xl p-5" style={{ background: 'rgba(196,164,74,0.12)', border: '1px solid rgba(196,164,74,0.3)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>Outcome</p>
                  <p className="text-sm leading-relaxed text-white">
                    Daerah memiliki Master Trainers dan Lead Trainers yang mampu menjaga kualitas implementasi Program SBI secara mandiri.
                  </p>
                </div>
              </div>

              {/* Right: Pathway */}
              <div className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid rgba(181,170,154,0.2)' }}>
                <h4 className="font-semibold text-base mb-6" style={{ color: 'var(--navy)' }}>Jalur Pengembangan</h4>
                <div className="flex flex-col gap-0">
                  {[
                'CEfT',
                'Seleksi Peserta Potensial',
                'Training of Trainers',
                'Master Trainer / Lead Trainer',
                'Mentoring & Instructional Coaching',
                'InSERTT & Pengembangan Profesional Guru',
                'Pengimbasan',
                'Penguatan Kapasitas Daerah'].
                map((step, i) =>
                <div key={i} className="flex flex-col items-start">
                      <div className="flex items-center gap-3">
                        <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ background: i === 0 ? 'var(--gold)' : 'var(--navy)', color: 'white' }}>
                          {i + 1}
                        </div>
                        <span className="text-xs font-medium" style={{ color: 'var(--ink)' }}>{step}</span>
                      </div>
                      {i < 7 && <div className="w-px h-4 ml-3" style={{ background: 'rgba(196,164,74,0.3)' }} />}
                    </div>
                )}
                </div>
                <button
                onClick={handleConsultation}
                className="btn-gold mt-6 w-full px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider">
                  Pelajari Jalur Pengembangan Master Trainer
                </button>
              </div>
            </div>
          </div>
        }

        {/* ── Tahap 4 Panel (Pengimbasan) ── */}
        {activeTab === 'pengimbasan' &&
        <div className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left */}
              <div className="rounded-2xl p-8" style={{ background: 'var(--navy)', border: '1px solid rgba(196,164,74,0.15)' }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Tahap 4
                </span>
                <h3 className="font-serif text-white text-2xl md:text-3xl mt-3 mb-1">
                  Pengimbasan
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: 'var(--gold)' }}>Skalabilitas dan Keberlanjutan</p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Master Trainers dan Lead Trainers melaksanakan CEfT, pendampingan implementasi MAPEL, serta pengembangan guru angkatan berikutnya sehingga Program SBI berkembang secara berkelanjutan.
                </p>

                {/* Core Components */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Core Components</p>
                <div className="space-y-2 mb-8">
                  {[
                'CEfT Batch Berikutnya',
                'Classroom Mentoring',
                'Monitoring',
                'Quality Assurance'].
                map((item) =>
                <div key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--gold)' }} />
                      <p className="text-sm text-white">{item}</p>
                    </div>
                )}
                </div>

                {/* Outcome */}
                <div className="rounded-xl p-5" style={{ background: 'rgba(196,164,74,0.12)', border: '1px solid rgba(196,164,74,0.3)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>Outcome</p>
                  <p className="text-sm leading-relaxed text-white">
                    Program SBI berkembang ke lebih banyak sekolah dengan kualitas implementasi yang tetap terjaga.
                  </p>
                </div>
              </div>

              {/* Right: Two stacked cards + CTA */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl p-7" style={{ background: 'white', border: '1px solid rgba(181,170,154,0.2)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-base" style={{ color: 'var(--navy)' }}>Replikasi CEfT</h4>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'var(--gold-pale)', color: 'var(--navy)' }}>Angkatan Baru</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {[
                  'CEfT dilaksanakan kembali untuk angkatan guru berikutnya',
                  'Pengembangan kompetensi Bahasa Inggris, pedagogi, dan pengetahuan profesional',
                  'Pelaksanaan program menggunakan standar akademik dan quality assurance Program SBI',
                  'Master Trainers dan Lead Trainers terlibat dalam delivery, mentoring, dan pengembangan guru'].
                  map((item) =>
                  <div key={item} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--gold)' }} />
                        <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>{item}</span>
                      </div>
                  )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--navy)', color: 'white' }}>Master Trainers — Guru SD</span>
                    <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--navy)', color: 'white' }}>Lead Trainers — Guru SMP</span>
                  </div>
                </div>

                <div className="rounded-2xl p-7" style={{ background: 'white', border: '1px solid rgba(181,170,154,0.2)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-base" style={{ color: 'var(--navy)' }}>Penguatan Kapasitas Daerah</h4>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'var(--gold-pale)', color: 'var(--navy)' }}>Keberlanjutan</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {[
                  'Guru dengan kinerja terbaik dari angkatan sebelumnya dapat dikembangkan melalui ToT sesuai kebutuhan program',
                  'Lulusan ToT yang berhasil memenuhi standar program dapat berperan sebagai Master Trainers atau Lead Trainers',
                  'Master Trainers dan Lead Trainers mendukung pelaksanaan CEfT bagi angkatan guru berikutnya',
                  'Briton SBI Trainers tetap menjalankan fungsi mentoring, quality assurance, standardisation, dan programme oversight'].
                  map((item) =>
                  <div key={item} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--gold)' }} />
                        <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>{item}</span>
                      </div>
                  )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--navy)', color: 'white' }}>Local Training Capacity</span>
                    <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--navy)', color: 'white' }}>Quality Assurance &amp; Mentoring</span>
                  </div>
                </div>

                <button
                onClick={handleConsultation}
                className="btn-gold w-full px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider">
                  Pelajari Pengimbasan
                </button>
              </div>
            </div>
          </div>
        }

        {/* ── Bottom Callout ── */}
        <div className={`mt-16 transition-all duration-1000 delay-300 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{ background: 'var(--navy)', border: '1px solid rgba(196,164,74,0.2)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rule-gold" />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Satu Sistem
              </span>
              <div className="rule-gold" />
            </div>
            <h3 className="font-serif text-white text-2xl md:text-3xl mb-4">
              Satu Sistem Transformasi Pendidikan
            </h3>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Keempat tahapan Program SBI saling terhubung dalam satu siklus pengembangan yang berkelanjutan. Melalui peningkatan kompetensi guru, implementasi pembelajaran, pengembangan trainer daerah, dan sistem Pengimbasan, Pemerintah Daerah membangun kapasitas pendidikan yang terus berkembang dari tahun ke tahun.
            </p>
          </div>
        </div>

      </div>
    </section>);

}