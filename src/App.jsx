import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChannelSelector from './components/ChannelSelector';
import PolicyLookupModal from './components/PolicyLookupModal';
import Home from './pages/Home';
import Partners from './pages/Partners';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'partners'
  const [channelSelectorOpen, setChannelSelectorOpen] = useState(false);
  const [policyLookupOpen, setPolicyLookupOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-dark selection:bg-brand-blue selection:text-white">
      
      {/* Header Navigation */}
      <Header 
        onOpenChannelSelector={() => setChannelSelectorOpen(true)}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Home 
            onOpenChannelSelector={() => setChannelSelectorOpen(true)}
            onOpenPolicyLookup={() => setPolicyLookupOpen(true)}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'partners' && (
          <Partners 
            onOpenChannelSelector={() => setChannelSelectorOpen(true)}
            setActivePage={setActivePage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenChannelSelector={() => setChannelSelectorOpen(true)}
        setActivePage={setActivePage}
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
  );
}
