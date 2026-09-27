import React, { useState } from 'react';
import { Check, Clock, Volume2, Sparkles, AlertCircle } from 'lucide-react';

export default function TodaysAdvisory({ onSpeak }) {
  const [completed, setCompleted] = useState(false);
  const [snoozed, setSnoozed] = useState(false);

  return (
    <section className="container" style={{ position: 'relative' }}>
      
      {/* Animated Birds accent */}
      <div className="hand-drawn bird-anim" style={{ position: 'absolute', top: '-40px', right: '15%' }}>
        <svg width="44" height="22" viewBox="0 0 44 22" fill="none">
          <path d="M5 12 Q 12 3 18 12 Q 24 3 32 12 Q 38 4 42 12" stroke="var(--color-terracotta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Two-column grid layout */}
      <div className="advisory-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.4fr', 
        gap: '48px', 
        alignItems: 'center' 
      }}>

        {/* Left: Emotional/Warm Editorial Copy */}
        <div className="flex-col animate-fade-up delay-200">
          <div className="flex items-center gap-2" style={{ marginBottom: '12px' }}>
            <Sparkles size={18} color="var(--color-gold)" />
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Daily Advisory • Sept 27, 2026</span>
          </div>
          
          <h2 style={{ fontSize: '2.8rem', marginBottom: '16px', color: 'var(--color-forest)', lineHeight: 1.12 }}>
            Rooted in your land, guided by daily precision.
          </h2>
          
          <div style={{ 
            width: '60px', 
            height: '3px', 
            background: 'linear-gradient(90deg, var(--color-gold), transparent)', 
            borderRadius: '2px', 
            marginBottom: '20px' 
          }}></div>
          
          <p style={{ fontSize: '1.1rem', color: 'var(--color-forest)', opacity: 0.85, maxWidth: '420px', fontStyle: 'italic', lineHeight: 1.6 }}>
            "Every field has its own story. Today, soil moisture and calm weather signal a critical 24-hour window for your wheat crop."
          </p>

          {/* Quick Voice Readout Button */}
          <div style={{ marginTop: '28px' }}>
            <button onClick={onSpeak} className="btn-outline">
              <Volume2 size={16} />
              <span>Listen to Daily Audio Advisory</span>
            </button>
          </div>
        </div>

        {/* Right: Functional Advisory Card in Organic Blob Frame */}
        <div className="animate-fade-up delay-300" style={{ position: 'relative' }}>
          
          {/* Blob Photo Frame with inline SVG fallback gradient */}
          <div 
            className="blob-frame blob-hero-right" 
            style={{ 
              width: '100%', 
              height: '460px',
              background: 'linear-gradient(135deg, #7C8B5E 0%, #4a6741 40%, #C9A24B 100%)',
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1000&h=700&fit=crop" 
              alt="Wheat field golden hour" 
              className="blob-img"
              onError={(e) => { e.target.style.display = 'none'; }}
              loading="lazy"
            />
            {/* Decorative overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(47,64,48,0.2) 100%)',
              pointerEvents: 'none'
            }}></div>
          </div>

          {/* Overlapping Priority Action Card */}
          <div 
            className="blob-widget" 
            style={{ 
              position: 'absolute', 
              bottom: '-50px', 
              left: '-20px', 
              maxWidth: '460px', 
              width: 'calc(100% - 20px)',
              background: 'var(--color-surface)', 
              zIndex: 5,
              border: completed ? '2px solid var(--color-sage)' : '1px solid var(--color-border)',
              boxShadow: '0 16px 48px rgba(47, 64, 48, 0.14)',
            }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: '12px' }}>
              <div className="flex items-center gap-2">
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: completed ? 'var(--color-sage)' : 'var(--color-gold)', display: 'inline-block' }}></span>
                <span className="eyebrow" style={{ color: completed ? 'var(--color-sage)' : 'var(--color-gold)' }}>
                  {completed ? 'Action Completed' : 'Today\'s Recommended Action'}
                </span>
              </div>
              <span style={{ 
                background: 'rgba(201, 162, 75, 0.15)', 
                color: 'var(--color-soil)', 
                padding: '4px 12px', 
                borderRadius: '999px', 
                fontSize: '0.75rem', 
                fontFamily: 'var(--font-heading)',
                fontWeight: 600 
              }}>High Priority</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', color: 'var(--color-forest)', lineHeight: 1.2 }}>
              {completed ? '✓ Wheat Field Irrigated' : 'Irrigate Wheat Field Today (CRI Stage)'}
            </h3>
            
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
              <strong>Reasoning:</strong> Crown Root Initiation stage requires 4cm water depth. Soil moisture is currently low (28%). Zero rain expected over the next 4 days.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
              <button 
                onClick={() => setCompleted(!completed)} 
                className="btn-gold" 
                style={{ 
                  flex: 1, 
                  justifyContent: 'center', 
                  background: completed ? 'var(--color-sage)' : undefined, 
                  color: completed ? 'white' : undefined 
                }}
              >
                <Check size={18} />
                <span>{completed ? 'Done ✓' : 'Mark Completed'}</span>
              </button>

              <button 
                onClick={() => setSnoozed(!snoozed)} 
                className="btn-outline"
                style={{ background: snoozed ? 'rgba(0,0,0,0.05)' : 'transparent' }}
              >
                <Clock size={16} />
                <span>{snoozed ? 'Remind Tomorrow' : 'Snooze 24h'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom spacer for overlapping card */}
      <div style={{ height: '80px' }}></div>

    </section>
  );
}
