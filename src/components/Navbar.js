import React, { useState } from 'react'
import Logo1 from "../assets/images/logo1.png";
import Logo2 from "../assets/images/logo2.png";
import Logo3 from "../assets/images/logo3.png";
import Home from "../assets/images/home.png";
import Nav_Back from "../assets/images/navbar.png";
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState("hidden");
  const temp = (menu === "hidden") ? 'block' : 'hidden';
  return (
    <div>
      <div className="flex justify-between bg-no-repeat bg-cover bg-center px-3 py-2 items-center" style={{backgroundImage: `url(${Nav_Back})`}}>
        <div className="flex space-x-5">
          <a href="https://telkomuniversity.ac.id/" target="_blank" rel="noreferrer">
            <img src={Logo1} className="w-10" alt="" />
          </a>
          <a href="https://www.instagram.com/forcytel_u/" target="_blank" rel="noreferrer">
            <img src={Logo2} className="w-10" alt="" />
          </a>
          <a href="https://www.instagram.com/grabitfasttelkom/" target="_blank" rel="noreferrer">
            <img src={Logo3} className="w-10" alt="" />
          </a>
        </div>
        <div>
          <Link to="/">
            <img src={Home} className="hidden lg:block w-10" alt="" />
          </Link>
          <div className="block lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setMenu(temp)} className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
      <div className={menu}>
        <div className="bg-cyan-800 text-2xl font-lansdowne text-white lg:hidden grid grid-cols-1 divide-y">
            <div className="px-5 py-2">
              <Link to="/">Home</Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/about-us">About Us</Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/line-up">Line Up</Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/maps">Maps</Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/maskot">Maskot</Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/theme">Theme</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar