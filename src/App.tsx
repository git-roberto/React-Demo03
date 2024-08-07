import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Entrar from "./pages/Entrar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/produto" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Entrar />} />
      </Routes>
    </Router>
  );
}

export default App;
