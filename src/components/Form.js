import React from "react";
import "../styles/form.css";

const Form = () => {
  return (
    <div className="formulaire">
      <h1>Contactez-nous</h1>
      <span>
        En remplissant le formulaire ou 📞{" "}
        <a href="tel:[+33]618377277">06 18 377 277</a>
      </span>
      <iframe
        src="https://tally.so/embed/mRX4jw?alignCenter=1&hideTitle=1&transparentBackground=1"
        title="formulaire de contact"
      ></iframe>
    </div>
  );
};

export default Form;
