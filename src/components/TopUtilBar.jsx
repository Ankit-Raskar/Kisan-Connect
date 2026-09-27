import React, { useState } from 'react';
import { Volume2, VolumeX, Globe, Sun, Moon, Wifi, User, PhoneCall, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function TopUtilBar({
  isDuskMode,
  setIsDuskMode,
  isLowLiteracy,
  setIsLowLiteracy,
  currentLang,
  setCurrentLang,
  fontScale,
  setFontScale,
  onOpenProfile,
  onOpenSms
}) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    { code: 'mr', label: 'मराठी' },
    { code: 'te', label: 'తెలుగు' },
  ];

  const handleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const text = "Today's Advisory: Irrigate wheat field today. Soil moisture is low at 28 percent, and no rain is expected for the next 4 days. Fertilizer tip: apply 15 kilograms urea per acre.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert("Voice narration is supported in your browser!");
    }
  };

  const cycleFontSize = () => {
    const nextScale = fontScale === 1 ? 1.15 : fontScale === 1.15 ? 1.3 : 1;
    setFontScale(nextScale);
    document.documentElement.style.setProperty('--font-scale', nextScale.toString());
  };

  return (
    <div className="top-util-floating">
      <div className="container">
        <div className="top-util-inner flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
          
          {/* Left: Offline Status & Field Profile */}
          <div className="flex items-center gap-3" style={{ flexWrap: 'wrap' }}>
            <div className="flex items-center gap-2" style={{ color: 'var(--color-sage)', fontSize: '0.78rem' }}>
              <span className="pulse-anim" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A3B18A', display: 'inline-block' }}></span>
              <span style={{ fontWeight: 500 }}>Live Telemetry • Synced</span>
            </div>
            
            <button onClick={onOpenProfile} className="util-btn" title="Edit Farm Profile">
              <User size={13} />
              <span>Karnal, HR • 12 Acres</span>
            </button>
          </div>

          {/* Right: Accessibility Controls */}
          <div className="flex items-center gap-2" style={{ flexWrap: 'wrap' }}>
            
            {/* Voice Readout Toggle */}
            <button 
              onClick={handleSpeech} 
              className="util-btn" 
              style={{ background: isSpeaking ? 'var(--color-gold)' : undefined, color: isSpeaking ? '#2F4030' : undefined }}
            >
              {isSpeaking ? <VolumeX size={13} /> : <Volume2 size={13} />}
              <span>{isSpeaking ? 'Pause' : 'Listen'}</span>
            </button>

            {/* Icon/Low Literacy Mode */}
            <button 
              onClick={() => setIsLowLiteracy(!isLowLiteracy)} 
              className="util-btn"
              style={{ background: isLowLiteracy ? 'var(--color-gold)' : undefined, color: isLowLiteracy ? '#2F4030' : undefined }}
            >
              <SlidersHorizontal size={13} />
              <span>{isLowLiteracy ? 'Icon ON' : 'Icons'}</span>
            </button>

            {/* Text Size Switcher */}
            <button onClick={cycleFontSize} className="util-btn">
              <span style={{ fontWeight: 700, fontSize: '0.8rem' }}>A{fontScale > 1 ? '+' : ''}</span>
            </button>

            {/* Language Switcher */}
            <div className="util-btn" style={{ padding: '4px 8px' }}>
              <Globe size={13} />
              <select 
                value={currentLang} 
                onChange={(e) => setCurrentLang(e.target.value)}
                style={{ background: 'transparent', color: 'inherit', border: 'none', fontFamily: 'inherit', fontSize: '0.78rem', cursor: 'pointer', outline: 'none' }}
              >
                {languages.map(l => (
                  <option key={l.code} value={l.code} style={{ background: '#2F4030', color: '#F4EFE4' }}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            {/* SMS / WhatsApp Opt-in */}
            <button onClick={onOpenSms} className="util-btn" style={{ background: 'rgba(201, 162, 75, 0.25)', border: '1px solid rgba(201, 162, 75, 0.4)' }}>
              <PhoneCall size={13} color="var(--color-gold)" />
              <span>SMS Alerts</span>
            </button>

            {/* Dusk Mode Toggle */}
            <button 
              onClick={() => setIsDuskMode(!isDuskMode)} 
              className="util-btn"
              title="Toggle Warm Dusk Theme"
            >
              {isDuskMode ? <Sun size={13} color="#E5BB53" /> : <Moon size={13} />}
              <span>{isDuskMode ? 'Day' : 'Dusk'}</span>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
