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
            <div className="mb-4">
              <img
                src="/assets/images/Group-1076-1-1-1785412782488.png"
                alt="Briton English Education"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs font-semibold mb-2" style={{ color: 'var(--gold)' }}>
              Pengembangan & Pendampingan UPT Pusat Bahasa
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Program pengembangan dan pendampingan UPT Pusat Bahasa Bertaraf Internasional untuk Perguruan Tinggi Keagamaan Islam Negeri.
            </p>
          </div>

          {/* Centre: Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>
              Navigasi
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Mengapa UPT Bahasa', href: '#mengapa-upt-bahasa' },
                { label: 'Model Pengembangan', href: '#model-pengembangan' },
                { label: 'Program Internasional', href: '#program-internasional' },
                { label: 'Tahapan Implementasi', href: '#tahapan-implementasi' },
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
              {/* Company info */}
              <div>
                <p className="text-xs font-semibold text-white mb-0.5">Briton English Education</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Cambridge English Authorised Exam Centre ID003
                </p>
              </div>
              {/* Contact details */}
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
            © 2026 Briton English Education. All rights reserved. Program Pengembangan UPT Pusat Bahasa Bertaraf Internasional untuk PTKIN.
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
