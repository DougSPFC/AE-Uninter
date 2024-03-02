import React from "react";
import { Link } from "react-router-dom";

const Tema3 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-green-100 p-8 rounded-lg max-w-7xl text-center">
        <h1 className="text-4xl font-bold mb-8">
          Inovação Tecnológica para a Sustentabilidade.
        </h1>
        <p>
          A criação de uma plataforma educativa online representa uma forma
          inovadora de abordar a questão do descarte de resíduos eletrônicos. Ao
          utilizar a tecnologia digital, o projeto aproveita os recursos
          disponíveis para alcançar um público mais amplo e disseminar
          informações de forma eficaz. Isso demonstra como a tecnologia pode ser
          empregada como uma ferramenta poderosa para promover práticas
          sustentáveis e conscientização ambiental.
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

export default Tema3;
