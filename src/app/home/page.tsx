import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const loadingFallback = () => <div className="py-16" />;

const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: true, loading: loadingFallback });
const InternationalPartnersSection = dynamic(() => import('./components/InternationalPartnersSection'), { loading: loadingFallback });
const WhyUPTBahasaSection = dynamic(() => import('./components/WhyUPTBahasaSection'), { loading: loadingFallback });
const DevelopmentModelSection = dynamic(() => import('./components/DevelopmentModelSection'), { loading: loadingFallback });
const StudiKasusSection = dynamic(() => import('./components/StudiKasusSection'), { loading: loadingFallback });
const InternationalProgrammesSection = dynamic(() => import('./components/InternationalProgrammesSection'), { loading: loadingFallback });
const CEFRFrameworkSection = dynamic(() => import('./components/CEFRFrameworkSection'), { loading: loadingFallback });
const ImplementationRoadmapSection = dynamic(() => import('./components/ImplementationRoadmapSection'), { loading: loadingFallback });
const SimulasiProyeksiSection = dynamic(() => import('./components/SimulasiProyeksiSection'), { loading: loadingFallback });
const PetaTargetSection = dynamic(() => import('./components/PetaTargetSection'), { loading: loadingFallback });
const DampakProgramSection = dynamic(() => import('./components/DampakProgramSection'), { loading: loadingFallback });
const FinalCTASection = dynamic(() => import('./components/FinalCTASection'), { loading: loadingFallback });
const ConsultationFormSection = dynamic(() => import('./components/ConsultationFormSection'), { loading: loadingFallback });

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--fog)' }}>
      <Header />
      <HeroSection />
      <InternationalPartnersSection />
      <WhyUPTBahasaSection />
      <DevelopmentModelSection />
      <StudiKasusSection />
      <InternationalProgrammesSection />
      <CEFRFrameworkSection />
      <ImplementationRoadmapSection />
      <SimulasiProyeksiSection />
      <PetaTargetSection />
      <DampakProgramSection />
      <FinalCTASection />
      <ConsultationFormSection />
      <Footer />
    </main>
  );
}