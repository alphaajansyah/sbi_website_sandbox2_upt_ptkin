'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

const CEFT_MAX_PER_CLASS = 15;

const DEFAULTS = {
  jumlahSekolah: 50,
  guruPerSekolah: 3,
  pesertaDidikPerSekolah: 90,
  trainerTersedia: 10
};

function fmt(n: number): string {
  return new Intl.NumberFormat('id-ID').format(n);
}

interface SliderProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}

function Slider({ id, label, value, min, max, step, unit, onChange }: SliderProps) {
  const pct = (value - min) / (max - min) * 100;
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>
          {label}
        </label>
        <span
          className="text-sm font-bold px-3 py-0.5 rounded-full"
          style={{ background: 'rgba(196,164,74,0.18)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>

          {fmt(value)} <span className="font-normal text-xs" style={{ color: 'rgba(196,164,74,0.75)' }}>{unit}</span>
        </span>
      </div>
      <div className="relative">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full aid-slider"
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          style={{
            background: `linear-gradient(to right, var(--gold) ${pct}%, rgba(255,255,255,0.15) ${pct}%)`
          }} />

      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{fmt(min)}</span>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{fmt(max)}</span>
      </div>
    </div>);

}

interface MetricCardProps {
  title: string;
  value: string | number;
  unit: string;
  note?: string;
  highlight?: boolean;
  statusCard?: boolean;
  statusPositive?: boolean;
}

function MetricCard({ title, value, unit, note, highlight, statusCard, statusPositive }: MetricCardProps) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-1"
      style={{
        background: highlight ? 'rgba(196,164,74,0.1)' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${highlight ? 'rgba(196,164,74,0.35)' : 'rgba(255,255,255,0.1)'}`
      }}>

      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {title}
      </p>
      {statusCard ?
      <p
        className="text-sm font-bold leading-snug"
        style={{ color: statusPositive ? '#7EC8A0' : 'var(--gold)' }}>

          {value}
        </p> :

      <>
          <p className="font-serif text-3xl font-bold" style={{ color: highlight ? 'var(--gold)' : 'var(--white)' }}>
            {typeof value === 'number' ? fmt(value) : value}
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{unit}</p>
        </>
      }
      {note &&
      <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{note}</p>
      }
    </div>);

}

export default function SBIImplementationSimulator() {
  const [jumlahSekolah, setJumlahSekolah] = useState(DEFAULTS.jumlahSekolah);
  const [guruPerSekolah, setGuruPerSekolah] = useState(DEFAULTS.guruPerSekolah);
  const [pesertaDidikPerSekolah, setPesertaDidikPerSekolah] = useState(DEFAULTS.pesertaDidikPerSekolah);
  const [trainerTersedia, setTrainerTersedia] = useState(DEFAULTS.trainerTersedia);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setRevealed(true);},
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reset = useCallback(() => {
    setJumlahSekolah(DEFAULTS.jumlahSekolah);
    setGuruPerSekolah(DEFAULTS.guruPerSekolah);
    setPesertaDidikPerSekolah(DEFAULTS.pesertaDidikPerSekolah);
    setTrainerTersedia(DEFAULTS.trainerTersedia);
  }, []);

  const scrollToKonsultasi = useCallback(() => {
    const el = document.getElementById('konsultasi');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  // Derived calculations
  const totalGuru = jumlahSekolah * guruPerSekolah;
  const totalPesertaDidik = jumlahSekolah * pesertaDidikPerSekolah;
  const kelasCEfT = Math.ceil(totalGuru / CEFT_MAX_PER_CLASS);
  const bukuGuru = totalGuru;
  const bukuSiswa = totalPesertaDidik;
  const trainerParalel = kelasCEfT;
  const jumlahGelombang = Math.ceil(kelasCEfT / trainerTersedia);
  const parallelStatus = trainerTersedia >= kelasCEfT ?
  'MAKSIMAL 1 KELAS CEfT PER TRAINER' : 'IMPLEMENTASI MULTI-COHORT DIPERLUKAN';
  const statusSingleWave = jumlahGelombang === 1;

  // Planning insight
  let planningInsight = '';
  if (kelasCEfT <= trainerTersedia) {
    planningInsight = 'Kapasitas Briton SBI Trainer yang tersedia memungkinkan seluruh kelas CEfT dilaksanakan secara paralel dalam satu gelombang implementasi.';
  } else if (jumlahGelombang <= 3) {
    planningInsight = `Jumlah kelas CEfT melebihi jumlah Briton SBI Trainer yang tersedia untuk pelaksanaan secara paralel. Implementasi diperkirakan memerlukan ${fmt(jumlahGelombang)} gelombang/cohort pelaksanaan.`;
  } else {
    planningInsight = `Skala implementasi memerlukan ${fmt(jumlahGelombang)} gelombang/cohort pelaksanaan berdasarkan jumlah Briton SBI Trainer yang tersedia. Pertimbangkan penambahan trainer, penjadwalan multi-cohort, atau implementasi program secara bertahap.`;
  }

  // Dynamic summary
  const summary = `Implementasi Program SBI pada ${fmt(jumlahSekolah)} sekolah dengan ${fmt(guruPerSekolah)} guru per sekolah mencakup estimasi ${fmt(totalGuru)} guru peserta CEfT.\n\nDengan rasio maksimum ${CEFT_MAX_PER_CLASS} guru per kelas CEfT, diperlukan sekitar ${fmt(kelasCEfT)} kelas CEfT.\n\nSetiap kelas CEfT memerlukan 1 Briton SBI Trainer pada waktu pelaksanaan. Dengan ${fmt(trainerTersedia)} Briton SBI Trainer yang tersedia, ${trainerTersedia >= kelasCEfT ? 'seluruh kelas CEfT dapat dilaksanakan secara paralel dalam satu gelombang implementasi.' : `implementasi diperkirakan memerlukan ${fmt(jumlahGelombang)} gelombang implementasi.`}\n\nProgram juga mencakup estimasi ${fmt(totalPesertaDidik)} peserta didik dengan kebutuhan ${fmt(bukuGuru)} buku guru dan ${fmt(bukuSiswa)} buku siswa.`;

  const panelStyle: React.CSSProperties = {
    background: 'rgba(27, 42, 74, 0.72)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(196, 164, 74, 0.18)',
    borderRadius: '16px'
  };

  return (
    <section
      id="simulator-sbi"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'var(--navy-deep)' }}
      aria-label="Simulator Skala Implementasi SBI">

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className={`mb-14 text-center transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="rule-gold" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', width: '48px' }} />
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Perencanaan Skala Program
            </p>
            <div className="rule-gold" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)', width: '48px' }} />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="font-serif text-white text-3xl md:text-5xl">
              Simulasikan kebutuhan implementasi Program SBI.
            </h2>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ background: 'rgba(196,164,74,0.15)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>

              Program Simulasi
            </span>
          </div>
          <p className="text-sm max-w-2xl mx-auto mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>Atur parameter implementasi untuk melihat estimasi jumlah guru, peserta didik, kebutuhan kelas CEfT, materi ajar, kebutuhan Briton SBI Trainer, dan jumlah gelombang implementasi program.

          </p>
          <p className="text-xs max-w-xl mx-auto italic" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Seluruh hasil merupakan estimasi perencanaan berdasarkan parameter simulasi dan bukan angka aktual, penawaran biaya, atau komitmen implementasi program.
          </p>
        </div>

        {/* Two-column layout */}
        <div className={`flex flex-col lg:flex-row gap-8 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* LEFT: Parameters */}
          <div className="lg:w-[40%] lg:sticky lg:top-24 lg:self-start">
            <div className="p-7" style={panelStyle}>
              <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--gold)' }}>
                Parameter Implementasi
              </p>

              <Slider
                id="jumlah-sekolah"
                label="Jumlah Sekolah"
                value={jumlahSekolah}
                min={1}
                max={200}
                step={1}
                unit="sekolah"
                onChange={setJumlahSekolah} />

              <Slider
                id="guru-per-sekolah"
                label="Guru per Sekolah"
                value={guruPerSekolah}
                min={1}
                max={10}
                step={1}
                unit="guru"
                onChange={setGuruPerSekolah} />

              <Slider
                id="peserta-didik-per-sekolah"
                label="Peserta Didik per Sekolah"
                value={pesertaDidikPerSekolah}
                min={30}
                max={500}
                step={10}
                unit="siswa"
                onChange={setPesertaDidikPerSekolah} />

              <Slider
                id="trainer-tersedia"
                label="Briton SBI Trainer Tersedia"
                value={trainerTersedia}
                min={1}
                max={50}
                step={1}
                unit="trainer"
                onChange={setTrainerTersedia} />


              {/* Fixed CEfT ratio panel */}
              <div
                className="rounded-xl p-5 mt-2 mb-6"
                style={{
                  background: 'rgba(196,164,74,0.07)',
                  border: '1px solid rgba(196,164,74,0.25)'
                }}>

                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
                  Rasio CEfT
                </p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold" style={{ color: 'var(--white)' }}>1</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Briton SBI Trainer</p>
                  </div>
                  <div className="text-lg font-bold" style={{ color: 'var(--gold)' }}>:</div>
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold" style={{ color: 'var(--white)' }}>Maks. 15</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Guru per Kelas CEfT</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Setiap kelas CEfT dengan maksimal 15 guru memerlukan 1 Briton SBI Trainer pada waktu pelaksanaan.
                </p>
              </div>

              {/* Reset button */}
              <button
                onClick={reset}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1"
                style={{
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.6)',
                  focusRingColor: 'var(--gold)'
                }}
                aria-label="Atur ulang semua parameter ke nilai awal">

                Atur Ulang Simulasi
              </button>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="lg:w-[60%] flex flex-col gap-6">

            {/* Metric cards */}
            <div style={panelStyle} className="p-7">
              <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--gold)' }}>
                Hasil Simulasi
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MetricCard title="Total Guru" value={totalGuru} unit="guru" />
                <MetricCard title="Total Peserta Didik" value={totalPesertaDidik} unit="siswa" />
                <MetricCard title="Kelas CEfT Dibutuhkan" value={kelasCEfT} unit="kelas" note="Maksimal 15 guru per kelas CEfT." highlight />
                <MetricCard title="Buku Guru" value={bukuGuru} unit="buku" />
                <MetricCard title="Buku Siswa" value={bukuSiswa} unit="buku" />
                <MetricCard title="Briton SBI Trainer Tersedia" value={trainerTersedia} unit="trainer" />
                <MetricCard
                  title="Kebutuhan Trainer untuk Pelaksanaan Paralel"
                  value={trainerParalel}
                  unit="trainer"
                  note="1 Briton SBI Trainer per kelas CEfT."
                  highlight />

                <MetricCard title="Estimasi Gelombang Implementasi" value={jumlahGelombang} unit="gelombang / cohort" highlight />
                <MetricCard
                  title="Status Pelaksanaan"
                  value={statusSingleWave ? 'DAPAT DILAKSANAKAN DALAM SATU GELOMBANG' : 'MEMERLUKAN IMPLEMENTASI MULTI-COHORT'}
                  unit=""
                  statusCard
                  statusPositive={statusSingleWave} />

              </div>
            </div>

            {/* Resource Flow Diagram */}
            <div style={panelStyle} className="p-7">
              <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--gold)' }}>
                Diagram Aliran Sumber Daya
              </p>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main flow */}
                <div className="flex-1">
                  <FlowNode label={`${fmt(jumlahSekolah)} Sekolah Peserta`} primary />
                  <FlowArrow />
                  <div className="flex flex-col sm:flex-row gap-3 mb-1">
                    <FlowNode label={`${fmt(totalGuru)} Guru Peserta CEfT`} half />
                    <FlowNode label={`${fmt(totalPesertaDidik)} Peserta Didik`} half />
                  </div>
                  <FlowArrow />
                  <FlowNode label={`Rasio CEfT: 1 Briton SBI Trainer : Maks. 15 Guru`} info />
                  <FlowArrow />
                  <FlowNode label={`${fmt(kelasCEfT)} Kelas CEfT Dibutuhkan`} highlight />
                  <FlowArrow />
                  <FlowNode label={`${fmt(trainerParalel)} Briton SBI Trainer Dibutuhkan untuk Pelaksanaan Paralel`} highlight />
                  <FlowArrow />
                  <FlowNode label={`${fmt(trainerTersedia)} Briton SBI Trainer Tersedia`} />
                  <FlowArrow />
                  <FlowNode label={`${fmt(jumlahGelombang)} Gelombang / Cohort Implementasi`} primary />
                </div>
              </div>
            </div>

            {/* Ringkasan Simulasi */}
            <div style={panelStyle} className="p-7">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>
                Ringkasan Simulasi
              </p>
              <div className="space-y-3">
                {summary.split('\n\n').map((para, i) =>
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {para}
                  </p>
                )}
              </div>
            </div>

            {/* Planning Insight */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(196,164,74,0.08)',
                border: '1px solid rgba(196,164,74,0.25)'
              }}>

              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
                Catatan Perencanaan
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {planningInsight}
              </p>
            </div>

            {/* Konfigurasi Implementasi */}
            <div style={panelStyle} className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>
                Konfigurasi Implementasi
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                { label: 'Sekolah', value: fmt(jumlahSekolah) },
                { label: 'Guru', value: fmt(totalGuru) },
                { label: 'Kelas CEfT', value: fmt(kelasCEfT) },
                { label: 'Trainer Tersedia', value: fmt(trainerTersedia) },
                { label: 'Gelombang', value: fmt(jumlahGelombang) },
                { label: 'Peserta Didik', value: fmt(totalPesertaDidik) },
                { label: 'Buku', value: fmt(bukuGuru + bukuSiswa) }].
                map((item) =>
                <div key={item.label} className="text-center py-3 px-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="font-serif text-lg font-bold" style={{ color: 'var(--white)' }}>{item.value}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.label}</p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div
              className="p-8 rounded-2xl text-center"
              style={{
                background: 'rgba(27, 42, 74, 0.72)',
                border: '1px solid rgba(196,164,74,0.2)'
              }}>

              <h3 className="font-serif text-white text-2xl md:text-3xl mb-3">
                Perlu simulasi implementasi yang lebih rinci?
              </h3>
              <p className="text-sm max-w-lg mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Tim Program SBI dapat membantu menyusun konfigurasi implementasi berdasarkan jumlah sekolah, guru, peserta didik, kapasitas Briton SBI Trainer, target program, kapasitas daerah, dan tahapan pelaksanaan.
              </p>
              <button
                onClick={scrollToKonsultasi}
                className="btn-gold px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider">

                Diskusikan Hasil Simulasi
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>);

}

// Flow diagram helpers
function FlowNode({ label, primary, highlight, info, half }: {label: string;primary?: boolean;highlight?: boolean;info?: boolean;half?: boolean;}) {
  let bg = 'rgba(255,255,255,0.05)';
  let border = 'rgba(255,255,255,0.1)';
  let color = 'rgba(255,255,255,0.7)';
  if (primary) {bg = 'rgba(196,164,74,0.15)';border = 'rgba(196,164,74,0.4)';color = 'var(--gold)';}
  if (highlight) {bg = 'rgba(196,164,74,0.08)';border = 'rgba(196,164,74,0.25)';color = 'rgba(255,255,255,0.85)';}
  if (info) {bg = 'rgba(255,255,255,0.03)';border = 'rgba(255,255,255,0.08)';color = 'rgba(255,255,255,0.45)';}
  return (
    <div
      className={`rounded-lg px-4 py-3 text-center text-xs font-semibold leading-snug ${half ? 'flex-1' : 'w-full'}`}
      style={{ background: bg, border: `1px solid ${border}`, color }}>

      {label}
    </div>);

}

function FlowArrow() {
  return (
    <div className="flex justify-center my-1.5" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v10M4 9l4 4 4-4" stroke="rgba(196,164,74,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>);

}