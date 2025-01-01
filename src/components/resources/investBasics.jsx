import React from 'react';
import './InvestmentBasics.css';

const GrowthChart = () => (
  <svg viewBox="0 0 400 200" className="svg-icon">
    <path d="M50 150 Q100 100 150 120 T250 80 T350 40" fill="none" stroke="#1a2a6c" strokeWidth="3"/>
    <circle cx="50" cy="150" r="4" fill="#1a2a6c"/>
    <circle cx="150" cy="120" r="4" fill="#1a2a6c"/>
    <circle cx="250" cy="80" r="4" fill="#1a2a6c"/>
    <circle cx="350" cy="40" r="4" fill="#1a2a6c"/>
    <line x1="50" y1="180" x2="350" y2="180" stroke="#ccc" strokeWidth="2"/>
    <line x1="50" y1="180" x2="50" y2="20" stroke="#ccc" strokeWidth="2"/>
  </svg>
);

const StockIcon = () => (
  <svg viewBox="0 0 200 200" className="svg-icon">
    <rect x="40" y="40" width="30" height="120" fill="#1a2a6c"/>
    <rect x="85" y="80" width="30" height="80" fill="#2a3a7c"/>
    <rect x="130" y="60" width="30" height="100" fill="#3a4a8c"/>
    <path d="M40 100 L85 70 L130 90 L175 40" fill="none" stroke="#fdbb2d" strokeWidth="3"/>
  </svg>
);

const BondIcon = () => (
  <svg viewBox="0 0 200 200" className="svg-icon">
    <rect x="50" y="50" width="100" height="100" fill="#1a2a6c" rx="10"/>
    <text x="100" y="100" textAnchor="middle" fill="white" fontSize="40">$</text>
    <path d="M60 130 L140 130" stroke="white" strokeWidth="2"/>
    <path d="M60 140 L140 140" stroke="white" strokeWidth="2"/>
  </svg>
);

const FundIcon = () => (
  <svg viewBox="0 0 200 200" className="svg-icon">
    <circle cx="100" cy="100" r="60" fill="#1a2a6c"/>
    <path d="M70 100 L130 100 M100 70 L100 130" stroke="white" strokeWidth="4"/>
    <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="2"/>
  </svg>
);

const RealEstateIcon = () => (
  <svg viewBox="0 0 200 200" className="svg-icon">
    <path d="M20 100 L100 30 L180 100" fill="none" stroke="#1a2a6c" strokeWidth="3"/>
    <rect x="40" y="100" width="120" height="80" fill="#1a2a6c"/>
    <rect x="70" y="120" width="30" height="30" fill="white"/>
    <rect x="120" y="140" width="20" height="40" fill="white"/>
  </svg>
);

const RiskIcon = () => (
  <svg viewBox="0 0 400 200" className="svg-icon">
    <path d="M50 150 C100 150 100 50 200 50 S300 150 350 150" fill="none" stroke="#1a2a6c" strokeWidth="3"/>
    <path d="M50 150 C100 150 100 100 200 100 S300 150 350 150" fill="none" stroke="#2a3a7c" strokeWidth="3"/>
    <path d="M50 150 C100 150 100 130 200 130 S300 150 350 150" fill="none" stroke="#3a4a8c" strokeWidth="3"/>
  </svg>
);

const InvestmentBasics = () => {
  return (
    <div className="investment-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Master the Art of Investing</h1>
          <p className="subtitle">Build Wealth • Secure Your Future • Achieve Financial Freedom</p>
          <div className="hero-cta">
            <button className="primary-button">Start Learning</button>
            <button className="secondary-button">Explore Topics</button>
          </div>
        </div>
        <div className="hero-graphic">
          <GrowthChart />
        </div>
      </header>

      <section className="intro-section">
        <h2>Why Invest?</h2>
        <div className="card">
          <GrowthChart />
          <p>Smart investing is your pathway to financial independence. Learn how to make your money work harder and grow your wealth over time through strategic investment decisions.</p>
        </div>
      </section>

      <section className="investment-types">
        <h2>Types of Investments</h2>
        <div className="grid-container">
          <div className="investment-card">
            <h3>Stocks</h3>
            <StockIcon />
            <p>Build wealth through company ownership. Stocks offer growth potential and dividend income for long-term investors.</p>
          </div>

          <div className="investment-card">
            <h3>Bonds</h3>
            <BondIcon />
            <p>Steady, reliable income through fixed-interest securities. Perfect for conservative investors seeking stability.</p>
          </div>

          <div className="investment-card">
            <h3>Mutual Funds</h3>
            <FundIcon />
            <p>Professional management and instant diversification. Ideal for beginners and hands-off investors.</p>
          </div>

          <div className="investment-card">
            <h3>Real Estate</h3>
            <RealEstateIcon />
            <p>Tangible assets providing rental income and appreciation potential. A cornerstone of wealth building.</p>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same structurally, just updating icons */}
      <section className="risk-management">
        <h2>Understanding Risk</h2>
        <div className="risk-container">
          <RiskIcon />
          <div className="risk-content">
            <p>Every investment carries its own risk profile. Understanding and managing risk is crucial for long-term success.</p>
            <div className="risk-levels">
              <div className="risk-level">
                <h4>Conservative</h4>
                <p>Bonds, CDs, Money Market Funds</p>
              </div>
              <div className="risk-level">
                <h4>Moderate</h4>
                <p>Balanced Funds, Blue-chip Stocks</p>
              </div>
              <div className="risk-level">
                <h4>Aggressive</h4>
                <p>Growth Stocks, Cryptocurrencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentBasics;