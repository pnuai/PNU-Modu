import React from 'react';
import './blocks.css';

export default function HeroSection({ badge, title, description, buttonText, buttonLink }) {
  return (
    <section className="bb-section bb-hero">
      {/* Dynamic Background Blur Decoration Shapes */}
      <div className="bb-hero-deco">
        <span></span>
        <span></span>
      </div>

      <div className="bb-hero-content">
        {badge && (
          <div className="bb-hero-badge">
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--theme-accent)' }}></span>
            {badge}
          </div>
        )}
        {title && <h1 className="bb-hero-title">{title}</h1>}
        {description && <p className="bb-hero-desc">{description}</p>}
        
        {buttonText && buttonLink && (
          <a href={buttonLink} className="bb-cta-btn" style={{ background: '#ffffff', color: '#0f172a' }}>
            {buttonText}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '4px' }}>
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
