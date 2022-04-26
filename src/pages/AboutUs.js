import React from 'react'
import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'
import HoverImage from "react-hover-image";

import AboutBackground from '../assets/images/background_about.jpg'
import About1 from '../assets/images/about.png'
import About2 from '../assets/images/about2.png'



function AboutUs() {
  return (
    <div className="font-lansdowne bg-no-repeat bg-cover bg-top " style={{backgroundImage: `url(${AboutBackground})`}}>
      <Navbar/>
      <div>
        <div className="flex pt-40">
          <div className="hidden lg:block lg:w-1/6">
            <Navigator/>
          </div>
          <div className="w-6/6 lg:w-5/6 pr-0 lg:pr-20">
            <HoverImage className="transition ease-in-out delay-150 hover:-translate-y-1 duration-500 w-5/6 lg:w-7/12 xl:w-4/12 mx-auto lg:mx-0 lg:ml-auto" src={About1} hoverSrc={About2} />

            <div className=" font-fahkwang font-bold text-white px-10 lg:px-0 text-2xl lg:text-base mx-auto ml-0 lg:ml-auto lg:mx-0 w-full lg:w-1/2 text-justify">
            Grab It Fast 2022 merupakan kegiatan yang diselenggarakan oleh Family of Rain City (FORCY) Telkom University, yakni komunitas mahasiswa dari Bogor yang berada di Telkom University. Kegiatan ini menjadi salah satu upaya dalam mempromosikan Telkom University kepada masyarakat Bogor dan sekitarnya yang terdiri atas pra-event dan main event. Pra event terdiri atas rangkaian acara Forcy Championship, Sosialisasi, dan Try Out sedangkan main event terdiri atas rangkaian acara talkshow dan penampilan dari bintang tamu ternama sebagai puncak acara.
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  )
}

export default AboutUs