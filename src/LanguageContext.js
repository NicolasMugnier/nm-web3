import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en-US");

  useEffect(() => {
    const browserLocale = navigator.language || "en-US";
    const baseLanguage = browserLocale.split("-")[0]
    const supportedLocales = {fr: ["fr-FR"], en: ["en-US"]};
    setLanguage(supportedLocales[baseLanguage][0] || "en-US");
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
