import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Sprout, CloudRain, Droplets, TrendingUp, BookOpen, Menu, X } from 'lucide-react';

export default function PillNav({ unreadCount, onOpenNotifications, onOpenPestModal }) {
  const location = useLocation();
  const path = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { to: '/', label: 'Dashboard', icon: <Sprout size={18} /> },
    { to: '/weather', label: 'Weather', icon: <CloudRain size={18} /> },
    { to: '/advisory', label: 'Crop Advisory', icon: <BookOpen size={18} /> },
    { to: '/soil', label: 'Soil Health', icon: <Droplets size={18} /> },
    { to: '/market', label: 'Market Prices', icon: <TrendingUp size={18} /> },
  ];

  return (
    <div 
      className="animate-fade-up delay-200" 
      style={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 100,
        position: scrolled ? 'sticky' : 'relative', top: scrolled ? '16px' : 'auto',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Emblem Logo — only when NOT scrolled */}
      {!scrolled && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px', marginTop: '20px', animation: 'fadeInUp 0.6s ease forwards' }}>
          <div style={{ width: '68px', height: '68px', border: '1.5px solid var(--color-forest)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)', boxShadow: '0 4px 20px rgba(47,64,48,0.08)' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 22 12 2l10 20"/><path d="M2 22 12 12l10 10"/><path d="M12 2v10"/><path d="M12 7c-2 0-3 2-3 2"/><path d="M12 10c2 0 3-2 3-2"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--color-forest)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600, marginTop: '10px' }}>Kisan Connect</h1>
          <p className="eyebrow" style={{ fontSize: '0.7rem', opacity: 0.8 }}>Smart Advisory & Field Companion</p>
        </div>
      )}

      {/* ═══ DESKTOP Pill Nav ═══ */}
      <nav className="nav-pill nav-desktop" style={{
        width: 'fit-content', maxWidth: '95vw', margin: '0 auto',
        ...(scrolled ? { boxShadow: '0 12px 40px rgba(47, 64, 48, 0.16)', transform: 'scale(0.96)' } : {})
      }}>
        {scrolled && (
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '8px', textDecoration: 'none' }}>
            <div style={{ width: '32px', height: '32px', border: '1px solid var(--color-forest)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)', flexShrink: 0 }}>
              <Sprout size={16} color="var(--color-forest)" />
            </div>
          </Link>
        )}

        {navItems.map((item, i) => (
          <React.Fragment key={item.to}>
            {i > 0 && <div className="nav-divider"></div>}
            <Link to={item.to} className={`nav-link ${path === item.to ? 'active' : ''}`}>
              {React.cloneElement(item.icon, { size: 15 })}
              {item.label}
            </Link>
          </React.Fragment>
        ))}
        <div className="nav-divider"></div>
        <button onClick={onOpenPestModal} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🐛 Pest Diagnostic</button>
        <div className="nav-divider"></div>
        <button onClick={onOpenNotifications} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', borderRadius: '999px', background: 'linear-gradient(135deg, var(--color-gold), #D4AD50)', color: '#2F4030', fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.3s ease' }}>
          <Bell size={15} fill="currentColor" />
          <span>Alerts</span>
          {unreadCount > 0 && (
            <span style={{ background: 'var(--color-terracotta)', color: 'white', borderRadius: '50%', minWidth: '18px', height: '18px', fontSize: '0.68rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{unreadCount}</span>
          )}
        </button>
      </nav>

      {/* ═══ MOBILE Compact Bar ═══ */}
      <nav className="nav-mobile-bar" style={{
        display: 'none', width: 'calc(100% - 32px)', maxWidth: '500px', margin: '0 auto',
        padding: '8px 14px', background: 'var(--color-surface-translucent)', backdropFilter: 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.4)', border: '1px solid var(--color-border)',
        borderRadius: '20px', boxShadow: '0 8px 32px rgba(47, 64, 48, 0.1)', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', border: '1.5px solid var(--color-forest)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)' }}>
            <Sprout size={18} color="var(--color-forest)" />
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-forest)', letterSpacing: '0.08em' }}>KISAN</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button onClick={onOpenNotifications} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: 'linear-gradient(135deg, var(--color-gold), #D4AD50)', color: '#2F4030', fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
            <Bell size={14} fill="currentColor" />
            {unreadCount > 0 && <span style={{ background: 'var(--color-terracotta)', color: 'white', borderRadius: '50%', minWidth: '16px', height: '16px', fontSize: '0.6rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{unreadCount}</span>}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', color: 'var(--color-forest)', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ═══ MOBILE Full-Screen Menu Overlay ═══ */}
      {mobileOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'var(--color-bg)', zIndex: 999, display: 'flex', flexDirection: 'column', padding: '80px 24px 40px 24px', animation: 'fadeInUp 0.3s ease forwards' }}>
          <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'var(--color-forest)', padding: '8px', cursor: 'pointer' }}>
            <X size={28} />
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', borderRadius: '20px', background: path === item.to ? 'rgba(201, 162, 75, 0.15)' : 'var(--color-surface)', border: path === item.to ? '2px solid var(--color-gold)' : '1px solid var(--color-border)', color: 'var(--color-forest)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: path === item.to ? 600 : 500, textDecoration: 'none', transition: 'all 0.2s ease' }}>
                {item.icon}
                {item.label}
                {path === item.to && <span style={{ marginLeft: 'auto', color: 'var(--color-gold)', fontSize: '0.75rem', fontWeight: 700 }}>● ACTIVE</span>}
              </Link>
            ))}
            <button onClick={() => { onOpenPestModal(); setMobileOpen(false); }}
              style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', borderRadius: '20px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-forest)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 500, cursor: 'pointer', textAlign: 'left' }}>
              🐛 Pest Diagnostic
            </button>
          </div>
          <div style={{ marginTop: 'auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ fontSize: '0.7rem', opacity: 0.6 }}>Kisan Connect — Smart Advisory</p>
          </div>
        </div>
      )}
    </div>
  );
}
