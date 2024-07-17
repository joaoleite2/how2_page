import React from "react";
import nuLogo from "./assets/nubank.svg";
import fiap from "./assets/fiap.svg";
import magalu from "./assets/magalu.svg";
import jp from "./assets/jp.svg";

const Carousel = () => {
  const carouselItems = [
    {
      img:fiap,
      alt:"fiap"
    },
    {
      img:magalu,
      alt:"magalu"
    },
    {
      img:nuLogo,
      alt:"nubank"
    },
    {
      img:jp,
      alt:"jp"
    },
  ]
  
  return(
    <>
      <div className="w-full bg-purple-900 flex justify-center p-4 flex-nowrap">
        <ul className="flex items-center bg-red-700 [&_li]:mx-8">
          {carouselItems.map((item) => {
            return(
              <li
                className="w-32"
              ><img src={item.img} alt={item.alt} 
                className="grayscale"
              /></li>
            )
          })}
        </ul>
        <ul className="flex items-center bg-green-700 [&_li]:mx-8">
          {carouselItems.map((item) => {
            return(
              <li
                className="w-32"
              ><img src={item.img} alt={item.alt} 
                className="grayscale"
              /></li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Carousel;