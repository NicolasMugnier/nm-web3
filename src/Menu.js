import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import links from './data/links.json'

export const Menu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
    
  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link.to}>
            <ScrollLink
              to={link.to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              {link.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  )
};
  