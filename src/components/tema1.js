import React from "react";
import { Link } from "react-router-dom";

const Tema1 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-green-100 p-8 rounded-lg max-w-7xl text-center">
        <h1 className="text-4xl font-bold mb-8">
          Importância do Descarte Responsável de Resíduos Eletrônicos.
        </h1>
        <p>
          O descarte irresponsável de resíduos eletrônicos representa uma ameaça
          significativa ao meio ambiente e à saúde humana. Dispositivos
          eletrônicos contêm materiais tóxicos, como chumbo, mercúrio e cádmio,
          que podem contaminar o solo e os recursos hídricos se não forem
          descartados adequadamente. Portanto, é crucial conscientizar o público
          sobre a importância do descarte responsável, destacando os impactos
          negativos do descarte inadequado e promovendo práticas sustentáveis.
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

export default Tema1;
