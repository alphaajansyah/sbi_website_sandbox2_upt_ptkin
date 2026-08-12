'use client';

import React, { useState, useRef, useEffect } from 'react';

type Step1Option = 'guru' | 'pembelajaran' | 'kapasitas' | null;
type Step2Option = 'guru-peserta' | 'peserta-didik' | 'pemda' | null;
type Step3Option = 'pilot' | 'multi-school' | 'regional' | null;

interface Recommendation {
  title: string;
  programmes: string[];
  description: string;
}

function getRecommendation(s1: Step1Option, s2: Step2Option, s3: Step3Option): Recommendation {
  if (s1 === 'guru' && s2 === 'guru-peserta') {
    return {
      title: 'CEfT',
      programmes: ['CEfT — Cambridge English for Teachers'],
      description: 'Jalur pengembangan kompetensi dan kualifikasi guru yang mengintegrasikan English Competency, Pedagogical Competency, Professional Knowledge, dan Official Cambridge English Qualifications.',
    };
  }
  if (s1 === 'pembelajaran' && s2 === 'peserta-didik') {
    return {
      title: 'MAPEL Cambridge English',
      programmes: ['MAPEL Cambridge English'],
      description: 'Program implementasi pembelajaran Bahasa Inggris berbasis CEFR dan standar Cambridge English pada tingkat sekolah dan kelas, dengan target kualifikasi internasional bagi peserta didik.',
    };
  }
  if (s1 === 'kapasitas' && s2 === 'pemda') {
    return {
      title: 'TOT & Pengimbasan',
      programmes: ['TOT Master Trainers / Lead Trainers', 'Pengimbasan'],
      description: 'TOT membentuk Master Trainers dan Lead Trainers yang siap memimpin pengembangan guru secara mandiri. Setelah TOT dan CEfT dilaksanakan, lulusan TOT dapat menjalankan Pengimbasan — program yang pada dasarnya setara dengan CEfT namun disampaikan oleh trainer lokal yang telah tersertifikasi.',
    };
  }
  if (s3 === 'regional') {
    return {
      title: 'Program SBI Terintegrasi',
      programmes: ['CEfT', 'MAPEL Cambridge English', 'TOT & Pengimbasan'],
      description: 'Program SBI Terintegrasi mencakup seluruh komponen pengembangan: kompetensi guru, implementasi pembelajaran, pengembangan Master Trainers, dan penguatan kapasitas daerah dalam satu sistem yang berkelanjutan.',
    };
  }
  return {
    title: 'Program SBI Terintegrasi',
    programmes: ['CEfT', 'MAPEL Cambridge English', 'TOT & Pengimbasan'],
    description: 'Berdasarkan kebutuhan Anda, Program SBI Terintegrasi merupakan jalur yang paling sesuai untuk membangun sistem pengembangan Bahasa Inggris yang komprehensif dan berkelanjutan.',
  };
}

export default function ProgrammeNavigator() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [step1, setStep1] = useState<Step1Option>(null);
  const [step2, setStep2] = useState<Step2Option>(null);
  const [step3, setStep3] = useState<Step3Option>(null);
  const [animating, setAnimating] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goToStep = (next: 1 | 2 | 3 | 4) => {
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
    }, 280);
  };

  const reset = () => {
    setStep1(null);
    setStep2(null);
    setStep3(null);
    goToStep(1);
  };

  const handleConsultation = () => {
    const el = document.getElementById('konsultasi');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const recommendation = step === 4 ? getRecommendation(step1, step2, step3) : null;

  const step1Options = [
    {
      id: 'guru' as Step1Option,
      title: 'Pengembangan Kompetensi Guru',
      desc: 'Membangun kompetensi Bahasa Inggris, pedagogi, pengetahuan profesional, dan kualifikasi internasional guru.',
      tag: 'CEfT',
    },
    {
      id: 'pembelajaran' as Step1Option,
      title: 'Implementasi Pembelajaran',
      desc: 'Membangun sistem pembelajaran Bahasa Inggris terstruktur bagi peserta didik berdasarkan CEFR dan standar Cambridge English.',
      tag: 'MAPEL Cambridge English',
    },
    {
      id: 'kapasitas' as Step1Option,
      title: 'Pengembangan Kapasitas Daerah',
      desc: 'Mengembangkan Master Trainers dan Lead Trainers untuk mendukung pengembangan guru, mentoring, quality assurance, dan keberlanjutan program.',
      tag: 'TOT',
    },
  ];

  const step2Options = [
    { id: 'guru-peserta' as Step2Option, label: 'Guru Bahasa Inggris' },
    { id: 'peserta-didik' as Step2Option, label: 'Peserta Didik dan Sekolah' },
    { id: 'pemda' as Step2Option, label: 'Pemerintah Daerah / Dinas Pendidikan' },
  ];

  const step3Options = [
    { id: 'pilot' as Step3Option, label: 'Pilot Programme' },
    { id: 'multi-school' as Step3Option, label: 'Multi-School Programme' },
    { id: 'regional' as Step3Option, label: 'Regional / Kabupaten-Kota Programme' },
  ];

  return (
    <section
      id="program-sbi"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'var(--navy-deep)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-12 text-center transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="rule-gold mx-auto" style={{ width: '48px' }} />
          </div>
          <h2 className="font-serif text-white text-3xl md:text-5xl mb-4">
            Temukan Jalur Program yang Sesuai
          </h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Jawab tiga pertanyaan untuk mendapatkan rekomendasi program yang relevan.
          </p>
        </div>

        {/* Navigator Card */}
        <div
          className={`rounded-2xl overflow-hidden transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(27, 42, 74, 0.72)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(196, 164, 74, 0.2)',
            boxShadow: '0 32px 80px rgba(17, 29, 51, 0.6)',
          }}
        >
          {/* Card Header */}
          {step < 4 && (
            <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
                    Langkah {step} dari 3
                  </p>
                  <h3 className="text-white font-semibold text-lg">
                    {step === 1 && 'Apa prioritas pengembangan daerah atau institusi Anda?'}
                    {step === 2 && 'Siapa sasaran utama program?'}
                    {step === 3 && 'Berapa skala implementasi yang direncanakan?'}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`progress-dot ${step >= s ? 'active' : ''}`} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Card Body */}
          <div className="px-8 py-8">
            <div className={`form-step ${animating ? 'exiting' : 'active'}`}>
              {/* Step 1 */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {step1Options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setStep1(opt.id);
                        setTimeout(() => goToStep(2), 200);
                      }}
                      className={`inquiry-card text-left p-6 rounded-xl border ${step1 === opt.id ? 'selected' : ''}`}
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        borderColor: step1 === opt.id ? 'var(--gold)' : 'rgba(255,255,255,0.12)',
                      }}
                    >
                      <span
                        className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-4"
                        style={{ background: 'rgba(196,164,74,0.15)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}
                      >
                        {opt.tag}
                      </span>
                      <h4 className="text-white font-semibold text-sm mb-2">{opt.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{opt.desc}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <div className="flex flex-col gap-3 mb-8">
                    {step2Options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setStep2(opt.id)}
                        className={`inquiry-card text-left px-6 py-4 rounded-xl border flex items-center gap-4 ${step2 === opt.id ? 'selected' : ''}`}
                        style={{
                          background: step2 === opt.id ? 'rgba(196,164,74,0.1)' : 'rgba(255,255,255,0.06)',
                          borderColor: step2 === opt.id ? 'var(--gold)' : 'rgba(255,255,255,0.12)',
                        }}
                      >
                        <div
                          className="w-4 h-4 rounded-full border-2 shrink-0 transition-all"
                          style={{
                            borderColor: step2 === opt.id ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                            background: step2 === opt.id ? 'var(--gold)' : 'transparent',
                          }}
                        />
                        <span className="text-sm font-medium text-white">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <button onClick={() => goToStep(1)} className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      ← Kembali
                    </button>
                    <button
                      onClick={() => goToStep(3)}
                      disabled={!step2}
                      className="btn-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Lanjut →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <div className="flex flex-col gap-3 mb-8">
                    {step3Options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setStep3(opt.id)}
                        className={`inquiry-card text-left px-6 py-4 rounded-xl border flex items-center gap-4 ${step3 === opt.id ? 'selected' : ''}`}
                        style={{
                          background: step3 === opt.id ? 'rgba(196,164,74,0.1)' : 'rgba(255,255,255,0.06)',
                          borderColor: step3 === opt.id ? 'var(--gold)' : 'rgba(255,255,255,0.12)',
                        }}
                      >
                        <div
                          className="w-4 h-4 rounded-full border-2 shrink-0 transition-all"
                          style={{
                            borderColor: step3 === opt.id ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                            background: step3 === opt.id ? 'var(--gold)' : 'transparent',
                          }}
                        />
                        <span className="text-sm font-medium text-white">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <button onClick={() => goToStep(2)} className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      ← Kembali
                    </button>
                    <button
                      onClick={() => goToStep(4)}
                      disabled={!step3}
                      className="btn-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Lihat Rekomendasi →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4 — Result */}
              {step === 4 && recommendation && (
                <div className="py-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="rule-gold" />
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                      Rekomendasi Jalur Program
                    </span>
                  </div>
                  <h3 className="font-serif text-white text-2xl md:text-3xl mb-4">{recommendation.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {recommendation.programmes.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{ background: 'rgba(196,164,74,0.15)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {recommendation.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleConsultation}
                      className="btn-gold px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider"
                    >
                      Diskusikan Kebutuhan Program
                    </button>
                    <button
                      onClick={reset}
                      className="px-8 py-3 rounded-full text-sm font-semibold border transition-colors hover:bg-white/10"
                      style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
                    >
                      Mulai Ulang
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
