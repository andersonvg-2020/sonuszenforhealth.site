
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsSonuZem from '@/components/WhatIsSonuZem';
import StillWorthIt from '@/components/StillWorthIt';
import ProsAndCons from '@/components/ProsAndCons';
import AvoidScam from '@/components/AvoidScam';
import HowItWorks from '@/components/HowItWorks';
import Ingredients from '@/components/Ingredients';
import Safety from '@/components/Safety';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Conclusion from '@/components/Conclusion';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>SonusZen Review 2025: Does It Eliminate Tinnitus and Restore Hearing?</title>
        <meta name="description" content="Discover the truth about SonusZen in our 2025 review. Learn how its natural ingredients support auditory health, eliminate tinnitus, and restore mental clarity." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-green-50">
        <Header />
        <main>
          <Hero />
          <WhatIsSonuZem />
          <StillWorthIt />
          <ProsAndCons />
          <AvoidScam />
          <HowItWorks />
          <Ingredients />
          <Safety />
          <Benefits />
          <Testimonials />
          <FAQ />
          <Conclusion />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default HomePage;
