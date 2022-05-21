import React from 'react'

import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

import ThrowbackBackground from "../assets/images/background_throwback.jpg"
import TitleThrowback from "../assets/images/throwback/title.png"
import flyer21 from "../assets/images/throwback/flyer 21.png"
import flyer20 from "../assets/images/throwback/flyer 20.png"
import flyer19 from "../assets/images/throwback/flyer 19.png"
import flyer18 from "../assets/images/throwback/flyer 18.png"

function Throwback() {
  return (
    <div className="bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${ThrowbackBackground})`}}>
      <Navbar/>
      <div className="pt-60">
        <div className="flex">
          <div className="hidden lg:block w-1/6">
            <Navigator/>
          </div>
          <div className="w-full lg:w-5/6">
            <div className="m-auto pb-40">
              <img src={TitleThrowback} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-auto w-full lg:w-4/12" alt="" />
            </div>
            <div className="flex-col flex-none lg:flex lg:flex-row justify-between items-center">
              <div className="w-full lg:w-4/12">
                <img src={flyer18} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-8/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-purple">
                  GRAB IT FAST 2018
                </div>
              </div>
            </div>

            <div className="flex-col flex-none lg:flex lg:flex-row-reverse justify-between items-center">
              <div className="w-full lg:w-4/12">
                <img src={flyer19} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-8/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-purple">
                  GRAB IT FAST 2019
                </div>
              </div>
            </div>

            <div className="flex-col flex-none lg:flex lg:flex-row justify-between items-center">
              <div className="w-full lg:w-4/12">
                <img src={flyer20} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-8/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-purple">
                  GRAB IT FAST 2020
                </div>
              </div>
            </div>

            <div className="flex-col flex-none lg:flex lg:flex-row-reverse justify-between items-center">
              <div className="w-full lg:w-4/12">
                <img src={flyer21} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-8/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-purple">
                  GRAB IT FAST 2021
                </div>
              </div>
            </div>
            
            <div className="h-screen"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Throwback