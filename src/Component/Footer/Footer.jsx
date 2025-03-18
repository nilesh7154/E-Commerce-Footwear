import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCcVisa, faCcMastercard, faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading online retailer of shoes, offering a wide range of styles and brands.
          </p>
          <ul className="social-links">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/f&q">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Phone: +91 22 1234 5678
            <br />
            Email: <a href="mailto:info@example.com">
              <FontAwesomeIcon icon={faEnvelope} />
              info@example.com
            </a>
            <br />
            Address: 123, MG Road, Mumbai, Maharashtra 400001
          </p>
        </div>

        <div className="footer-section">
          <h3>Payment Methods</h3>
          <ul className="payment-methods">
            <li>
              <FontAwesomeIcon icon={faCcVisa} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCcMastercard} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCcPaypal} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGooglePay} />
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Shoes E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
