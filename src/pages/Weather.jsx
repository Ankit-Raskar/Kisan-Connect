import React from 'react';
import { Sun, CloudRain, Wind, Thermometer, AlertTriangle, ShieldCheck, Umbrella, Droplets } from 'lucide-react';

export default function Weather() {
  const forecast = [
    { day: 'Today', temp: '24°C', low: '14°C', icon: Sun, condition: 'Clear Golden Sky', rain: '0%', wind: '8 km/h', humidity: '62%' },
    { day: 'Tomorrow', temp: '25°C', low: '15°C', icon: Sun, condition: 'Warm & Dry', rain: '5%', wind: '10 km/h', humidity: '58%' },
    { day: 'Wednesday', temp: '18°C', low: '8°C', icon: CloudRain, condition: 'Frost Risk at Night', rain: '15%', alert: 'Frost Warning (4°C overnight)' },
    { day: 'Thursday', temp: '22°C', low: '12°C', icon: Wind, condition: 'Gusty Winds', rain: '20%', wind: '22 km/h' },
    { day: 'Friday', temp: '19°C', low: '10°C', icon: CloudRain, condition: 'Heavy Rainfall', rain: '85%', alert: 'Heavy Rain Warning (45mm)' },
    { day: 'Saturday', temp: '21°C', low: '12°C', icon: CloudRain, condition: 'Light Passing Showers', rain: '40%', wind: '12 km/h' },
    { day: 'Sunday', temp: '23°C', low: '13°C', icon: Sun, condition: 'Clear Sunshine', rain: '10%', wind: '7 km/h' },
  ];

  return (
    <div className="container flex-col gap-8 animate-fade-up">
      
      {/* Header */}
      <div>
        <span className="eyebrow">Hyper-Local Microclimate</span>
        <h2 style={{ fontSize: '2.8rem', color: 'var(--color-forest)' }}>7-Day Field Weather Outlook</h2>
        <div className="underline-accent" style={{ marginTop: '8px' }}></div>
        <p style={{ color: 'var(--color-sage)', fontSize: '1.05rem' }}>
          Real-time weather telemetry tuned for agricultural field decision-making in Karnal.
        </p>
      </div>

      {/* Critical Alert Card */}
      <div 
        className="blob-card-soft" 
        style={{ 
          background: 'var(--color-terracotta)', 
          color: '#F4EFE4', 
          padding: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px' 
        }}
      >
        <div style={{ maxWidth: '600px' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
            <AlertTriangle size={22} color="var(--color-gold)" />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>
              Agricultural Alert • Friday Rain & Frost
            </span>
          </div>
          <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '8px' }}>
            Heavy Rain Expected Friday (45mm) + Frost Risk Wednesday
          </h3>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
            <strong>Action Required:</strong> Delay all pesticide and urea top-dressing until Saturday afternoon. Perform light irrigation Wednesday evening to prevent frost burn on wheat crowns.
          </p>
        </div>

        <CloudRain size={80} color="var(--color-gold)" className="pulse-anim" />
      </div>

      {/* 7-Day Forecast Grid */}
      <div className="flex" style={{ flexWrap: 'wrap', gap: '20px' }}>
        {forecast.map((day, idx) => {
          const IconComp = day.icon;
          return (
            <div 
              key={idx} 
              className="blob-card-soft" 
              style={{ 
                flex: '1', 
                minWidth: '220px', 
                background: 'var(--color-surface)', 
                padding: '24px',
                border: day.alert ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div className="flex justify-between items-center" style={{ marginBottom: '12px' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-forest)' }}>{day.day}</h4>
                  <IconComp size={24} color={day.alert ? 'var(--color-terracotta)' : 'var(--color-sage)'} />
                </div>
                
                <div className="text-large-num" style={{ fontSize: '2.5rem', color: 'var(--color-forest)', margin: '8px 0' }}>
                  {day.temp}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-sage)' }}>Night Low: {day.low}</p>
                <p style={{ fontWeight: 600, color: 'var(--color-forest)', marginTop: '8px' }}>{day.condition}</p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--color-border)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                <p>🌧️ Rain Prob: <strong style={{ color: Number(day.rain.replace('%','')) > 50 ? 'var(--color-terracotta)' : 'var(--color-forest)' }}>{day.rain}</strong></p>
                <p>💨 Wind: {day.wind}</p>
                {day.alert && (
                  <span className="status-pill warning" style={{ marginTop: '8px', fontSize: '0.7rem' }}>
                    {day.alert}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
