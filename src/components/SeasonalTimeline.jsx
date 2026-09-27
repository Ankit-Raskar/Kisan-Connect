import React, { useState } from 'react';
import { Sprout, Sun, Droplets, ShieldAlert, Award, Calendar, CheckCircle, ChevronRight } from 'lucide-react';

export default function SeasonalTimeline() {
  const [activeStageId, setActiveStageId] = useState(3); // Stage 3: Crown Root / Heading (Current)

  const stages = [
    {
      id: 1,
      title: '1. Land Prep & Sowing',
      date: 'Oct 15 - Nov 05',
      status: 'completed',
      icon: Sprout,
      action: 'Sowed PBW 725 wheat seed treated with Trichoderma (5g/kg). Seed rate: 45kg/acre.',
      irrigation: 'First pre-sowing irrigation (Palewa) completed.',
      fertilizer: 'Basal dose: 50kg DAP + 25kg MOP per acre.'
    },
    {
      id: 2,
      title: '2. Crown Root (CRI)',
      date: 'Nov 25 - Dec 10',
      status: 'completed',
      icon: Droplets,
      action: 'First irrigation applied at 21 days after sowing. Weeding done.',
      irrigation: 'Light irrigation (4cm depth).',
      fertilizer: 'Top dressing: 35kg Urea + 10kg Zinc Sulphate (21%).'
    },
    {
      id: 3,
      title: '3. Tillering & Heading',
      date: 'Dec 20 - Jan 25 (NOW)',
      status: 'active',
      icon: Sun,
      action: 'Inspect field for Yellow Rust infestation. Ensure soil moisture stays above 30%.',
      irrigation: 'Second irrigation recommended TODAY due to dry warm weather.',
      fertilizer: 'Split urea top dressing: 25kg Urea per acre before watering.'
    },
    {
      id: 4,
      title: '4. Flowering & Jointing',
      date: 'Feb 01 - Feb 20',
      status: 'upcoming',
      icon: ShieldAlert,
      action: 'Critical period for aphid attack. Spray Neem Oil (1500ppm) if pests exceed threshold.',
      irrigation: 'Third irrigation required at boot stage.',
      fertilizer: 'Foliar spray: 1% NPK 13-0-45 during grain development.'
    },
    {
      id: 5,
      title: '5. Grain Filling & Ripening',
      date: 'Mar 01 - Mar 25',
      status: 'upcoming',
      icon: Award,
      action: 'Avoid irrigation during high wind days to prevent crop lodging (falling over).',
      irrigation: 'Final light watering at dough stage.',
      fertilizer: 'No chemical fertilizer applications.'
    },
    {
      id: 6,
      title: '6. Harvesting & Mandi',
      date: 'Apr 05 - Apr 20',
      status: 'upcoming',
      icon: Calendar,
      action: 'Harvest when grain moisture drops to 12%. Check local mandi rates on Kisan Connect.',
      irrigation: 'Stop all irrigation 14 days before harvest.',
      fertilizer: 'Post-harvest straw management (incorporate into soil).'
    }
  ];

  const selectedStage = stages.find(s => s.id === activeStageId);

  return (
    <section className="container">
      
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-up delay-100" style={{ marginBottom: '36px' }}>
        <div>
          <span className="eyebrow">Full-Year Crop Roadmap</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-forest)' }}>Rabi Wheat Seasonal Timeline</h2>
          <div className="underline-accent" style={{ marginTop: '8px' }}></div>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-gold)' }} className="pulse-anim"></span>
          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-forest)' }}>Current Phase: Stage 3 (Heading)</span>
        </div>
      </div>

      {/* Hand-Drawn Field Trail Container */}
      <div 
        className="blob-card-soft animate-fade-up delay-200" 
        style={{ 
          background: 'var(--color-surface)', 
          padding: '40px 32px', 
          position: 'relative',
          overflow: 'hidden' 
        }}
      >
        <div style={{ overflowX: 'auto', paddingBottom: '20px' }} className="hide-scrollbar">
          {/* Hand-Drawn Dashed Trail SVG */}
          <div style={{ position: 'relative', margin: '20px 0 40px 0', minWidth: '800px' }}>
            
            <svg viewBox="0 0 1000 60" style={{ width: '100%', height: '60px', overflow: 'visible' }}>
              <path 
                d="M 20,30 Q 180,5 340,35 T 660,25 T 980,30" 
                fill="none" 
                stroke="var(--color-sage)" 
                strokeWidth="3" 
                strokeDasharray="8 6" 
                opacity="0.6"
                className="path-glow-anim"
              />
            </svg>

            {/* Stage Node Markers along the Trail */}
            <div 
              className="flex justify-between items-center" 
              style={{ 
                position: 'absolute', 
                top: '50%', 
                left: 0, 
                right: 0, 
                transform: 'translateY(-50%)', 
                padding: '0 10px' 
              }}
            >
              {stages.map((stg) => {
                const IconComp = stg.icon;
                const isActive = stg.id === activeStageId;
                const isCurrentPhase = stg.status === 'active';

                return (
                  <button
                    key={stg.id}
                    onClick={() => setActiveStageId(stg.id)}
                    style={{
                      background: isActive 
                        ? 'var(--color-gold)' 
                        : stg.status === 'completed' 
                        ? 'var(--color-sage)' 
                        : 'var(--color-bg)',
                      color: isActive || stg.status === 'completed' ? '#2F4030' : 'var(--color-forest)',
                      border: isCurrentPhase ? '3px solid var(--color-gold)' : '2px solid var(--color-border)',
                      width: isActive ? '54px' : '44px',
                      height: isActive ? '54px' : '44px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 6px 20px rgba(201, 162, 75, 0.4)' : 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      zIndex: 2,
                      flexShrink: 0
                    }}
                    title={stg.title}
                  >
                    <IconComp size={isActive ? 24 : 18} />

                    {isCurrentPhase && (
                      <span 
                        style={{ 
                          position: 'absolute', 
                          top: '-24px', 
                          background: 'var(--color-gold)', 
                          color: '#2F4030', 
                          padding: '2px 8px', 
                          borderRadius: '10px', 
                          fontSize: '0.68rem', 
                          fontWeight: 700, 
                          whiteSpace: 'nowrap' 
                        }}
                        className="bounce-anim"
                      >
                        YOU ARE HERE
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        {selectedStage && (
          <div 
            style={{ 
              background: 'var(--color-bg)', 
              borderRadius: '24px', 
              padding: '28px', 
              border: '1px solid var(--color-border)',
              animation: 'fadeInUp 0.4s ease forwards' 
            }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="eyebrow" style={{ color: selectedStage.status === 'active' ? 'var(--color-gold)' : 'var(--color-sage)' }}>
                  {selectedStage.date} • Phase {selectedStage.id} of 6
                </span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)' }}>{selectedStage.title}</h3>
              </div>

              <span className={`status-pill ${selectedStage.status === 'active' ? 'warning' : selectedStage.status === 'completed' ? 'success' : 'info'}`}>
                {selectedStage.status === 'active' ? '⚡ Active Today' : selectedStage.status === 'completed' ? '✓ Stage Completed' : 'Upcoming Stage'}
              </span>
            </div>

            <div className="flex" style={{ flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: 1, minWidth: 'min(240px, 100%)', background: 'var(--color-surface)', padding: '18px', borderRadius: '16px' }}>
                <p style={{ fontWeight: 600, color: 'var(--color-forest)', marginBottom: '6px', fontSize: '0.9rem' }}>🌾 Essential Field Action</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>{selectedStage.action}</p>
              </div>

              <div style={{ flex: 1, minWidth: 'min(240px, 100%)', background: 'var(--color-surface)', padding: '18px', borderRadius: '16px' }}>
                <p style={{ fontWeight: 600, color: 'var(--color-soil)', marginBottom: '6px', fontSize: '0.9rem' }}>💧 Irrigation Plan</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>{selectedStage.irrigation}</p>
              </div>

              <div style={{ flex: 1, minWidth: 'min(240px, 100%)', background: 'var(--color-surface)', padding: '18px', borderRadius: '16px' }}>
                <p style={{ fontWeight: 600, color: 'var(--color-sage)', marginBottom: '6px', fontSize: '0.9rem' }}>🧪 Fertilizer & Dosage</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>{selectedStage.fertilizer}</p>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
