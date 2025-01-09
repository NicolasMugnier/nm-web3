import { useContext, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

const Metadata = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const metadata = await import(`./data/${language}/metadata.json`);

        document.querySelector('meta[name="description"]').setAttribute("content", metadata.description);
        document.querySelector('meta[name="twitter:description"]').setAttribute("content", metadata.description);
        document.querySelector('meta[property="og:description"]').setAttribute("content", metadata.description);

        document.querySelector('title').textContent = metadata.title;
        document.querySelector('meta[name="twitter:title"]').setAttribute("content", metadata.title);
        document.querySelector('meta[property="og:title"]').setAttribute("content", metadata.title);

        document.querySelector('html').setAttribute("lang", metadata.locale.split('-')[0]);
        document.querySelector('meta[property="og:locale"]').setAttribute("content", metadata.locale);

      } catch (err) {
        console.error("Can't load data for selected language :", err);
      }
    };

    loadMetadata();

  }, [language]);

  return null;
};

export default Metadata;
