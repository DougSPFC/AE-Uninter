import React from "react";
import { Link } from "react-router-dom";

const Tema2 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-green-100 p-8 rounded-lg max-w-7xl text-center">
        <h1 className="text-4xl font-bold mb-8">
          Empoderamento da Comunidade através da Educação Ambiental.
        </h1>
        <p>
          Ao fornecer informações acessíveis e relevantes sobre o descarte
          responsável de resíduos eletrônicos, a plataforma educativa capacita a
          comunidade local a tomar decisões informadas e a agir de maneira
          ambientalmente consciente. Isso promove um senso de responsabilidade
          coletiva em relação ao meio ambiente e capacita os indivíduos a
          fazerem escolhas mais sustentáveis em relação ao descarte de seus
          dispositivos eletrônicos antigos.
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

export default Tema2;
