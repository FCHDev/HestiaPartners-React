import React from "react";
import "../styles/legal-speech.css";

const LegalSpeech = () => {
  return (
    <div className="legal">
      <h1 id="topLegal">Mentions légales</h1>
      <h2>Identité de l'entreprise</h2>
      <p>
        <ul>
          <strong>Dénomination sociale</strong> : <li>Hestia & Associés</li>
        </ul>
        <ul>
          <strong>Capital social</strong> : <li>1200 euros </li>
        </ul>
        <ul>
          <strong>Adresse du siège social</strong> :{" "}
          <li>14 Avenue Duvelleroy 94130 Nogent-sur-Marne </li>
        </ul>
        <ul>
          <strong>Adresse email</strong> :{" "}
          <li>
            <a href="mailto::contact@hestiapartners.fr?subject=Au sujet du site Hestia Partners">
              contact@hestiapartners.fr
            </a>
          </li>{" "}
        </ul>
        <ul>
          <strong>Numéro de téléphone</strong> :{" "}
          <li>
            <a href="tel:[+33]618377277">06 18 37 72 77</a>
          </li>{" "}
        </ul>
        <ul>
          <strong>Responsable d'agence</strong> : <li>Benoît MASSON</li>{" "}
        </ul>
        <ul>
          <strong>Représentants légaux</strong> :{" "}
          <li>Julien Lipkowicz & Marc Réveillaud</li>{" "}
        </ul>

        <ul>
          <strong>Tribunal de commerce d'immatriculation du RCS </strong>:{" "}
          <li>Créteil </li>
        </ul>
        <ul>
          <strong>Numéro TVA</strong> : <li>FR 55892432477 </li>
        </ul>
        <ul>
          <strong>Numéro de carte professionnelle </strong>:{" "}
          <li>CPI 9401 2021 000 000092 </li>
        </ul>
        <ul>
          <strong>
            Adresse postale de la CCI de délivrance de la carte professionnelle
          </strong>
          : <li>21, avenue du Général de Gaulle 94011 CRETEIL Cedex </li>
        </ul>
        <ul>
          <strong>Assurance en responsabilité civile professionnelle </strong>:{" "}
          <li>
            AXA FRANCE IARD dont le siège est sis SECTEUR 4331 TSA 40400 92727
            NANTERRE CEDEX, sur le territoire national sous le n° 6944930704
          </li>
        </ul>
      </p>

      <p style={{ paddingTop: "18px" }}>
        <strong>
          DECLARANT NE POUVOIR NI RECEVOIR NI DETENIR D'AUTRES FONDS, EFFETS OU
          VALEURS QUE CEUX REPRÉSENTATIFS DE SA RÉMUNERATION
        </strong>
      </p>
      <hr className="separateur" />

      <h2>Éditeur du site</h2>
      <p>
        <ul>
          <strong>Dénomination sociale</strong> : <li>François CHEVALIER</li>
        </ul>
        <ul>
          <strong>Coordonnées</strong> :<li>☎ : 06 43 65 51 38</li>
          <li>
            ＠ :{" "}
            <a href="mailto::frnchevalier@gmail.com?subject=Au sujet du site Hestia Partners&body=Bonjour,">
              frnchevalier@gmail.com
            </a>
          </li>
        </ul>
      </p>

      <hr />

      <h2>Hébergeur du site</h2>
      <p>
        <ul>
          <strong>Dénomination sociale</strong> : <li>Hostinger</li>
        </ul>
        <ul>
          <strong>Coordonnées</strong> :
          <li>
            Le site Hestia Partners est hébergé par HOSTINGER, dont le siège
            social est situé HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos
            Street, 6023 Larnaca, Chypre, joignable par le moyen suivant :{" "}
            <a href="https://www.hostinger.fr/contact">
              https://www.hostinger.fr/contact
            </a>
          </li>
        </ul>
      </p>

      <hr />

      <h2>Données personnelles et Utilisations des cookies</h2>
      <p>
        Les informations recueillies sur ce formulaire sont enregistrées dans un
        fichier informatisé par Hestia Partners pour traitement commercial et
        réalisation de son activité paricinpale. Les données collectées seront
        communiquées aux seuls destinataires suivants : Benoît Masson. Les
        données sont conservées pendant 30 jours maximum.{" "}
      </p>
      <p>
        Vous pouvez accéder aux données vous concernant, les rectifier, demander
        leur effacement ou exercer votre droit à la limitation du traitement de
        vos données. Vous pouvez retirer à tout moment votre consentement au
        traitement de vos données ; Vous pouvez également vous opposer au
        traitement de vos données ;{" "}
      </p>
      <p>
        Vous pouvez également exercer votre droit à la portabilité de vos
        données) Consultez le site <a href="https://www.cnil.fr/">cnil.fr</a>{" "}
        pour plus d’informations sur vos droits. Pour exercer ces droits ou pour
        toute question sur le traitement de vos données dans ce dispositif, vous
        pouvez nous contacter. Si vous estimez, après nous avoir contactés, que
        vos droits « Informatique et Libertés » ne sont pas respectés, vous
        pouvez adresser une réclamation à la CNIL.
      </p>
    </div>
  );
};

export default LegalSpeech;
