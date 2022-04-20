import React from 'react'
import Navbar from './components/Navbar';

import logo_gif from "./assets/images/logo_gif.png";
import About from "./assets/images/navigation/about.png";
import Lineup from "./assets/images/navigation/lineup.png";
import Map from "./assets/images/navigation/map.png";
import Maskot from "./assets/images/navigation/maskot.png";
import Theme from "./assets/images/navigation/theme.png";
import NavBackground from "./assets/images/navigation/background.png";
import DescBackground from "./assets/images/background_desc.png";

import HomeBackground from "./assets/images/background_home.jpg";
import Throwback from "./assets/images/Throwback.png";

import Tower1 from "./assets/images/tower/2021.png";
import Tower2 from "./assets/images/tower/2020.png";
import Tower3 from "./assets/images/tower/2019.png";
import Tower4 from "./assets/images/tower/2018.png";

function App() {
  return (
    <div className="font-lansdowne">
      <Navbar/>
      <div className="min-h-screen bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${HomeBackground})`}}>
        <div className="flex h-screen">
          <div className="m-auto pt-40">
            <img src={logo_gif} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-auto w-5/12" alt="" />
          </div>
        </div>
        <div className="min-h-screen">
            <div className="flex justify-center space-x-16 mt-72">
              <div>
                <img src={About} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg">
                  ABOUT US
                </div>
              </div>
              <div>
                <img src={Lineup} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg">
                  LINE UP
                </div>
              </div>
              <div>
                <img src={Map} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg">
                  MAPS
                </div>
              </div>
              <div>
                <img src={Maskot} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg">
                  MASKOT
                </div>
              </div>
              <div>
                <img src={Theme} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg">
                  THEME
                </div>
              </div>
            </div>
            <div className="-mt-16 bg-no-repeat bg-contain bg-center h-16" style={{backgroundImage: `url(${NavBackground})`}}>
            </div>
            <div className="px-32 pt-10">
              <div className="flex space-x-3">
                <button className="uppercase text-xl bg-cyan-800 text-white px-5 py-3 rounded-lg">Description</button>
                <button className="uppercase text-xl bg-cyan-800 text-white px-5 py-3 rounded-lg">pra & main event</button>
              </div>
              <div className="flex bg-no-repeat bg-cover bg-center h-36 rounded-xl mt-5 p-8 text-3xl text-white" style={{backgroundImage: `url(${DescBackground})`}}>
              Grab It Fast 2021 terdiri atas main event dan pra event. Main event terdiri atas rangkaian acara try out, seminar, expo, penampilan dari pengisi acara, dan puncaknya adalah penampilan dari ...
              </div>
            </div>

            <div className="pt-24">
              <img src={Throwback} className="w-4/12 mx-auto" alt="" />

              <div className="flex justify-center space-x-10">
                <div>
                  <img src={Tower1} className="w-48" alt="" />
                  <div className="text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2021</span>
                  </div>
                </div>
                <div>
                  <img src={Tower2} className="w-48" alt="" />
                  <div className="text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2020</span>
                  </div>
                </div>
                <div>
                  <img src={Tower3} className="w-48" alt="" />
                  <div className="text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2019</span>
                  </div>
                </div>
                <div>
                  <img src={Tower4} className="w-48" alt="" />
                  <div className="text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2018</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

  
      </div>
    </div>
  );
}

export default App;
