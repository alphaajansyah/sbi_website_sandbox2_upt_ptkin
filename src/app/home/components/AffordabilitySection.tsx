'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function AffordabilitySection() {
  const [income, setIncome] = useState(75000);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setRevealed(true);},
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Aid calculation model (simplified)
  const totalCost = 78400;
  const aidEstimate = Math.min(
    Math.round((1 - income / 200000) * totalCost * 0.82),
    totalCost - 8000
  );
  const netCost = Math.max(totalCost - aidEstimate, 8000);
  const aidPct = Math.round(aidEstimate / totalCost * 100);

  const formatCurrency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <section
      id="affordability"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}>
      
      <div className="max-w-6xl mx-auto">
        {/* Section question */}
        <div
          className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Affordability
            </span>
          </div>
          <h2 className="question-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            Can I afford this?
          </h2>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: 'var(--ink-soft)' }}>
            94% of our students receive need-based or merit aid. The average family earning under $75,000 pays less than $15,000 per year — often less than a state school.
          </p>
        </div>

        {/* Grid: stat + calculator + image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Big stat */}
          <div
            className={`lg:col-span-4 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <div
              className="rounded-2xl p-8 h-full flex flex-col justify-between"
              style={{ background: 'var(--navy)', minHeight: '280px' }}>
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest block mb-6" style={{ color: 'rgba(196,164,74,0.7)' }}>
                  Class of 2029 Aid Data
                </span>
                <div className="stat-gold text-6xl md:text-7xl mb-2">$47k</div>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  average annual financial aid award
                </p>
              </div>
              <div className="space-y-3 pt-8">
                {[
                { label: 'Grants (no repayment)', pct: 72 },
                { label: 'Work-study', pct: 14 },
                { label: 'Loans', pct: 14 }].
                map((item) =>
                <div key={item.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                      <span className="text-xs font-bold" style={{ color: 'var(--gold)' }}>{item.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: revealed ? `${item.pct}%` : '0%',
                        background: 'var(--gold)',
                        transitionDelay: '0.4s'
                      }} />
                    
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Center: Aid calculator */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <div
              className="rounded-2xl p-8"
              style={{ background: 'white', border: '1px solid rgba(181,170,154,0.25)', boxShadow: '0 8px 40px rgba(27,42,74,0.07)' }}>
              
              <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--navy)' }}>
                Aid Estimator
              </h3>
              <p className="text-xs mb-6" style={{ color: 'var(--stone-dark)' }}>
                Slide to your household income for an instant estimate.
              </p>

              <div className="mb-6">
                <div className="flex justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-dark)' }}>
                    Annual household income
                  </span>
                  <span className="text-sm font-bold" style={{ color: 'var(--navy)' }}>
                    {formatCurrency(income)}
                  </span>
                </div>
                <input
                  type="range"
                  min={20000}
                  max={200000}
                  step={5000}
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="aid-slider w-full" />
                
                <div className="flex justify-between mt-1">
                  <span className="text-xs" style={{ color: 'var(--stone)' }}>$20k</span>
                  <span className="text-xs" style={{ color: 'var(--stone)' }}>$200k+</span>
                </div>
              </div>

              {/* Result */}
              <div className="rounded-xl p-5 mb-4" style={{ background: 'var(--fog)' }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--stone-dark)' }}>
                      Est. Aid Package
                    </p>
                    <p className="font-serif text-3xl" style={{ color: 'var(--gold)' }}>
                      {formatCurrency(aidEstimate)}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--stone-dark)' }}>{aidPct}% of total cost</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--stone-dark)' }}>
                      Net Cost / Year
                    </p>
                    <p className="font-serif text-3xl" style={{ color: 'var(--navy)' }}>
                      {formatCurrency(netCost)}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--stone-dark)' }}>before work-study</p>
                  </div>
                </div>
              </div>

              <p className="text-xs italic" style={{ color: 'var(--stone)' }}>
                * Estimates are illustrative. Submit an inquiry for a personalized aid consultation.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-300 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <div className="parallax-img-wrap rounded-2xl overflow-hidden aspect-[3/4]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d59d5121-1772144783106.png"
                alt="Student studying in the rare books reading room, warm lamplight on open notebooks"
                className="w-full h-full object-cover" />
              
            </div>
            <p className="text-xs mt-3 italic text-center" style={{ color: 'var(--stone-dark)' }}>
              "I didn't think I could afford a school like this. My aid package changed everything." — Priya S., Class of '27
            </p>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className={`mt-12 transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 pb-0.5 transition-colors hover:opacity-70"
            style={{ color: 'var(--navy)', borderColor: 'var(--gold)' }}>
            
            Request financial aid information
            <Icon name="ArrowRightIcon" size={14} />
          </a>
        </div>
      </div>
    </section>);

}