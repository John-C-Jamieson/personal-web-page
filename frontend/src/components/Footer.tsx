import React from "react";
import { profile } from "../data/profile";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p className="quote">{profile.footerQuote}</p>
      <p className="meta">
        © {new Date().getFullYear()} {profile.name} · {profile.location} ·{" "}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p className="built">Built with React + TypeScript</p>
    </div>
  </footer>
);

export default Footer;
