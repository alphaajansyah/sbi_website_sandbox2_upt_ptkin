'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const funnelData = [
{ label: 'Applications Received', value: 42800, pct: 100, color: 'rgba(27,42,74,0.25)' },
{ label: 'Reviewed for Merit', value: 38100, pct: 89, color: 'rgba(27,42,74,0.4)' },
{ label: 'Offered Admission', value: 7690, pct: 18, color: 'rgba(27,42,74,0.65)' },
{ label: 'Enrolled (Class of 2029)', value: 1840, pct: 4.3, color: 'var(--navy)' }];


const profileStats = [
{ label: 'Median SAT', value: '1490' },
{ label: 'Median GPA', value: '3.87' },
{ label: 'First-Gen Students', value: '22%' },
{ label: 'International Students', value: '18%' },
{ label: 'States Represented', value: '51' },
{ label: 'Countries Represented', value: '74' }];


export default function AdmissionsSection() {
  const [revealed, setRevealed] = useState(false);
  const [funnelAnimated, setFunnelAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          setTimeout(() => setFunnelAnimated(true), 400);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="admissions"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}>
      
      <div className="max-w-6xl mx-auto">
        {/* Question */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Admissions
            </span>
          </div>
          <h2 className="question-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            Will I get in?
          </h2>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: 'var(--ink-soft)' }}>
            We read every application holistically. 22% of our incoming class are first-generation college students. Standardized test scores matter — but so does the essay about your grandmother's garden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Funnel visualization */}
          <div
            className={`lg:col-span-6 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8" style={{ color: 'var(--stone-dark)' }}>
              Class of 2029 Admissions Funnel
            </h3>
            <div className="space-y-3">
              {funnelData?.map((item, i) =>
              <div key={item?.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-medium" style={{ color: 'var(--ink-soft)' }}>{item?.label}</span>
                    <span className="text-xs font-bold" style={{ color: 'var(--navy)' }}>
                      {item?.value?.toLocaleString()}
                    </span>
                  </div>
                  <div
                  className="funnel-bar"
                  style={{
                    width: funnelAnimated ? `${item?.pct}%` : '0%',
                    background: item?.color,
                    transitionDelay: `${i * 0.15}s`
                  }}>
                  
                    <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold"
                    style={{ color: i >= 2 ? 'white' : 'var(--navy)' }}>
                    
                      {item?.pct}%
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Acceptance rate callout */}
            <div
              className="mt-8 rounded-xl p-6 flex items-center gap-6"
              style={{ background: 'var(--fog)', border: '1px solid rgba(181,170,154,0.3)' }}>
              
              <div>
                <div className="stat-gold text-5xl">18%</div>
                <p className="text-xs mt-1 font-medium" style={{ color: 'var(--stone-dark)' }}>acceptance rate</p>
              </div>
              <div className="w-px h-12 self-stretch" style={{ background: 'rgba(181,170,154,0.4)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                Selective — but not closed. We look for intellectual curiosity above all else.
              </p>
            </div>
          </div>

          {/* Right: Profile stats + photo */}
          <div
            className={`lg:col-span-6 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <div className="parallax-img-wrap rounded-2xl overflow-hidden aspect-video mb-6">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_10cf3c50a-1772144783081.png"
                alt="Diverse group of students walking across campus quad beneath century-old oak trees in autumn"
                className="w-full h-full object-cover" />
              
            </div>

            <div className="grid grid-cols-3 gap-3">
              {profileStats?.map((stat, i) =>
              <div
                key={stat?.label}
                className={`rounded-xl p-4 text-center transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  background: i % 2 === 0 ? 'var(--fog)' : 'white',
                  border: '1px solid rgba(181,170,154,0.2)',
                  transitionDelay: `${0.3 + i * 0.08}s`
                }}>
                
                  <div className="font-serif text-xl font-bold mb-0.5" style={{ color: 'var(--navy)' }}>
                    {stat?.value}
                  </div>
                  <div className="text-xs leading-tight" style={{ color: 'var(--stone-dark)' }}>
                    {stat?.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className={`mt-12 transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 pb-0.5 transition-colors hover:opacity-70"
            style={{ color: 'var(--navy)', borderColor: 'var(--gold)' }}>
            
            Request admissions counselor meeting
            <Icon name="ArrowRightIcon" size={14} />
          </a>
        </div>
      </div>
    </section>);

}