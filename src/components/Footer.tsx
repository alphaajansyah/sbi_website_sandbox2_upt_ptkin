'use client';

import React from 'react';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: 'var(--green-deep)', borderTop: '1px solid rgba(184,150,60,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Left: Programme Brand */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div
                className="flex items-center justify-center rounded-lg px-3 py-2"
                style={{ background: 'rgba(255,255,255,0.95)', display: 'inline-flex' }}
              >
                <img
                  src="/assets/images/mbi_logo_transparat_tighter-1786553481962.png"
                  alt="MBI — Madrasah Berbahasa Inggris"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div
                className="flex items-center justify-center rounded-lg px-3 py-2"
                style={{ background: 'rgba(255,255,255,0.95)', display: 'inline-flex' }}
              >
                <img
                  src="/assets/images/Group-1098-1-1786654279025.png"
                  alt="Briton English Education"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-xs font-semibold mb-1" style={{ color: 'var(--gold)' }}>
              Cambridge English for Kemenag
            </p>
            <p className="text-xs font-bold text-white mb-3">Madrasah Berbahasa Inggris (MBI)</p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Program Nasional Peningkatan Kualifikasi dan Kompetensi Guru Bahasa Inggris Madrasah Berbasis Standar Cambridge.
            </p>
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{ background: 'rgba(184,150,60,0.08)', border: '1px solid rgba(184,150,60,0.15)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Dikembangkan bersama <span style={{ color: 'var(--gold)' }}>Cambridge English</span> &amp; <span style={{ color: 'var(--gold)' }}>Briton English Education</span>
              </p>
            </div>
          </div>

          {/* Centre: Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>
              Navigasi
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Latar Belakang Program', href: '#latar-belakang' },
                { label: 'Alur Program Nasional', href: '#alur-program' },
                { label: 'Pipeline Pengembangan Guru', href: '#pengembangan-guru' },
                { label: 'Cambridge English for Teachers', href: '#ceft' },
                { label: 'Capaian Siswa', href: '#capaian-siswa' },
                { label: 'Dampak Program', href: '#dampak-program' },
                { label: 'Konsultasi Program', href: '#konsultasi' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-xs transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Company Info + Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>
              Kontak
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold text-white mb-0.5">Briton English Education</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Cambridge English Authorised Exam Centre ID003
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-white mb-0.5">Email</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>sbi@britonenglish.id</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-white mb-0.5">WhatsApp</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>+6282260547260</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-white mb-0.5">Alamat Kantor</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Plaza Kemang 88, Jl. Kemang Raya No.88, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, DKI Jakarta 12730
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Cambridge English for Kemenag — Madrasah Berbahasa Inggris (MBI). Program Nasional Peningkatan Kompetensi Guru Bahasa Inggris Madrasah.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Kebijakan Privasi
            </a>
            <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Ketentuan Penggunaan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
