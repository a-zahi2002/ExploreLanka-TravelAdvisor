// src/components/Footer.tsx
import React from "react";
import "./Footer.css"; // For styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ExploreLanka</p>
        <div className="footer-links">
          <p>
            <a href="/about">About</a> | <a href="/contact">Contact Us</a>
          </p>
          <p>Group 11 - web project | dilminaliyanage@gmail.com</p>
          <p>
            <a
              href="https://www.sab.ac.lk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sabaragamuwa University of Sri Lanka
            </a>{" "}
            | Tel: +94452280049, 765293838, 0123456789
          </p>
          <p>- All rights reserved by ExploreLanka (pvt) Ltd -</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
