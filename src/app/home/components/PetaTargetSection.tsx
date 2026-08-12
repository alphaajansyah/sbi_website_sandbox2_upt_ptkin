'use client';

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ptkinData, REGIONS } from '../data/ptkinDatabase';

type FilterType = 'Semua' | 'UIN' | 'IAIN' | 'STAIN';
type FilterRegion = 'Semua' | typeof REGIONS[number];

const ISLAND_LABELS: Record<typeof REGIONS[number], string> = {
  'Sumatera': 'Sumatera',
  'Jawa': 'Jawa',
  'Kalimantan': 'Kalimantan',
  'Sulawesi': 'Sulawesi',
  'Bali & Nusa Tenggara': 'Bali & Nusa Tenggara',
  'Maluku': 'Maluku',
  'Papua': 'Papua',
};

// ── Lightbox Component ──────────────────────────────────────────────────────
interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 250);
  }, [onClose]);

  const clampTranslate = useCallback((x: number, y: number, s: number) => {
    const maxX = Math.max(0, ((s - 1) * window.innerWidth) / 2);
    const maxY = Math.max(0, ((s - 1) * window.innerHeight) / 2);
    return {
      x: Math.min(maxX, Math.max(-maxX, x)),
      y: Math.min(maxY, Math.max(-maxY, y)),
    };
  }, []);

  const zoomIn = () => setScale(s => {
    const next = Math.min(s + 0.5, 5);
    setTranslate(t => clampTranslate(t.x, t.y, next));
    return next;
  });

  const zoomOut = () => setScale(s => {
    const next = Math.max(s - 0.5, 0.5);
    if (next <= 1) setTranslate({ x: 0, y: 0 });
    else setTranslate(t => clampTranslate(t.x, t.y, next));
    return next;
  });

  const resetZoom = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setScale(s => {
      const next = Math.min(5, Math.max(0.5, s + delta));
      if (next <= 1) setTranslate({ x: 0, y: 0 });
      else setTranslate(t => clampTranslate(t.x, t.y, next));
      return next;
    });
  };

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - translate.x, y: e.clientY - translate.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setTranslate(clampTranslate(newX, newY, scale));
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch pinch-to-zoom
  const lastTouchDist = useRef<number | null>(null);
  const lastTouchMid = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDist.current = Math.sqrt(dx * dx + dy * dy);
      lastTouchMid.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - translate.x, y: e.touches[0].clientY - translate.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDist.current !== null) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ratio = dist / lastTouchDist.current;
      setScale(s => {
        const next = Math.min(5, Math.max(0.5, s * ratio));
        if (next <= 1) setTranslate({ x: 0, y: 0 });
        return next;
      });
      lastTouchDist.current = dist;
    } else if (e.touches.length === 1 && isDragging) {
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;
      setTranslate(clampTranslate(newX, newY, scale));
    }
  };

  const handleTouchEnd = () => {
    lastTouchDist.current = null;
    lastTouchMid.current = null;
    setIsDragging(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: `rgba(0,0,0,${visible ? 0.88 : 0})`,
        transition: 'background-color 0.25s ease',
      }}
      onClick={handleClose}
    >
      {/* Controls bar */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: `translateX(-50%) translateY(${visible ? 0 : -12}px)`,
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={zoomOut}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center text-lg font-bold transition-colors backdrop-blur-sm"
          title="Zoom Out"
        >
          −
        </button>
        <button
          onClick={resetZoom}
          className="px-3 h-9 rounded-full bg-white/20 hover:bg-white/35 text-white text-xs font-semibold transition-colors backdrop-blur-sm min-w-[56px]"
          title="Reset Zoom"
        >
          {Math.round(scale * 100)}%
        </button>
        <button
          onClick={zoomIn}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center text-lg font-bold transition-colors backdrop-blur-sm"
          title="Zoom In"
        >
          +
        </button>
      </div>

      {/* Close button */}
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        onClick={e => { e.stopPropagation(); handleClose(); }}
        title="Tutup (ESC)"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image container */}
      <div
        ref={imgRef}
        className="relative select-none"
        style={{
          width: '90vw',
          height: '90vh',
          opacity: visible ? 1 : 0,
          transform: `scale(${visible ? 1 : 0.88})`,
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          overflow: 'hidden',
        }}
        onClick={e => e.stopPropagation()}
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
            width: '100%',
            height: '100%',
            transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.15s ease',
            transformOrigin: 'center center',
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'contain' }}
            sizes="90vw"
            priority
            draggable={false}
          />
        </div>
      </div>

      {/* Hint */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs text-center pointer-events-none"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        Scroll untuk zoom · Drag untuk geser · ESC atau klik luar untuk tutup
      </div>
    </div>
  );
}

// ── Main Section ────────────────────────────────────────────────────────────
export default function PetaTargetSection() {
  const [filterType, setFilterType] = useState<FilterType>('Semua');
  const [filterRegion, setFilterRegion] = useState<FilterRegion>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const selectedRowRef = useRef<HTMLTableRowElement>(null);

  // Intersection observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll selected row into view
  useEffect(() => {
    if (selectedRowRef.current) {
      selectedRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedId]);

  // Stats
  const stats = useMemo(() => ({
    total: ptkinData.length,
    uin: ptkinData.filter(i => i.type === 'UIN').length,
    iain: ptkinData.filter(i => i.type === 'IAIN').length,
    stain: ptkinData.filter(i => i.type === 'STAIN').length,
  }), []);

  // Filtered list
  const filtered = useMemo(() => {
    return ptkinData.filter(inst => {
      const matchType = filterType === 'Semua' || inst.type === filterType;
      const matchRegion = filterRegion === 'Semua' || inst.region === filterRegion;
      const matchSearch = searchQuery === '' ||
        inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.province.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchRegion && matchSearch;
    });
  }, [filterType, filterRegion, searchQuery]);

  const selectedInstitution = useMemo(
    () => ptkinData.find(i => i.id === selectedId) ?? null,
    [selectedId]
  );

  const typeColors: Record<string, string> = {
    UIN: 'bg-amber-100 text-amber-800 border border-amber-300',
    IAIN: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    STAIN: 'bg-blue-100 text-blue-800 border border-blue-300',
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
      style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.8s ease' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          {/* Left header */}
          <div className="md:w-1/2">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">
              DATABASE TARGET
            </span>
            <h2 className="question-serif text-3xl md:text-5xl mb-3 leading-tight">
              Peta Target Pendampingan{' '}
              <span className="text-green-800">UPT Pusat Bahasa PTKIN</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
              Database institusi sasaran sebagai referensi perencanaan pengembangan dan pendampingan UPT Pusat Bahasa.
            </p>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3 md:w-auto">
            {[
              { label: 'Total Institusi', value: stats.total, color: 'bg-green-800 text-white' },
              { label: 'UIN', value: stats.uin, color: 'bg-amber-500 text-white' },
              { label: 'IAIN', value: stats.iain, color: 'bg-emerald-600 text-white' },
              { label: 'STAIN', value: stats.stain, color: 'bg-blue-600 text-white' },
            ].map(card => (
              <div
                key={card.label}
                className={`${card.color} rounded-xl px-4 py-3 text-center shadow-sm min-w-[90px]`}
              >
                <div className="text-2xl font-bold leading-none">{card.value}</div>
                <div className="text-xs font-medium mt-1 opacity-90">{card.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2-Column Layout ── */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── Left Column: Static Map Image (65%) ── */}
          <div className="w-full lg:w-[65%] bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div
              className="relative w-full group"
              style={{ minHeight: '420px', cursor: 'zoom-in' }}
              onClick={() => setLightboxOpen(true)}
              title="Klik untuk melihat peta dalam ukuran penuh"
            >
              <Image
                src="/assets/images/Picture2-1785941589186.jpg"
                alt="Peta Target Pendampingan UPT Pusat Bahasa PTKIN - Peta Indonesia menampilkan persebaran institusi PTKIN"
                fill
                style={{ objectFit: 'contain', background: '#fff' }}
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority
              />
              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Klik untuk memperbesar
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                Peta persebaran institusi PTKIN sasaran program pendampingan UPT Pusat Bahasa &nbsp;·&nbsp;
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="text-green-700 hover:text-green-900 font-medium underline underline-offset-2 transition-colors"
                >
                  Lihat ukuran penuh
                </button>
              </p>
            </div>
          </div>

          {/* ── Right Column: Searchable Table (35%) ── */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4">

            {/* Search & Filters */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex flex-col gap-3">
              {/* Search box */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Cari nama institusi atau provinsi..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Filter Jenis */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Filter Jenis
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {(['Semua', 'UIN', 'IAIN', 'STAIN'] as FilterType[]).map(t => (
                    <button
                      key={t}
                      onClick={() => setFilterType(t)}
                      className={`px-3 py-1 text-xs font-medium rounded-full border transition-all ${
                        filterType === t
                          ? 'bg-green-800 text-white border-green-800' :'bg-white text-gray-600 border-gray-200 hover:border-green-600 hover:text-green-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter Wilayah */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Filter Wilayah / Pulau
                </label>
                <select
                  value={filterRegion}
                  onChange={e => setFilterRegion(e.target.value as FilterRegion)}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white"
                >
                  <option value="Semua">Semua Wilayah</option>
                  {REGIONS.map(r => (
                    <option key={r} value={r}>{ISLAND_LABELS[r]}</option>
                  ))}
                </select>
              </div>

              {/* Result count */}
              <p className="text-xs text-gray-400">
                Menampilkan <span className="font-semibold text-green-700">{filtered.length}</span> dari {ptkinData.length} institusi
              </p>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-y-auto" style={{ maxHeight: '420px' }}>
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-green-800 text-white z-10">
                    <tr>
                      <th className="px-2 py-2.5 text-center font-semibold text-xs w-8">No.</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-xs">Nama PTKIN</th>
                      <th className="px-2 py-2.5 text-center font-semibold text-xs w-14">Jenis</th>
                      <th className="px-2 py-2.5 text-left font-semibold text-xs">Provinsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="text-center py-8 text-gray-400 text-sm">
                          Tidak ada institusi yang sesuai filter.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((inst, idx) => {
                        const isSelected = inst.id === selectedId;
                        return (
                          <tr
                            key={inst.id}
                            ref={isSelected ? selectedRowRef : null}
                            onClick={() => setSelectedId(isSelected ? null : inst.id)}
                            className={`cursor-pointer border-b border-gray-50 transition-colors ${
                              isSelected
                                ? 'bg-amber-50 border-l-4 border-l-amber-500'
                                : idx % 2 === 0
                                  ? 'bg-white hover:bg-green-50' :'bg-gray-50 hover:bg-green-50'
                            }`}
                          >
                            <td className={`px-2 py-2 text-center font-mono text-xs ${isSelected ? 'text-amber-700 font-bold' : 'text-gray-400'}`}>
                              {inst.id}
                            </td>
                            <td className={`px-3 py-2 text-xs leading-tight ${isSelected ? 'text-amber-900 font-semibold' : 'text-gray-800'}`}>
                              {inst.name}
                            </td>
                            <td className="px-2 py-2 text-center">
                              <span className={`inline-block px-1.5 py-0.5 rounded text-xs font-semibold ${typeColors[inst.type]}`}>
                                {inst.type}
                              </span>
                            </td>
                            <td className={`px-2 py-2 text-xs ${isSelected ? 'text-amber-800' : 'text-gray-600'}`}>
                              {inst.province}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Selected institution detail card */}
            {selectedInstitution && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-green-900 text-sm leading-tight">{selectedInstitution.name}</h4>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="text-gray-400 hover:text-gray-600 flex-shrink-0 mt-0.5"
                    aria-label="Tutup"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  <div>
                    <span className="text-gray-500">Jenis</span>
                    <p className="font-semibold text-gray-800">{selectedInstitution.type}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Kota</span>
                    <p className="font-semibold text-gray-800">{selectedInstitution.city}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Provinsi</span>
                    <p className="font-semibold text-gray-800">{selectedInstitution.province}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Wilayah</span>
                    <p className="font-semibold text-gray-800">{selectedInstitution.region}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Note */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Catatan:</span> Ini adalah database target institusi, bukan status implementasi program. Klik baris untuk melihat detail institusi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <Lightbox
          src="/assets/images/Picture2-1785941589186.jpg"
          alt="Peta Target Pendampingan UPT Pusat Bahasa PTKIN - Peta Indonesia menampilkan persebaran institusi PTKIN"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
