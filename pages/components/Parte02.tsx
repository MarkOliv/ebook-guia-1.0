// @flow
import Image, { StaticImageData } from "next/image";
import * as React from "react";

import img01 from "../assets/img01.png";
import img02 from "../assets/img02.png";
import img03 from "../assets/img03.png";
import img04 from "../assets/img04.png";
import img05 from "../assets/img05.png";
import img06 from "../assets/img06.png";

type Items = {
  img: StaticImageData;
  title: string;
};

const Parte02 = () => {
  const [Items, setItems] = React.useState<Array<Items>>([
    {
      img: img01,
      title: "Saiba a importância do peso ideal para sua saúde",
    },
    {
      img: img02,
      title: "Quais são os bons Hábitos Alimentares",
    },
    {
      img: img03,
      title: "Como começar a mudar seus hábitos",
    },
    {
      img: img04,
      title: "Tudo que você precisa saber sobre dieta básica",
    },
    {
      img: img05,
      title: "Receitas para sua dieta ser mais gostosa",
    },
    {
      img: img06,
      title: "Como preparar sucos Detox para sua dieta",
    },
  ]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center my-16 text-black">
        <h1 className="text-center text-3xl md:text-5xl  font-bold w-[1500px] px-1 md:px-0 mt-16">
          <span className="bg-[#FF7300] px-2 leading-normal text-white ">
            PROGRAMA DE REEDUCAÇÃO ALIMENTAR
          </span>{" "}
          QUE VAI TE AJUDAR A CONQUISTAR{" "}
          <span className="bg-[#FF7300] px-2 leading-normal text-white">
            RESULTADOS EXTRAORDINÁRIOS
          </span>
          <br />
          DE FORMA SAUDÁVEL!
        </h1>

        <div id="pontos do livro" className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-40 my-20">
            {Items.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-center items-center"
              >
                <div className="flex justify-center w-full">
                  <Image src={item.img} alt="img peso" />
                </div>
                <h3 className="text-center text-xl font-semibold w-48 mt-4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div id="botao01" className="px-2 md:px-0">
          <a
            href="#"
            className="flex justify-center items-center text-center bg-[#05A401] rounded-full p-8 my-10 text-xl md:text-2xl font-bold hover:bg-[#026B00] text-white"
          >
            QUERO TER MAIS DISPOSIÇÃO E EMAGRECER COM SAÚDE !
          </a>
        </div>
      </div>
    </div>
  );
};

export default Parte02;
