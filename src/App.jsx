import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ChannelSelector from './components/ChannelSelector';
import PolicyLookupModal from './components/PolicyLookupModal';
import CookieConsent from './components/CookieConsent';
import TopSubtleHeroBackground from './components/TopSubtleHeroBackground';
import { PageTransition } from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorksPage from './pages/HowItWorksPage';
import Partners from './pages/Partners';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Animated Routes Wrapper
function AnimatedRoutes({ onOpenChannelSelector, onOpenPolicyLookup }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home 
                onOpenChannelSelector={onOpenChannelSelector}
                onOpenPolicyLookup={onOpenPolicyLookup}
              />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About 
                onOpenChannelSelector={onOpenChannelSelector}
              />
            </PageTransition>
          } 
        />
        <Route 
          path="/how-it-works" 
          element={
            <PageTransition>
              <HowItWorksPage 
                onOpenChannelSelector={onOpenChannelSelector}
              />
            </PageTransition>
          } 
        />
        <Route 
          path="/partners" 
          element={
            <PageTransition>
              <Partners 
                onOpenChannelSelector={onOpenChannelSelector}
              />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [channelSelectorOpen, setChannelSelectorOpen] = useState(false);
  const [policyLookupOpen, setPolicyLookupOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-brand-cream text-brand-dark selection:bg-[#FEBD19] selection:text-slate-900 overflow-x-hidden">
        
        {/* Subtle Top Hero Background Image Layer */}
        <TopSubtleHeroBackground />

        {/* Header Navigation */}
        <Header 
          onOpenChannelSelector={() => setChannelSelectorOpen(true)}
        />

        {/* Main Page View with Animated Routes */}
        <main className="flex-1 z-10">
          <AnimatedRoutes 
            onOpenChannelSelector={() => setChannelSelectorOpen(true)}
            onOpenPolicyLookup={() => setPolicyLookupOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer 
          onOpenChannelSelector={() => setChannelSelectorOpen(true)}
        />

        {/* Global Cookie Consent Floating Banner & Re-Open Trigger */}
        <CookieConsent />

        {/* Modals */}
        <ChannelSelector 
          isOpen={channelSelectorOpen}
          onClose={() => setChannelSelectorOpen(false)}
        />

        <PolicyLookupModal 
          isOpen={policyLookupOpen}
          onClose={() => setPolicyLookupOpen(false)}
          onOpenChannelSelector={() => setChannelSelectorOpen(true)}
        />

      </div>
    </BrowserRouter>
  );
}
