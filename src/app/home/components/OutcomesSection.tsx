'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const employerTags = [
'Google', 'McKinsey & Co.', 'NIH', 'Goldman Sachs', 'NASA',
'The New York Times', 'SpaceX', 'WHO', 'ACLU', 'Doctors Without Borders',
'MIT Lincoln Lab', 'U.S. State Dept.', 'Pixar', 'Bridgewater',
'CDC', 'Apple', 'Fulbright Commission', 'Jane Street'];


const outcomeStats = [
{ value: '96%', label: 'employed or in grad school within 6 months', icon: 'BriefcaseIcon' },
{ value: '$82k', label: 'median starting salary (Class of 2025)', icon: 'CurrencyDollarIcon' },
{ value: '38%', label: 'pursue advanced degrees within 5 years', icon: 'AcademicCapIcon' },
{ value: '7', label: 'Rhodes Scholars in the last decade', icon: 'StarIcon' }];


const pathways = [
{
  label: 'Industry',
  pct: 58,
  color: 'var(--navy)',
  examples: 'Tech, Finance, Consulting, Healthcare'
},
{
  label: 'Graduate School',
  pct: 24,
  color: '#2E4A7A',
  examples: 'PhD, MD, JD, MBA programs'
},
{
  label: 'Public Service',
  pct: 12,
  color: '#4A6A9A',
  examples: 'Government, NGO, Policy, Military'
},
{
  label: 'Entrepreneurship',
  pct: 6,
  color: 'var(--stone)',
  examples: 'Founded 340+ startups since 2010'
}];


export default function OutcomesSection() {
  const [revealed, setRevealed] = useState(false);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          setTimeout(() => setBarsAnimated(true), 500);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="outcomes"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--navy-deep)' }}>
      
      <div className="max-w-6xl mx-auto">
        {/* Question */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Career Outcomes
            </span>
          </div>
          <h2 className="font-serif leading-none text-4xl md:text-6xl lg:text-7xl mb-6" style={{ color: 'white' }}>
            Where do <span className="italic" style={{ color: 'var(--gold)' }}>graduates</span> end up?
          </h2>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            96% of our graduates are employed or enrolled in advanced programs within six months. More meaningfully — they end up doing work that matters to them.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {outcomeStats.map((stat, i) =>
          <div
            key={stat.label}
            className={`rounded-2xl p-6 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              transitionDelay: `${i * 0.1}s`
            }}>
            
              <Icon name={stat.icon as any} size={20} style={{ color: 'var(--gold)', marginBottom: '12px' } as React.CSSProperties} />
              <div className="font-serif text-4xl mb-1" style={{ color: 'var(--gold)' }}>{stat.value}</div>
              <p className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat.label}</p>
            </div>
          )}
        </div>

        {/* Pathways + employer cloud */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Pathways bars */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Graduate Pathways
            </h3>
            <div className="space-y-5">
              {pathways.map((path, i) =>
              <div key={path.label}>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-white">{path.label}</span>
                      <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.35)' }}>{path.examples}</span>
                    </div>
                    <span className="text-sm font-bold" style={{ color: 'var(--gold)' }}>{path.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: barsAnimated ? `${path.pct}%` : '0%',
                      background: path.color,
                      transitionDelay: `${i * 0.12}s`
                    }} />
                  
                  </div>
                </div>
              )}
            </div>

            {/* Campus image */}
            <div className="parallax-img-wrap rounded-xl overflow-hidden mt-8 aspect-video">
              <AppImage
                src="https://images.unsplash.com/photo-1652950157010-47eac43b7297"
                alt="University graduation ceremony with students in caps and gowns on historic campus lawn"
                className="w-full h-full object-cover opacity-70" />
              
            </div>
          </div>

          {/* Employer cloud */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-300 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Where Our Graduates Work
            </h3>
            <div className="flex flex-wrap gap-2">
              {employerTags.map((employer, i) =>
              <span
                key={employer}
                className={`outcome-tag px-4 py-2 rounded-full text-xs font-semibold cursor-default transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.65)',
                  transitionDelay: `${0.3 + i * 0.04}s`
                }}>
                
                  {employer}
                </span>
              )}
            </div>

            {/* Alumni quote */}
            <div
              className="mt-8 rounded-2xl p-6"
              style={{ background: 'rgba(196,164,74,0.08)', border: '1px solid rgba(196,164,74,0.2)' }}>
              
              <p className="font-serif italic text-lg mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
                "I published my first paper as a sophomore. By graduation I had three. My current lab at NIH treats my undergraduate work as foundational."
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden"
                  style={{ border: '2px solid rgba(196,164,74,0.4)' }}>
                  
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1f32fdbd6-1763299989311.png"
                    alt="Portrait of Dr. Kenji Watanabe, NIH researcher and university alumnus"
                    className="w-full h-full object-cover" />
                  
                </div>
                <div>
                  <span className="text-xs font-bold block" style={{ color: 'var(--gold)' }}>Dr. Kenji W.</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>NIH Researcher · Class of 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div
          className={`mt-16 flex flex-col md:flex-row items-center gap-6 transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-gold px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider">
            
            Start Your Inquiry
          </button>
          <a
            href="#"
            className="text-sm font-semibold transition-colors hover:opacity-70"
            style={{ color: 'rgba(255,255,255,0.5)', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2px' }}>
            
            Request career outcomes data by major →
          </a>
        </div>
      </div>
    </section>);

}