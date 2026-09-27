import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import PillNav from './components/PillNav';
import Dashboard from './pages/Dashboard';
import Weather from './pages/Weather';
import CropAdvisory from './pages/CropAdvisory';
import SoilHealth from './pages/SoilHealth';
import MarketPrices from './pages/MarketPrices';

import FarmProfileModal from './components/FarmProfileModal';
import SmsWhatsappModal from './components/SmsWhatsappModal';
import PestDiagnosticModal from './components/PestDiagnosticModal';
import NotificationsDrawer from './components/NotificationsDrawer';

import './index.css';

const Layout = ({ children }) => {
  const [isDuskMode, setIsDuskMode] = useState(false);
  const [isLowLiteracy, setIsLowLiteracy] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [fontScale, setFontScale] = useState(1);

  // Modals state
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSmsOpen, setIsSmsOpen] = useState(false);
  const [isPestOpen, setIsPestOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    if (isDuskMode) {
      document.body.classList.add('dusk-mode');
    } else {
      document.body.classList.remove('dusk-mode');
    }
  }, [isDuskMode]);

  useEffect(() => {
    if (isLowLiteracy) {
      document.body.classList.add('low-literacy');
    } else {
      document.body.classList.remove('low-literacy');
    }
  }, [isLowLiteracy]);

  const handleAudioSpeak = () => {
    if ('speechSynthesis' in window) {
      const text = "Today's Advisory for Karnal Wheat field: Irrigate wheat today. Crown Root Initiation stage requires 4 centimeters water depth. Soil moisture is low at 28 percent. Zero rain expected over the next 4 days.";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex-col" style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
      
      {/* 1. Full-Bleed Mountain Hero */}
      <header className="mountain-header animate-fade-up">
        <div className="container flex-col items-center" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)', zIndex: 3, marginTop: '-30px' }}>
          <p className="eyebrow" style={{ color: '#EADBC8', marginBottom: '14px', letterSpacing: '0.22em' }}>
            SMART FARMING ADVISORY SYSTEM
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.6rem', fontWeight: 500, letterSpacing: '-0.02em', textAlign: 'center', lineHeight: 1.1, maxWidth: '840px' }}>
            Rooted in your land, growing with data
          </h2>
        </div>
      </header>

      {/* 2. Emblem Logo + Floating Pill Nav */}
      <PillNav 
        unreadCount={3} 
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenPestModal={() => setIsPestOpen(true)}
      />

      {/* Page Content */}
      <main style={{ flex: 1, width: '100%', paddingBottom: '100px', marginTop: '40px' }}>
        {React.cloneElement(children, { 
          onSpeak: handleAudioSpeak,
          onOpenPestModal: () => setIsPestOpen(true)
        })}
      </main>

      {/* Closing Editorial Section (Footer) */}
      <footer 
        className="container flex-col items-center animate-fade-up delay-800" 
        style={{ 
          padding: '80px 20px 60px 20px', 
          borderTop: '1px solid var(--color-border)', 
          textAlign: 'center', 
          position: 'relative',
          marginTop: '60px' 
        }}
      >
        {/* Animated Walking Farmer SVG */}
        <div className="hand-drawn" style={{ position: 'absolute', top: '-28px', animation: 'walkLoop 4s linear infinite alternate' }}>
          <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="10" r="3.5" stroke="var(--color-forest)" strokeWidth="1.8"/>
            <path d="M20 13.5 V 26 M 20 17 L 11 23 M 20 17 L 29 23 M 20 26 L 13 36 M 20 26 L 27 36" stroke="var(--color-forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 23 L 6 34" stroke="var(--color-soil)" strokeWidth="1.8" strokeLinecap="round"/> {/* stick */}
          </svg>
        </div>

        <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-body)', fontWeight: 400, color: 'var(--color-forest)', marginBottom: '12px', fontStyle: 'italic' }}>
          Small decisions today, stronger harvests tomorrow.
        </h3>
        
        <p style={{ fontSize: '0.88rem', color: 'var(--color-sage)', letterSpacing: '0.06em', marginBottom: '8px' }}>
          © 2026 KISAN CONNECT ADVISORY SYSTEM · REAL-TIME GUIDANCE FOR REAL LAND
        </p>

        <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
          * Advisory recommendations are model guidance based on KVK Karnal data and Sentinel-2 satellite imagery.
        </p>
      </footer>

      {/* Global Interactive Modals */}
      <FarmProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <SmsWhatsappModal isOpen={isSmsOpen} onClose={() => setIsSmsOpen(false)} />
      <PestDiagnosticModal isOpen={isPestOpen} onClose={() => setIsPestOpen(false)} />
      <NotificationsDrawer isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/advisory" element={<CropAdvisory />} />
          <Route path="/soil" element={<SoilHealth />} />
          <Route path="/market" element={<MarketPrices />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
