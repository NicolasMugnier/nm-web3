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
        <p>&copy; 2024, Le Web3, c'est quoi ?</p>
      </footer>
    </div>
  );
};

export default App;
