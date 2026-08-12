'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function WhySBISection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setRevealed(true);},
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const cards = [
  {
    number: '01',
    title: 'Kompetensi Guru',
    body: 'Kompetensi Bahasa Inggris dan pedagogi guru masih beragam sehingga kualitas pembelajaran belum merata di berbagai daerah.'
  },
  {
    number: '02',
    title: 'Implementasi Pembelajaran',
    body: 'Peningkatan kompetensi melalui pelatihan belum selalu menghasilkan perubahan praktik pembelajaran yang konsisten di ruang kelas. Pendampingan berkelanjutan menjadi kebutuhan penting.'
  },
  {
    number: '03',
    title: 'Kualitas SDM Daerah',
    body: 'Peserta didik memerlukan kompetensi Bahasa Inggris yang mendukung pendidikan tinggi, dunia kerja, teknologi, kolaborasi internasional, dan pembangunan daerah di masa depan.'
  },
  {
    number: '04',
    title: 'Arah Kebijakan',
    body: 'Penguatan kompetensi guru, kualitas pembelajaran, dan pembangunan sumber daya manusia menjadi fokus berbagai kebijakan nasional maupun internasional.'
  }];


  const policyChips = [
  'Permendikdasmen No.13 Tahun 2025',
  'OECD',
  'UNESCO',
  'World Bank',
  'Indonesia Emas 2045'];


  return (
    <section
      id="mengapa-sbi"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Latar Belakang &amp; Rasional Program SBI
            </span>
          </div>
          <h2 className="question-serif text-4xl md:text-5xl mb-6">
            Mengapa Program{' '}
            <span className="italic" style={{ color: 'var(--navy)' }}>SBI?</span>
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-soft)' }}>Pembangunan SDM berdaya saing memerlukan pembelajaran Bahasa Inggris yang berkualitas dan berkelanjutan.

          </p>
        </div>

        {/* Four Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {cards?.map((card, i) =>
          <div
            key={i}
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: 'white',
              border: '1px solid rgba(181,170,154,0.2)',
              transition: `all 0.6s ease ${i * 0.1}s`
            }}>

              <div
              className="text-xs font-bold tracking-widest"
              style={{ color: 'var(--gold)' }}>

                {card?.number}
              </div>
              <h3
              className="text-base font-semibold leading-snug"
              style={{ color: 'var(--navy)' }}>

                {card?.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {card?.body}
              </p>
            </div>
          )}
        </div>

        {/* Callout */}
        <div
          className={`rounded-2xl p-8 md:p-10 mb-10 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'var(--navy)' }}>

          <div className="flex items-center gap-3 mb-5">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>SOLUSI MELALUI PROGRAM SBI

            </span>
          </div>
          <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Program Sekolah Berbahasa Inggris (SBI) merupakan framework implementasi berbasis Cambridge English yang dirancang untuk mendukung peningkatan mutu pembelajaran Bahasa Inggris sekaligus membantu Pemerintah Daerah mempersiapkan implementasi dan pemenuhan arah kebijakan Permendikdasmen Nomor 13 Tahun 2025 tentang Bahasa Inggris sebagai mata pelajaran wajib. SBI menghubungkan pengembangan kompetensi guru, implementasi pembelajaran, kualifikasi internasional, mentoring, monitoring, pengembangan Master Trainers dan Lead Trainers, serta penjaminan mutu ke dalam satu sistem pengembangan yang berkelanjutan.
          </p>
          <div
            className="rounded-xl px-6 py-5"
            style={{
              background: 'rgba(196,164,74,0.12)',
              border: '1px solid rgba(196,164,74,0.35)'
            }}>

            <p
              className="text-sm md:text-base leading-relaxed font-medium italic"
              style={{ color: 'var(--gold)' }}>

              "SBI bukan sekadar program pelatihan Bahasa Inggris, tetapi investasi jangka panjang Pemerintah Daerah dalam membangun kualitas guru, peserta didik, dan sumber daya manusia daerah."
            </p>
          </div>
        </div>

        {/* Policy Reference Strip */}
        <div
          className={`rounded-2xl px-6 py-5 transition-all duration-1000 delay-300 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'white',
            border: '1px solid rgba(181,170,154,0.2)'
          }}>

          <p className="text-xs font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--ink-soft)' }}>DISUSUN DENGAN MEMPERTIMBANGKAN ARAH KEBIJAKAN DAN REKOMENDASI DARI ANTARA LAIN:

          </p>
          <div className="flex flex-wrap gap-2">
            {policyChips?.map((chip, i) =>
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(17,29,51,0.06)',
                color: 'var(--navy)',
                border: '1px solid rgba(17,29,51,0.12)'
              }}>

                <span style={{ color: 'var(--gold)' }}>✓</span>
                {chip}
              </span>
            )}
          </div>
        </div>

      </div>
    </section>);

}