import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tema1 from "../components/tema1";
import { Home } from "../pages/home/Home";
import Tema2 from "../components/tema2";
import Tema5 from "../components/tema5";
import Tema6 from "../components/tema6";
import Tema3 from "../components/tema3";
import Tema4 from "../components/tema4";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tema1" element={<Tema1 />} />
        <Route path="tema2" element={<Tema2 />} />
        <Route path="tema3" element={<Tema3 />} />
        <Route path="tema4" element={<Tema4 />} />
        <Route path="tema5" element={<Tema5 />} />
        <Route path="tema6" element={<Tema6 />} />
      </Routes>
    </BrowserRouter>
  );
};
