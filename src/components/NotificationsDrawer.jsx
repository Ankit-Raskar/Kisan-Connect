import React from 'react';
import { Bell, AlertTriangle, TrendingUp, ShieldAlert, MessageSquare, X } from 'lucide-react';

export default function NotificationsDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'weather',
      title: 'Frost Warning for Wednesday Night',
      desc: 'Temperature expected to drop to 4°C. Light evening irrigation advised to protect wheat crops.',
      time: '1 hour ago',
      urgent: true,
      icon: AlertTriangle
    },
    {
      id: 2,
      type: 'market',
      title: 'Mustard Rate Crossed ₹5,400/q',
      desc: 'Karnal mandi price increased +₹120 today due to strong oil mill demand.',
      time: '3 hours ago',
      urgent: false,
      icon: TrendingUp
    },
    {
      id: 3,
      type: 'pest',
      title: 'Yellow Rust Outbreak in Karnal Cluster',
      desc: '3 neighboring farms reported leaf spots. Check your wheat tillers today.',
      time: '5 hours ago',
      urgent: true,
      icon: ShieldAlert
    },
    {
      id: 4,
      type: 'qa',
      title: 'KVK Extension Officer Replied',
      desc: 'Dr. Ramesh Sharma answered your query on Yellow Rust treatment.',
      time: '1 day ago',
      urgent: false,
      icon: MessageSquare
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between" style={{ marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
          <div className="flex items-center gap-2">
            <Bell size={20} color="var(--color-gold)" />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-forest)' }}>Field Notification Center</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={22} color="var(--color-forest)" />
          </button>
        </div>

        {/* List */}
        <div className="flex-col gap-4">
          {notifications.map((n) => {
            const IconComp = n.icon;
            return (
              <div 
                key={n.id} 
                style={{ 
                  background: n.urgent ? 'rgba(178, 74, 60, 0.08)' : 'var(--color-bg)', 
                  padding: '16px', 
                  borderRadius: '18px',
                  border: n.urgent ? '1px solid rgba(178, 74, 60, 0.3)' : '1px solid var(--color-border)' 
                }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: '6px' }}>
                  <div className="flex items-center gap-2">
                    <IconComp size={16} color={n.urgent ? 'var(--color-terracotta)' : 'var(--color-gold)'} />
                    <span style={{ fontWeight: 700, fontSize: '0.92rem', color: n.urgent ? 'var(--color-terracotta)' : 'var(--color-forest)' }}>
                      {n.title}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-sage)' }}>{n.time}</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                  {n.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
