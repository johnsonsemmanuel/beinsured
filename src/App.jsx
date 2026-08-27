import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChannelSelector from './components/ChannelSelector';
import PolicyLookupModal from './components/PolicyLookupModal';
import Home from './pages/Home';
import About from './pages/About';
import Coverage from './pages/Coverage';
import HowItWorksPage from './pages/HowItWorksPage';
import Claims from './pages/Claims';
import Partners from './pages/Partners';

export default function App() {
  const [channelSelectorOpen, setChannelSelectorOpen] = useState(false);
  const [policyLookupOpen, setPolicyLookupOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-cream text-brand-dark selection:bg-[#FEBD19] selection:text-slate-900">
        
        {/* Header Navigation */}
        <Header 
          onOpenChannelSelector={() => setChannelSelectorOpen(true)}
        />

        {/* Main Page View with React Router */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenChannelSelector={() => setChannelSelectorOpen(true)}
                  onOpenPolicyLookup={() => setPolicyLookupOpen(true)}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <About 
                  onOpenChannelSelector={() => setChannelSelectorOpen(true)}
                />
              } 
            />
            <Route 
              path="/coverage" 
              element={
                <Coverage 
                  onOpenChannelSelector={() => setChannelSelectorOpen(true)}
                />
              } 
            />
            <Route 
              path="/how-it-works" 
              element={
                <HowItWorksPage 
                  onOpenChannelSelector={() => setChannelSelectorOpen(true)}
                />
              } 
            />
            <Route 
              path="/claims" 
              element={
                <Claims 
                  onOpenChannelSelector={() => setChannelSelectorOpen(true)}
                />
              } 
            />
            <Route 
              path="/partners" 
              element={
                <Partners 
                  onOpenChannelSelector={() => setChannelSelectorOpen(true)}
                />
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer 
          onOpenChannelSelector={() => setChannelSelectorOpen(true)}
        />

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
