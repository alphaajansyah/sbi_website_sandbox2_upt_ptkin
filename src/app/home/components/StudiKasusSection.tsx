'use client';

import React, { useEffect, useRef, useState } from 'react';

const videoItems = [
  'Profil UPT Pusat Bahasa Universitas Mercu Buana Jakarta',
  'Konsep layanan UPT Pusat Bahasa',
  'Fasilitas pendukung pembelajaran bahasa',
  'Lingkungan akademik dan layanan bahasa',
  'Contoh implementasi pengembangan UPT Pusat Bahasa melalui kemitraan dengan Briton English Education',
];

export default function StudiKasusSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="studi-kasus"
      className="py-20 md:py-28"
      style={{ background: 'var(--fog, #f8f7f4)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div
          className={`text-center mb-4 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(168,140,84,0.12)',
              color: 'var(--gold, #a88c54)',
              letterSpacing: '0.15em',
            }}
          >
            STUDI KASUS IMPLEMENTASI
          </span>
        </div>

        {/* Main heading */}
        <div
          className={`text-center mb-6 transition-all duration-700 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="question-serif text-3xl md:text-5xl mb-4 max-w-3xl mx-auto">
            Contoh Implementasi UPT Pusat Bahasa
            <br className="hidden sm:block" />
            <span style={{ color: 'var(--gold, #a88c54)' }}> di Perguruan Tinggi</span>
          </h2>
        </div>

        {/* Description */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 delay-150 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--slate, #4a5568)' }}>
            Briton English Education telah mendampingi pengembangan UPT Pusat Bahasa di lingkungan perguruan tinggi.
            Video berikut menampilkan profil UPT Pusat Bahasa Universitas Mercu Buana Jakarta sebagai salah satu
            contoh implementasi pengembangan layanan bahasa melalui kemitraan dengan Briton English Education.
          </p>
        </div>

        {/* Content: video left + info right */}
        <div
          className={`flex flex-col lg:flex-row gap-8 lg:gap-10 items-start transition-all duration-700 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Video — 70% on desktop */}
          <div className="w-full lg:w-[70%]">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 8px 40px rgba(26,58,42,0.12)', border: '1px solid rgba(168,176,154,0.2)' }}
            >
              {/* Responsive 16:9 wrapper */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/1buEgpg0B0c?si=KwsSeVFp8SuvQLnZ"
                  title="Profil UPT Pusat Bahasa Universitas Mercu Buana Jakarta"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Video caption */}
            <p
              className="mt-4 text-sm text-center italic px-2"
              style={{ color: 'var(--slate, #4a5568)' }}
            >
              <strong>
                Perkenalan UPT Pusat Bahasa Universitas Mercu Buana Jakarta yang dikembangkan bersama Briton English Education.
              </strong>
            </p>
          </div>

          {/* Supporting info — 30% on desktop */}
          <div className="w-full lg:w-[30%]">
            <div
              className="rounded-2xl p-7 h-full"
              style={{
                background: 'white',
                border: '1px solid rgba(168,176,154,0.2)',
                boxShadow: '0 4px 24px rgba(26,58,42,0.06)',
              }}
            >
              <h3
                className="text-base font-bold mb-5 uppercase tracking-wide"
                style={{ color: 'var(--forest, #1a3a2a)' }}
              >
                Gambaran dalam Video
              </h3>
              <ul className="space-y-4">
                {videoItems?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(168,140,84,0.15)' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5L4 7.5L8 3" stroke="#a88c54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--slate, #4a5568)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
