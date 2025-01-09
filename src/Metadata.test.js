import { render, waitFor, screen } from "@testing-library/react";
import Metadata from "./Metadata";
import { LanguageContext } from "./LanguageContext";

beforeEach(() => {
    let meta = '';
    ["description", "twitter:description"].forEach((name) => {
      meta = document.createElement("meta");
      meta.name = name;
      meta.content = "Default description";
      document.head.appendChild(meta);
    });
  
    meta = document.createElement("meta");
    meta.setAttribute("property", "og:description");
    meta.content = "Default description";
    document.head.appendChild(meta);

    const title = document.createElement('title');
    title.textContent = 'web3';
    document.head.appendChild(title);
  
    meta = document.createElement("meta");
    meta.name = "twitter:title";
    meta.content = "Web3";
    document.head.appendChild(meta);
  
    meta = document.createElement("meta");
    meta.setAttribute("property", "og:title");
    meta.content = "Web3";
    document.head.appendChild(meta);
  
    meta = document.createElement('meta');
    meta.setAttribute("property", 'og:locale');
    meta.content = 'en-US';
    document.head.appendChild(meta);
});
  
afterEach(() => {
    document.head.innerHTML = "";
});

test("Updates metadata based on locale fr-FR", async() => {
    const setLanguageMock = jest.fn();
    render(
        <LanguageContext.Provider value={{ language: "fr-FR", setLanguage: setLanguageMock }}>
            <Metadata />
        </LanguageContext.Provider>
    );

    const expectedDescription = "Description concise des principes du Web3 : Décentralisation, Données, Transparence, Smart Contracts, Tokenisation, Interopérabilité, Censure, Sécurité, Finance, Gouvernance";
    for (const name of ["description", "twitter:description"]) {
        const descriptionMeta = await waitFor(() => document.querySelector('meta[name="'+name+'"]'));
        expect(descriptionMeta.content).toBe(expectedDescription);
    }
    expect(document.querySelector('meta[property="og:description"]').content).toBe(expectedDescription);

    const expectedTitle = 'Le Web3, c\'est quoi ?';
    expect(document.querySelector('meta[name="twitter:title"]').content).toBe(expectedTitle);
    expect(document.querySelector('meta[property="og:title"]').content).toBe(expectedTitle);
    expect(document.querySelector('meta[property="og:locale"]').content).toBe('fr-FR');
});

test("Updates metadata based on locale en-US", async() => {
    const setLanguageMock = jest.fn();
    render(
      <LanguageContext.Provider value={{ language: "en-US", setLanguage: setLanguageMock }}>
        <Metadata />
      </LanguageContext.Provider>
    );
  
    const expectedDescription = "Concise description of Web3 principles: Decentralization, Data, Transparency, Smart Contracts, Tokenization, Interoperability, Censorship, Security, Finance, Governance.";
    for (const name of ["description", "twitter:description"]) {
        const descriptionMeta = await waitFor(() => document.querySelector('meta[name="'+name+'"]'));
        expect(descriptionMeta.content).toBe(expectedDescription);
    }
    expect(document.querySelector('meta[property="og:description"]').content).toBe(expectedDescription);

    const expectedTitle = 'Introduction to Web3';
    expect(document.querySelector('title').textContent).toBe(expectedTitle);
    expect(document.querySelector('meta[name="twitter:title"]').content).toBe(expectedTitle);
    expect(document.querySelector('meta[property="og:title"]').content).toBe(expectedTitle);
    expect(document.querySelector('meta[property="og:locale"]').content).toBe('en-US');
  });
