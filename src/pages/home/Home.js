import { Link } from "react-router-dom";
import backgroundImage from "../../assets/imgBackground.png";

export const Home = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col items-center justify-center h-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        width: "100vw",
        opacity: 0.95,
        fontFamily: "Raleway, sans-serif",
        padding: "20px",
      }}
    >
      <h1 className="text-8xl font-bold text-black mb-8 relative">
        <span className="text-white absolute -z-1 top-0 left-0 -ml-1 -mt-1">
          Recondicionando o Futuro
        </span>
        Recondicionando o Futuro
      </h1>
      <div className="flex flex-col justify-center items-center mb-8">
        <div className="flex justify-center items-center space-x-4 mb-8 ">
          <Link
            to="/tema1"
            className=" flex flex-col items-center text-center justify-center gap-4 bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded transition duration-300 ease-in-out w-96 h-44"
          >
            Importância do Descarte Responsável de Resíduos Eletrônicos.
            <div>Clique para saber mais.</div>
          </Link>
          <Link
            to="/tema2"
            className=" flex flex-col text-center items-center justify-center gap-4 bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded transition duration-300 ease-in-out w-96 h-44"
          >
            Empoderamento da Comunidade através da Educação Ambiental.
            <div>Clique para saber mais.</div>
          </Link>
          <Link
            to="/tema3"
            className=" flex flex-col text-center items-center justify-center gap-4 bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded transition duration-300 ease-in-out w-96 h-44"
          >
            Inovação Tecnológica para a Sustentabilidade.
            <div>Clique para saber mais.</div>
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            to="/tema4"
            className=" flex flex-col text-center items-center justify-center gap-4 bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded transition duration-300 ease-in-out w-96 h-44"
          >
            Colaboração entre Setores para Soluções Sustentáveis.
            <div>Clique para saber mais.</div>
          </Link>
          <Link
            to="/tema5"
            className=" flex flex-col text-center items-center justify-center gap-4 bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded transition duration-300 ease-in-out w-96 h-44"
          >
            Educação Ambiental como Ferramenta de Mudança de Comportamento.
            <div>Clique para saber mais.</div>
          </Link>
          <Link
            to="/tema6"
            className=" flex flex-col text-center items-center justify-center gap-4 bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded transition duration-300 ease-in-out w-96 h-44"
          >
            Sustentabilidade como Pilar do Desenvolvimento Urbano.
            <div>Clique para saber mais.</div>
          </Link>
        </div>
      </div>

      <div className="bg-white text-start  rounded-lg p-4 opacity-70">
        <div className="mb-4 text-4xl">
          Pontos de coleta na cidade de Curitiba:
        </div>
        <div className="mb-2 text-3xl">
          Centro de Educação Ambiental Barigui - Rua Batista Ganz, s/n - Santo
          Inácio, próximo ao Parque Barigui.
        </div>
        <div className="mb-2  text-3xl">
          Universidade Tecnológica Federal do Paraná (UTFPR) - Av. Sete de
          Setembro, 3165 - Rebouças.
        </div>
        <div className="mb-2  text-3xl">
          Centro de Educação Ambiental Santa Felicidade - Rua Ângelo Marqueto,
          908 - Santa Felicidade.{" "}
        </div>
      </div>
    </div>
  );
};
