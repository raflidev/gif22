import React, { useEffect, useState } from 'react'
import HoverImage from "react-hover-image";
import Navbar from '../components/Navbar';

import logo_gif from "../assets/images/logo_gif.png";
import About from "../assets/images/navigation/about.png";
import Lineup from "../assets/images/navigation/lineup.png";
import Map from "../assets/images/navigation/map.png";
import Mascot from "../assets/images/navigation/maskot.png";
import Theme from "../assets/images/navigation/theme.png";
import Media from "../assets/images/navigation/media.png";
import ThrowbackIcon from "../assets/images/navigation/throwback.png";
import NavBackground from "../assets/images/navigation/background.png";
import DescBackground from "../assets/images/background_desc.png";

import HomeBackground from "../assets/images/background_home.jpg";
import Throwback from "../assets/images/Throwback.png";
import Throwback2 from "../assets/images/Throwback2.png";

import Tower1 from "../assets/images/tower/2021.png";
import Tower2 from "../assets/images/tower/2020.png";
import Tower3 from "../assets/images/tower/2019.png";
import Tower4 from "../assets/images/tower/2018.png";

import Tower1_2 from "../assets/images/tower/2021_2.png";
import Tower2_2 from "../assets/images/tower/2020_2.png";
import Tower3_2 from "../assets/images/tower/2019_2.png";
import Tower4_2 from "../assets/images/tower/2018_2.png";
import { Link } from 'react-router-dom';



import baseOne from "../assets/images/media/sponsorship/Base One.jpg"
import Eduka from "../assets/images/media/sponsorship/Eduka.png"
import GSC from "../assets/images/media/sponsorship/GSC.png"
import hcb from "../assets/images/media/sponsorship/hcb.jpg"
import JNE from "../assets/images/media/sponsorship/JNE 1.png"
import ks from "../assets/images/media/sponsorship/ks.png"
import ruru from "../assets/images/media/sponsorship/Ruru.jpg"
import sisbar from "../assets/images/media/sponsorship/Sisbar 1.GIF"
import telkom from "../assets/images/media/sponsorship/telkom.jpg"

import medpart1 from "../assets/images/media/medpart/1.jpg"
import medpart2 from "../assets/images/media/medpart/2.PNG"
import medpart3 from "../assets/images/media/medpart/3.PNG"
import medpart4 from "../assets/images/media/medpart/4.PNG"
import medpart5 from "../assets/images/media/medpart/5.PNG"
import medpart6 from "../assets/images/media/medpart/6.JPG"
import medpart7 from "../assets/images/media/medpart/7.JPG"
import medpart9 from "../assets/images/media/medpart/9.JPG"
import medpart10 from "../assets/images/media/medpart/10.JPG"
import medpart11 from "../assets/images/media/medpart/11.JPG"
import medpart12 from "../assets/images/media/medpart/12.JPG"
import medpart13 from "../assets/images/media/medpart/13.JPG"
import medpart14 from "../assets/images/media/medpart/14.JPG"
import medpart15 from "../assets/images/media/medpart/15.JPG"


function Home() {
  const temp1 = "Grab It Fast 2022 merupakan kegiatan yang diselenggarakan oleh Family of Rain City (FORCY) Telkom University... <a href='/about-us' class='text-blue-500 hover:text-blue-200 hover:underline'>Read More</a>"
  const temp2 = "Forcy Championship (FORCHAMP) merupakan ajang kompetisi yang diselenggarakan oleh komunitas mahasiswa Bogor di Telkom University. Pra event forchamp ini ... <a href='/pramainevent' class='text-blue-500 hover:text-blue-200 hover:underline'>Read More</a>"

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
            <div className="justify-center space-x-20 mt-72 hidden lg:flex">
              <div>
                <Link to="/about-us">
                  <img src={About} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                  <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                    ABOUT US
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/line-up">
                  <img src={Lineup} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                  <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                    LINE UP
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/maps">
                  <img src={Map} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                  <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                    MAPS
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/mascot">
                  <img src={Mascot} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                  <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                    MASCOT
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/theme">
                  <img src={Theme} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                  <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                    THEME
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/throwback">
                  <img src={ThrowbackIcon} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                  <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                    THROWBACK
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/media">
                  <img src={Media} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45" alt="" />
                  <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
                    MEDIA
                  </div>
                </Link>
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
                <HoverImage className="mt-10 laptop-1120:-mt-40 md:-mt-10 lg:-mt-28 laptop-1440:w-6/12 xl:-mt-20 transition ease-in-out delay-150 hover:-translate-y-1 duration-500 w-5/6 md:w-7/12 lg:w-7/12 xl:w-4/12 mx-auto" src={Throwback} hoverSrc={Throwback2} />
              </div>

              <div className="grid grid-cols-2 gap-2 md:flex -mt-0 lg:mt-20 lg:space-x-0 md:-mt-14 xl:-mt-20 xl:pt-36  laptop-1344:space-x-3 laptop-1344:-mt-36 laptop-1366:-mt-10 laptop-1440:-mt-14 laptop-1440:pt-64 laptop-1440:space-x-2 laptop-1536:mt-3 laptop-1536:space-x-5 laptop-1120:space-x-0 laptop-1120:-mt-24 laptop-1600:mt-20 laptop-1600:space-x-10 md:flex-row justify-center space-x-0 xl:space-x-10 pt-64">
                <a href="https://www.youtube.com/watch?v=pDcjZ9-kJkM" rel="noreferrer" target="_blank">
                  <HoverImage src={Tower1} className="w-48 mx-auto" hoverSrc={Tower1_2} />
                  <div className="text-shadow-purple text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2021</span>
                  </div>
                </a>
                <a href="https://www.youtube.com/watch?v=ip3z8WMNRMs&ab_channel=ForcyTel_U" rel="noreferrer" target="_blank">
                  <HoverImage src={Tower2} className="w-48 mx-auto" hoverSrc={Tower2_2} />
                  <div className="text-shadow-purple text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2020</span>
                  </div>
                </a>
                <a href="https://www.youtube.com/watch?v=llxivSjULgs&ab_channel=GrabItFastTelkom" rel="noreferrer" target="_blank">
                  <HoverImage src={Tower3} className="w-48 mx-auto" hoverSrc={Tower3_2} />
                  <div className="text-shadow-purple text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2019</span>
                  </div>
                </a>
                <a href="https://www.youtube.com/watch?v=l3HzFG4uKRo&ab_channel=GrabItFastTelkom" rel="noreferrer" target="_blank">
                  <HoverImage src={Tower4} className="w-48 mx-auto" hoverSrc={Tower4_2} />
                  <div className="text-shadow-purple text-5xl text-center tracking-tighter -mt-5 text-shadow-lg text-white font-mermaid">
                    GIF <span className="block">2018</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="h-0 md:h-screen"></div>
            <div className="h-0 md:h-64"></div>
            <div className="">
              <div className="mx-auto p-8 w-11/12">
                <div className="py-10 lg:py-5 flex">
                  <h1 className="mx-auto font-lansdowne text-5xl lg:text-4xl text-white">Sponsorship</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-12 content-center gap-4">
                  <img src={baseOne} className="rounded-lg" alt="" />
                  <img src={Eduka} className="rounded-lg" alt="" />
                  <img src={GSC} className="rounded-lg" alt="" />
                  <img src={hcb} className="rounded-lg" alt="" />
                  <img src={JNE} className="rounded-lg" alt="" />
                  <img src={telkom} className="rounded-lg" alt="" />
                  <img src={ks} className="rounded-lg" alt="" />
                  <img src={ruru} className="rounded-lg" alt="" />
                  <img src={sisbar} className="rounded-lg" alt="" />
                </div>
                <div className="py-10 lg:py-5 flex">
                  <h1 className="mx-auto font-lansdowne text-5xl lg:text-4xl text-white">Media Partner</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-4">
                    <img src={medpart1} className="rounded-lg" alt="" />
                    <img src={medpart2} className="rounded-lg" alt="" />
                    <img src={medpart3} className="rounded-lg" alt="" />
                    <img src={medpart4} className="rounded-lg" alt="" />
                    <img src={medpart5} className="rounded-lg" alt="" />
                    <img src={medpart6} className="rounded-lg" alt="" />
                    <img src={medpart7} className="rounded-lg" alt="" />
                    <img src={medpart9} className="rounded-lg" alt="" />
                    <img src={medpart10} className="rounded-lg" alt="" />
                    <img src={medpart11} className="rounded-lg" alt="" />
                    <img src={medpart12} className="rounded-lg" alt="" />
                    <img src={medpart13} className="rounded-lg" alt="" />
                    <img src={medpart14} className="rounded-lg" alt="" />
                    <img src={medpart15} className="rounded-lg" alt="" />
                  </div>
              </div>
            </div>

            
            

          </div>

  
      </div>
    </div>
  );
}

export default Home;
