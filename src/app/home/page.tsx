import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const loadingFallback = () => <div className="py-16" />;

// Active MBI homepage sections — in order
const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: true, loading: loadingFallback });
const MBIAtAGlanceSection = dynamic(() => import('./components/MBIAtAGlanceSection'), { loading: loadingFallback });
const TantanganLatarBelakangSection = dynamic(() => import('./components/TantanganLatarBelakangSection'), { loading: loadingFallback });
const SolusiMBISection = dynamic(() => import('./components/SolusiMBISection'), { loading: loadingFallback });
const JalurPengembanganGuruSection = dynamic(() => import('./components/JalurPengembanganGuruSection'), { loading: loadingFallback });
const KomponenProgramSection = dynamic(() => import('./components/KomponenProgramSection'), { loading: loadingFallback });
const TargetCapaianSiswaSection = dynamic(() => import('./components/TargetCapaianSiswaSection'), { loading: loadingFallback });
const DampakProgramSection = dynamic(() => import('./components/DampakProgramSection'), { loading: loadingFallback });
const BuktiProgramSection = dynamic(() => import('./components/BuktiProgramSection'), { loading: loadingFallback });
const StandarKredibilitasSection = dynamic(() => import('./components/StandarKredibilitasSection'), { loading: loadingFallback });
const FinalCTASection = dynamic(() => import('./components/FinalCTASection'), { loading: loadingFallback });
const ConsultationFormSection = dynamic(() => import('./components/ConsultationFormSection'), { loading: loadingFallback });

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--fog)' }}>
      <Header />
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. MBI at a Glance */}
      <MBIAtAGlanceSection />
      {/* 3. The National Challenge */}
      <TantanganLatarBelakangSection />
      {/* 4. The MBI Solution */}
      <SolusiMBISection />
      {/* 5. National Teacher Development Pathway */}
      <JalurPengembanganGuruSection />
      {/* 6. Programme Components */}
      <KomponenProgramSection />
      {/* 7. Student Outcomes */}
      <TargetCapaianSiswaSection />
      {/* 8. National Impact */}
      <DampakProgramSection />
      {/* 9. Programme Evidence */}
      <BuktiProgramSection />
      {/* 10. Standards & Institutional Credibility */}
      <StandarKredibilitasSection />
      {/* 11. Final CTA */}
      <FinalCTASection />
      {/* 12. Consultation Form */}
      <ConsultationFormSection />
      <Footer />
    </main>
  );
}