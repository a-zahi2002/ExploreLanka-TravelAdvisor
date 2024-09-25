// src/components/Footer.js
import React from 'react';
import './Footer.css'; // For styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ExploreLanka</p>
        <br></br>
                <center>
               <p> About | Contact Us</p>
               <p>Group 11 - web project | dilminaliyanage@gmail.com</p> 
               <p><a href="https://www.sab.ac.lk/">  Sabaragamuwa University of Sri Lanaka</a>    |   Tel :- +94452280049 765293838 0123456789 </p>
               <p>- All rights reserved by ExploreLanka (pvt) Ltd -</p>
               </center>

        
      </div>
    </footer>
  );
};

export default Footer;
 