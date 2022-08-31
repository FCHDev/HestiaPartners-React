import React from "react";
import Header from "../components/Header";
import LegalSpeech from "../components/LegalSpeech";
import Footer from "../components/Footer";
import "../styles/legal-speech.css";

const CgvLegal = () => {
  return (
    <div className="container">
      <Header />
      <LegalSpeech />
      <Footer />
    </div>
  );
};

export default CgvLegal;
