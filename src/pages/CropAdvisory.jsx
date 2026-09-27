import React, { useState } from 'react';
import { Sprout, Sun, Droplets, ShieldAlert, Award, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function CropAdvisory({ onOpenPestModal }) {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [selectedStage, setSelectedStage] = useState('heading');

  const cropDatabase = {
    wheat: {
      name: 'Wheat (Rabi)',
      stages: [
        { id: 'sowing', title: 'Sowing & Germination', timing: 'Days 0-20', advice: 'Ensure soil moisture is adequate. Apply basal dose of 50kg DAP + 25kg MOP per acre.' },
        { id: 'cri', title: 'Crown Root Initiation (CRI)', timing: 'Days 21-35', advice: 'CRITICAL: First irrigation is mandatory. Apply top dressing of 35kg urea + 10kg zinc sulphate.' },
        { id: 'heading', title: 'Tillering & Heading (Current)', timing: 'Days 40-75', advice: 'Inspect leaves for Yellow Rust. Second irrigation required now if soil moisture < 30%.' },
        { id: 'milking', title: 'Milking & Grain Filling', timing: 'Days 80-110', advice: 'Foliar spray of 1% NPK 13-0-45. Avoid heavy watering during strong winds to prevent lodging.' }
      ]
    },
    mustard: {
      name: 'Mustard (Rabi)',
      stages: [
        { id: 'sowing', title: 'Sowing', timing: 'Days 0-15', advice: 'Maintain seed rate 1.5 - 2kg per acre.' },
        { id: 'flowering', title: 'Flowering Stage', timing: 'Days 35-50', advice: 'Watch out for aphid attacks. Spray Neem oil (1500ppm).' },
        { id: 'pod', title: 'Pod Formation', timing: 'Days 60-90', advice: 'Ensure one light irrigation if rainfall fails.' }
      ]
    },
    paddy: {
      name: 'Basmati Paddy (Kharif)',
      stages: [
        { id: 'nursery', title: 'Nursery Prep', timing: 'May 15 - Jun 10', advice: 'Treat seeds with Carbendazim before sowing.' },
        { id: 'transplanting', title: 'Transplanting', timing: 'Jun 20 - Jul 15', advice: 'Maintain 2-3 cm standing water in field.' },
        { id: 'panicle', title: 'Panicle Initiation', timing: 'Aug 10 - Sep 05', advice: 'Apply final urea split.' }
      ]
    }
  };

  const currentCrop = cropDatabase[selectedCrop];

  return (
    <div className="container flex-col gap-8 animate-fade-up">
      <div>
        <span className="eyebrow">Stage-Specific Crop Science</span>
        <h2 style={{ fontSize: '2.8rem', color: 'var(--color-forest)' }}>Crop Advisory Engine</h2>
        <div className="underline-accent" style={{ marginTop: '8px' }}></div>
        <p style={{ color: 'var(--color-sage)', fontSize: '1.05rem' }}>
          Select your crop and current field growth stage to retrieve precise irrigation timing, fertilizer dosage, and pest warnings.
        </p>
      </div>

      {/* Crop Selector Tabs */}
      <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
        <button 
          onClick={() => setSelectedCrop('wheat')} 
          className="blob-card-soft flex items-center gap-3 cursor-pointer"
          style={{ 
            background: selectedCrop === 'wheat' ? 'var(--color-forest)' : 'var(--color-surface)',
            color: selectedCrop === 'wheat' ? '#F4EFE4' : 'var(--color-forest)',
            padding: '16px 28px'
          }}
        >
          <Sprout size={24} color={selectedCrop === 'wheat' ? 'var(--color-gold)' : 'var(--color-forest)'} />
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.1rem' }}>Wheat (PBW 725)</h4>
            <p style={{ fontSize: '0.78rem', opacity: 0.8 }}>Rabi Season • 12 Acres</p>
          </div>
        </button>

        <button 
          onClick={() => setSelectedCrop('mustard')} 
          className="blob-card-soft flex items-center gap-3 cursor-pointer"
          style={{ 
            background: selectedCrop === 'mustard' ? 'var(--color-forest)' : 'var(--color-surface)',
            color: selectedCrop === 'mustard' ? '#F4EFE4' : 'var(--color-forest)',
            padding: '16px 28px'
          }}
        >
          <Sun size={24} color={selectedCrop === 'mustard' ? 'var(--color-gold)' : 'var(--color-forest)'} />
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.1rem' }}>Mustard (Pusa 30)</h4>
            <p style={{ fontSize: '0.78rem', opacity: 0.8 }}>Rabi Season • 4 Acres</p>
          </div>
        </button>

        <button 
          onClick={() => setSelectedCrop('paddy')} 
          className="blob-card-soft flex items-center gap-3 cursor-pointer"
          style={{ 
            background: selectedCrop === 'paddy' ? 'var(--color-forest)' : 'var(--color-surface)',
            color: selectedCrop === 'paddy' ? '#F4EFE4' : 'var(--color-forest)',
            padding: '16px 28px'
          }}
        >
          <Droplets size={24} color={selectedCrop === 'paddy' ? 'var(--color-gold)' : 'var(--color-forest)'} />
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.1rem' }}>Basmati Rice</h4>
            <p style={{ fontSize: '0.78rem', opacity: 0.8 }}>Kharif Season</p>
          </div>
        </button>
      </div>

      {/* Stages List */}
      <div className="flex-col gap-4">
        {currentCrop.stages.map((stg) => {
          const isSelected = selectedStage === stg.id;
          return (
            <div 
              key={stg.id} 
              className="blob-card-soft cursor-pointer"
              onClick={() => setSelectedStage(stg.id)}
              style={{ 
                background: isSelected ? 'var(--color-surface)' : 'var(--color-bg)',
                border: isSelected ? '2px solid var(--color-gold)' : '1px solid var(--color-border)',
                padding: '28px'
              }}
            >
              <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <div className="flex items-center gap-3">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: isSelected ? 'var(--color-gold)' : 'var(--color-sage)', color: '#2F4030', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    ✓
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--color-forest)' }}>{stg.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-sage)' }}>{stg.timing}</p>
                  </div>
                </div>

                <button onClick={onOpenPestModal} className="btn-outline" style={{ fontSize: '0.8rem' }}>
                  Run Pest Diagnosis for this stage
                </button>
              </div>

              <div style={{ marginTop: '16px', background: 'var(--color-bg)', padding: '16px', borderRadius: '16px' }}>
                <p style={{ fontSize: '0.98rem', color: 'var(--color-forest)', lineHeight: 1.5 }}>
                  <strong>Stage Guidance:</strong> {stg.advice}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
