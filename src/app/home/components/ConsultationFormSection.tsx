'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FormData {
  namaLengkap: string;
  jabatan: string;
  instansi: string;
  provinsi: string;
  email: string;
  whatsapp: string;
  kondisiUPT: string;
  prioritasPengembangan: string;
  pesan: string;
  consent: boolean;
  website: string; // honeypot
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const kondisiOptions = [
  { value: 'belum-tersedia', label: 'Belum tersedia' },
  { value: 'sudah-tersedia-perlu-dikembangkan', label: 'Sudah tersedia dan perlu dikembangkan' },
  { value: 'sudah-berjalan-ingin-meningkatkan', label: 'Sudah berjalan dan ingin meningkatkan layanan' },
  { value: 'lainnya', label: 'Lainnya' },
];

const prioritasOptions = [
  { value: 'penguatan-sdm', label: 'Penguatan SDM' },
  { value: 'program-bahasa', label: 'Program Bahasa' },
  { value: 'sertifikasi-internasional', label: 'Sertifikasi Internasional' },
  { value: 'sistem-pengelolaan', label: 'Sistem Pengelolaan' },
  { value: 'pengembangan-layanan', label: 'Pengembangan Layanan' },
  { value: 'pengembangan-upt-menyeluruh', label: 'Pengembangan UPT secara menyeluruh' },
];

export default function ConsultationFormSection() {
  const [revealed, setRevealed] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>({
    namaLengkap: '',
    jabatan: '',
    instansi: '',
    provinsi: '',
    email: '',
    whatsapp: '',
    kondisiUPT: '',
    prioritasPengembangan: '',
    pesan: '',
    consent: false,
    website: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.namaLengkap.trim()) newErrors.namaLengkap = 'Nama lengkap wajib diisi.';
    if (!formData.jabatan.trim()) newErrors.jabatan = 'Jabatan wajib diisi.';
    if (!formData.instansi.trim()) newErrors.instansi = 'Institusi / PTKIN wajib diisi.';
    if (!formData.provinsi.trim()) newErrors.provinsi = 'Provinsi wajib diisi.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Alamat email tidak valid.';
    }
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'Nomor WhatsApp wajib diisi.';
    if (!formData.kondisiUPT) newErrors.kondisiUPT = 'Pilih kondisi UPT Bahasa Anda.';
    if (!formData.prioritasPengembangan) newErrors.prioritasPengembangan = 'Pilih prioritas pengembangan.';
    if (!formData.consent) newErrors.consent = 'Persetujuan diperlukan untuk melanjutkan.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!validate()) return;
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          namaLengkap: formData.namaLengkap,
          jabatan: formData.jabatan,
          instansi: formData.instansi,
          kabupatenKota: '-',
          provinsi: formData.provinsi,
          email: formData.email,
          whatsapp: formData.whatsapp,
          programDiminati: formData.kondisiUPT,
          skalaPogram: formData.prioritasPengembangan,
          pesan: formData.pesan,
          website: formData.website,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl text-sm border transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-0 ${
      errors[field]
        ? 'border-red-400 bg-red-50 focus:ring-red-200' :'border-stone-200 bg-white focus:border-green-700 focus:ring-green-100'
    }`;

  return (
    <section
      id="konsultasi"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className={`mb-12 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Konsultasi Program
            </span>
          </div>
          <h2 className="question-serif text-4xl md:text-5xl mb-4">
            Konsultasi Pengembangan UPT Bahasa PTKIN
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            Isi formulir di bawah ini. Tim Briton English Education akan menghubungi Anda untuk mendiskusikan kebutuhan dan rencana pengembangan UPT Pusat Bahasa di institusi Anda.
          </p>
        </div>

        <div
          className={`rounded-2xl p-8 md:p-10 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'white', border: '1px solid rgba(168,176,154,0.2)', boxShadow: '0 12px 48px rgba(26,58,42,0.08)' }}
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                style={{ background: 'rgba(184,150,60,0.1)', border: '2px solid var(--gold)' }}
              >
                <span style={{ color: 'var(--gold)', fontSize: '28px' }}>✓</span>
              </div>
              <h3 className="font-serif text-2xl" style={{ color: 'var(--green-deep)' }}>
                Permintaan konsultasi berhasil dikirim.
              </h3>
              <p className="text-sm max-w-sm" style={{ color: 'var(--ink-soft)' }}>
                Tim Briton English Education akan menghubungi Anda untuk mendiskusikan kebutuhan pengembangan UPT Pusat Bahasa di institusi Anda.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <div
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
              >
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {/* Nama Lengkap */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Nama Lengkap <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    placeholder="Nama lengkap Anda"
                    className={inputClass('namaLengkap')}
                    style={{ color: 'var(--ink)' }}
                    aria-required="true"
                  />
                  {errors.namaLengkap && <p className="text-xs mt-1 text-red-500">{errors.namaLengkap}</p>}
                </div>

                {/* Jabatan */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Jabatan <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="jabatan"
                    value={formData.jabatan}
                    onChange={handleChange}
                    placeholder="Jabatan Anda"
                    className={inputClass('jabatan')}
                    style={{ color: 'var(--ink)' }}
                    aria-required="true"
                  />
                  {errors.jabatan && <p className="text-xs mt-1 text-red-500">{errors.jabatan}</p>}
                </div>

                {/* Instansi */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Institusi / PTKIN <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="instansi"
                    value={formData.instansi}
                    onChange={handleChange}
                    placeholder="Nama PTKIN atau institusi"
                    className={inputClass('instansi')}
                    style={{ color: 'var(--ink)' }}
                    aria-required="true"
                  />
                  {errors.instansi && <p className="text-xs mt-1 text-red-500">{errors.instansi}</p>}
                </div>

                {/* Provinsi */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Provinsi <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="provinsi"
                    value={formData.provinsi}
                    onChange={handleChange}
                    placeholder="Provinsi"
                    className={inputClass('provinsi')}
                    style={{ color: 'var(--ink)' }}
                    aria-required="true"
                  />
                  {errors.provinsi && <p className="text-xs mt-1 text-red-500">{errors.provinsi}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Email <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@institusi.ac.id"
                    className={inputClass('email')}
                    style={{ color: 'var(--ink)' }}
                    aria-required="true"
                  />
                  {errors.email && <p className="text-xs mt-1 text-red-500">{errors.email}</p>}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Nomor WhatsApp <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+62 8xx xxxx xxxx"
                    className={inputClass('whatsapp')}
                    style={{ color: 'var(--ink)' }}
                    aria-required="true"
                  />
                  {errors.whatsapp && <p className="text-xs mt-1 text-red-500">{errors.whatsapp}</p>}
                </div>

                {/* Kondisi UPT */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Kondisi UPT Bahasa <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <select
                    name="kondisiUPT"
                    value={formData.kondisiUPT}
                    onChange={handleChange}
                    className={inputClass('kondisiUPT')}
                    style={{ color: formData.kondisiUPT ? 'var(--ink)' : '#9ca3af' }}
                    aria-required="true"
                  >
                    <option value="" disabled>Pilih kondisi UPT Bahasa di institusi Anda</option>
                    {kondisiOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.kondisiUPT && <p className="text-xs mt-1 text-red-500">{errors.kondisiUPT}</p>}
                </div>

                {/* Prioritas Pengembangan */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Prioritas Pengembangan <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <select
                    name="prioritasPengembangan"
                    value={formData.prioritasPengembangan}
                    onChange={handleChange}
                    className={inputClass('prioritasPengembangan')}
                    style={{ color: formData.prioritasPengembangan ? 'var(--ink)' : '#9ca3af' }}
                    aria-required="true"
                  >
                    <option value="" disabled>Pilih prioritas pengembangan utama</option>
                    {prioritasOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.prioritasPengembangan && <p className="text-xs mt-1 text-red-500">{errors.prioritasPengembangan}</p>}
                </div>

                {/* Pesan */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
                    Kebutuhan & Rencana Pengembangan
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan atau rencana pengembangan UPT Bahasa di institusi Anda."
                    rows={4}
                    className={`${inputClass('pesan')} resize-none`}
                    style={{ color: 'var(--ink)' }}
                  />
                </div>

                {/* Consent */}
                <div className="md:col-span-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded accent-green-800"
                      aria-required="true"
                    />
                    <span className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                      Saya menyetujui bahwa data yang saya berikan akan digunakan oleh Briton English Education untuk keperluan konsultasi dan komunikasi terkait program pengembangan UPT Pusat Bahasa PTKIN.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs mt-1 text-red-500">{errors.consent}</p>}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Mengirim...' : 'Kirim Permintaan Konsultasi'}
              </button>

              {status === 'error' && (
                <p className="text-xs text-center mt-4 text-red-500">
                  Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
