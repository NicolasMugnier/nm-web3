import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className="header">
        <h1>Web3</h1>
        <nav>
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`menu ${menuOpen ? "show" : ""}`}>
            <li>
              <ScrollLink
                to="decentralization"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Décentralisation
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="data"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Données
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="transparency"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Transparence
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contracts"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Contrats
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="tokenization"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Tokenisation
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="interoperability"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Interopérabilité
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="censorship"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Censure
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="security"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Sécurité
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="financial"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Finance
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="governance"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Gouvernance
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>

      <section id="decentralization" data-testid="decentralization" className="section decentralization">
        <h2>Décentralisation</h2>
        <p>Le Web3 repose sur un réseau décentralisé, où les données et applications ne sont plus stockées ou contrôlées par des serveurs centralisés, mais réparties entre des nœuds indépendants. Cela élimine les points de défaillance uniques et réduit les risques de censure ou de piratage. Les utilisateurs conservent ainsi le contrôle de leurs informations et interagissent directement entre pairs.</p>
        <p><b>Technique associée</b> : Les blockchains, telles qu'Ethereum, garantissent la décentralisation grâce à des structures distribuées et immuables. Les réseaux peer-to-peer (P2P) comme IPFS assurent le stockage et le partage décentralisés des données.</p>
      </section>

      <section id="data" data-testid="data" className="section data odd">
        <h2>Propriété des données</h2>
        <p>Dans le Web3, les utilisateurs possèdent et contrôlent directement leurs données personnelles et numériques. Contrairement au Web2, où les plateformes collectent et exploitent les données, le Web3 utilise des portefeuilles numériques pour fournir un accès autonome.</p>
        <p><b>Technique associée</b> : Les portefeuilles numériques (wallets) basés sur des clés privées permettent aux utilisateurs de gérer leurs identités numériques. Ces clés garantissent un accès sécurisé aux applications décentralisées (dApps) et actifs comme les tokens ou NFT.</p>
      </section>

      <section id="transparency" data-testid="transparency" className="section transparency">
        <h2>Transparence</h2>
        <p>Toutes les transactions et interactions sur le Web3 sont enregistrées sur la blockchain, rendant les données traçables, immuables et accessibles publiquement. Cela instaure un climat de confiance où les parties peuvent vérifier les processus sans intermédiaire.</p>
        <p><b>Technique associée</b> : Les blockchains publiques comme Ethereum ou Solana utilisent des mécanismes de consensus (Proof of Work ou Proof of Stake) pour valider les transactions. Les explorateurs de blockchain permettent de visualiser toutes les activités en temps réel.</p>
      </section>

      <section id="contracts" data-testid="contracts" className="section contracts odd">
        <h2>Automatisation via les contrats intelligents</h2>
        <p>Les contrats intelligents (smart contracts) sont des programmes autonomes qui s'exécutent automatiquement une fois les conditions définies remplies. Ils éliminent le besoin d'intermédiaires dans les transactions et les accords.</p>
        <p><b>Technique associée</b> : Écrits en langages comme Solidity, ces contrats sont déployés sur des blockchains et s'exécutent de manière immuable et vérifiable. Les oracles blockchain, comme Chainlink, connectent les smart contracts à des données externes pour des fonctionnalités avancées.</p>
      </section>

      <section id="tokenization" data-testid="tokenization" className="section tokenization">
        <h2>Tokenisation et économie numérique</h2>
        <p>Le Web3 permet de représenter des actifs physiques ou numériques sous forme de tokens. Ces derniers peuvent être échangés, transférés ou fractionnés, facilitant l'économie numérique globale.</p>
        <p><b>Technique associée</b> : Les tokens ERC-20 (fongibles) et ERC-721 (non-fongibles) sur Ethereum sont utilisés pour créer des cryptomonnaies, NFT ou jetons de gouvernance. Les protocoles DeFi exploitent ces tokens pour prêter, emprunter ou trader de manière décentralisée.</p>
      </section>

      <section id="interoperability" data-testid="interoperability" className="section interoperability odd">
        <h2>Interopérabilité</h2>
        <p>Le Web3 favorise un écosystème où différentes blockchains et applications peuvent interagir et échanger des données ou des actifs. Cela permet une expérience utilisateur fluide entre divers réseaux.</p>
        <p><b>Technique associée</b> : Les protocoles comme Polkadot ou Cosmos utilisent des mécanismes de ponts (bridges) pour connecter différentes blockchains. Les standards communs, tels que les API ouvertes et les formats de tokens, renforcent l'interopérabilité.</p>
      </section>

      <section id="censorship" data-testid="censorship" className="section censorship">
        <h2>Résistance à la censure</h2>
        <p>Les systèmes décentralisés du Web3 ne peuvent pas être contrôlés ou censurés par une seule entité, garantissant une plus grande liberté d'expression et d'action pour les utilisateurs.</p>
        <p><b>Technique associée</b> : Les données et applications hébergées sur des réseaux décentralisés comme Filecoin ou Arweave restent accessibles même en cas de tentatives de blocage. Les blockchains publiques sont accessibles à tous et impossibles à modifier sans consensus.</p>
      </section>

      <section id="security" data-testid="security" className="section security odd">
        <h2>Sécurité renforcée</h2>
        <p>Les architectures décentralisées et les mécanismes cryptographiques du Web3 offrent une sécurité accrue, limitant les attaques telles que le piratage ou les violations de données centralisées.</p>
        <p><b>Technique associée</b> : La cryptographie asymétrique protège les transactions et les données. Les mécanismes de consensus répartis, comme le Proof of Stake, empêchent les attaques de type 51%. Les wallets décentralisés garantissent un contrôle exclusif par l'utilisateur.</p>
      </section>

      <section id="financial" data-testid="financial" className="section financial">
        <h2>Inclusion financière</h2>
        <p>Le Web3 offre des solutions financières accessibles à tous, sans dépendre de banques ou institutions traditionnelles. Cela permet à des milliards de personnes non bancarisées de participer à l'économie numérique.</p>
        <p><b>Technique associée</b> : Les protocoles DeFi (finance décentralisée) permettent de prêter, d'emprunter et d'investir en utilisant des plateformes comme Aave ou Uniswap, accessibles simplement avec un portefeuille et une connexion Internet.</p>
      </section>

      <section id="governance" data-testid="governance" className="section governance odd">
        <h2>Économie communautaire et gouvernance</h2>
        <p>Le Web3 favorise des modèles communautaires où les utilisateurs participent activement à la gestion et à l'évolution des plateformes via des DAOs (Decentralized Autonomous Organizations).</p>
        <p><b>Technique associée</b> : Les jetons de gouvernance, comme UNI ou MKR, permettent aux détenteurs de voter sur les décisions clés des projets. Les DAO fonctionnent grâce à des contrats intelligents définissant des règles transparentes et exécutées automatiquement.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024, Le Web3, c'est quoi ?</p>
      </footer>
    </div>
  );
};

export default App;
