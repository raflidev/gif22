import React from 'react'
import Navbar from '../components/Navbar'
import HoverImage from "react-hover-image";

import AboutBackground from '../assets/images/background_about.jpg'
import About1 from '../assets/images/about.png'
import About2 from '../assets/images/about2.png'

import About from "../assets/images/navigation/about.png";
import Lineup from "../assets/images/navigation/lineup.png";
import Map from "../assets/images/navigation/map.png";
import Maskot from "../assets/images/navigation/maskot.png";
import Theme from "../assets/images/navigation/theme.png";
import NavBackground from "../assets/images/navbarReverse.png";
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="font-lansdowne bg-no-repeat bg-cover bg-top " style={{backgroundImage: `url(${AboutBackground})`}}>
      <Navbar/>
      <div>
        <div className="flex pt-40">
          <div className="hidden lg:block lg:w-1/6">
          <div className="justify-center hidden space-y-2 lg:flex lg:flex-col bg-no-repeat bg-contain bg-bottom" style={{backgroundImage: `url(${NavBackground})`}}>
              <div>
                <Link to="/about-us">
                  <img src={About} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
                  <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                    ABOUT US
                  </div>
                </Link>
              </div>
              <div>
                <img src={Lineup} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  LINE UP
                </div>
              </div>
              <div>
                <img src={Map} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  MAPS
                </div>
              </div>
              <div>
                <img src={Maskot} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  MASKOT
                </div>
              </div>
              <div>
                <img src={Theme} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
                <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                  THEME
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/6 lg:w-5/6 pr-0 lg:pr-20">
            <HoverImage className="transition ease-in-out delay-150 hover:-translate-y-1 duration-500 w-5/6 lg:w-7/12 xl:w-4/12 mx-auto lg:mx-0 lg:ml-auto" src={About1} hoverSrc={About2} />

            <div className="font-fahkwang text-white px-10 lg:px-0 text-2xl lg:text-base mx-auto ml-0 lg:ml-auto lg:mx-0 w-full lg:w-1/2 text-justify">
              "Grab It Fast" (GIF) adalah kegiatan yang diselenggarakan oleh komunitas daerah Bogor FORCY (Family Of Rain City) di Telkom University sebagai salah satu langkah mempromosikan Telkom University kepada masyarakat Bogor khususnya siswa-siswi SMA/MA/MK dan sekitarnya dengan cara mengadakan try out, seminar, dan campus expo dari setiap fakultas yang ada di Telkom University melalui media yang proporsional. Kami juga mengundang pengisi acara ternama sebagai salah satu daya tarik bagi pelajar.
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  )
}

export default AboutUs