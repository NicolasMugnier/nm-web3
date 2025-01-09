import React from "react";
import "./App.css";
import { LanguageProvider } from "./LanguageContext";
import Metadata from "./Metadata";
import { Menu } from './Menu';
import { Sections } from "./Sections";
import { Footer } from './Footer';

const App = () => {
  
  return (
    <LanguageProvider>
      <Metadata />
        <div>
          <header className="header">
            <h1>Web3</h1>
            <Menu />
          </header>

          <Sections />

          <Footer />
        </div>
    </LanguageProvider>
  );
};

export default App;
