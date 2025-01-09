import React from "react";
import "./styles.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3 className="footer-title">FINE ART</h3>
          </div>
          <div className="footer-column">
            <h3 className="footer-section-title">Section</h3>
            <ul className="footer-list">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-section-title">Section</h3>
            <ul className="footer-list">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-section-title">
              Subscribe to our newsletter
            </h3>
            <p>Monthly digest of what's new and exciting from us.</p>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Email address"
                className="footer-input"
              />
              <button type="submit" className="footer-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
