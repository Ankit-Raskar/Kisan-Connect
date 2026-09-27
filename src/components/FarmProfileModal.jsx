import React, { useState } from 'react';
import { User, MapPin, Sprout, Droplets, X, Check } from 'lucide-react';

export default function FarmProfileModal({ isOpen, onClose }) {
  const [district, setDistrict] = useState('Karnal, Haryana');
  const [acres, setAcres] = useState(12);
  const [primaryCrop, setPrimaryCrop] = useState('Wheat (Rabi)');
  const [soilType, setSoilType] = useState('Loam (Clay-Sand blend)');
  const [irrigation, setIrrigation] = useState('Tubewell + Canal');
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
          <div className="flex items-center gap-2">
            <User size={22} color="var(--color-forest)" />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-forest)' }}>My Farm Profile Setup</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={22} color="var(--color-forest)" />
          </button>
        </div>

        <p style={{ color: 'var(--color-sage)', fontSize: '0.9rem', marginBottom: '24px' }}>
          One-time setup personalizes weather alerts, crop stage advice, and market rates.
        </p>

        <form onSubmit={handleSave} className="flex-col gap-4">
          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Location / Mandi District:</label>
            <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} className="form-input" style={{ marginTop: '6px' }} />
          </div>

          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Land Size (Acres):</label>
            <input type="number" value={acres} onChange={(e) => setAcres(Number(e.target.value))} className="form-input" style={{ marginTop: '6px' }} />
          </div>

          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Primary Seasonal Crop:</label>
            <select value={primaryCrop} onChange={(e) => setPrimaryCrop(e.target.value)} className="form-input" style={{ marginTop: '6px' }}>
              <option value="Wheat (Rabi)">Wheat (Rabi Season)</option>
              <option value="Mustard (Rabi)">Mustard (Rabi Season)</option>
              <option value="Basmati Paddy (Kharif)">Basmati Paddy (Kharif)</option>
              <option value="Cotton">Cotton</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Soil Type:</label>
            <select value={soilType} onChange={(e) => setSoilType(e.target.value)} className="form-input" style={{ marginTop: '6px' }}>
              <option value="Loam (Clay-Sand blend)">Loam (Alluvial / Clay-Sand blend)</option>
              <option value="Sandy Loam">Sandy Loam</option>
              <option value="Clay Heavy">Clay Heavy</option>
              <option value="Black Soil">Black Cotton Soil</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Irrigation System:</label>
            <select value={irrigation} onChange={(e) => setIrrigation(e.target.value)} className="form-input" style={{ marginTop: '6px' }}>
              <option value="Tubewell + Canal">Tubewell + Canal</option>
              <option value="Drip Irrigation">Drip Irrigation</option>
              <option value="Sprinkler System">Sprinkler System</option>
              <option value="Rainfed">Rainfed</option>
            </select>
          </div>

          <div className="flex justify-between items-center" style={{ marginTop: '16px' }}>
            {saved ? (
              <span style={{ color: 'var(--color-sage)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={18} /> Profile Saved!
              </span>
            ) : <span></span>}

            <button type="submit" className="btn-gold">Save Farm Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}
