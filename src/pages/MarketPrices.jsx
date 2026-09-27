import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Store, MapPin, Search } from 'lucide-react';

export default function MarketPrices() {
  const [searchMandi, setSearchMandi] = useState('');

  const mandiPrices = [
    { crop: 'Wheat (PBW 725)', mandi: 'Karnal APMC', price: '₹2,250 / q', minMax: '₹2,180 - ₹2,300', trend: 'up', change: '+₹50', advice: 'HOLD 5 DAYS' },
    { crop: 'Mustard (Pusa 30)', mandi: 'Gharaunda Mandi', price: '₹5,400 / q', minMax: '₹5,200 - ₹5,450', trend: 'up', change: '+₹120', advice: 'SELL 40%' },
    { crop: 'Basmati Paddy 1121', mandi: 'Taraori Mandi', price: '₹4,100 / q', minMax: '₹3,950 - ₹4,150', trend: 'down', change: '-₹30', advice: 'STORE IN GODOWN' },
    { crop: 'Gram (Chana)', mandi: 'Kurukshetra APMC', price: '₹5,150 / q', minMax: '₹5,000 - ₹5,200', trend: 'up', change: '+₹80', advice: 'HOLD' },
    { crop: 'Potato (Kufri Pukhraj)', mandi: 'Karnal Mandi', price: '₹1,200 / q', minMax: '₹1,100 - ₹1,250', trend: 'down', change: '-₹40', advice: 'SELL IMMEDIATELY' },
  ];

  const filteredPrices = mandiPrices.filter(m => 
    m.crop.toLowerCase().includes(searchMandi.toLowerCase()) || 
    m.mandi.toLowerCase().includes(searchMandi.toLowerCase())
  );

  return (
    <div className="container flex-col gap-8">
      <div className="flex items-center justify-between animate-fade-up delay-100" style={{ flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="eyebrow">APMC Mandi Intelligence</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: 'var(--color-forest)' }}>Nearby Mandi Rates & Guidance</h2>
          <div className="underline-accent" style={{ marginTop: '8px' }}></div>
          <p style={{ color: 'var(--color-sage)', fontSize: '1.05rem' }}>
            Daily commodity market updates with sell/hold guidance (Not guaranteed financial advice).
          </p>
        </div>

        <input 
          type="text" 
          placeholder="Filter crop or Mandi name..." 
          value={searchMandi}
          onChange={(e) => setSearchMandi(e.target.value)}
          className="form-input"
          style={{ maxWidth: 'min(320px, 100%)' }}
        />
      </div>

      {/* Hand-Drawn Trend Line Banner */}
      <div className="blob-card-soft animate-fade-up delay-200 float-anim" style={{ background: 'var(--color-forest)', color: '#F4EFE4', padding: '36px' }}>
        <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Market Forecast Highlight</span>
            <h3 style={{ fontSize: '1.8rem', color: '#F4EFE4', marginTop: '4px' }}>Mustard Price Surge (+₹120/q)</h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>
              High demand from regional oil crushing mills in Haryana. Expected to stay strong through Thursday.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px 24px', borderRadius: '20px', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Suggested Action</span>
            <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-gold)' }}>SELL 40% STOCK NOW</p>
          </div>
        </div>
      </div>

      {/* Mandi Cards Grid */}
      <div className="flex" style={{ flexWrap: 'wrap', gap: '20px' }}>
        {filteredPrices.map((item, idx) => (
          <div 
            key={idx}
            className={`blob-card-soft animate-fade-up`} 
            style={{ 
              animationDelay: `${300 + (idx * 100)}ms`,
              flex: '1', 
              minWidth: 'min(240px, 100%)', 
              background: 'var(--color-surface)', 
              padding: '28px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
                <span className="eyebrow" style={{ color: 'var(--color-sage)' }}>{item.mandi}</span>
                <span className={`status-pill ${item.trend === 'up' ? 'success' : 'warning'}`}>
                  {item.trend === 'up' ? '▲ ' : '▼ '}{item.change}
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-forest)', marginBottom: '8px' }}>{item.crop}</h3>
              
              <div className="text-large-num" style={{ fontSize: '2.6rem', color: 'var(--color-forest)', fontWeight: 700 }}>
                {item.price}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-sage)' }}>Range: {item.minMax}</p>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)', padding: '12px', borderRadius: '14px' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-forest)', fontWeight: 600 }}>Advisory Guidance:</p>
              <p style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-soil)' }}>{item.advice}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
