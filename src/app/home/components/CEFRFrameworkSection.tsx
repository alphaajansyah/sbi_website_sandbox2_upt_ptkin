'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

export default function CEFRFrameworkSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastPinchDistance = useRef<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.06 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  // Open lightbox with animation
  const openLightbox = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setLightboxOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setLightboxVisible(true));
    });
  }, []);

  // Close lightbox with animation
  const closeLightbox = useCallback(() => {
    setLightboxVisible(false);
    setTimeout(() => {
      setLightboxOpen(false);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }, 250);
  }, []);

  // ESC key handler
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  // Mouse wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setScale(prev => Math.min(Math.max(prev + delta, 0.5), 5));
  }, []);

  // Mouse drag
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX - lastPosition.current.x, y: e.clientY - lastPosition.current.y };
  }, [scale]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const newPos = {
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    };
    lastPosition.current = newPos;
    setPosition(newPos);
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Touch pinch-to-zoom and drag
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastPinchDistance.current = Math.sqrt(dx * dx + dy * dy);
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging.current = true;
      dragStart.current = {
        x: e.touches[0].clientX - lastPosition.current.x,
        y: e.touches[0].clientY - lastPosition.current.y,
      };
    }
  }, [scale]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2 && lastPinchDistance.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ratio = dist / lastPinchDistance.current;
      lastPinchDistance.current = dist;
      setScale(prev => Math.min(Math.max(prev * ratio, 0.5), 5));
    } else if (e.touches.length === 1 && isDragging.current) {
      const newPos = {
        x: e.touches[0].clientX - dragStart.current.x,
        y: e.touches[0].clientY - dragStart.current.y,
      };
      lastPosition.current = newPos;
      setPosition(newPos);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    lastPinchDistance.current = null;
  }, []);

  // Reset position when scale goes back to 1
  useEffect(() => {
    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
      lastPosition.current = { x: 0, y: 0 };
    }
  }, [scale]);

  // Click outside image to close (only when not dragging)
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      closeLightbox();
    }
  }, [closeLightbox]);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">

          {/* Left column — text (45%) */}
          <div
            className={`transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="rule-gold" />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--gold)' }}
              >
                Standar Internasional
              </span>
            </div>

            {/* Title */}
            <h2 className="question-serif text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight" style={{ color: 'var(--green-deep)' }}>
              Jalur Pembelajaran Berstandar Internasional
            </h2>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg font-medium leading-relaxed mb-6"
              style={{ color: 'var(--ink-soft)' }}
            >
              Seluruh program dirancang mengacu pada Common European Framework of Reference (CEFR) dan Cambridge English Qualifications sehingga setiap peserta memiliki jalur pembelajaran yang jelas dari tingkat dasar hingga mahir.
            </p>

            {/* Divider */}
            <div
              className="w-16 h-px mb-6"
              style={{ background: 'rgba(184,150,60,0.4)' }}
            />

            {/* Body text */}
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'var(--ink-soft)' }}
            >
              Program UPT Pusat Bahasa dikembangkan berdasarkan standar internasional yang diakui secara global. Setiap level pembelajaran memiliki target kompetensi yang terukur sesuai CEFR serta dapat dipersiapkan menuju Cambridge English Qualifications maupun tes internasional lainnya seperti IELTS.
            </p>
          </div>

          {/* Right column — image (55%) */}
          <div
            className={`transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div
              className="rounded-2xl overflow-hidden p-4 md:p-6"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(168,176,154,0.25)',
                boxShadow: '0 4px 24px rgba(26,58,42,0.07)',
              }}
            >
              {/* Clickable image wrapper */}
              <div
                className="relative w-full group"
                style={{ aspectRatio: '16/9', cursor: 'zoom-in' }}
                onClick={openLightbox}
                role="button"
                tabIndex={0}
                aria-label="Lihat gambar CEFR Framework dalam ukuran penuh"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(); }}
              >
                <Image
                  src="/assets/images/3210_m_0001-1785555786992.jpg"
                  alt="Cambridge English Qualifications dan CEFR Framework sebagai acuan jalur pembelajaran berstandar internasasional."
                  fill
                  style={{
                    objectFit: 'contain',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  className="group-hover:scale-[1.02] group-hover:drop-shadow-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 55vw"
                  priority={false}
                />
                {/* Zoom hint overlay */}
                <div
                  className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                >
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-md"
                    style={{
                      background: 'rgba(26,58,42,0.75)',
                      color: '#fff',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    🔍 Klik untuk perbesar
                  </span>
                </div>
              </div>

              {/* Caption */}
              <p
                className="mt-4 text-xs text-center leading-relaxed"
                style={{ color: 'var(--stone-dark)' }}
              >
                Kerangka CEFR dan Cambridge English Qualifications sebagai acuan pengembangan kompetensi Bahasa Inggris dari Pre-A1 hingga C2.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: `rgba(0,0,0,${lightboxVisible ? '0.88' : '0'})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.25s ease',
          }}
        >
          {/* Image container */}
          <div
            style={{
              position: 'relative',
              width: '90vw',
              height: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: lightboxVisible ? 1 : 0,
              transform: lightboxVisible ? 'scale(1)' : 'scale(0.92)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              cursor: scale > 1 ? 'grab' : 'default',
              userSelect: 'none',
            }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: isDragging.current ? 'none' : 'transform 0.1s ease',
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              <Image
                src="/assets/images/3210_m_0001-1785555786992.jpg"
                alt="Cambridge English Qualifications dan CEFR Framework — tampilan penuh"
                fill
                style={{ objectFit: 'contain', pointerEvents: 'none' }}
                sizes="90vw"
                priority
              />
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Tutup"
            style={{
              position: 'fixed',
              top: '16px',
              right: '20px',
              zIndex: 10000,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'rgba(0,0,0,0.55)',
              color: '#fff',
              fontSize: '22px',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(6px)',
              transition: 'background 0.15s ease',
              opacity: lightboxVisible ? 1 : 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
          >
            ×
          </button>

          {/* Zoom controls */}
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,0,0,0.55)',
              borderRadius: '999px',
              padding: '6px 14px',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.15)',
              opacity: lightboxVisible ? 1 : 0,
              transition: 'opacity 0.25s ease',
            }}
          >
            <button
              onClick={() => setScale(prev => Math.max(prev - 0.25, 0.5))}
              aria-label="Perkecil"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'transparent',
                color: '#fff',
                fontSize: '20px',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              −
            </button>
            <span
              style={{
                color: '#fff',
                fontSize: '13px',
                minWidth: '44px',
                textAlign: 'center',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale(prev => Math.min(prev + 0.25, 5))}
              aria-label="Perbesar"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'transparent',
                color: '#fff',
                fontSize: '20px',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              +
            </button>
            <button
              onClick={() => { setScale(1); setPosition({ x: 0, y: 0 }); lastPosition.current = { x: 0, y: 0 }; }}
              aria-label="Reset zoom"
              style={{
                marginLeft: '4px',
                padding: '0 10px',
                height: '28px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '11px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
