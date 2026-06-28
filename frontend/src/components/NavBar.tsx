import React from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

const NavBar: React.FC = () => (
  <header className="nav">
    <div className="nav-inner">
      <a className="brand" href="#top">
        John Jamieson
      </a>
      <nav className="nav-links" aria-label="Section navigation">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default NavBar;
