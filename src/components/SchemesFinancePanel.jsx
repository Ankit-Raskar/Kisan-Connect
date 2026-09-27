import React, { useState } from 'react';
import { Landmark, Calculator, Receipt, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export default function SchemesFinancePanel() {
  const [activeTab, setActiveTab] = useState('schemes'); // 'schemes' | 'insurance' | 'ledger'
  const [landAcres, setLandAcres] = useState(10);
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [searchSchemeQuery, setSearchSchemeQuery] = useState('');

  // Cost ledger state per acre
  const [seedCost, setSeedCost] = useState(1800);
  const [fertilizerCost, setFertilizerCost] = useState(3200);
  const [laborCost, setLaborCost] = useState(4500);
  const [irrigationCost, setIrrigationCost] = useState(1500);
  const [expectedYieldQuintals, setExpectedYieldQuintals] = useState(22); // per acre
  const [expectedPricePerQ, setExpectedPricePerQ] = useState(2250);

  const totalInputCostPerAcre = seedCost + fertilizerCost + laborCost + irrigationCost;
  const totalFarmInputCost = totalInputCostPerAcre * landAcres;
  const totalGrossRevenue = expectedYieldQuintals * expectedPricePerQ * landAcres;
  const estimatedNetProfit = totalGrossRevenue - totalFarmInputCost;

  // Insurance Premium Calculation
  const sumInsuredPerAcre = 35000; // ₹35,000 / acre for wheat
  const totalSumInsured = sumInsuredPerAcre * landAcres;
  const farmerPremiumSharePct = 1.5; // 1.5% for Rabi crops under PMFBY
  const farmerPremiumPayable = (totalSumInsured * farmerPremiumSharePct) / 100;

  const schemesList = [
    {
      id: 'pm-kisan',
      name: 'PM-KISAN Samman Nidhi',
      category: 'Direct Income Support',
      benefit: '₹6,000 / year in 3 equal installments',
      eligibility: 'All small & marginal landholding farmer families up to 2 hectares.',
      steps: 'Direct Bank Transfer. Verify Aadhaar link at local CSC center.'
    },
    {
      id: 'pmfby',
      name: 'PM Fasal Bima Yojana (Crop Insurance)',
      category: 'Yield & Weather Protection',
      benefit: 'Full financial cover against unseasonal rain, frost, pest outbreak',
      eligibility: 'Farmers growing notified crops (Wheat, Paddy, Mustard) in notified areas.',
      steps: 'Pay 1.5% premium before Dec 31. Upload land Khasra record.'
    },
    {
      id: 'drip-subsidy',
      name: 'PMKSY Micro-Irrigation Subsidy',
      category: 'Water Conservation',
      benefit: 'Up to 80% subsidy on Drip & Sprinkler Equipment installation',
      eligibility: 'Farmers with verified tubewell / canal water connection.',
      steps: 'Apply via State Horticulture Portal with land Naksha.'
    },
    {
      id: 'soil-card',
      name: 'Soil Health Card Scheme',
      category: 'Free Soil Diagnostics',
      benefit: 'Free testing of 12 soil parameters every 2 years',
      eligibility: 'All farmers across all districts.',
      steps: 'Request local extension worker to collect soil grid sample.'
    }
  ];

  const filteredSchemes = schemesList.filter(s => 
    s.name.toLowerCase().includes(searchSchemeQuery.toLowerCase()) || 
    s.category.toLowerCase().includes(searchSchemeQuery.toLowerCase())
  );

  return (
    <section className="container">
      
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-up delay-100" style={{ marginBottom: '32px' }}>
        <div>
          <span className="eyebrow">Financial Security & Ledger</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-forest)' }}>Farmer's Financial Ledger & Subsidies</h2>
          <div className="underline-accent" style={{ marginTop: '8px' }}></div>
        </div>
        
        {/* Tab Buttons */}
        <div className="mobile-scroll-row gap-2" style={{ background: 'var(--color-surface)', padding: '6px', borderRadius: '999px', border: '1px solid var(--color-border)' }}>
          <button 
            onClick={() => setActiveTab('schemes')}
            className={`nav-link ${activeTab === 'schemes' ? 'active' : ''}`}
            style={{ borderRadius: '20px' }}
          >
            <Landmark size={15} style={{ display: 'inline', marginRight: '6px' }} />
            Govt Subsidies
          </button>
          
          <button 
            onClick={() => setActiveTab('insurance')}
            className={`nav-link ${activeTab === 'insurance' ? 'active' : ''}`}
            style={{ borderRadius: '20px' }}
          >
            <ShieldCheck size={15} style={{ display: 'inline', marginRight: '6px' }} />
            Crop Insurance
          </button>

          <button 
            onClick={() => setActiveTab('ledger')}
            className={`nav-link ${activeTab === 'ledger' ? 'active' : ''}`}
            style={{ borderRadius: '20px' }}
          >
            <Receipt size={15} style={{ display: 'inline', marginRight: '6px' }} />
            Cost & Profit Ledger
          </button>
        </div>
      </div>

      {/* Main Container Styled as a Warm Farmer's Ledger Book */}
      <div 
        className="blob-card-soft animate-fade-up delay-200" 
        style={{ 
          background: 'var(--color-surface)', 
          padding: '40px', 
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-soft)'
        }}
      >
        
        {/* TAB 1: SUB-SIDIES FINDER */}
        {activeTab === 'schemes' && (
          <div>
            <div className="flex items-center justify-between" style={{ marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)' }}>Matched Government Schemes</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>Filtered for Karnal District • 12 Acres Landholding</p>
              </div>

              <input 
                type="text"
                placeholder="Search scheme name or benefit..."
                value={searchSchemeQuery}
                onChange={(e) => setSearchSchemeQuery(e.target.value)}
                className="form-input"
                style={{ maxWidth: '300px' }}
              />
            </div>

            <div className="flex" style={{ flexWrap: 'wrap', gap: '20px' }}>
              {filteredSchemes.map((sch, idx) => (
                <div 
                  key={sch.id} 
                  className="animate-fade-up"
                  style={{ 
                    animationDelay: `${300 + (idx * 100)}ms`,
                    flex: '1', 
                    minWidth: '280px', 
                    background: 'var(--color-bg)', 
                    borderRadius: '24px', 
                    padding: '24px',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span className="status-pill success" style={{ marginBottom: '12px' }}>{sch.category}</span>
                    <h4 style={{ fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '8px' }}>{sch.name}</h4>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-soil)', marginBottom: '12px' }}>
                      🎁 {sch.benefit}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                      <strong>Eligibility:</strong> {sch.eligibility}
                    </p>
                  </div>

                  <div style={{ background: 'var(--color-surface)', padding: '12px 16px', borderRadius: '16px', marginTop: '16px' }}>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-forest)', fontWeight: 600 }}>Action Step:</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-sage)' }}>{sch.steps}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CROP INSURANCE CALCULATOR */}
        {activeTab === 'insurance' && (
          <div>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', marginBottom: '8px' }}>PM Fasal Bima Yojana Estimator</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px', fontSize: '0.95rem' }}>
              Rabi crop premium is capped at 1.5% of sum insured. Government pays the remaining 8.5% premium subsidy.
            </p>

            <div className="flex animate-fade-up delay-300" style={{ flexWrap: 'wrap', gap: '32px' }}>
              
              {/* Inputs */}
              <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-forest)' }}>Land Area (Acres):</label>
                  <input 
                    type="number" 
                    value={landAcres} 
                    onChange={(e) => setLandAcres(Number(e.target.value))}
                    className="form-input" 
                    style={{ marginTop: '6px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-forest)' }}>Insured Crop:</label>
                  <select 
                    value={selectedCrop} 
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="form-input"
                    style={{ marginTop: '6px' }}
                  >
                    <option value="wheat">Wheat (Rabi Season - 1.5% Rate)</option>
                    <option value="mustard">Mustard (Rabi Season - 1.5% Rate)</option>
                    <option value="paddy">Paddy / Rice (Kharif Season - 2.0% Rate)</option>
                  </select>
                </div>
              </div>

              {/* Output Ledger Receipt */}
              <div style={{ flex: 1.2, minWidth: '300px', background: 'var(--color-bg)', padding: '28px', borderRadius: '24px', border: '1px dashed var(--color-forest)' }}>
                <p className="eyebrow" style={{ color: 'var(--color-forest)', marginBottom: '16px' }}>Official Estimate Breakdown</p>
                
                <div className="flex justify-between" style={{ padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                  <span>Total Sum Insured Coverage:</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-forest)' }}>₹{totalSumInsured.toLocaleString()}</span>
                </div>

                <div className="flex justify-between" style={{ padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                  <span>Farmer Premium Share (1.5%):</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-terracotta)' }}>₹{farmerPremiumPayable.toLocaleString()}</span>
                </div>

                <div className="flex justify-between" style={{ padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                  <span>Govt Premium Subsidy (Paid for you):</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-sage)' }}>₹{((totalSumInsured * 8.5) / 100).toLocaleString()}</span>
                </div>

                <div style={{ marginTop: '20px', background: 'var(--color-gold)', color: '#2F4030', padding: '16px', borderRadius: '16px', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>Your Total Payable Insurance Fee:</p>
                  <p className="text-large-num" style={{ fontSize: '2.5rem', fontWeight: 700 }}>₹{farmerPremiumPayable.toLocaleString()}</p>
                  <p style={{ fontSize: '0.78rem', marginTop: '4px' }}>Guarantees payout up to ₹{totalSumInsured.toLocaleString()} for yield loss</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: INPUT COST & NET PROFIT LEDGER */}
        {activeTab === 'ledger' && (
          <div>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', marginBottom: '8px' }}>Input Cost & Net Profit Tracker</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '0.92rem' }}>
              Track farm expenses (Seed, Urea, Labor, Irrigation) against anticipated crop harvest value.
            </p>

            <div className="flex animate-fade-up delay-300" style={{ flexWrap: 'wrap', gap: '32px' }}>
              
              {/* Cost Inputs */}
              <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <p className="eyebrow" style={{ color: 'var(--color-soil)' }}>Per Acre Expense Breakdown (₹)</p>
                
                <div className="flex items-center gap-3">
                  <span style={{ flex: 1, fontSize: '0.9rem' }}>Seed & Soil Treatment:</span>
                  <input type="number" value={seedCost} onChange={(e) => setSeedCost(Number(e.target.value))} className="form-input" style={{ width: '120px' }} />
                </div>

                <div className="flex items-center gap-3">
                  <span style={{ flex: 1, fontSize: '0.9rem' }}>Fertilizers & Pesticides:</span>
                  <input type="number" value={fertilizerCost} onChange={(e) => setFertilizerCost(Number(e.target.value))} className="form-input" style={{ width: '120px' }} />
                </div>

                <div className="flex items-center gap-3">
                  <span style={{ flex: 1, fontSize: '0.9rem' }}>Labor & Harvesting:</span>
                  <input type="number" value={laborCost} onChange={(e) => setLaborCost(Number(e.target.value))} className="form-input" style={{ width: '120px' }} />
                </div>

                <div className="flex items-center gap-3">
                  <span style={{ flex: 1, fontSize: '0.9rem' }}>Diesel & Tube Irrigation:</span>
                  <input type="number" value={irrigationCost} onChange={(e) => setIrrigationCost(Number(e.target.value))} className="form-input" style={{ width: '120px' }} />
                </div>
              </div>

              {/* Profit Receipt */}
              <div style={{ flex: 1.2, minWidth: '300px', background: 'var(--color-forest)', color: '#F4EFE4', padding: '28px', borderRadius: '24px' }}>
                <p className="eyebrow" style={{ color: 'var(--color-gold)', marginBottom: '16px' }}>Seasonal Financial Summary ({landAcres} Acres)</p>
                
                <div className="flex justify-between" style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span>Cost / Acre:</span>
                  <span>₹{totalInputCostPerAcre.toLocaleString()}</span>
                </div>

                <div className="flex justify-between" style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span>Total Input Expenses:</span>
                  <span style={{ color: 'var(--color-terracotta)' }}>- ₹{totalFarmInputCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between" style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span>Expected Gross Mandi Value:</span>
                  <span style={{ color: '#A3B18A' }}>+ ₹{totalGrossRevenue.toLocaleString()}</span>
                </div>

                <div style={{ marginTop: '20px', background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-gold)' }}>ESTIMATED NET PROFIT</p>
                  <p className="text-large-num" style={{ color: 'var(--color-gold)', fontSize: '3rem', fontWeight: 700 }}>
                    ₹{estimatedNetProfit.toLocaleString()}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                    ≈ ₹{Math.round(estimatedNetProfit / landAcres).toLocaleString()} Net Profit per acre
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

    </section>
  );
}
