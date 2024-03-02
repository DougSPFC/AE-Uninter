import React from "react";
import { Link } from "react-router-dom";

const Tema5 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-green-100 p-8 rounded-lg max-w-7xl text-center">
        <h1 className="text-4xl font-bold mb-8">
          Educação Ambiental como Ferramenta de Mudança de Comportamento.
        </h1>
        <p>
          Através da disseminação de informações e conscientização sobre os
          impactos do descarte inadequado de resíduos eletrônicos, o projeto
          busca não apenas informar, mas também influenciar atitudes e
          comportamentos em relação ao consumo e ao descarte de eletrônicos. Ao
          educar o público sobre alternativas mais sustentáveis, a plataforma
          promove uma mudança de mentalidade em direção a práticas de consumo
          mais conscientes e responsáveis.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tema5;
