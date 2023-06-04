import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="footer sectionPadding">
    <div className="footerHeading">
      <h1 className="gradientText">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="footerButton">
      <p>Request Early Access</p>
    </div>

    <div className="footerLinks">
      <div className="footerLinksLogo">
        <img loading="lazy" src={gpt3Logo} alt="gpt3Logo" />
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className="footerLinksDiv">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footerLinksDiv">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footerLinksDiv">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footerCopyright">
      <p>@2023s GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
