'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ─── Types ─── */
interface YearCard {
  year: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  leftItems: string[];
  rightItems: string[];
  outcomes: string[];
}

interface RoadmapOption {
  id: string;
  label: string;
  description: string;
  years: YearCard[];
}

/* ─── Data ─── */
const roadmapOptions: RoadmapOption[] = [
  {
    id: 'pilot',
    label: 'PILOT 1 TAHUN',
    description:
      'Implementasi awal untuk membangun baseline, menjalankan komponen inti Program SBI, menguji sistem implementasi, dan menghasilkan bukti awal untuk pengembangan program berikutnya.',
    years: [
      {
        year: '01',
        phaseLabel: 'TAHUN 1',
        title: 'Fondasi dan Implementasi Awal',
        subtitle: 'Foundation & Initial Implementation',
        leftItems: [
          'Seleksi sekolah, guru, dan peserta didik',
          'Baseline Assessment guru dan peserta didik',
          'CEfT Batch 1',
          'Implementasi MAPEL Cambridge English',
          'Penyediaan buku dan materi pembelajaran Cambridge',
        ],
        rightItems: [
          'Cambridge English examinations for eligible participants',
          'TOT for selected high-performing teachers (optional)',
          'Development of initial Master Trainers for SD and Lead Trainers for SMP',
          'Monitoring, classroom observation, and programme evaluation',
          'Identification of programme expansion opportunities',
        ],
        outcomes: [
          'Baseline tersedia',
          'Kompetensi guru mulai dikembangkan',
          'Implementasi pembelajaran dimulai',
          'Sistem monitoring awal terbentuk',
        ],
      },
    ],
  },
  {
    id: 'pengembangan',
    label: 'PROGRAM PENGEMBANGAN 3 TAHUN',
    description:
      'Siklus pengembangan program yang membangun fondasi, memperluas implementasi, meningkatkan mutu, dan mulai mengembangkan kapasitas daerah untuk keberlanjutan program.',
    years: [
      {
        year: '01',
        phaseLabel: 'TAHUN 1',
        title: 'Fondasi dan Batch 1',
        subtitle: 'Foundation & Batch 1',
        leftItems: [
          'CEfT Batch 1',
          'MAPEL Cambridge English implementation',
          'Cambridge books, learning materials, and examinations',
          'Optional TOT for selected high-performing teachers',
        ],
        rightItems: [
          'Development of initial Master Trainers and Lead Trainers',
          'Establishment of programme baseline, monitoring, and implementation standards',
        ],
        outcomes: [
          'Baseline dan target program terbentuk',
          'Guru memulai competency pathway',
          'Implementasi pembelajaran dimulai',
        ],
      },
      {
        year: '02',
        phaseLabel: 'TAHUN 2',
        title: 'Ekspansi dan Batch 2',
        subtitle: 'Expansion & Batch 2',
        leftItems: [
          'CEfT Batch 2 for new teachers',
          'Expansion to additional schools and students',
          'Continued MAPEL Cambridge English implementation',
          'Cambridge books, learning materials, and examinations',
        ],
        rightItems: [
          'Continued development of Batch 1 teachers',
          'Master Trainers and Lead Trainers begin supporting mentoring and Pengimbasan',
          'Professional Learning Communities',
          'Strengthening classroom observation, monitoring, and quality assurance',
        ],
        outcomes: [
          'Kualitas implementasi meningkat',
          'Kemajuan guru dan peserta didik terukur',
          'Sistem quality assurance diperkuat',
        ],
      },
      {
        year: '03',
        phaseLabel: 'TAHUN 3',
        title: 'Pengimbasan dan Kapasitas Daerah',
        subtitle: 'Pengimbasan & Regional Capacity',
        leftItems: [
          'CEfT Batch 3 for new teachers',
          'Continued expansion to additional schools and students',
          'Continued MAPEL implementation',
          'Cambridge books, learning materials, and examinations',
        ],
        rightItems: [
          'Wider Pengimbasan led by Master Trainers and Lead Trainers',
          'Development of additional local trainer capacity',
          'Strengthening regional monitoring and quality assurance systems',
          'Consolidation of programme standards and implementation mechanisms',
          'Preparation for larger-scale programme expansion',
        ],
        outcomes: [
          'Kapasitas trainer lokal mulai terbentuk',
          'Model Pengimbasan berjalan',
          'Program siap diperluas secara bertahap',
        ],
      },
    ],
  },
  {
    id: 'transformasi',
    label: 'ROADMAP TRANSFORMASI DAERAH 5 TAHUN',
    description:
      'Roadmap jangka menengah untuk membangun sistem pengembangan Bahasa Inggris daerah yang berkelanjutan melalui penguatan kompetensi guru, implementasi pembelajaran, pengembangan kapasitas lokal, Pengimbasan, dan perluasan program.',
    years: [
      {
        year: '01',
        phaseLabel: 'TAHUN 1',
        title: 'Membangun Fondasi',
        subtitle: 'Building the Foundation',
        leftItems: [
          'CEfT Batch 1',
          'MAPEL Cambridge English implementation',
          'Cambridge books, learning materials, and examinations',
        ],
        rightItems: [
          'Optional TOT for selected high-performing teachers',
          'Development of initial Master Trainers and Lead Trainers',
          'Establishment of baseline, monitoring, and programme standards',
        ],
        outcomes: [
          'Baseline daerah tersedia',
          'Target program ditetapkan',
          'Implementasi awal dimulai',
        ],
      },
      {
        year: '02',
        phaseLabel: 'TAHUN 2',
        title: 'Memperluas Jangkauan',
        subtitle: 'Expanding Reach',
        leftItems: [
          'CEfT Batch 2',
          'Expansion to new schools, teachers, and students',
          'Continued MAPEL implementation',
        ],
        rightItems: [
          'Continued Cambridge books, learning materials, and examinations',
          'Continued development of previous cohorts',
          'Initial Pengimbasan',
          'Strengthening classroom quality assurance',
        ],
        outcomes: [
          'Implementasi diperluas',
          'Kualitas pembelajaran meningkat',
          'Sistem monitoring semakin matang',
        ],
      },
      {
        year: '03',
        phaseLabel: 'TAHUN 3',
        title: 'Membangun Kapasitas Lokal',
        subtitle: 'Building Local Capacity',
        leftItems: [
          'CEfT Batch 3',
          'Continued programme expansion',
          'Wider Pengimbasan',
          'Increasing delivery role of Master Trainers and Lead Trainers',
        ],
        rightItems: [
          'Development of additional local trainers',
          'Professional Learning Communities',
          'Stronger monitoring, evaluation, and quality assurance systems',
        ],
        outcomes: [
          'Master Trainers dan Lead Trainers mulai terbentuk',
          'Kapasitas delivery dan mentoring daerah meningkat',
        ],
      },
      {
        year: '04',
        phaseLabel: 'TAHUN 4',
        title: 'Institusionalisasi dan Skala',
        subtitle: 'Institutionalisation & Scale',
        leftItems: [
          'New teacher cohorts continue entering CEfT',
          'New schools and students enter MAPEL Cambridge English',
          'Previous cohorts support mentoring and Pengimbasan',
          'Expansion of Cambridge learning and assessment pathways',
        ],
        rightItems: [
          'Strengthening local trainer capacity',
          'Integration of programme standards, monitoring, and quality assurance',
          'Stronger programme governance and institutional ownership',
          'Gradual reduction of dependence on external trainers',
        ],
        outcomes: [
          'Angkatan guru baru dikembangkan',
          'Jangkauan sekolah meningkat',
          'Kapasitas daerah mulai berfungsi sebagai sistem pengembangan berkelanjutan',
        ],
      },
      {
        year: '05',
        phaseLabel: 'TAHUN 5',
        title: 'Keberlanjutan dan Dampak Jangka Panjang',
        subtitle: 'Sustainability & Long-Term Impact',
        leftItems: [
          'Continued development of new teacher cohorts',
          'Expansion to more schools and students',
          'Mature Pengimbasan system',
          'Strong regional Master Trainer and Lead Trainer network',
        ],
        rightItems: [
          'Sustainable local programme delivery capacity',
          'Stronger education data, monitoring, and quality assurance',
          'Institutionalised programme governance and continuous improvement',
          'Stronger regional human capital development and long-term education capacity',
        ],
        outcomes: [
          'Sistem pengembangan guru dan pembelajaran Bahasa Inggris semakin terinstitusionalisasi',
          'Kapasitas lokal diperkuat',
          'Program siap dikembangkan dalam siklus berikutnya',
        ],
      },
    ],
  },
];

/* ─── Impact Flow Data ─── */
const impactFlow = [
  'INVESTASI PEMDA',
  'PENGEMBANGAN KOMPETENSI GURU',
  'KUALITAS PEMBELAJARAN',
  'KOMPETENSI PESERTA DIDIK',
  'KAPASITAS SEKOLAH',
  'MASTER TRAINERS & LEAD TRAINERS',
  'PENGIMBASAN',
  'PERLUASAN PROGRAM',
  'KAPASITAS SISTEM PENDIDIKAN DAERAH',
  'SDM DAERAH YANG LEBIH KOMPETITIF',
  'DAYA SAING DAN PEMBANGUNAN DAERAH',
];

/* ─── Regional Value Cards Data ─── */
const regionalValueCards = [
  {
    id: 'human-capital',
    title: 'Human Capital',
    icon: '◈',
    description:
      'Pengembangan kompetensi guru dan peserta didik yang memperkuat kesiapan untuk pendidikan tinggi, dunia kerja, mobilitas, dan ekonomi global.',
  },
  {
    id: 'institutional-capacity',
    title: 'Institutional Capacity',
    icon: '◉',
    description:
      'Peningkatan kapasitas sekolah, trainer lokal, dan Pemerintah Daerah untuk mengelola, menjaga mutu, dan memperluas program secara berkelanjutan.',
  },
  {
    id: 'multiplier-effect',
    title: 'Multiplier Effect',
    icon: '◎',
    description:
      'Setiap cohort baru memperluas penerima manfaat, sementara alumni program berkontribusi melalui mentoring, Pengimbasan, dan pengembangan cohort berikutnya.',
  },
  {
    id: 'regional-competitiveness',
    title: 'Regional Competitiveness',
    icon: '◇',
    description:
      'Penguatan kualitas SDM daerah untuk mendukung pendidikan, beasiswa, investasi, industri, pariwisata, ekonomi digital, dan peluang global.',
  },
  {
    id: 'long-term-development',
    title: 'Long-Term Development',
    icon: '◆',
    description:
      'Pembangunan kapasitas pendidikan dan SDM daerah yang semakin kuat, terukur, mandiri, dan berkontribusi terhadap pembangunan daerah serta agenda Indonesia Emas 2045.',
  },
];

/* ─── Year Card Component ─── */
interface YearCardProps {
  card: YearCard;
  index: number;
  isLast: boolean;
  defaultExpanded: boolean;
}

function YearCardItem({ card, index, isLast, defaultExpanded }: YearCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentId = `roadmap-card-content-${card.year}-${index}`;
  const btnId = `roadmap-card-btn-${card.year}-${index}`;

  return (
    <div className="relative flex gap-4 md:gap-6">
      {/* Timeline line + marker */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '48px' }}>
        {/* Year marker circle */}
        <div
          className="relative z-10 flex items-center justify-center rounded-full font-bold text-sm flex-shrink-0"
          style={{
            width: '48px',
            height: '48px',
            background: 'var(--navy)',
            border: '2px solid var(--gold)',
            color: 'var(--gold)',
            fontFamily: 'DM Serif Display, serif',
            fontSize: '1rem',
            boxShadow: '0 0 0 4px rgba(196,164,74,0.12)',
          }}
        >
          {card.year}
        </div>
        {/* Vertical connector line */}
        {!isLast && (
          <div
            className="flex-1 mt-1"
            style={{
              width: '2px',
              background: 'linear-gradient(to bottom, var(--gold), rgba(196,164,74,0.15))',
              minHeight: '24px',
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-6 rounded-2xl overflow-hidden"
        style={{
          background: 'var(--white)',
          border: '1px solid rgba(181,170,154,0.35)',
          boxShadow: '0 2px 16px rgba(27,42,74,0.07)',
        }}
      >
        {/* Card header — always visible, acts as toggle */}
        <button
          id={btnId}
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((v) => !v)}
          className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 transition-colors duration-200"
          style={{ background: 'transparent' }}
        >
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest mb-1 block"
              style={{ color: 'var(--gold)' }}
            >
              {card.phaseLabel}
            </span>
            <h3
              className="font-serif text-xl md:text-2xl leading-tight"
              style={{ color: 'var(--navy)', fontFamily: 'DM Serif Display, serif' }}
            >
              {card.title}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: 'var(--stone-dark)' }}>
              {card.subtitle}
            </p>
          </div>
          {/* Expand/collapse chevron */}
          <span
            className="flex-shrink-0 mt-1 transition-transform duration-300"
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: 'var(--navy)',
            }}
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Collapsible content */}
        <div
          id={contentId}
          role="region"
          aria-labelledby={btnId}
          style={{
            maxHeight: expanded ? '800px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(181,170,154,0.3)', margin: '0 24px' }} />

          {/* Two-column bullets */}
          <div className="px-6 pt-5 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            <ul className="space-y-2">
              {card.leftItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                  <span
                    className="flex-shrink-0 mt-1.5 rounded-full"
                    style={{ width: '5px', height: '5px', background: 'var(--gold)', display: 'inline-block' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2 mt-2 sm:mt-0">
              {card.rightItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                  <span
                    className="flex-shrink-0 mt-1.5 rounded-full"
                    style={{ width: '5px', height: '5px', background: 'var(--gold)', display: 'inline-block' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome strip */}
          <div
            className="mx-6 mb-5 rounded-xl px-5 py-3"
            style={{ background: 'rgba(27,42,74,0.05)', border: '1px solid rgba(27,42,74,0.08)' }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest mr-2"
              style={{ color: 'var(--navy)' }}
            >
              Hasil Utama
            </span>
            <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>
              {card.outcomes.join(' · ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function RoadmapSection() {
  const [revealed, setRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState('pengembangan');
  const [animating, setAnimating] = useState(false);
  const [displayTab, setDisplayTab] = useState('pengembangan');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
    const handleResize = () => { isMobile.current = window.innerWidth < 768; };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayTab(id);
      setActiveTab(id);
      setAnimating(false);
    }, 220);
  };

  const handleConsultation = () => {
    const el = document.getElementById('konsultasi');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const activeOption = roadmapOptions.find((o) => o.id === displayTab)!;

  return (
    <section
      id="roadmap-implementasi"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Section header ── */}
        <div
          className={`mb-14 transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px w-8 flex-shrink-0"
              style={{ background: 'var(--gold)' }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--gold)' }}
            >
              Program Pathway
            </span>
          </div>
          <h2
            className="question-serif text-4xl md:text-5xl mb-5"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            Roadmap Implementasi{' '}
            <span className="italic">Multi-Tahun</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl leading-relaxed"
            style={{ color: 'var(--ink-soft)' }}
          >
            Program SBI dapat diimplementasikan secara bertahap sesuai skala, kesiapan daerah,
            sasaran pengembangan, dan kapasitas implementasi. Pilih model roadmap untuk melihat
            tahapan pengembangan dari implementasi awal hingga penguatan kapasitas daerah dan
            perluasan program.
          </p>
        </div>

        {/* ── Tab selector ── */}
        <div
          className={`mb-10 transition-all duration-1000 delay-100 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="overflow-x-auto -mx-1 px-1">
            <div
              className="flex gap-2 min-w-max sm:min-w-0"
              role="tablist"
              aria-label="Pilih model roadmap implementasi"
            >
              {roadmapOptions.map((opt) => (
                <button
                  key={opt.id}
                  role="tab"
                  aria-selected={activeTab === opt.id}
                  aria-controls={`roadmap-panel-${opt.id}`}
                  id={`roadmap-tab-${opt.id}`}
                  onClick={() => handleTabChange(opt.id)}
                  className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap"
                  style={{
                    background: activeTab === opt.id ? 'var(--navy)' : 'rgba(181,170,154,0.2)',
                    color: activeTab === opt.id ? 'white' : 'var(--stone-dark)',
                    borderBottom:
                      activeTab === opt.id ? '2px solid var(--gold)' : '2px solid transparent',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tab content panel ── */}
        <div
          id={`roadmap-panel-${activeOption.id}`}
          role="tabpanel"
          aria-labelledby={`roadmap-tab-${activeOption.id}`}
          className="transition-all duration-300"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(10px)' : 'translateY(0)',
          }}
        >
          {/* Description */}
          <p
            className="text-sm md:text-base mb-10 max-w-3xl leading-relaxed"
            style={{ color: 'var(--ink-soft)' }}
          >
            {activeOption.description}
          </p>

          {/* Timeline */}
          <div>
            {activeOption.years.map((card, index) => (
              <YearCardItem
                key={`${activeOption.id}-${card.year}`}
                card={card}
                index={index}
                isLast={index === activeOption.years.length - 1}
                defaultExpanded={index === 0 || !isMobile.current}
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            STRATEGIC NARRATIVE — extends the same section
        ══════════════════════════════════════════════════════ */}

        {/* Divider */}
        <div
          className={`mt-6 mb-14 transition-all duration-1000 delay-200 ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(196,164,74,0.4), transparent)' }}
        />

        {/* ── Strategic Narrative Header ── */}
        <div
          className={`mb-10 transition-all duration-1000 delay-200 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3
            className="text-2xl md:text-3xl mb-3 leading-snug"
            style={{ fontFamily: 'DM Serif Display, serif', color: 'var(--navy)' }}
          >
            Dari Implementasi Program Menuju{' '}
            <span className="italic">Investasi Pembangunan Daerah</span>
          </h3>
          <p
            className="text-sm md:text-base max-w-3xl leading-relaxed"
            style={{ color: 'var(--ink-soft)' }}
          >
            Setiap cohort memperluas penerima manfaat sekaligus menambah kapasitas daerah untuk
            mengembangkan guru, sekolah, peserta didik, dan sistem pendidikan secara berkelanjutan.
          </p>
        </div>

        {/* ── Cumulative Impact Flow ── */}
        <div
          className={`mb-14 transition-all duration-1000 delay-300 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="rounded-2xl px-6 py-7"
            style={{
              background: 'var(--white)',
              border: '1px solid rgba(181,170,154,0.35)',
              boxShadow: '0 2px 16px rgba(27,42,74,0.06)',
            }}
          >
            <div className="flex flex-wrap items-center gap-y-3 gap-x-0">
              {impactFlow.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center">
                    <span
                      className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg"
                      style={{
                        background: i === 0
                          ? 'var(--navy)'
                          : i === impactFlow.length - 1
                          ? 'rgba(196,164,74,0.15)'
                          : 'rgba(27,42,74,0.06)',
                        color: i === 0
                          ? 'white'
                          : i === impactFlow.length - 1
                          ? 'var(--navy)'
                          : 'var(--navy)',
                        border: i === impactFlow.length - 1
                          ? '1px solid rgba(196,164,74,0.5)'
                          : '1px solid rgba(27,42,74,0.08)',
                        fontWeight: i === 0 || i === impactFlow.length - 1 ? '700' : '600',
                        fontSize: '0.65rem',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {step}
                    </span>
                  </div>
                  {i < impactFlow.length - 1 && (
                    <span
                      className="mx-1.5 flex-shrink-0"
                      style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: '700' }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── Regional Value Cards ── */}
        <div
          className={`mb-14 transition-all duration-1000 delay-400 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionalValueCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl px-6 py-6 flex flex-col gap-3"
                style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(181,170,154,0.35)',
                  boxShadow: '0 2px 12px rgba(27,42,74,0.06)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-lg text-base"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(27,42,74,0.06)',
                      color: 'var(--navy)',
                      border: '1px solid rgba(196,164,74,0.25)',
                    }}
                  >
                    {card.icon}
                  </span>
                  <h4
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: 'var(--navy)' }}
                  >
                    {card.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {card.description}
                </p>
              </div>
            ))}
            {/* Last card spans full width on lg to balance 5 cards in 3-col grid */}
            {/* The 5th card naturally fills the last slot; no extra markup needed */}
          </div>
        </div>

        {/* ── Strategic Closing ── */}
        <div
          className={`mb-14 rounded-2xl overflow-hidden transition-all duration-1000 delay-500 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'var(--navy)',
            border: '1px solid rgba(196,164,74,0.2)',
          }}
        >
          {/* Gold accent bar */}
          <div style={{ height: '3px', background: 'linear-gradient(to right, var(--gold), rgba(196,164,74,0.3))' }} />

          <div className="px-8 py-10 md:px-12 md:py-12">
            {/* Eyebrow */}
            <p
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: 'var(--gold)' }}
            >
              Investasi Hari Ini. Kapasitas Daerah untuk Masa Depan.
            </p>

            {/* Main statement */}
            <h3
              className="text-2xl md:text-3xl text-white mb-6 leading-snug"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              SBI bukan sekadar program pelatihan Bahasa Inggris.
            </h3>

            <div className="space-y-4 max-w-3xl">
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                Setiap tahun, cohort baru guru, sekolah, dan peserta didik memasuki program. Pada
                saat yang sama, cohort sebelumnya terus berkembang melalui pengembangan profesional,
                TOT, mentoring, Pengimbasan, dan peran sebagai Master Trainers dan Lead Trainers.
              </p>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                Dengan mekanisme ini, investasi Pemerintah Daerah menghasilkan{' '}
                <span style={{ color: 'var(--gold)', fontWeight: '600' }}>multiplier effect</span>:
                semakin lama program berjalan, semakin besar jumlah penerima manfaat dan semakin
                kuat kapasitas daerah untuk mengembangkan sistem pendidikan secara berkelanjutan.
              </p>
            </div>

            {/* Positioning statement */}
            <div
              className="mt-8 rounded-xl px-6 py-5"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(196,164,74,0.2)',
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: 'var(--gold)' }}
              >
                Pemda Membangun Aset, Bukan Sekadar Membiayai Kegiatan
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Melalui Program SBI, Pemerintah Daerah membangun aset SDM, kapasitas institusi,
                trainer lokal, dan sistem pendidikan daerah yang nilainya terus bertambah dari
                tahun ke tahun — mendukung agenda pembangunan daerah dan kontribusi Indonesia
                terhadap penguatan produktivitas, kapasitas institusi, dan daya saing global.
              </p>
            </div>

            {/* Closing line */}
            <p
              className="mt-8 text-base md:text-lg italic leading-relaxed"
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'DM Serif Display, serif',
                borderLeft: '3px solid var(--gold)',
                paddingLeft: '1.25rem',
              }}
            >
              Dari pengembangan guru, menuju transformasi pendidikan. Dari transformasi pendidikan,
              menuju daya saing dan masa depan daerah.
            </p>
          </div>
        </div>

        {/* ── CTA panel ── */}
        <div
          className={`rounded-2xl px-8 py-10 text-center transition-all duration-1000 delay-600 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'rgba(27,42,74,0.06)',
            border: '1px solid rgba(196,164,74,0.2)',
          }}
        >
          <h3
            className="font-serif text-2xl md:text-3xl mb-3"
            style={{ fontFamily: 'DM Serif Display, serif', color: 'var(--navy)' }}
          >
            Tentukan Roadmap Implementasi Program SBI
          </h3>
          <p
            className="text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--ink-soft)' }}
          >
            Roadmap implementasi dapat disesuaikan dengan skala program, jumlah sekolah dan guru,
            kesiapan daerah, target kompetensi, kapasitas implementasi, dan strategi keberlanjutan.
          </p>
          <button
            onClick={handleConsultation}
            className="btn-gold inline-block px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest"
          >
            Konsultasikan Roadmap Program
          </button>
        </div>

      </div>
    </section>
  );
}
