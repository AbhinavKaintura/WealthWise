import React from 'react';
import './tax.css';

const CalculatorIcon = () => (
  <svg viewBox="0 0 200 200" className="svg-icon">
    <rect x="40" y="30" width="120" height="140" fill="#2C5282" rx="10"/>
    <rect x="50" y="40" width="100" height="30" fill="#EDF2F7"/>
    <circle cx="70" cy="100" r="10" fill="#EDF2F7"/>
    <circle cx="100" cy="100" r="10" fill="#EDF2F7"/>
    <circle cx="130" cy="100" r="10" fill="#EDF2F7"/>
    <circle cx="70" cy="130" r="10" fill="#EDF2F7"/>
    <circle cx="100" cy="130" r="10" fill="#EDF2F7"/>
    <circle cx="130" cy="130" r="10" fill="#EDF2F7"/>
  </svg>
);

const DeductionIcon = () => (
  <svg viewBox="0 0 200 200" className="svg-icon">
    <path d="M50 150 L150 150" stroke="#2C5282" strokeWidth="4"/>
    <path d="M100 50 L100 150" stroke="#2C5282" strokeWidth="4"/>
    <circle cx="100" cy="100" r="40" fill="none" stroke="#2C5282" strokeWidth="4"/>
    <path d="M85 100 L115 100" stroke="#2C5282" strokeWidth="4"/>
  </svg>
);

const ChecklistIcon = () => (
  <svg viewBox="0 0 200 200" className="svg-icon">
    <rect x="40" y="30" width="120" height="140" fill="#2C5282" rx="5"/>
    <path d="M60 70 L140 70" stroke="white" strokeWidth="2"/>
    <path d="M60 100 L140 100" stroke="white" strokeWidth="2"/>
    <path d="M60 130 L140 130" stroke="white" strokeWidth="2"/>
    <path d="M70 65 L80 75 L90 55" fill="none" stroke="#4FD1C5" strokeWidth="2"/>
    <path d="M70 95 L80 105 L90 85" fill="none" stroke="#4FD1C5" strokeWidth="2"/>
    <path d="M70 125 L80 135 L90 115" fill="none" stroke="#4FD1C5" strokeWidth="2"/>
  </svg>
);

const TaxRatesIcon = () => (
  <svg viewBox="0 0 200 200" className="svg-icon">
    <rect x="20" y="150" width="30" height="30" fill="#2C5282"/>
    <rect x="60" y="120" width="30" height="60" fill="#2C5282"/>
    <rect x="100" y="90" width="30" height="90" fill="#2C5282"/>
    <rect x="140" y="60" width="30" height="120" fill="#2C5282"/>
    <path d="M20 40 L180 40" stroke="#4FD1C5" strokeWidth="2"/>
  </svg>
);

const TaxPlanningGuide = () => {
  return (
    <div className="tax-guide-container">
      {/* <header className="tax-hero">
        <div className="hero-content">
          <h1>Comprehensive Tax Planning Guide</h1>
          <p className="tax-subtitle">Optimize Your Tax Strategy • Maximize Deductions • Secure Your Financial Future</p>
          <div className="tax-badges">
            <span className="badge">2024 Updated</span>
            <span className="badge">Expert Reviewed</span>
          </div>
        </div>
        <CalculatorIcon />
      </header> */}

      <section className="tax-overview">
        <h2>Understanding Tax Basics</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Tax Brackets 2024</h3>
            <TaxRatesIcon />
            <div className="tax-brackets">
              <div className="bracket">
                <span className="rate">10%</span>
                <span className="range">Up to $11,600 (Single)</span>
              </div>
              <div className="bracket">
                <span className="rate">12%</span>
                <span className="range">$11,601 - $47,150</span>
              </div>
              <div className="bracket">
                <span className="rate">22%</span>
                <span className="range">$47,151 - $100,525</span>
              </div>
              <div className="bracket">
                <span className="rate">24%</span>
                <span className="range">$100,526 - $191,950</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Important Deadlines</h3>
            <ChecklistIcon />
            <ul className="deadline-list">
              <li><strong>April 15, 2024:</strong> Individual tax returns due</li>
              <li><strong>June 17, 2024:</strong> Estimated tax payment (Q2)</li>
              <li><strong>Sept 16, 2024:</strong> Estimated tax payment (Q3)</li>
              <li><strong>Jan 15, 2025:</strong> Estimated tax payment (Q4)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="deductions-section">
        <h2>Key Deductions and Credits</h2>
        <div className="deduction-grid">
          <div className="deduction-card">
            <h3>Standard Deduction</h3>
            <DeductionIcon />
            <div className="deduction-details">
              <p><strong>Single:</strong> $13,850</p>
              <p><strong>Married Filing Jointly:</strong> $27,700</p>
              <p><strong>Head of Household:</strong> $20,800</p>
            </div>
          </div>

          <div className="deduction-card">
            <h3>Popular Tax Credits</h3>
            <ul className="credits-list">
              <li>Child Tax Credit (up to $2,000 per child)</li>
              <li>Earned Income Tax Credit</li>
              <li>American Opportunity Credit</li>
              <li>Lifetime Learning Credit</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="strategies-section">
        <h2>Tax Planning Strategies</h2>
        <div className="strategy-grid">
          <div className="strategy-card">
            <h3>Retirement Accounts</h3>
            <ul className="strategy-list">
              <li>401(k) contribution limit: $22,500</li>
              <li>IRA contribution limit: $6,500</li>
              <li>Catch-up contributions for 50+</li>
              <li>Roth conversion considerations</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>Investment Strategies</h3>
            <ul className="strategy-list">
              <li>Tax-loss harvesting</li>
              <li>Long-term vs. short-term gains</li>
              <li>Municipal bonds for tax-free income</li>
              <li>Qualified dividend income</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>Business Deductions</h3>
            <ul className="strategy-list">
              <li>Home office deduction</li>
              <li>Business travel expenses</li>
              <li>Equipment depreciation</li>
              <li>Professional development costs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>Year-Round Tax Planning Tips</h2>
        <div className="tips-container">
          <div className="tip-card">
            <h4>Documentation</h4>
            <p>Maintain organized records of all tax-related documents, including receipts, statements, and forms.</p>
          </div>
          <div className="tip-card">
            <h4>Regular Review</h4>
            <p>Review your tax situation quarterly to identify opportunities and avoid year-end surprises.</p>
          </div>
          <div className="tip-card">
            <h4>Professional Consultation</h4>
            <p>Consider consulting with a tax professional for complex situations or major life changes.</p>
          </div>
          <div className="tip-card">
            <h4>Stay Informed</h4>
            <p>Keep up with tax law changes and new deductions or credits you may qualify for.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxPlanningGuide;