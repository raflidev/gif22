import React from 'react'
import Logo1 from "../assets/images/logo1.png";
import Logo2 from "../assets/images/logo2.png";
import Logo3 from "../assets/images/logo3.png";
import Home from "../assets/images/home.png";
import Nav_Back from "../assets/images/navbar.png";

function Navbar() {
  return (
    <div className="flex justify-between bg-no-repeat bg-cover bg-center px-3 py-2 items-center" style={{backgroundImage: `url(${Nav_Back})`}}>
      <div className="flex space-x-5">
        <img src={Logo1} className="w-10" alt="" />
        <img src={Logo2} className="w-10" alt="" />
        <img src={Logo3} className="w-10" alt="" />
      </div>
      <div>
        <img src={Home} className="w-10" alt="" />
      </div>
    </div>
  )
}

export default Navbar