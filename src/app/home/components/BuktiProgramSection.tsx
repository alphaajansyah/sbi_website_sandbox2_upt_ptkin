'use client';

import React, { useEffect, useRef, useState } from 'react';

const evidenceAreas = [
  {
    category: 'Implementasi Saat Ini',
    items: [
      { label: 'Guru yang Dijangkau', status: 'placeholder', note: 'Data implementasi akan diperbarui secara berkala' },
      { label: 'Wilayah Implementasi', status: 'placeholder', note: 'Cakupan wilayah nasional' },
      { label: 'Data Asesmen', status: 'placeholder', note: 'Hasil CEPT nasional' },
      { label: 'Penyelesaian Pelatihan', status: 'placeholder', note: 'Tingkat penyelesaian CEfT' },
      { label: 'Pergerakan CEFR', status: 'placeholder', note: 'Peningkatan level kompetensi' },
      { label: 'Pengembangan Trainer', status: 'placeholder', note: 'Master Trainer yang terbentuk' },
    ],
  },
  {
    category: 'Aset Program',
    items: [
      { label: 'CEPT', status: 'active', note: 'Cambridge English Placement Test — tersedia' },
      { label: 'CEfT', status: 'active', note: 'Cambridge English for Teachers — tersedia' },
      { label: 'Materi Cambridge', status: 'active', note: 'Materi pembelajaran berbasis Cambridge' },
      { label: 'Kerangka Observasi', status: 'active', note: 'Panduan observasi kelas terstruktur' },
      { label: 'Pelatihan Internasional', status: 'active', note: 'Program pengembangan trainer internasional' },
      { label: 'Monitoring & Evaluasi', status: 'active', note: 'Sistem M&E program' },
    ],
  },
  {
    category: 'Studi Kasus',
    items: [
      { label: 'Implementasi Regional', status: 'future', note: 'Akan tersedia seiring implementasi program' },
      { label: 'Implementasi Institusional', status: 'future', note: 'Akan tersedia seiring implementasi program' },
      { label: 'Contoh Pengembangan Guru', status: 'future', note: 'Akan tersedia seiring implementasi program' },
    ],
  },
];

export default function BuktiProgramSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const statusStyle = (status: string) => {
    if (status === 'active') return { bg: 'rgba(26,58,42,0.08)', border: 'rgba(26,58,42,0.15)', dot: 'var(--green-deep)' };
    if (status === 'placeholder') return { bg: 'rgba(184,150,60,0.06)', border: 'rgba(184,150,60,0.2)', dot: 'var(--gold)' };
    return { bg: 'rgba(168,176,154,0.08)', border: 'rgba(168,176,154,0.2)', dot: 'rgba(168,176,154,0.5)' };
  };

  return (
    <section
      id="bukti-program"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'var(--green-deep)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Bukti Program
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 max-w-3xl leading-tight">
            Landasan Bukti Program
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Program MBI dibangun di atas aset dan kerangka yang telah tersedia. Data implementasi akan diperbarui secara berkala seiring berjalannya program.
          </p>
        </div>

        {/* Evidence grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {evidenceAreas.map((area, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="h-full p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(184,150,60,0.15)',
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>
                  {area.category}
                </p>
                <div className="flex flex-col gap-3">
                  {area.items.map((item, j) => {
                    const style = statusStyle(item.status);
                    return (
                      <div
                        key={j}
                        className="flex items-start gap-3 p-3 rounded-lg"
                        style={{
                          background: style.bg,
                          border: `1px solid ${style.border}`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-1"
                          style={{ background: style.dot }}
                        />
                        <div>
                          <p className="text-xs font-semibold text-white">{item.label}</p>
                          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.note}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          className={`flex flex-wrap items-center gap-5 p-5 rounded-xl transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>Keterangan:</p>
          {[
            { dot: 'var(--green-deep)', label: 'Tersedia', bg: 'rgba(26,58,42,0.3)' },
            { dot: 'var(--gold)', label: 'Akan Diperbarui', bg: 'rgba(184,150,60,0.2)' },
            { dot: 'rgba(168,176,154,0.5)', label: 'Akan Tersedia', bg: 'rgba(168,176,154,0.15)' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.dot }} />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
