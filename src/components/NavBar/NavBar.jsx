import React, { useState } from "react";
import logo from "./assets/how2.svg";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const menuClick = () => {
    setOpen(!open);
  }
  
  const navItems = [
    {
      linkTo:null,
      item:'Home'
    },
    {
      linkTo:null,
      item:'About Us'
    },
    {
      linkTo:null,
      item:'Saveds'
    },
    {
      linkTo:null,
      item:'Contact'
    },
  ]
  
  return(
    <>
      <header className="fixed w-full backdrop-blur-md bg-white/30">
        <nav className="flex justify-between px-10 py-6 text-lg font-bold">
          <img src={logo} alt="logo" className="w-32" />
          <ul className="flex gap-12 max-lg:hidden">
            {navItems.map((element,index) =>{
              return(
                <li key={index} className="cursor-pointer">{element.item}</li>
              )
            })}
          </ul>
          <div className="flex gap-3 max-lg:hidden">
            <button className="px-4 py-2 bg-sky-400">Theme</button>
            <button className="px-4 py-2 bg-blue-400">Experimente grátis</button>
          </div>
          <div className="relative lg:hidden">
            <button onClick={menuClick}>
              <HiMenuAlt3 className="text-4xl text-purple-700" />
            </button>
            {!open ? (
              null
            ) : (
              <>
              <ul className="lg:hidden absolute right-0 z-10 min-w-80 bg-white divide-y-2 divide-purple-200 rounded-lg shadow-xl">
                {navItems.map((item, index) => {
                  return(
                    <li key={index}
                      className="py-4 px-5 w-full text-slate-600 cursor-pointer"
                    >{item.item}</li>
                  )
                })}
              </ul>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar;