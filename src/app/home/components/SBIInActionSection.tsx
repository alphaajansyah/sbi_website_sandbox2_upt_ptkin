'use client';

import React from 'react';

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/yU0d9MKtyFk';

export default function SBIInActionSection() {
  return (
    <section
      className="py-20 px-4"
      style={{ background: 'var(--navy, #0a1628)' }}>

      <div className="max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: 'var(--gold, #c9a84c)' }}>IMPLEMENTASI PROGRAM SBI DI DAERAH


        </p>

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: '#ffffff' }}>

          SBI in Action
        </h2>

        {/* Subheading */}
        <p
          className="text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.7)' }}>Lihat bagaimana Program Sekolah Berbahasa Inggris (SBI) telah diimplementasikan di berbagai pemerintah daerah sebagai bagian dari transformasi pembelajaran Bahasa Inggris yang berkelanjutan.


        </p>

        {/* Video Embed */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            paddingTop: '56.25%' /* 16:9 aspect ratio */
          }}>

          <iframe
            src={YOUTUBE_EMBED_URL}
            title="SBI Implementation Documentary"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }} />

        </div>

        {/* Caption */}
        <p
          className="mt-5 text-sm italic"
          style={{ color: 'rgba(255,255,255,0.45)' }}>Implementation documentary


        </p>
      </div>
    </section>);

}