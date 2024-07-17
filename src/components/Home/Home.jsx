import React from "react";
import Carousel from "./Carousel/Carousel";
import woman from "./assets/womanHow2.svg"

const Home = () => {
  return(
    <>
      <section className="xl:p-20 pb-0 flex justify-center lg:flex-row flex-col lg:pb-0 items-center sm:gap-0 gap-7 max-xl:pt-40">
        <div className="border-sky-300 px-12 lg:w-1/2 sm:w-4/6 flex items-center">
          <div className="flex flex-col w-full sm:text-left text-center">
            <h1 className="font-bold 2xl:text-6xl xl:text-5xl xl:mb-10 mb-5 text-3xl">Encontre Seu Caminho, Descubra Sua Paixão</h1>
            <p className="xl:font-medium sm:text-justify mb-7 sm:mb-6 sm:text-lg text-xs font-medium">Você está perdido sobre qual carreira seguir? O how2 está aqui para ajudar! 
              Conectamos jovens indecisos com profissionais experientes de diversas áreas para mentoria e orientação. 
              Escolha uma profissão que desperte seu interesse e tenha uma conversa esclarecedora com um mentor que já trilhou esse caminho. 
              Descubra suas paixões e encontre seu verdadeiro propósito profissional com o how2!
            </p>
            <button className="bg-gradient-to-r from-purple-400 to-purple-700 xl:font-bold font-semibold xl:text-xl text-white min-w-fit px-6 py-4 rounded-md w-fit md:mx-0 mx-auto">Baixar APP</button>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-4/6 px-4">
          <img src={woman} alt="chamado" className="w-full" />
        </div>
      </section>
      {/* <Carousel /> */}
    </>
  )
}

export default Home;