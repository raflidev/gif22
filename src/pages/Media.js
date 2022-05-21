import React from 'react'

import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

import MediaBackground from "../assets/images/background_media.jpg"
import TitleMedia from "../assets/images/media/media.png"
import Maskot from "../assets/images/media/maskot.png"


import baseOne from "../assets/images/media/sponsorship/Base One.jpg"
import Eduka from "../assets/images/media/sponsorship/Eduka.png"
import GSC from "../assets/images/media/sponsorship/GSC.png"
import hcb from "../assets/images/media/sponsorship/hcb.jpg"
import JNE from "../assets/images/media/sponsorship/JNE 1.png"
import ks from "../assets/images/media/sponsorship/ks.png"
import ruru from "../assets/images/media/sponsorship/Ruru.jpg"
import sisbar from "../assets/images/media/sponsorship/Sisbar 1.GIF"

import medpart1 from "../assets/images/media/medpart/1.jpg"
import medpart2 from "../assets/images/media/medpart/2.PNG"
import medpart3 from "../assets/images/media/medpart/3.PNG"
import medpart4 from "../assets/images/media/medpart/4.PNG"
import medpart5 from "../assets/images/media/medpart/5.PNG"
import medpart6 from "../assets/images/media/medpart/6.JPG"
import medpart7 from "../assets/images/media/medpart/7.JPG"
import medpart8 from "../assets/images/media/medpart/8.JPG"
import medpart9 from "../assets/images/media/medpart/9.JPG"
import medpart10 from "../assets/images/media/medpart/10.JPG"
import medpart11 from "../assets/images/media/medpart/11.JPG"
import medpart12 from "../assets/images/media/medpart/12.JPG"
import medpart13 from "../assets/images/media/medpart/13.JPG"
import medpart14 from "../assets/images/media/medpart/14.JPG"
import medpart15 from "../assets/images/media/medpart/15.JPG"


function Media() {
  return (
    <div className="bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${MediaBackground})`}}>
      <Navbar/>
      <div className="pt-60">
        <div className="flex">
          <div className="hidden lg:block w-1/6">
            <Navigator/>
          </div>
          <div className="w-full lg:w-5/6">
            <div className="m-auto pb-20">
              <img src={TitleMedia} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-auto w-full lg:w-4/12" alt="" />
            </div>
            <div>
              <img src={Maskot} className="hidden lg:block absolute w-5/12 right-0" alt="" />
            </div>
            <div className="flex m-auto  bg-purple-800 rounded-3xl text-white">
              <div className="p-8 pr-0 lg:pr-72 w-11/12">
                <div className="py-10 lg:py-5 flex">
                  <h1 className="mx-auto font-lansdowne text-5xl lg:text-4xl">Sponsorship</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                  <img src={baseOne} alt="" />
                  <img src={Eduka} alt="" />
                  <img src={GSC} alt="" />
                  <img src={hcb} alt="" />
                  <img src={JNE} alt="" />
                  <img src={ks} alt="" />
                  <img src={ruru} alt="" />
                  <img src={sisbar} alt="" />
                </div>
                <div className="py-10 lg:py-5 flex">
                  <h1 className="mx-auto font-lansdowne text-5xl lg:text-4xl">Media Partner</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                  <img src={medpart1} alt="" />
                  <img src={medpart2} alt="" />
                  <img src={medpart3} alt="" />
                  <img src={medpart4} alt="" />
                  <img src={medpart5} alt="" />
                  <img src={medpart6} alt="" />
                  <img src={medpart7} alt="" />
                  <img src={medpart8} alt="" />
                  <img src={medpart9} alt="" />
                  <img src={medpart10} alt="" />
                  <img src={medpart11} alt="" />
                  <img src={medpart12} alt="" />
                  <img src={medpart13} alt="" />
                  <img src={medpart14} alt="" />
                  <img src={medpart15} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media