import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export const Sections = () => {

  const { language } = useContext(LanguageContext);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const loadSections = async () => {
      try {
        const data = await import(`./data/${language}/sections.json`);
        setSections(data.default);
      } catch (err) {
        console.error("Can't load data for selected language :", err);
      }
    };

    loadSections();
  }, [language]);

  return (
      sections.map((section, index) => {
          const isOdd = index % 2 === 0;
          return <section key={section.id} id={section.id} data-testid={section.id} className={`section ${section.id}${isOdd ? " odd": ""}`}>
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }}></div>
          </section>
      })
  );
};
