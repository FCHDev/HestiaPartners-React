import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Bareme = () => {
  const back = <img src="/images/backsvg.svg" alt="back to previous" />;

  return (
    <div className="bareme" id="bareme">
      <img src="/images/BaremeTransaction.jpg" alt="bareme de transaction" />
      <br />
      <a href="/BarèmeTransaction.pdf" download={true}>
        <button className="download-button">Télécharger</button>
      </a>
      <Link to={"/cgv#top"} className="back-button">
        <button>{back} Retour</button>
      </Link>
    </div>
  );
};

export default Bareme;
