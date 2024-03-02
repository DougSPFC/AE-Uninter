import React from "react";
import { Link } from "react-router-dom";

const Tema4 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-green-100 p-8 rounded-lg max-w-7xl text-center">
        <h1 className="text-4xl font-bold mb-8">
          Colaboração entre Setores para Soluções Sustentáveis.
        </h1>
        <p>
          O projeto envolve a colaboração entre diferentes setores, incluindo
          organizações governamentais, instituições educacionais e comunidades
          locais. Essa colaboração é essencial para identificar pontos de coleta
          de resíduos eletrônicos, desenvolver conteúdo educativo relevante e
          promover iniciativas de conscientização pública. Demonstra-se, assim,
          a importância da colaboração entre diferentes partes interessadas na
          busca por soluções sustentáveis para os desafios ambientais.
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

export default Tema4;
