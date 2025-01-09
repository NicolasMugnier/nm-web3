import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export const Footer = () => {

    const { language } = useContext(LanguageContext);
    const [footer, setFooter] = useState([]);
    
    useEffect(() => {
      const loadFooter = async () => {
        try {
          const data = await import(`./data/${language}/footer.json`);
          setFooter(data.default);
        } catch (err) {
          console.error("Can't load data for selected language :", err);
        }
      };
    
      loadFooter();
    }, [language]);

    return (
        <footer className="footer">
        <div className="info" dangerouslySetInnerHTML={{ __html: footer.content }}>
        </div>
        <p>&copy; 2025 - Nicolas Mugnier</p>
      </footer>
    );
};
