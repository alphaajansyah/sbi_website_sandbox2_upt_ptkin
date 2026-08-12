'use client';

import React, { useEffect, useRef, useState } from 'react';

const systemNodes = [
  {
    id: 'ceft',
    label: 'CEfT',
    sublabel: 'Pengembangan Kompetensi & Kualifikasi Guru',
    accent: true,
  },
  {
    id: 'cambridge-qual',
    label: 'Cambridge English Qualifications & TKT',
    sublabel: 'Pengukuran dan Pengakuan Kompetensi',
    accent: false,
  },
  {
    id: 'sbi-teachers',
    label: 'SBI Teachers',
    sublabel: 'Guru Pelaksana Pembelajaran',
    accent: false,
  },
  {
    id: 'mapel',
    label: 'MAPEL Cambridge English',
    sublabel: 'Implementasi Pembelajaran di Sekolah dan Kelas',
    accent: true,
  },
  {
    id: 'insertt',
    label: 'InSERTT',
    sublabel: 'Pendampingan Praktik Mengajar & Pengembangan Profesional',
    accent: false,
  },
  {
    id: 'tot',
    label: 'TOT Master Trainers / Lead Trainers',
    sublabel: 'Pengembangan Pemimpin Instruksional Daerah',
    accent: true,
  },
  {
    id: 'pengimbasan',
    label: 'Pengimbasan',
    sublabel: 'Perluasan Kapasitas Guru dan Sekolah',
    accent: false,
  },
  {
    id: 'sistem',
    label: 'Sistem Peningkatan Mutu Pembelajaran Bahasa Inggris Daerah',
    sublabel: '',
    accent: false,
    final: true,
  },
];

export default function SBISystemSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    null
  );
}
