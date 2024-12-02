import React from "react";
import { Menu } from './Menu';
import "./App.css";
import { Sections } from "./Sections";

const App = () => {
  
  return (
    <div>
      <header className="header">
        <h1>Web3</h1>
        <Menu />
      </header>

      <Sections />

      <footer className="footer">
        <div className="info">
          <p>
            Cette page est hébergée de façon décentralisée sur l'InterPlanetary File System (<a href="https://ipfs.tech/">IPFS</a>)<br/>
            Le déploiement est assuré par <a href="https://fleek.co">Fleek</a><br/>
            Le nom de domaine est géré à l'aide de <a href="https://3dns.box">3DNS</a><br/>
            Voir sur <a href="https://github.com/NicolasMugnier/nm-web3">GitHub</a><br/>
          </p>
        </div>
        <p>&copy; 2024 - Nicolas Mugnier</p>
      </footer>
    </div>
  );
};

export default App;
