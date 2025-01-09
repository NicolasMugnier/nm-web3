import React, { useContext, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { LanguageContext } from "./LanguageContext";

export const Menu = () => {

  const [links, setLinks] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        const data = await import(`./data/${language}/links.json`);
        setLinks(data.default);
      } catch (err) {
        console.error("Can't load data for selected language :", err);
      }
    };

    loadLinks();
  }, [language]);

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
  