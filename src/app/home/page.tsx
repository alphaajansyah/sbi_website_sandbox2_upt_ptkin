import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const loadingFallback = () => <div className="py-16" />;

const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: true, loading: loadingFallback });
const TantanganLatarBelakangSection = dynamic(() => import('./components/TantanganLatarBelakangSection'), { loading: loadingFallback });
const KeunggulanProgramSection = dynamic(() => import('./components/KeunggulanProgramSection'), { loading: loadingFallback });
const AlurProgramSection = dynamic(() => import('./components/AlurProgramSection'), { loading: loadingFallback });
const PipelinePengembanganGuruSection = dynamic(() => import('./components/PipelinePengembanganGuruSection'), { loading: loadingFallback });
const CEfTSection = dynamic(() => import('./components/CEfTSection'), { loading: loadingFallback });
const PBISection = dynamic(() => import('./components/PBISection'), { loading: loadingFallback });
const InternationalToTSection = dynamic(() => import('./components/InternationalToTSection'), { loading: loadingFallback });
const ImplementasiMapelSection = dynamic(() => import('./components/ImplementasiMapelSection'), { loading: loadingFallback });
const TargetCapaianSiswaSection = dynamic(() => import('./components/TargetCapaianSiswaSection'), { loading: loadingFallback });
const DampakProgramSection = dynamic(() => import('./components/DampakProgramSection'), { loading: loadingFallback });
const MitraKredibilitasSection = dynamic(() => import('./components/MitraKredibilitasSection'), { loading: loadingFallback });
const ConsultationFormSection = dynamic(() => import('./components/ConsultationFormSection'), { loading: loadingFallback });

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--fog)' }}>
      <Header />
      <HeroSection />
      <TantanganLatarBelakangSection />
      <KeunggulanProgramSection />
      <AlurProgramSection />
      <PipelinePengembanganGuruSection />
      <CEfTSection />
      <PBISection />
      <InternationalToTSection />
      <ImplementasiMapelSection />
      <TargetCapaianSiswaSection />
      <DampakProgramSection />
      <MitraKredibilitasSection />
      <ConsultationFormSection />
      <Footer />
    </main>
  );
}