import React from 'react';
import { Award, Leaf, Droplet, Sprout, TrendingUp, Sparkles } from 'lucide-react';

export default function SustainabilityScore() {
  return (
    <section className="container">
      <div 
        className="blob-card-soft animate-fade-up delay-200" 
        style={{ 
          background: 'linear-gradient(135deg, var(--color-forest) 0%, #1E2B1F 100%)', 
          color: '#F4EFE4', 
          padding: '40px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="flex" style={{ flexWrap: 'wrap', gap: '36px', alignItems: 'center' }}>
          
          {/* Score Badge */}
          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Eco-Land Guardian Score</span>
            <div className="text-large-num pulse-anim" style={{ fontSize: '4.5rem', color: 'var(--color-gold)', fontWeight: 700, lineHeight: 1 }}>
              86<span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.6)' }}>/100</span>
            </div>
            <span className="status-pill success" style={{ background: 'rgba(163, 177, 138, 0.2)', color: '#A3B18A', border: '1px solid #A3B18A', marginTop: '8px' }}>
              🌟 Top 10% in Karnal Cluster
            </span>
          </div>

          {/* Breakdown items */}
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#F4EFE4' }}>Sustainable Land & Water Index</h3>
            
            <div className="flex items-center justify-between animate-fade-up delay-300" style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: '16px' }}>
              <div className="flex items-center gap-3">
                <Droplet size={20} color="var(--color-gold)" />
                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>Water Use Efficiency</p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Drip & Scheduled Tubewell Irrigation</p>
                </div>
              </div>
              <span style={{ fontWeight: 700, color: 'var(--color-gold)' }}>92%</span>
            </div>

            <div className="flex items-center justify-between animate-fade-up delay-400" style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: '16px' }}>
              <div className="flex items-center gap-3">
                <Leaf size={20} color="#A3B18A" />
                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>Soil Organic Carbon Trend</p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Increased from 0.42% to 0.58%</p>
                </div>
              </div>
              <span style={{ fontWeight: 700, color: '#A3B18A' }}>+16%</span>
            </div>

            <div className="flex items-center justify-between animate-fade-up delay-500" style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: '16px' }}>
              <div className="flex items-center gap-3">
                <Sprout size={20} color="var(--color-soil)" />
                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>Chemical Reduction Score</p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Integrated Pest Management applied</p>
                </div>
              </div>
              <span style={{ fontWeight: 700, color: 'var(--color-gold)' }}>80%</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
