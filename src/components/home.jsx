import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"

const HomePage = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

      <header>
        <div class="logo">WealthWise</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#mission">Our Mission</a>
          <a href="#features">Features</a>
          <a href="#community">Community</a>
          <Link to="/disclaimer" className="get-started">Get Started</Link>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Master Your Money,<br/> Shape Your Future</h1>
          <p>Your journey to financial freedom starts here. Learn essential money management skills, investment strategies, and economic principles through interactive lessons.</p>
          <br/>
          <Link to="/disclaimer" className="cta-button">Start Learning</Link>
        </div>
        <div className='hero-image'>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="200" r="170" fill="#2C3E50"/>
  
  <circle cx="200" cy="200" r="150" fill="#b3b6ba"/>
  
  <rect x="150" y="220" width="100" height="20" fill="#E74C3C"/>
  <rect x="160" y="200" width="80" height="20" fill="#3498DB"/>
  <rect x="170" y="180" width="60" height="20" fill="#27AE60"/>
  
  <text x="187" y="172" font-family="Arial" font-size="40" font-weight="bold" fill="#F1C40F">$</text>
  
  <path d="M170 160 L200 130 L230 160" fill="none" stroke="#27AE60" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  
  <text x="200" y="280" font-family="Arial" font-size="24" font-weight="bold" fill="#2C3E50" text-anchor="middle">FINANCIAL</text>
  <text x="200" y="310" font-family="Arial" font-size="24" font-weight="bold" fill="#2C3E50" text-anchor="middle">LITERACY</text>
  
  <path id="circle" d="M200,95 A105,105 0 0,1 200,305" fill="none"/>
  <text font-size="14" fill="#34495E">
    <textPath href="#circle" startOffset="50%" text-anchor="middle">
      LEARN  • INVEST • GROW
    </textPath>
  </text>
</svg>          </svg>
        </div>
      </section>

      <section id="mission" className="mission">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <p>WealthWise is an innovative financial education platform dedicated to democratizing financial literacy and economic education in our community. We believe that understanding money management and economics shouldn't be a privilege, but a fundamental right accessible to everyone.</p>
          <p>Through our comprehensive digital platform, we're bridging the knowledge gap by providing interactive learning experiences, practical tools, and community support to help individuals make informed financial decisions.</p>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Comprehensive Financial Education</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-book-reader"></i>
            <h3>Investment Basics Guide</h3>
            <p>Master fundamental investment concepts, understand different asset classes, and learn risk management strategies for building a balanced portfolio.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-calculator"></i>
            <h3>Tax Planning Guide</h3>
            <p>Navigate tax regulations, understand deductions, and learn effective tax-saving strategies for personal and business finances.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-chart-line"></i>
            <h3>Market Analysis Tools</h3>
            <p>Access real-time market data, interactive charts, and comprehensive analysis tools to make informed investment decisions.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-piggy-bank"></i>
            <h3>Savings Strategies</h3>
            <p>Learn practical saving techniques, emergency fund planning, and long-term wealth building strategies.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-user-graduate"></i>
            <h3>Personal Mentorship</h3>
            <p>Connect with experienced financial advisors for personalized guidance and portfolio reviews.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-users"></i>
            <h3>Community Learning</h3>
            <p>Join study groups, participate in discussions, and share experiences with fellow learners in our supportive community.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Take Control of Your Financial Future?</h2>
        <p>Join our community of financial learners and start your journey today.</p>
        <Link to="/sign-up" className="cta-button">Join Now</Link>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>WealthWise</h3>
            <p>Empowering financial literacy through education.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#mission">Our Mission</a>
            <a href="#features">Features</a>
            <a href="#community">Community</a>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="#"><i className="fab fa-youtube"></i> YouTube</a>
          </div>
        </div>
        <p className="copyright">&copy; 2024 WealthWise - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;