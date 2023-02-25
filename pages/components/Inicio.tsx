// @flow
import Image from "next/image";
import * as React from "react";

import tablet_e_cell from "../assets/tablet-e-cell.png";

type Props = {};
const Inicio = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div
        id="redline"
        className="flex items-center justify-center h-16 w-full bg-[#FF7300]"
      >
        <h3 className="text-center text-md md:text-3xl md:font-bold font-semibold">
          ATENÇÃO: Não saia dessa página, você não terá uma oportunidade dessa
          outra vez!
        </h3>
      </div>

      <div className="flex flex-wrap justify-center my-16">
        <h1 className="text-center text-3xl md:text-6xl font-bold w-[1300px] px-1 md:px-0">
          <span className="bg-[#FF7300] px-2">
            Cansada de tentar perder peso
          </span>{" "}
          e não ter resultados ? Esse Ebook que vai Mudar sua Vida para Sempre
        </h1>

        <div id="image" className="flex justify-center w-full mt-10">
          <Image
            className="w-72 md:w-96"
            src={tablet_e_cell}
            alt="Um tablet e um celular mostrando o ebook"
          />
        </div>

        <div id="botao01" className="px-2 md:px-0">
          <a
            href="#"
            className="flex justify-center items-center text-center bg-[#05A401] rounded-full p-8 my-10 text-xl md:text-2xl font-bold hover:bg-[#026B00]"
          >
            QUERO COMEÇAR A EMAGRECER AGORA MESMO !
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
