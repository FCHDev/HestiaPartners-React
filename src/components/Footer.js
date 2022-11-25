import React from "react";
import "../styles/foot.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="foot">
      <footer>
        <ul>
          <li>© Tous droits réservés</li>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>

          <Link to="/cgv#top">
            <li>Mentions légales</li>
          </Link>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
