import React, { useState } from 'react';
import { PhoneCall, MessageSquare, Check, X } from 'lucide-react';

export default function SmsWhatsappModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState('');
  const [channel, setChannel] = useState('whatsapp'); // 'whatsapp' | 'sms'
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
          <div className="flex items-center gap-2">
            <PhoneCall size={22} color="var(--color-gold)" />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-forest)' }}>Instant Weather & Pest SMS Alerts</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={22} color="var(--color-forest)" />
          </button>
        </div>

        <p style={{ color: 'var(--color-sage)', fontSize: '0.9rem', marginBottom: '24px' }}>
          For farmers who don't open the site daily. Receive zero-cost SMS or WhatsApp alerts for frost, heavy rain, or yellow rust outbreaks.
        </p>

        {subscribed ? (
          <div style={{ background: 'rgba(124, 139, 94, 0.15)', padding: '24px', borderRadius: '20px', textAlign: 'center' }}>
            <Check size={36} color="var(--color-forest)" style={{ margin: '0 auto 12px' }} />
            <h4 style={{ fontSize: '1.3rem', color: 'var(--color-forest)' }}>Subscribed Successfully!</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-sage)', marginTop: '4px' }}>
              Alerts will be sent to +91 {phone} via {channel.toUpperCase()}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-col gap-4">
            <div>
              <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Mobile Number:</label>
              <input 
                type="tel" 
                required 
                placeholder="e.g. 9876543210" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="form-input" 
                style={{ marginTop: '6px' }} 
              />
            </div>

            <div>
              <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Preferred Delivery Channel:</label>
              <div className="flex gap-4" style={{ marginTop: '8px' }}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="channel" value="whatsapp" checked={channel === 'whatsapp'} onChange={() => setChannel('whatsapp')} />
                  <span>💬 WhatsApp</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="channel" value="sms" checked={channel === 'sms'} onChange={() => setChannel('sms')} />
                  <span>📱 Direct SMS</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3" style={{ marginTop: '16px' }}>
              <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
              <button type="submit" className="btn-gold">Subscribe Free</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
