'use client';

import React, { useEffect, useRef, useState } from 'react';

const outcomes = [
{
  number: '01',
  title: 'Guru yang Kompeten & Terukur',
  items: [
  'Improved English competency based on CEFR',
  'Improved pedagogical competency',
  'Improved professional knowledge',
  'Cambridge English Qualifications and TKT',
  'Preparation of SBI Teachers']

},
{
  number: '02',
  title: 'Pembelajaran yang Terstruktur',
  items: [
  'CEFR-based learning targets',
  'Integrated Curriculum',
  'Cambridge learning materials',
  '1 Siswa, 1 Buku Cambridge',
  'Assessment and monitored learning progression',
  'Cambridge English Qualifications']

},
{
  number: '03',
  title: 'Pemimpin Instruksional Daerah',
  items: [
  'Master Trainers / Lead Trainers',
  'Teacher mentoring',
  'Instructional coaching',
  'Classroom observation',
  'Professional feedback',
  'Teacher professional development']

},
{
  number: '04',
  title: 'Sistem Peningkatan Mutu Berkelanjutan',
  items: [
  'Monitoring',
  'Evaluation',
  'Supervision',
  'Quality Assurance',
  'Data-informed decision making',
  'Pengimbasan',
  'Regional capacity building',
  'Continuous improvement']

}];


const stakeholders = [
{ title: 'Guru Peserta', desc: 'Mengikuti jalur pengembangan kompetensi dan kualifikasi.' },
{ title: 'SBI Teachers', desc: 'Mengimplementasikan MAPEL Cambridge English pada sekolah sasaran.' },
{ title: 'Peserta Didik', desc: 'Mengikuti pembelajaran terstruktur menuju target CEFR dan Cambridge English Qualifications.' },
{ title: 'Master Trainers / Lead Trainers', desc: 'Mendukung pengembangan guru, mentoring, instructional coaching, dan Pengimbasan.' },
{ title: 'Satuan Pendidikan', desc: 'Menjadi unit implementasi dan peningkatan mutu pembelajaran.' },
{ title: 'Pemerintah Daerah / Dinas Pendidikan', desc: 'Mendukung kebijakan, perencanaan, implementasi, monitoring, evaluasi, keberlanjutan, dan pengembangan program.' }];


const galleryItems = [
{ label: 'Teacher Development', alt: 'Sesi pengembangan kompetensi guru dalam program CEfT' },
{ label: 'Cambridge English Training', alt: 'Pelatihan Cambridge English untuk guru peserta program SBI' },
{ label: 'Classroom Implementation', alt: 'Implementasi pembelajaran MAPEL Cambridge English di kelas' },
{ label: 'Cambridge Examinations', alt: 'Pelaksanaan ujian Cambridge English resmi bagi peserta program' },
{ label: 'International Professional Development', alt: 'Program pengembangan profesional internasional bagi Master Trainers' },
{ label: 'Government & Institutional Engagement', alt: 'Pertemuan dan koordinasi dengan Pemerintah Daerah dan Dinas Pendidikan' }];


export default function OutcomesStakeholdersGallery() {
  const [revealedOutcomes, setRevealedOutcomes] = useState(false);
  const [revealedStakeholders, setRevealedStakeholders] = useState(false);
  const [revealedGallery, setRevealedGallery] = useState(false);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const stakeholdersRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const makeObserver = (setter: (v: boolean) => void) =>
    new IntersectionObserver(([e]) => {if (e.isIntersecting) setter(true);}, { threshold: 0.05 });

    const o1 = makeObserver(setRevealedOutcomes);
    const o2 = makeObserver(setRevealedStakeholders);
    const o3 = makeObserver(setRevealedGallery);

    if (outcomesRef.current) o1.observe(outcomesRef.current);
    if (stakeholdersRef.current) o2.observe(stakeholdersRef.current);
    if (galleryRef.current) o3.observe(galleryRef.current);

    return () => {o1.disconnect();o2.disconnect();o3.disconnect();};
  }, []);

  return (
    <>
      {/* Section 8 — Outcomes */}
      <section
        id="hasil-program"
        ref={outcomesRef}
        className="py-28 px-6"
        style={{ background: 'var(--fog)' }}>

        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${revealedOutcomes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="rule-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Hasil yang Dibangun
              </span>
            </div>
            <h2 className="question-serif text-4xl md:text-6xl mb-4">
              Dari kompetensi individu{' '}
              <span className="italic">menuju kapasitas sistem pendidikan daerah.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, i) =>
            <div
              key={outcome.number}
              className={`rounded-2xl p-8 transition-all duration-1000 ${revealedOutcomes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: i % 2 === 0 ? 'var(--navy)' : 'white',
                border: i % 2 === 0 ? '1px solid rgba(196,164,74,0.15)' : '1px solid rgba(181,170,154,0.2)',
                transitionDelay: `${i * 0.1}s`
              }}>

                <div
                className="text-5xl font-serif mb-4"
                style={{ color: i % 2 === 0 ? 'rgba(196,164,74,0.3)' : 'rgba(27,42,74,0.15)' }}>

                  {outcome.number}
                </div>
                <h3
                className="font-semibold text-lg mb-5"
                style={{ color: i % 2 === 0 ? 'white' : 'var(--navy)' }}>

                  {outcome.title}
                </h3>
                <div className="space-y-2">
                  {outcome.items.map((item) =>
                <div key={item} className="flex items-start gap-3">
                      <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ background: 'var(--gold)' }} />

                      <span
                    className="text-sm"
                    style={{ color: i % 2 === 0 ? 'rgba(255,255,255,0.65)' : 'var(--ink-soft)' }}>

                        {item}
                      </span>
                    </div>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 9 — Stakeholders */}
      <section
        id="ekosistem-sbi"
        ref={stakeholdersRef}
        className="py-28 px-6"
        style={{ background: 'var(--navy-deep)' }}>

        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 text-center transition-all duration-1000 ${revealedStakeholders ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rule-gold" style={{ margin: '0 auto' }} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Ekosistem Program SBI
            </span>
            <h2 className="font-serif text-white text-3xl md:text-5xl mt-4 mb-4">
              Menghubungkan guru, sekolah, peserta didik,{' '}
              <span className="italic" style={{ color: 'var(--gold)' }}>dan pemerintah daerah.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stakeholders.map((s, i) =>
            <div
              key={s.title}
              className={`rounded-2xl p-7 transition-all duration-1000 hover:scale-[1.01] ${revealedStakeholders ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                transitionDelay: `${i * 0.07}s`
              }}>

                <h3 className="font-semibold text-base text-white mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 10 — Evidence Gallery */}
      <section
        id="programme-in-action"
        ref={galleryRef}
        className="py-28 px-6"
        style={{ background: 'var(--fog)' }}>

        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${revealedGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="rule-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Programme in Action
              </span>
            </div>
            <h2 className="question-serif text-4xl md:text-6xl mb-4">
              Dari desain program{' '}
              <span className="italic">menuju implementasi nyata.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Card 1 — Teacher Development (large) */}
            <div
              className={`md:col-span-8 transition-all duration-1000 ${revealedGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0s' }}>

              <div
                className="rounded-2xl overflow-hidden relative group"
                style={{
                  aspectRatio: '16/9',
                  background: 'var(--navy)',
                  border: '1px solid rgba(181,170,154,0.15)'
                }}>

                <img
                  src="/assets/images/Untitled-1784305528360.png"
                  alt="Sesi pengembangan kompetensi guru dalam program CEfT"
                  className="w-full h-full object-cover" />

                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(17,29,51,0.85) 0%, transparent 100%)' }}>

                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>

                    Teacher Development
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 — Cambridge English Training (small) */}
            <div
              className={`md:col-span-4 transition-all duration-1000 ${revealedGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.08s' }}>

              <div
                className="rounded-2xl overflow-hidden relative group"
                style={{
                  aspectRatio: '4/3',
                  background: 'var(--navy)',
                  border: '1px solid rgba(181,170,154,0.15)'
                }}>

                <img
                  src="/assets/images/pembelajaran_di_upt__1_-1785552244176.png"
                  alt="Pelatihan Cambridge English untuk guru peserta program SBI"
                  className="w-full h-full object-cover" />

                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(17,29,51,0.85) 0%, transparent 100%)' }}>

                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>

                    Cambridge English Training
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 — Classroom Implementation (small) */}
            <div
              className={`md:col-span-4 transition-all duration-1000 ${revealedGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.16s' }}>

              <div
                className="rounded-2xl overflow-hidden relative group"
                style={{
                  aspectRatio: '4/3',
                  background: 'var(--navy)',
                  border: '1px solid rgba(181,170,154,0.15)'
                }}>

                <img
                  src="/assets/images/professional_english-1785553842151.png"
                  alt="Implementasi pembelajaran MAPEL Cambridge English di kelas"
                  className="w-full h-full object-cover" />

                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(17,29,51,0.85) 0%, transparent 100%)' }}>

                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>

                    Classroom Implementation
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 — Cambridge Examinations (large) */}
            <div
              className={`md:col-span-8 transition-all duration-1000 ${revealedGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.24s' }}>

              <div
                className="rounded-2xl overflow-hidden relative group"
                style={{
                  aspectRatio: '16/9',
                  background: 'var(--navy)',
                  border: '1px solid rgba(181,170,154,0.15)'
                }}>

                <img
                  src="/assets/images/01._Video_Mock_Test_HST-00.00.15.179-1784304447005.jpg"
                  alt="Pelaksanaan ujian Cambridge English resmi bagi peserta program"
                  className="w-full h-full object-cover" />

                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(17,29,51,0.85) 0%, transparent 100%)' }}>

                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>

                    Cambridge Examinations
                  </span>
                </div>
              </div>
            </div>

            {/* Card 5 — International Professional Development (small) */}
            <div
              className={`md:col-span-4 transition-all duration-1000 ${revealedGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.32s' }}>

              <div
                className="rounded-2xl overflow-hidden relative group"
                style={{
                  aspectRatio: '4/3',
                  background: 'var(--navy)',
                  border: '1px solid rgba(181,170,154,0.15)'
                }}>

                <img
                  src="/assets/images/Untitled-1784305093040.png"
                  alt="Program pengembangan profesional internasional bagi Master Trainers"
                  className="w-full h-full object-cover" />

                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(17,29,51,0.85) 0%, transparent 100%)' }}>

                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>

                    International Professional Development
                  </span>
                </div>
              </div>
            </div>

            {/* Card 6 — Government & Institutional Engagement (small) */}
            <div
              className={`md:col-span-4 transition-all duration-1000 ${revealedGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.40s' }}>

              <div
                className="rounded-2xl overflow-hidden relative group"
                style={{
                  aspectRatio: '4/3',
                  background: 'var(--navy)',
                  border: '1px solid rgba(181,170,154,0.15)'
                }}>

                <img
                  src="/assets/images/Untitled-1784305409843.png"
                  alt="Pertemuan dan koordinasi dengan Pemerintah Daerah dan Dinas Pendidikan"
                  className="w-full h-full object-cover" />

                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(17,29,51,0.85) 0%, transparent 100%)' }}>

                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>

                    Government &amp; Institutional Engagement
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>);

}