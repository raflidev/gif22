import React, { useEffect, useState } from 'react'
import HoverImage from "react-hover-image";
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
import Throwback2 from "./assets/images/Throwback2.png";

import Tower1 from "./assets/images/tower/2021.png";
import Tower2 from "./assets/images/tower/2020.png";
import Tower3 from "./assets/images/tower/2019.png";
import Tower4 from "./assets/images/tower/2018.png";

import Tower1_2 from "./assets/images/tower/2021_2.png";
import Tower2_2 from "./assets/images/tower/2020_2.png";
import Tower3_2 from "./assets/images/tower/2019_2.png";
import Tower4_2 from "./assets/images/tower/2018_2.png";

function App() {
  const temp1 = "Grab It Fast 2021 terdiri atas main event dan pra event. Main event terdiri atas rangkaian acara try out, seminar, expo, penampilan dari pengisi acara, dan puncaknya adalah penampilan dari ... <a href='#' class='text-blue-500 hover:text-blue-200 hover:underline'>Read More</a>"
  const temp2 = "Forcy Championship (FORCHAMP) merupakan ajang kompetisi yang diselenggarakan oleh komunitas mahasiswa Bogor di Telkom University. Pra event forchamp ini ... <a href='#' class='text-blue-500 hover:text-blue-200 hover:underline'>Read More</a>"
  const [Desc, setDesc] = useState("")

  useEffect(() => {
    setDesc(temp1);
  },[])
  
  return (
    <div className="font-lansdowne">
      <Navbar/>
      <div className="h-full bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${HomeBackground})`}}>
        <div className="flex h-full">
          <div className="m-auto pt-40">
            <img src={logo_gif} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-auto w-full lg:w-5/12" alt="" />
          </div>
        </div>
        <div className="-mt-0 lg:-mt-56 xl:-mt-0 min-h-full">
            <div className="justify-center space-x-16 mt-72 hidden lg:flex">
              <div>
                <img src={About} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  ABOUT US
                </div>
              </div>
              <div>
                <img src={Lineup} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  LINE UP
                </div>
              </div>
              <div>
                <img src={Map} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  MAPS
                </div>
              </div>
              <div>
                <img src={Maskot} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  MASKOT
                </div>
              </div>
              <div>
                <img src={Theme} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  THEME
                </div>
              </div>
            </div>
            <div className="hidden lg:block -mt-16 bg-no-repeat bg-contain bg-center h-16" style={{backgroundImage: `url(${NavBackground})`}}>
            </div>
            <div className="px-5 lg:px-32 pt-0 lg:pt-10">
              <div className="flex space-x-3">
                <button className="transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 uppercase text-xl bg-cyan-800 hover:bg-cyan-500  text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg text-shadow-white" onClick={() => setDesc(temp1)}>Description</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 uppercase text-xl bg-cyan-800 hover:bg-cyan-500 text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg text-shadow-white" onClick={() => setDesc(temp2)}>pra & main event</button>
              </div>
              <div className="flex bg-no-repeat bg-cover bg-center h-96 sm:h-80 md:h-48 lg:h-36 rounded-xl mt-5 p-4 md:p-6 lg:p-4 xl:p-8 text-3xl text-white text-shadow-white bg-cyan-800" style={{backgroundImage: `url(${DescBackground})`}}>
                <div dangerouslySetInnerHTML={{ __html: Desc }} />
              </div>
            </div>

            <div className="pt-5 lg:pt-32">
              <div className="absolute">
                <HoverImage className="mt-10 md:-mt-10 lg:-mt-16 xl:-mt-0 transition ease-in-out delay-150 hover:-translate-y-1 duration-500 w-5/6 lg:w-7/12 xl:w-4/12 mx-auto" src={Throwback} hoverSrc={Throwback2} />
              </div>

              <div className="grid grid-cols-2 gap-2 md:flex md:flex-row justify-center space-x-0 xl:space-x-10 pt-64">
                <div>
                  <HoverImage src={Tower1} className="w-48 mx-auto" hoverSrc={Tower1_2} />
                  <div className="text-shadow-purple text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2021</span>
                  </div>
                </div>
                <div>
                  <HoverImage src={Tower2} className="w-48 mx-auto" hoverSrc={Tower2_2} />
                  <div className="text-shadow-purple text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2020</span>
                  </div>
                </div>
                <div>
                  <HoverImage src={Tower3} className="w-48 mx-auto" hoverSrc={Tower3_2} />
                  <div className="text-shadow-purple text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2019</span>
                  </div>
                </div>
                <div>
                  <HoverImage src={Tower4} className="w-48 mx-auto" hoverSrc={Tower4_2} />
                  <div className="text-shadow-purple text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2018</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-screen"></div>
            <div className="h-screen"></div>

          </div>

  
      </div>
    </div>
  );
}

export default App;
