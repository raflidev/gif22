import React from 'react'

import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

import MediaBackground from "../assets/images/background_media.jpg"
import TitleMedia from "../assets/images/media/media.png"
import Maskot from "../assets/images/media/maskot.png"

import Eduka from "../assets/images/media/edukamedia.jpg"

function Media() {
  return (
    <div className="bg-no-repeat bg-cover min-h-screen bg-top" style={{backgroundImage: `url(${MediaBackground})`}}>
      <Navbar/>
      <div className="pt-10 lg:pt-60">
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
            <div className="flex m-auto text-white">
              <div className="bg-transparant lg:bg-purple-800 hover:bg-purple-600 p-0 lg:p-5 rounded-3xl">
                <a href="https://www.edukasystem.com/" target="_blank" rel="noreferrer">
                  <img src={Eduka} className="w-full lg:w-5/6 px-3 lg:px-0  rounded-lg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media