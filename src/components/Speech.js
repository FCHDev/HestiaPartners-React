import React from "react";
import "../styles/speech.css";

const Speech = () => {
  return (
    <div className="speech">
      <h1>Qui sommes-nous ?</h1>
      <p className="alinea">
        Fort de nos années d'expérience, nous avons souhaité développer notre
        propre vision de l’immobilier au sein de notre agence : un
        accompagnement complet, un suivi à chaque étape de votre projet et une
        relation de conseil pour une vente réalisée dans les meilleures
        conditions.
      </p>
      <p className="alinea">
        Chez Hestia & Associés, notre philosophie est de gérer chaque dossier au
        cas par cas dans une relation de confiance réciproque.
      </p>
      <p className="alinea">
        C'est pourquoi nous ne visons pas la quantité de ventes mais la qualité,
        afin de réaliser la vôtre dans les meilleures conditions. Parce que
        votre vente est unique, elle mérite un accompagnement personnalisé.
      </p>
      <p className="alinea">
        Nous vous proposons donc de profiter de notre expertise, de notre
        passion pour notre métier et de notre parfaite connaissance du secteur
        pour aboutir à la réussite de votre projet de vente.
      </p>
      <br style={{ background: "grey", height: "1px" }} />
    </div>
  );
};

export default Speech;
