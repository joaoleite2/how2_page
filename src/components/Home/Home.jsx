import React from "react";
import Carousel from "./Carousel/Carousel";
import woman from "./assets/womanHow2.svg"

const Home = () => {
  return(
    <>
      <section className="xl:p-20 xl:pb-0 flex justify-center lg:flex-row flex-col lg:pb-0 items-center sm:gap-0 gap-7 max-xl:pt-24">
        <div className="border-sky-300 px-12 lg:w-1/2 sm:w-4/6 flex items-center">
          <div className="flex flex-col w-full sm:text-left text-center">
            <h1 className="font-bold 2xl:text-7xl xl:text-5xl mb-6 text-3xl">Encontre Seu Caminho, Descubra Sua Paixão</h1>
            <p className="sm:text mb-7 sm:mb-6 md:pr-9 text-gray-600">Você está perdido sobre qual carreira seguir? O how2 está aqui para ajudar! 
              Conectamos jovens indecisos com profissionais experientes de diversas áreas para mentoria e orientação. 
              Escolha uma profissão que desperte seu interesse e tenha uma conversa esclarecedora com um mentor que já trilhou esse caminho. 
              Descubra suas paixões e encontre seu verdadeiro propósito profissional com o how2!
            </p>
            <div className="flex gap-5 max-md:flex-col">
              <button className="bg-gradient-to-r from-violet-700 to-purple-600 font-bold text-white max-w-fit px-6 py-4 rounded-full md:mx-0 mx-auto">Baixar APP</button>
              <button className="flex items-center gap-2 font-bold max-md:hidden">
                <div className="w-4 h-4 rounded-full border-4 border-violet-700" /> 
                Como nós trabalhamos?
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-4/6 px-4">
          <img src={woman} alt="chamado" className="w-full" />
        </div>
      </section>
      <Carousel />
    </>
  )
}

export default Home;