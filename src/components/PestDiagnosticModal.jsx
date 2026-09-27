import React, { useState } from 'react';
import { ShieldAlert, Bug, Sparkles, CheckCircle2, X } from 'lucide-react';

export default function PestDiagnosticModal({ isOpen, onClose }) {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [selectedSymptom, setSelectedSymptom] = useState('yellow_stripes');

  if (!isOpen) return null;

  const symptomsMap = {
    wheat: [
      { id: 'yellow_stripes', label: 'Yellow linear stripes on leaves' },
      { id: 'aphid_clusters', label: 'Tiny green insects on earheads' },
      { id: 'wilting_roots', label: 'Root rot / drying tillers' },
    ],
    mustard: [
      { id: 'aphids_mustard', label: 'Black/green aphid swarms on pods' },
      { id: 'white_rust', label: 'White powdery pustules under leaves' },
    ],
    paddy: [
      { id: 'stem_borer', label: 'Dead hearts / dried central shoot' },
      { id: 'brown_plant_hopper', label: 'Hopper burn / drying patches' },
    ]
  };

  const treatments = {
    yellow_stripes: {
      disease: 'Yellow Rust (Puccinia striiformis)',
      severity: 'Critical Threat',
      organic: 'Spray Neem Oil (1500 ppm) @ 5ml/liter water + Sour buttermilk spray.',
      chemical: 'Propiconazole 25% EC (Tilt) @ 200 ml in 200 liters of water per acre.'
    },
    aphid_clusters: {
      disease: 'Wheat Aphid (Sitobion avenae)',
      severity: 'Moderate Risk',
      organic: 'Yellow sticky cards (10/acre) + Ladybird beetle biocontrol release.',
      chemical: 'Thiamethoxam 25% WG @ 40g per acre in 150 liters water.'
    },
    wilting_roots: {
      disease: 'Foot Rot / Crown Rot',
      severity: 'Moderate Risk',
      organic: 'Trichoderma viride soil application (2kg/acre mixed with FYM).',
      chemical: 'Carbendazim 50% WP @ 2g per liter water soil drenching.'
    },
    aphids_mustard: {
      disease: 'Mustard Aphids',
      severity: 'High Threat',
      organic: 'Neem seed kernel extract 5%.',
      chemical: 'Dimethoate 30% EC @ 250 ml/acre.'
    },
    white_rust: {
      disease: 'White Rust of Crucifers',
      severity: 'Moderate Risk',
      organic: 'Garlic extract spray 5%.',
      chemical: 'Mancozeb 75% WP @ 600g/acre.'
    },
    stem_borer: {
      disease: 'Yellow Stem Borer',
      severity: 'High Threat',
      organic: 'Trichogramma egg parasitoid cards (2 cards/acre).',
      chemical: 'Cartap Hydrochloride 4G @ 10kg/acre.'
    },
    brown_plant_hopper: {
      disease: 'Brown Plant Hopper (BPH)',
      severity: 'Critical Threat',
      organic: 'Drain field water for 3 days to lower humidity.',
      chemical: 'Pymetrozine 50% WG @ 120g/acre.'
    }
  };

  const currentResult = treatments[selectedSymptom];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        
        {/* Header */}
        <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
          <div className="flex items-center gap-2">
            <Bug size={24} color="var(--color-terracotta)" />
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)' }}>Interactive Pest & Disease Helper</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} color="var(--color-forest)" />
          </button>
        </div>

        <p style={{ color: 'var(--color-sage)', fontSize: '0.92rem', marginBottom: '24px' }}>
          Select your crop and field symptom to get instant organic and chemical treatment advice.
        </p>

        {/* Crop Selector */}
        <div className="flex gap-3" style={{ flexWrap: 'wrap', marginBottom: '20px' }}>
          <button 
            onClick={() => { setSelectedCrop('wheat'); setSelectedSymptom('yellow_stripes'); }}
            className={`btn-outline ${selectedCrop === 'wheat' ? 'active' : ''}`}
            style={{ background: selectedCrop === 'wheat' ? 'var(--color-forest)' : 'transparent', color: selectedCrop === 'wheat' ? '#F4EFE4' : 'var(--color-forest)' }}
          >
            🌾 Wheat
          </button>
          <button 
            onClick={() => { setSelectedCrop('mustard'); setSelectedSymptom('aphids_mustard'); }}
            className={`btn-outline ${selectedCrop === 'mustard' ? 'active' : ''}`}
            style={{ background: selectedCrop === 'mustard' ? 'var(--color-forest)' : 'transparent', color: selectedCrop === 'mustard' ? '#F4EFE4' : 'var(--color-forest)' }}
          >
            🌼 Mustard
          </button>
          <button 
            onClick={() => { setSelectedCrop('paddy'); setSelectedSymptom('stem_borer'); }}
            className={`btn-outline ${selectedCrop === 'paddy' ? 'active' : ''}`}
            style={{ background: selectedCrop === 'paddy' ? 'var(--color-forest)' : 'transparent', color: selectedCrop === 'paddy' ? '#F4EFE4' : 'var(--color-forest)' }}
          >
            🌱 Paddy / Rice
          </button>
        </div>

        {/* Symptom Pickers */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-forest)', marginBottom: '8px', display: 'block' }}>
            Select Observed Field Symptom:
          </label>
          <div className="flex-col gap-2">
            {symptomsMap[selectedCrop]?.map(sym => (
              <button
                key={sym.id}
                onClick={() => setSelectedSymptom(sym.id)}
                style={{
                  background: selectedSymptom === sym.id ? 'var(--color-gold)' : 'var(--color-bg)',
                  color: selectedSymptom === sym.id ? '#2F4030' : 'var(--color-forest)',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  textAlign: 'left',
                  border: '1px solid var(--color-border)',
                  fontWeight: selectedSymptom === sym.id ? 600 : 400
                }}
              >
                {selectedSymptom === sym.id ? '🔘 ' : '⚪ '} {sym.label}
              </button>
            ))}
          </div>
        </div>

        {/* Diagnosis & Treatment Box */}
        {currentResult && (
          <div style={{ background: 'var(--color-bg)', padding: '24px', borderRadius: '24px', border: '1.5px solid var(--color-terracotta)' }}>
            <div className="flex items-center justify-between" style={{ marginBottom: '12px' }}>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--color-terracotta)' }}>Diagnosis: {currentResult.disease}</h4>
              <span className="status-pill warning">{currentResult.severity}</span>
            </div>

            <div className="flex-col gap-3" style={{ marginTop: '16px' }}>
              <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '16px' }}>
                <p style={{ fontWeight: 700, color: 'var(--color-sage)', fontSize: '0.88rem' }}>🌿 Organic / Biocontrol Remedy:</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-forest)', marginTop: '4px' }}>{currentResult.organic}</p>
              </div>

              <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '16px' }}>
                <p style={{ fontWeight: 700, color: 'var(--color-soil)', fontSize: '0.88rem' }}>🧪 Standard Chemical Treatment:</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-forest)', marginTop: '4px' }}>{currentResult.chemical}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
