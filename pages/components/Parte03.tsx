// @flow
import Image from "next/image";
import * as React from "react";
type Props = {};

import garantia from "../assets/garantia.png";

const Parte03 = (props: Props) => {
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image src={garantia} alt="img da garantia" />
        <div>
          <h1 className="text-center md:text-left text-3xl md:text-6xl text-black md:w-[800px] font-bold px-1 md:px-0 mt-16">
            VOCÊ NÃO TEM
            <span className="bg-[#FF7300] px-2 leading-normal text-white ">
              NADA A PERDER
            </span>{" "}
          </h1>
          <p className="text-black text-3xl md:w-[800px] mt-5 md:text-left text-center">
            Simples! Compre agora e tenha direito de arrependimento em até 7
            dias. Se você não gostar ou não se adaptar ao nosso método, basta
            enviar um e-mail para marcosgarcia.oliveira02@gmail.com dentro do
            período de garantia e cancelamos sua compra, reembolsando 100% do
            valor pago sem burocracias. Esse é o nosso compromisso com você!
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center my-20">
        <div className="rounded-3xl bg-[#D9D9D9] my-20 md:w-[800px] ">
          <h1 className="bg-[#FF7300] rounded-t-3xl p-5 text-center text-xl md:text-2xl font-bold">
            LIBERAMOS UMA PROMOÇÃO IMPERDÍVEL SOMENTE HOJE. NÃO PERCA ESSA
            OPORTUNIDADE E ADQUIRA AGORA MESMO!
          </h1>
          <div className="text-center">
            <h2 className="text-lg md:text-2xl font-semibold text-black my-16">
              ÚLTIMAS VAGAS COM DESCONTO
            </h2>
            <h2 className="text-3xl font-bold text-[#FF7300] my-16">
              OFERTA IMPERDÍVEL ! APENAS
            </h2>
            <h1 className="text-8xl font-bold text-[#FF7300] ">R$37,00</h1>
          </div>
          <div
            id="botao01"
            className="flex flex-wrap justify-center w-full px-2 md:px-0 mt-10"
          >
            <a
              href="https://pay.hotmart.com/N80060945F"
              className="flex justify-center items-center text-center bg-[#05A401] md:w-[600px] rounded-full p-8 my-10 text-xl md:text-2xl font-bold hover:bg-[#026B00] text-white"
            >
              SIM, QUERO EMAGRECER AGORA
            </a>
            <p className="w-full text-black md:w-96 text-center mb-10">
              PAGAMENTO ÚNICO, SEM NENHUMA COBRANÇA EXTRA OU MENSALIDADES.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parte03;
