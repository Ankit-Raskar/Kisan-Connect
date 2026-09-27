import React, { useState } from 'react';
import { MessageSquare, ShieldCheck, ThumbsUp, Share2, PlusCircle, Tractor, Users, Wrench, Camera, Check } from 'lucide-react';

export default function CommunityFeed() {
  const [activeTab, setActiveTab] = useState('qa'); // 'qa' | 'marketplace'
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [newQuestionText, setNewQuestionText] = useState('');

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Gurbir Singh',
      village: 'Karnal, Sector 4',
      time: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      question: 'Yellowing leaves on PBW 725 wheat field after recent dew. Is this early Yellow Rust or Nitrogen deficiency?',
      photo: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800&auto=format&fit=crop',
      upvotes: 14,
      officerReply: {
        name: 'Dr. Ramesh Sharma',
        role: 'Senior Agricultural Officer, KVK Karnal',
        badge: 'Verified Officer',
        text: 'This is early Yellow Rust (Puccinia striiformis). The linear yellow stripes are visible on leaf surface. Spray Propiconazole 25% EC @ 200 ml in 200 liters of water per acre immediately. Do not delay irrigation.'
      }
    },
    {
      id: 2,
      author: 'Rajesh Kumar',
      village: 'Gharaunda',
      time: '5 hours ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      question: 'What is the current mandi rate for Mustard in Karnal Mandi? Is it crossing ₹5,400 today?',
      photo: null,
      upvotes: 8,
      officerReply: {
        name: 'Mandi Reporter Officer',
        role: 'APMC Karnal',
        badge: 'Verified Official',
        text: 'Yes! Dry mustard with <8% moisture reached ₹5,420/q today at 11 AM.'
      }
    }
  ]);

  const rentals = [
    {
      id: 'r1',
      title: 'Mahindra 575 DI Tractor + Rotavator',
      owner: 'Harpreet Singh',
      phone: '+91 98765 43210',
      rate: '₹600 / hour',
      location: 'Karnal (3 km away)',
      avail: 'Available Today'
    },
    {
      id: 'r2',
      title: 'DJI Agriculture Spraying Drone (10L)',
      owner: 'AgriTech Krishi Kendra',
      phone: '+91 98123 99887',
      rate: '₹350 / acre',
      location: 'Gharaunda (7 km away)',
      avail: 'Book 1 Day Ahead'
    },
    {
      id: 'r3',
      title: 'Seasonal Wheat Harvest Labor Crew (8 Workers)',
      owner: 'Sardar Baldev',
      phone: '+91 94160 11223',
      rate: '₹1,200 / acre',
      location: 'Taraori Area',
      avail: 'Ready for Booking'
    }
  ];

  const handlePostQuestion = (e) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'You (Farm Profile)',
      village: 'Karnal Field',
      time: 'Just now',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      question: newQuestionText,
      photo: 'https://images.unsplash.com/photo-1595841696677-647fa41d7d07?q=80&w=800&auto=format&fit=crop',
      upvotes: 1,
      officerReply: null
    };

    setPosts([newPost, ...posts]);
    setNewQuestionText('');
    setShowQuestionModal(false);
  };

  return (
    <section className="container">
      
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-up delay-100" style={{ marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="eyebrow">Farmer Community & Peer Rental</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-forest)' }}>Kisan Connect Community</h2>
          <div className="underline-accent" style={{ marginTop: '8px' }}></div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-2" style={{ background: 'var(--color-surface)', padding: '6px', borderRadius: '999px', border: '1px solid var(--color-border)' }}>
            <button 
              onClick={() => setActiveTab('qa')} 
              className={`nav-link ${activeTab === 'qa' ? 'active' : ''}`}
            >
              <MessageSquare size={15} style={{ display: 'inline', marginRight: '6px' }} />
              Expert Q&A Feed
            </button>
            <button 
              onClick={() => setActiveTab('marketplace')} 
              className={`nav-link ${activeTab === 'marketplace' ? 'active' : ''}`}
            >
              <Tractor size={15} style={{ display: 'inline', marginRight: '6px' }} />
              Equipment & Labor Board
            </button>
          </div>

          <button onClick={() => setShowQuestionModal(true)} className="btn-gold">
            <PlusCircle size={17} />
            <span>Ask Question</span>
          </button>
        </div>
      </div>

      {/* TAB 1: EXPERT Q&A FEED */}
      {activeTab === 'qa' && (
        <div className="flex-col gap-6">
          {posts.map((post, idx) => (
            <div 
              key={post.id} 
              className="blob-card-soft animate-fade-up" 
              style={{ 
                animationDelay: `${200 + (idx * 150)}ms`,
                background: 'var(--color-surface)', 
                padding: '32px', 
                border: '1px solid var(--color-border)' 
              }}
            >
              {/* Author header */}
              <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
                <div className="flex items-center gap-3">
                  <img src={post.avatar} alt={post.author} style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-forest)' }}>{post.author}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-sage)' }}>{post.village} • {post.time}</p>
                  </div>
                </div>
              </div>

              {/* Question Text */}
              <p style={{ fontSize: '1.15rem', color: 'var(--color-forest)', marginBottom: '16px', lineHeight: 1.5 }}>
                {post.question}
              </p>

              {/* Optional Field Photo */}
              {post.photo && (
                <div style={{ borderRadius: '20px', overflow: 'hidden', height: '240px', marginBottom: '20px' }}>
                  <img src={post.photo} alt="Field problem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}

              {/* Verified Extension Officer Reply Box */}
              {post.officerReply ? (
                <div 
                  style={{ 
                    background: 'var(--color-bg)', 
                    borderRadius: '20px', 
                    padding: '24px', 
                    borderLeft: '4px solid var(--color-forest)',
                    marginTop: '16px' 
                  }}
                >
                  <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
                    <ShieldCheck size={18} color="var(--color-forest)" />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-forest)' }}>
                      {post.officerReply.name}
                    </span>
                    <span className="status-pill success" style={{ fontSize: '0.7rem' }}>
                      {post.officerReply.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-sage)', marginBottom: '10px' }}>
                    {post.officerReply.role}
                  </p>
                  <p style={{ fontSize: '0.98rem', color: 'var(--color-forest)', lineHeight: 1.5 }}>
                    "{post.officerReply.text}"
                  </p>
                </div>
              ) : (
                <div style={{ background: 'rgba(201, 162, 75, 0.1)', padding: '12px 16px', borderRadius: '14px', marginTop: '12px' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-soil)' }}>
                    ⏳ Pending response from KVK Agricultural Extension Officer...
                  </p>
                </div>
              )}

              {/* Upvote Footer */}
              <div className="flex items-center gap-6" style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                <button className="flex items-center gap-2" style={{ background: 'none', border: 'none', color: 'var(--color-sage)', fontWeight: 600, cursor: 'pointer' }}>
                  <ThumbsUp size={16} />
                  <span>{post.upvotes} Helpful Votes</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: EQUIPMENT & LABOR SHARING BOARD */}
      {activeTab === 'marketplace' && (
        <div className="flex" style={{ flexWrap: 'wrap', gap: '20px' }}>
          {rentals.map((r, idx) => (
            <div 
              key={r.id}
              className="blob-card-soft animate-fade-up" 
              style={{ 
                animationDelay: `${200 + (idx * 150)}ms`,
                flex: '1', 
                minWidth: '240px', 
                background: 'var(--color-surface)', 
                padding: '28px', 
                border: '1px solid var(--color-border)' 
              }}
            >
              <span className="status-pill info" style={{ marginBottom: '12px' }}>{r.avail}</span>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-forest)', marginBottom: '6px' }}>{r.title}</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-sage)', marginBottom: '16px' }}>📍 {r.location} • Owner: {r.owner}</p>

              <div style={{ background: 'var(--color-bg)', padding: '16px', borderRadius: '16px', marginBottom: '20px' }}>
                <p className="eyebrow" style={{ color: 'var(--color-soil)' }}>Rental Rate</p>
                <p className="text-large-num" style={{ fontSize: '2.2rem', color: 'var(--color-forest)', fontWeight: 700 }}>{r.rate}</p>
              </div>

              <a href={`tel:${r.phone}`} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Call Owner: {r.phone}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* QUESTION SUBMISSION MODAL */}
      {showQuestionModal && (
        <div className="modal-overlay" onClick={() => setShowQuestionModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Ask an Agricultural Officer</h3>
            <p style={{ color: 'var(--color-sage)', marginBottom: '20px', fontSize: '0.9rem' }}>
              Your question will be sent to the KVK Extension team in Karnal District.
            </p>

            <form onSubmit={handlePostQuestion} className="flex-col gap-4">
              <div>
                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Describe your crop issue or market query:</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="e.g. Yellow leaves on wheat after rain. What spray to use?"
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  className="form-input"
                  style={{ marginTop: '8px' }}
                />
              </div>

              <div style={{ background: 'var(--color-bg)', padding: '16px', borderRadius: '16px', border: '1px dashed var(--color-sage)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-forest)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Camera size={16} /> Attach Field Photo (Recommended)
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-sage)', marginTop: '4px' }}>
                  Clear photo attached: wheat_leaf_disease.jpg
                </p>
              </div>

              <div className="flex justify-between" style={{ marginTop: '12px' }}>
                <button type="button" onClick={() => setShowQuestionModal(false)} className="btn-outline">Cancel</button>
                <button type="submit" className="btn-gold">Post to Officers</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
