import React, { useState } from 'react';
import { CloudRain, TrendingUp, Droplets, MapPin, AlertTriangle, ArrowUpRight, ArrowDownRight, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataCollage({ onOpenSoilDetails }) {
  const [selectedMandiCrop, setSelectedMandiCrop] = useState('wheat');
  const [soilMoisturePct, setSoilMoisturePct] = useState(28);

  const marketData = {
    wheat: { name: 'Wheat (PBW 725)', price: '₹2,250', change: '+₹50', trend: 'up', suggestion: 'Hold 5 days — Mandi demand rising' },
    mustard: { name: 'Mustard (Pusa 30)', price: '₹5,400', change: '+₹120', trend: 'up', suggestion: 'Good time to sell 40% stock' },
    paddy: { name: 'Basmati Rice', price: '₹4,100', change: '-₹30', trend: 'down', suggestion: 'Store in dry godown for festive peak' },
  };

  const currentCropMarket = marketData[selectedMandiCrop];

  return (
    <section className="container">
      
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '32px' }}>
        <div>
          <span className="eyebrow">Real-Time Field Diagnostics</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-forest)' }}>Live Data & Market Intelligence</h2>
          <div className="underline-accent" style={{ marginTop: '8px' }}></div>
        </div>
        <p style={{ color: 'var(--color-sage)', maxWidth: '300px', fontSize: '0.9rem' }}>
          Data styled with craft — scannable at a glance even in bright sunlight.
        </p>
      </div>

      {/* Irregular Collage Grid */}
      <div className="flex" style={{ flexWrap: 'wrap', gap: '28px', position: 'relative' }}>
        
        {/* 1. Weather Widget (Blob Collage Left) */}
        <Link 
          to="/weather" 
          className="blob-frame blob-collage-left animate-fade-up delay-200" 
          style={{ flex: '1', minWidth: 'min(340px, 100%)', background: 'var(--color-surface)', padding: '36px', display: 'flex', flexDirection: 'column', minHeight: '380px', border: '1px solid var(--color-border)' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-forest)', fontWeight: 600 }}>
              <CloudRain size={24} color="var(--color-sage)"/> 
              <span>Local Weather</span>
            </div>
            <span style={{ background: 'rgba(124,139,94,0.15)', color: 'var(--color-sage)', padding: '4px 12px', borderRadius: '999px', fontSize: '0.72rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Karnal Station</span>
          </div>

          <div className="flex items-center gap-6" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <div className="text-large-num" style={{ color: 'var(--color-forest)' }}>24°C</div>
            <div>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-forest)' }}>Partly Cloudy</p>
              <p style={{ color: 'var(--color-sage)', fontSize: '0.95rem' }}>Humidity: 62% • Wind: 8 km/h</p>
            </div>
          </div>

          {/* 7-Day Micro Strip */}
          <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
            <div className="flex justify-between text-center" style={{ fontSize: '0.82rem' }}>
              <div><p className="eyebrow" style={{ fontSize: '0.7rem' }}>TODAY</p><p style={{ fontWeight: 600 }}>24° / 14°</p></div>
              <div><p className="eyebrow" style={{ fontSize: '0.7rem' }}>MON</p><p style={{ fontWeight: 600 }}>26° / 15°</p></div>
              <div><p className="eyebrow" style={{ fontSize: '0.7rem' }}>TUE</p><p style={{ fontWeight: 600 }}>25° / 13°</p></div>
              <div><p className="eyebrow" style={{ fontSize: '0.7rem' }}>WED</p><p style={{ fontWeight: 600, color: 'var(--color-terracotta)' }}>18° / 8° 🌧️</p></div>
            </div>
          </div>
        </Link>

        {/* 2. Market Prices Widget (Blob Collage Right) */}
        <div 
          className="blob-frame blob-collage-right animate-fade-up delay-300" 
          style={{ flex: '1.2', minWidth: 'min(360px, 100%)', background: 'var(--color-forest)', color: '#F4EFE4', padding: '40px', display: 'flex', flexDirection: 'column', minHeight: '400px' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#F4EFE4', fontWeight: 600 }}>
              <TrendingUp size={24} color="var(--color-gold)"/> 
              <span>Mandi Market Trends</span>
            </div>
            
            {/* Selector */}
            <select 
              value={selectedMandiCrop} 
              onChange={(e) => setSelectedMandiCrop(e.target.value)}
              style={{ background: 'rgba(255,255,255,0.15)', color: '#F4EFE4', border: 'none', borderRadius: '12px', padding: '6px 12px', fontFamily: 'inherit', fontSize: '0.85rem' }}
            >
              <option value="wheat" style={{ background: '#2F4030' }}>Wheat</option>
              <option value="mustard" style={{ background: '#2F4030' }}>Mustard</option>
              <option value="paddy" style={{ background: '#2F4030' }}>Basmati Rice</option>
            </select>
          </div>

          <div style={{ marginTop: '24px' }}>
            <p className="eyebrow" style={{ color: 'var(--color-sage)' }}>{currentCropMarket.name}</p>
            <div className="flex items-baseline gap-3" style={{ marginTop: '4px' }}>
              <div className="text-large-num" style={{ color: 'var(--color-gold)' }}>{currentCropMarket.price}</div>
              <span style={{ fontSize: '1.1rem', color: currentCropMarket.trend === 'up' ? '#A3B18A' : 'var(--color-terracotta)', fontWeight: 600 }}>
                {currentCropMarket.change}
              </span>
            </div>
          </div>

          {/* Hand-Drawn Wobble Price Chart SVG */}
          <div style={{ margin: '16px 0', height: '65px' }}>
            <svg viewBox="0 0 300 60" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <path 
                className="price-chart-path" 
                d="M 0,45 Q 50,35 90,40 T 170,25 T 240,30 T 300,10" 
              />
              <circle cx="300" cy="10" r="5" fill="var(--color-gold)" className="pulse-anim" />
            </svg>
          </div>

          <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '12px 16px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600 }}>Advisory Suggestion:</p>
            <p style={{ fontSize: '0.95rem' }}>{currentCropMarket.suggestion}</p>
          </div>
        </div>

        {/* 3. Clay Vessel Soil Moisture Gauge Widget */}
        <div 
          className="blob-frame blob-widget animate-fade-up delay-500" 
          style={{ flex: '1', minWidth: 'min(300px, 100%)', background: 'var(--color-surface)', display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-forest)', fontWeight: 600 }}>
              <Droplets size={22} color="var(--color-terracotta)"/> 
              <span>Clay Vessel Moisture</span>
            </div>
            <span style={{ background: 'rgba(201,162,75,0.15)', color: 'var(--color-soil)', padding: '4px 12px', borderRadius: '999px', fontSize: '0.72rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Low Moisture</span>
          </div>

          {/* Clay Vessel Graphic */}
          <div className="flex items-center justify-center gap-6" style={{ margin: '12px 0' }}>
            
            <div className="clay-vessel-container">
              <svg className="clay-vessel-svg" viewBox="0 0 100 130">
                {/* Clay Pot Outer Shell */}
                <path d="M 20,20 L 80,20 L 88,40 C 95,70 85,110 50,120 C 15,110 5,70 12,40 Z" fill="#8A5A3B" opacity="0.25" stroke="#8A5A3B" strokeWidth="3" />
                {/* Water Level Fill */}
                <clipPath id="vesselClip">
                  <path d="M 20,20 L 80,20 L 88,40 C 95,70 85,110 50,120 C 15,110 5,70 12,40 Z" />
                </clipPath>
                <rect x="0" y={130 - (110 * (soilMoisturePct / 100))} width="100" height="130" fill="var(--color-terracotta)" clipPath="url(#vesselClip)" className="clay-water-level" />
                {/* Pot Outline */}
                <path d="M 20,20 L 80,20 L 88,40 C 95,70 85,110 50,120 C 15,110 5,70 12,40 Z" fill="none" stroke="#8A5A3B" strokeWidth="4" />
                <ellipse cx="50" cy="20" rx="30" ry="6" fill="#8A5A3B" />
              </svg>
            </div>

            <div>
              <div className="text-large-num" style={{ fontSize: '2.8rem', color: 'var(--color-terracotta)' }}>
                {soilMoisturePct}%
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-sage)', fontWeight: 600 }}>Target: 45% - 55%</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-soil)', marginTop: '4px' }}>pH 6.8 • NPK Balanced</p>
            </div>
          </div>

          <Link to="/soil" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <span>Full Soil Health Diagnosis</span>
          </Link>
        </div>

        {/* 4. Satellite Field View (NDVI-lite) */}
        <div 
          className="blob-frame blob-widget animate-fade-up delay-500" 
          style={{ flex: '1', minWidth: 'min(300px, 100%)', background: 'var(--color-surface)', display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-forest)', fontWeight: 600 }}>
              <Layers size={22} color="var(--color-sage)"/> 
              <span>Satellite Field Map (NDVI)</span>
            </div>
            <span style={{ background: 'rgba(124,139,94,0.15)', color: 'var(--color-sage)', padding: '4px 12px', borderRadius: '999px', fontSize: '0.72rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Sentinel-2 Sync</span>
          </div>

          {/* Simulated Satellite Map */}
          <div style={{ position: 'relative', height: '140px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--color-border)', background: 'linear-gradient(135deg, #4a6741 0%, #7C8B5E 50%, #8A5A3B 100%)' }}>
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop" 
              alt="Satellite land" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) brightness(0.9)' }}
              onError={(e) => { e.target.style.display = 'none'; }}
              loading="lazy"
            />
            
            {/* Polygon Overlay */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <polygon points="20,20 180,15 260,80 140,130 30,100" fill="rgba(124, 139, 94, 0.45)" stroke="var(--color-gold)" strokeWidth="3" strokeDasharray="4 4" />
              <polygon points="140,40 220,35 240,75 160,85" fill="rgba(178, 74, 60, 0.5)" stroke="var(--color-terracotta)" strokeWidth="2" />
            </svg>

            <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '4px 10px', borderRadius: '10px', fontSize: '0.72rem' }}>
              🟢 82% Vigorous • 🔴 18% Moisture Stressed
            </div>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            East quadrant showing slight water stress. Target irrigation to Sector 3.
          </p>
        </div>

      </div>

    </section>
  );
}
