'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const studentProjects = [
{
  id: 1,
  student: 'Marcus T.',
  year: 'Junior, Computer Science',
  project: 'Neural interfaces for motor rehabilitation in post-stroke patients',
  lab: 'Computational Neuroscience Lab',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1060cb644-1772144782855.png",
  imageAlt: 'Student working at computer workstation with brain scan data on multiple screens in research lab',
  tag: 'Neuroscience × CS'
},
{
  id: 2,
  student: 'Ananya K.',
  year: 'Sophomore, Environmental Science',
  project: 'Microplastic accumulation patterns in freshwater invertebrate populations',
  lab: 'Aquatic Ecosystems Research Center',
  image: "https://images.unsplash.com/photo-1562789278-dac7af7fb5b1",
  imageAlt: 'Student examining water samples under microscope in ecology laboratory with field equipment visible',
  tag: 'Ecology × Chemistry'
},
{
  id: 3,
  student: 'Elijah R.',
  year: 'Senior, Economics',
  project: 'Remittance flows and household resilience in sub-Saharan informal economies',
  lab: 'Development Economics Initiative',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8a5f52a-1768654537789.png",
  imageAlt: 'Student reviewing economic data charts and maps on laptop in university library study room',
  tag: 'Economics × Policy'
}];


export default function ResearchSection() {
  const [revealed, setRevealed] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setRevealed(true);},
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--fog)' }}>
      
      <div className="max-w-6xl mx-auto">
        {/* Question */}
        <div className={`mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rule-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Undergraduate Research
            </span>
          </div>
          <h2 className="question-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            What's research like <br className="hidden md:block" />
            <span className="italic">as an undergrad?</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: 'var(--ink-soft)' }}>
            68% of undergraduates conduct original research before graduation — not as assistants, but as co-investigators. Our particle accelerator is one floor below the student union.
          </p>
        </div>

        {/* Bento layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Large featured project */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <div
              className="rounded-2xl overflow-hidden relative group"
              style={{ border: '1px solid rgba(181,170,154,0.2)' }}>
              
              <div className="parallax-img-wrap aspect-[16/9]">
                <AppImage
                  src={studentProjects[activeCard].image}
                  alt={studentProjects[activeCard].imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                
              </div>
              {/* Overlay card */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(17,29,51,0.95) 0%, rgba(17,29,51,0.6) 60%, transparent 100%)' }}>
                
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ background: 'rgba(196,164,74,0.2)', color: 'var(--gold)', border: '1px solid rgba(196,164,74,0.3)' }}>
                  
                  {studentProjects[activeCard].tag}
                </span>
                <p className="text-white font-medium text-base leading-snug mb-2">
                  "{studentProjects[activeCard].project}"
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-xs font-bold block" style={{ color: 'var(--gold)' }}>
                      {studentProjects[activeCard].student}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {studentProjects[activeCard].year} · {studentProjects[activeCard].lab}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab selectors */}
            <div className="flex gap-2 mt-3">
              {studentProjects.map((p, i) =>
              <button
                key={p.id}
                onClick={() => setActiveCard(i)}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300"
                style={{
                  background: activeCard === i ? 'var(--navy)' : 'rgba(181,170,154,0.2)',
                  color: activeCard === i ? 'white' : 'var(--stone-dark)'
                }}>
                
                  {p.student}
                </button>
              )}
            </div>
          </div>

          {/* Right column: stat cards */}
          <div
            className={`lg:col-span-5 flex flex-col gap-4 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Big stat */}
            <div
              className="rounded-2xl p-7 flex-1"
              style={{ background: 'var(--navy)' }}>
              
              <div className="stat-gold text-6xl mb-2">68%</div>
              <p className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                of undergrads conduct original research before graduating
              </p>
              <div className="space-y-2">
                {[
                { label: '200+ active research labs', icon: 'BeakerIcon' },
                { label: '$840M annual research budget', icon: 'ChartBarIcon' },
                { label: '14 Nobel laureates on faculty', icon: 'SparklesIcon' }].
                map((item) =>
                <div key={item.label} className="flex items-center gap-3">
                    <Icon name={item.icon as any} size={14} style={{ color: 'var(--gold)' } as React.CSSProperties} />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.label}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Program cards */}
            {[
            {
              title: 'SURF Program',
              desc: 'Summer Undergraduate Research Fellowship — $5,200 stipend, 10 weeks, 340 placements annually.',
              icon: 'SunIcon'
            },
            {
              title: 'Senior Thesis Track',
              desc: 'Dedicate your final year to a faculty-mentored research project that can lead to publication.',
              icon: 'DocumentTextIcon'
            }].
            map((prog, i) =>
            <div
              key={prog.title}
              className={`rounded-2xl p-5 flex gap-4 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{
                background: 'white',
                border: '1px solid rgba(181,170,154,0.2)',
                transitionDelay: `${0.35 + i * 0.1}s`
              }}>
              
                <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'var(--gold-pale)' }}>
                
                  <Icon name={prog.icon as any} size={18} style={{ color: 'var(--gold)' } as React.CSSProperties} />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--navy)' }}>{prog.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--stone-dark)' }}>{prog.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Secondary CTA */}
        <div className={`mt-12 transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 pb-0.5 transition-colors hover:opacity-70"
            style={{ color: 'var(--navy)', borderColor: 'var(--gold)' }}>
            
            Request research program information
            <Icon name="ArrowRightIcon" size={14} />
          </a>
        </div>
      </div>
    </section>);

}