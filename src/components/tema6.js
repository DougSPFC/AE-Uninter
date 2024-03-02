import React from "react";
import { Link } from "react-router-dom";

const Tema6 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-green-100 p-8 rounded-lg max-w-7xl text-center">
        <h1 className="text-4xl font-bold mb-8">
          Sustentabilidade como Pilar do Desenvolvimento Urbano.
        </h1>
        <p>
          O projeto destaca a importância da sustentabilidade ambiental no
          contexto urbano, especialmente em uma cidade como Curitiba. Ao
          integrar práticas de descarte responsável de resíduos eletrônicos nas
          políticas e iniciativas de desenvolvimento urbano, a cidade pode
          promover uma abordagem mais holística e sustentável para a gestão de
          resíduos, contribuindo para a qualidade de vida dos cidadãos e a
          preservação do meio ambiente.
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

export default Tema6;
