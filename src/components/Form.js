import React from "react";
import "../styles/form.css";

const Form = () => {
  const call = <img src="/images/call.svg" alt="back to previous" />;

  return (
    <div className="formulaire">
      <h1>Contactez-nous</h1>

      <a href="tel:[+33]618377277" style={{ textDecoration: "none" }}>
        <button className="call-me-button">
          {call}
          <span>Appelez-nous</span>
        </button>
      </a>

      <iframe
        src="https://tally.so/embed/mRX4jw?alignCenter=1&hideTitle=1&transparentBackground=1"
        title="formulaire de contact"
      ></iframe>
    </div>
  );
};

export default Form;
