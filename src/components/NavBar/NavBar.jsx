import React from "react";
import logo from "./assets/how2.svg"

const NavBar = () => {
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
    <nav className="flex justify-between px-10 py-8">
      <img src={logo} alt="logo" className="w-32" />
      <ul className="flex ">
        {navItems.map((element,i) =>{
          return(
            <li key={i}>{element.item}</li>
          )
        })}
      </ul>
      <div>
        <button>Assinar</button>
        <button>Theme</button>
      </div>
    </nav>
    </>
  )
}

export default NavBar;