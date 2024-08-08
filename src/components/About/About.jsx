import React from "react";
import { CiBatteryFull, CiUnlock, CiSun } from "react-icons/ci";


const listsTexts = [
  {
    title:'Lorem',
    text:'xl:p-20 xl:pb-0 flex justify-center lg:flex-row flex-col lg:pb-0 items-center sm:gap-0 gap-7 max-xl:pt-24 h-screen',
    icon: <CiBatteryFull className="text-4xl text-gray-800"/>
  },
  {
    title:'Lorem1',
    text:'xl:p-20 xl:pb-0 flex justify-center lg:flex-row flex-col lg:pb-0 items-center sm:gap-0 gap-7 max-xl:pt-24 h-screen',
    icon: <CiUnlock className="text-4xl text-gray-800"/>
  },
  {
    title:'Lorem2',
    text:'xl:p-20 xl:pb-0 flex justify-center lg:flex-row flex-col lg:pb-0 items-center sm:gap-0 gap-7 max-xl:pt-24 h-screen',
    icon: <CiSun className="text-4xl text-gray-800"/>
  },
  
] 

const About = () => {
  return(
    <section className="flex lg:justify-center lg:flex-row flex-col items-center sm:gap-0 gap-7 max-sm:pt-12 lg:p-20 h-screen xl:p-20 xl:pb-0 lg:pb-0 max-xl:pt-24">
      <div className="w-1/2 lg:px-12">
        <h1 className="lg:text-4xl font-bold max-sm:text-center text-2xl">Como funciona o <span className="text-violet-700">How2?</span>? E como ele pode te ajudar?</h1>
        <ul className="flex flex-col sm:gap-10 gap-12 mt-20">
          {listsTexts.map((item,index) => (
            <li key={index} className="flex items-center gap-2 max-sm:flex-col">
              <div className="bg-gray-200 p-4 rounded-full">
                {item.icon}
              </div>
              <div>
                <h1 className="font-bold">{item.title}</h1>
                <p className="lg:pr-20">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-phones bg-cover h-full w-1/2">
        
      </div>
    </section>
  )
}

export default About;