import React, { useState } from 'react';
import TodaysAdvisory from '../components/TodaysAdvisory';
import DataCollage from '../components/DataCollage';
import SeasonalTimeline from '../components/SeasonalTimeline';
import SchemesFinancePanel from '../components/SchemesFinancePanel';
import CommunityFeed from '../components/CommunityFeed';
import SustainabilityScore from '../components/SustainabilityScore';

export default function Dashboard({ onSpeak, onOpenSoilDetails }) {
  return (
    <div className="flex-col" style={{ gap: '100px' }}>
      
      {/* 1. Today's Advisory (Core Moment) */}
      <TodaysAdvisory onSpeak={onSpeak} />

      {/* 2. Live Data Collage (Weather, Market, Clay Vessel Soil, Satellite View) */}
      <DataCollage onOpenSoilDetails={onOpenSoilDetails} />

      {/* 3. Full-Year Seasonal Planning Timeline */}
      <SeasonalTimeline />

      {/* 4. Schemes, Insurance & Financial Ledger */}
      <SchemesFinancePanel />

      {/* 5. Kisan Connect Community Feed & Equipment Marketplace */}
      <CommunityFeed />

      {/* 6. Sustainability Score & Eco Tips */}
      <SustainabilityScore />

    </div>
  );
}
