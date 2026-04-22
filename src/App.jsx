import React, { useState, useEffect } from 'react';
import './App.css';

// SVG Icons
const SearchIcon = () => (
  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);

const CartIcon = () => (
  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
);

const UserIcon = () => (
  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);

const MoonIcon = () => (
  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
);

const SunIcon = () => (
  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

// Placeholder wavy arrow SVG
const WavyArrow = () => (
  <svg className="wavy-arrow" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20 Q 25 5 45 20 T 85 20" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M80 15 L 87 20 L 80 25" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // We can toggle the class on the app-container directly using className
    // But setting it on body makes sure the whole page background gets updated nicely
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Creative Navbar */}
      <nav className="navbar">
        <div className="logo">BRAND.</div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">Collection</a>
          <a href="#" className="nav-link">Pages</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
        <div className="nav-icons">
          <button className="icon-wrapper" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Dark Mode">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#" className="icon-wrapper" aria-label="Search"><SearchIcon /></a>
          <a href="#" className="icon-wrapper" aria-label="Cart"><CartIcon /></a>
          <a href="#" className="icon-wrapper" aria-label="Account"><UserIcon /></a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        {/* Left Column: Text */}
        <div className="hero-content">
          <span className="subtitle">NEW ARRIVAL PRODUCTS</span>
          <h1 className="main-title">The Best Look<br />Anytime Anywhere</h1>
          <p className="description">
            Discover our latest collection designed for elegance and comfort.
            Elevate your style with pieces that speak confidence and let you
            stand out in every occasion.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">
              Get Started
            </button>
          </div>

          <div className="arrow-container">
            <WavyArrow />
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="hero-images">
          <div className="image-grid">
            {/* Man Image (Left, Higher) */}
            <div className="image-column col-left">
              <div className="image-wrapper">
                {/* Place image of the man here */}
                <img src="/pic1herosection.jpg" alt="Man in denim jacket" />
              </div>
            </div>

            {/* Vertical Stacked Text */}
            <div className="vertical-text">FASHION SALES</div>

            {/* Woman Image (Right, Lower) */}
            <div className="image-column col-right">
              <div className="image-wrapper">
                {/* Place image of the woman here */}
                <img src="/pic2herosection.jpg" alt="Woman in pink blazer" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
