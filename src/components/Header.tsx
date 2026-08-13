'use client';

import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Program',                href: '#program',              num: '01' },
  { label: 'Latar Belakang',         href: '#latar-belakang',       num: '02' },
  { label: 'Alur Program',           href: '#alur-program',         num: '03' },
  { label: 'Pengembangan Guru',      href: '#pengembangan-guru',    num: '04' },
  { label: 'Capaian Siswa',          href: '#capaian-siswa',        num: '05' },
  { label: 'Dampak Program',         href: '#dampak-program',       num: '06' },
];

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(15, 35, 24, 0.97)' : 'rgba(15, 35, 24, 0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(184, 150, 60, 0.15)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(15, 35, 24, 0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-3 group" aria-label="Kembali ke atas">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/Group-1098-1-1786654279025.png"
                alt="Briton English Education"
                className="h-10 w-auto object-contain"
              />
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5 ml-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`nav-anchor text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-white active' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#konsultasi')}
              className="btn-gold hidden md:block px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Konsultasi
            </button>
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300"
                style={{ transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}
              />
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300"
                style={{ transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}
              />
            </button>
          </div>
        </div>

        {/* Mobile / overlay menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? '560px' : '0',
            borderTop: mobileOpen ? '1px solid rgba(184, 150, 60, 0.15)' : 'none',
          }}
        >
          <div
            className="px-6 py-4 flex flex-col"
            style={{ background: 'rgba(15, 35, 24, 0.98)' }}
          >
            <div className="flex flex-col" style={{ gap: '2px' }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center justify-between text-left py-2.5 transition-colors border-b"
                    style={{
                      borderColor: 'rgba(255,255,255,0.06)',
                      color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.7)',
                    }}
                  >
                    <span className="text-sm font-semibold uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span
                      className="text-xs font-mono ml-4 flex-shrink-0"
                      style={{ color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.25)' }}
                    >
                      {item.num}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handleNavClick('#konsultasi')}
              className="btn-gold mt-4 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center"
            >
              Konsultasi Program
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
