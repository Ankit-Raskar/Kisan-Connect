import React, { useState } from 'react';
import { Droplets, TestTube, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';

export default function SoilHealth() {
  const [ph, setPh] = useState(6.8);
  const [nitrogen, setNitrogen] = useState(140); // kg/ha (low)
  const [phosphorus, setPhosphorus] = useState(24); // kg/ha (medium)
  const [potassium, setPotassium] = useState(210); // kg/ha (good)
  const [organicCarbon, setOrganicCarbon] = useState(0.52); // %

  return (
    <div className="container flex-col gap-8 animate-fade-up">
      <div>
        <span className="eyebrow">Soil Health Reader & NPK Fixes</span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: 'var(--color-forest)' }}>Interactive Soil Reader</h2>
        <div className="underline-accent" style={{ marginTop: '8px' }}></div>
        <p style={{ color: 'var(--color-sage)', fontSize: '1.05rem' }}>
          Input your Soil Health Card laboratory values below to get instant plain-language soil fixes and clay-vessel moisture telemetry.
        </p>
      </div>

      <div className="flex" style={{ flexWrap: 'wrap', gap: '32px' }}>
        
        {/* Input Controls */}
        <div className="blob-card-soft" style={{ flex: 1, minWidth: 'min(320px, 100%)', background: 'var(--color-surface)', padding: '32px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--color-forest)' }}>Laboratory Test Values</h3>
          
          <div className="flex-col gap-4">
            <div>
              <div className="flex justify-between">
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Soil pH Level:</label>
                <span style={{ fontWeight: 700, color: 'var(--color-gold)' }}>{ph} (Optimal 6.5 - 7.5)</span>
              </div>
              <input type="range" min="5.0" max="8.5" step="0.1" value={ph} onChange={(e) => setPh(Number(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
            </div>

            <div>
              <div className="flex justify-between">
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Available Nitrogen (N) kg/ha:</label>
                <span style={{ fontWeight: 700, color: nitrogen < 180 ? 'var(--color-terracotta)' : 'var(--color-forest)' }}>
                  {nitrogen} kg/ha ({nitrogen < 180 ? 'Low' : 'Optimal'})
                </span>
              </div>
              <input type="range" min="80" max="350" step="5" value={nitrogen} onChange={(e) => setNitrogen(Number(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
            </div>

            <div>
              <div className="flex justify-between">
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Available Phosphorus (P) kg/ha:</label>
                <span style={{ fontWeight: 700, color: 'var(--color-forest)' }}>{phosphorus} kg/ha (Medium)</span>
              </div>
              <input type="range" min="10" max="60" step="1" value={phosphorus} onChange={(e) => setPhosphorus(Number(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
            </div>

            <div>
              <div className="flex justify-between">
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Available Potassium (K) kg/ha:</label>
                <span style={{ fontWeight: 700, color: '#A3B18A' }}>{potassium} kg/ha (Good)</span>
              </div>
              <input type="range" min="100" max="400" step="10" value={potassium} onChange={(e) => setPotassium(Number(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
            </div>

            <div>
              <div className="flex justify-between">
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Organic Carbon (%):</label>
                <span style={{ fontWeight: 700, color: 'var(--color-soil)' }}>{organicCarbon}%</span>
              </div>
              <input type="range" min="0.2" max="1.2" step="0.02" value={organicCarbon} onChange={(e) => setOrganicCarbon(Number(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
            </div>
          </div>
        </div>

        {/* Diagnosis & Fixes Output */}
        <div className="blob-card-soft" style={{ flex: 1.2, minWidth: 'min(340px, 100%)', background: 'var(--color-bg)', padding: '36px', border: '1.5px solid var(--color-forest)' }}>
          <span className="eyebrow" style={{ color: 'var(--color-forest)' }}>Plain-Language Fixes</span>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', marginBottom: '16px' }}>Soil Health Diagnosis</h3>

          <div className="flex-col gap-4">
            {nitrogen < 180 && (
              <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '16px', borderLeft: '4px solid var(--color-terracotta)' }}>
                <p style={{ fontWeight: 700, color: 'var(--color-terracotta)' }}>⚠️ Nitrogen Deficiency Detected ({nitrogen} kg/ha)</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-forest)', marginTop: '4px' }}>
                  <strong>Fix:</strong> Apply 25kg Urea per acre in split doses combined with Neem cake to slow leaching.
                </p>
              </div>
            )}

            <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '16px', borderLeft: '4px solid var(--color-gold)' }}>
              <p style={{ fontWeight: 700, color: 'var(--color-soil)' }}>🌱 Organic Carbon Fix ({organicCarbon}%)</p>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-forest)', marginTop: '4px' }}>
                <strong>Fix:</strong> Incorporate 2 tons of well-decomposed Farm Yard Manure (FYM) or vermicompost post-harvest to increase water holding capacity.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '16px', borderLeft: '4px solid #A3B18A' }}>
              <p style={{ fontWeight: 700, color: 'var(--color-forest)' }}>✓ Optimal pH Balance ({ph})</p>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-forest)', marginTop: '4px' }}>
                Nutrient availability is high. No gypsum or lime amendment is required this season.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
