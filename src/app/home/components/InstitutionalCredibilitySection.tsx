'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function InstitutionalCredibilitySection() {
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

  return (
    <section
      id="tentang-briton"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: '#FAFAF8' }}>

      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo placeholder */}
          <div
            className="inline-flex flex-col items-center justify-center gap-3 px-10 py-8 rounded-2xl mb-10"
            style={{
              background: 'white',
              border: '1px solid rgba(181,170,154,0.25)',
              boxShadow: '0 8px 32px rgba(27,42,74,0.06)',
              minWidth: '280px'
            }}>

            <img
              src="/assets/images/Group-1076-1-1-1785412782488.png"
              alt="Briton English Education Logo"
              className="h-20 w-auto object-contain" />

          </div>

          <h2 className="question-serif text-3xl md:text-5xl mb-6">
            Dikembangkan dan Dikelola oleh<br />
            <span style={{ color: 'var(--navy)' }}>Briton English Education</span>
          </h2>

          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'var(--ink-soft)' }}>Briton English Education merupakan Cambridge English Authorised Centre ID003 yang mengembangkan dan mengelola Program Sekolah Berbahasa Inggris (SBI), termasuk sistem akademik, pengembangan kompetensi guru, implementasi pembelajaran, asesmen, monitoring, evaluasi, pendampingan profesional, dan quality assurance program.

          </p>

          {/* Credential label */}
          <div
            className="inline-flex flex-col items-center gap-1 px-8 py-5 rounded-2xl"
            style={{
              background: 'var(--navy)',
              border: '1px solid rgba(196,164,74,0.2)'
            }}>

            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Cambridge English
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-white">AUTHORISED CENTRE

            </p>
            <p className="text-lg font-serif" style={{ color: 'var(--gold)' }}>ID003</p>
          </div>
        </div>
      </div>
    </section>);

}