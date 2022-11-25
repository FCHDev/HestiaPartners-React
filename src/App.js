import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CgvLegal from "./pages/CgvLegal";
import Home from "./pages/Home";
import Bareme from "./pages/Bareme";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cgv" element={<CgvLegal />} />
        <Route path="/bareme" element={<Bareme />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
