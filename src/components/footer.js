import logo from './images/insights.gif';
import React from "react";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <img src={logo} height="80px" align="center" alt="Logo"/>
    © Cloud Insights 2024      
    <header align="center">
    v1.3.2
    </header>
  </footer>
);

export default Footer;
