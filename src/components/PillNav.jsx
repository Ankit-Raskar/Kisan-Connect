import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Sprout, CloudRain, Droplets, TrendingUp, BookOpen, Users, Menu, X } from 'lucide-react';

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <div 
      className="animate-fade-up delay-200" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        zIndex: 100,
        position: scrolled ? 'sticky' : 'relative',
        top: scrolled ? '16px' : 'auto',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      
      {/* Emblem Logo — only visible when NOT scrolled/sticky */}
      {!scrolled && (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginBottom: '24px', 
          marginTop: '20px',
          animation: 'fadeInUp 0.6s ease forwards'
        }}>
          <div style={{ 
            position: 'relative', 
            width: '68px', 
            height: '68px', 
            border: '1.5px solid var(--color-forest)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: 'var(--color-bg)',
            boxShadow: '0 4px 20px rgba(47,64,48,0.08)'
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 22 12 2l10 20"/>
              <path d="M2 22 12 12l10 10"/>
              <path d="M12 2v10"/>
              <path d="M12 7c-2 0-3 2-3 2"/>
              <path d="M12 10c2 0 3-2 3-2"/>
            </svg>
          </div>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.1rem', 
            color: 'var(--color-forest)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.18em', 
            fontWeight: 600, 
            marginTop: '10px' 
          }}>
            Kisan Connect
          </h1>
          <p className="eyebrow" style={{ fontSize: '0.7rem', opacity: 0.8 }}>Smart Advisory & Field Companion</p>
        </div>
      )}

      {/* Floating Pill Nav — Desktop */}
      <nav className="nav-pill" style={{
        width: 'fit-content',
        maxWidth: '95vw',
        margin: '0 auto',
        ...(scrolled ? { 
          boxShadow: '0 12px 40px rgba(47, 64, 48, 0.16), 0 2px 10px rgba(47, 64, 48, 0.08)',
          transform: 'scale(0.96)',
        } : {})
      }}>
        {/* Compact Logo when scrolled */}
        {scrolled && (
          <Link to="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            marginRight: '8px',
            textDecoration: 'none',
          }}>
            <div style={{ 
              width: '32px', height: '32px', 
              border: '1px solid var(--color-forest)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'var(--color-bg)',
              flexShrink: 0,
            }}>
              <Sprout size={16} color="var(--color-forest)" />
            </div>
          </Link>
        )}

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="nav-mobile-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-forest)',
            padding: '6px',
            cursor: 'pointer',
          }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Nav Links */}
        <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>
          <Sprout size={15} />
          Dashboard
        </Link>
        
        <div className="nav-divider"></div>
        <Link to="/weather" className={`nav-link ${path === '/weather' ? 'active' : ''}`}>
          <CloudRain size={15} />
          Weather
        </Link>
        
        <div className="nav-divider"></div>
        <Link to="/advisory" className={`nav-link ${path === '/advisory' ? 'active' : ''}`}>
          <BookOpen size={15} />
          Crop Advisory
        </Link>

        <div className="nav-divider"></div>
        <Link to="/soil" className={`nav-link ${path === '/soil' ? 'active' : ''}`}>
          <Droplets size={15} />
          Soil Health
        </Link>

        <div className="nav-divider"></div>
        <Link to="/market" className={`nav-link ${path === '/market' ? 'active' : ''}`}>
          <TrendingUp size={15} />
          Market Prices
        </Link>

        <div className="nav-divider"></div>
        <button onClick={onOpenPestModal} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          🐛 Pest Diagnostic
        </button>

        <div className="nav-divider"></div>
        
        {/* Action Button: Notifications */}
        <button 
          onClick={onOpenNotifications} 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px',
            padding: '8px 18px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, var(--color-gold), #D4AD50)',
            color: '#2F4030',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.82rem',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.3s ease',
          }}
        >
          <Bell size={15} fill="currentColor" />
          <span>Alerts</span>
          {unreadCount > 0 && (
            <span style={{ 
              background: 'var(--color-terracotta)', 
              color: 'white', 
              borderRadius: '50%', 
              minWidth: '18px', 
              height: '18px', 
              fontSize: '0.68rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: 700,
              flexShrink: 0,
            }}>
              {unreadCount}
            </span>
          )}
        </button>
      </nav>
    </div>
  );
}
