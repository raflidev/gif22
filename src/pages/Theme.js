import React from 'react'
import Navbar from '../components/Navbar'

import temaBackground from "../assets/images/background_tema.jpg"
import descBackground from "../assets/images/theme/desc_background.png"
import Wonderland from "../assets/images/Wonderland.png"
import Navigator from '../components/Navigator'

function Theme() {
  return (
    <div className="font-lansdowne bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${temaBackground})`}}>
      <Navbar/>
      <div>
        <div className="flex pt-0 lg:pt-40">
          <div className="hidden lg:block lg:w-1/6">
            <Navigator/>
          </div>
          <div className="w-full lg:w-5/6">
            <div className="pt-40">
              <div>
                <div className="font-lansdowne uppercase text-center text-lg lg:text-5xl text-white">
                  <span className="bg-fuchsia-800 px-4 lg:px-8 py-2 lg:py-3 text-shadow-white">
                    tema acara
                  </span>
                </div>
              </div>
              <img src={Wonderland} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-full lg:w-4/6 mx-auto" alt="" />
              <div className='text-center'>
                <span className="uppercase text-white text-xl lg:text-4xl text-shadow-white italic">“Explore Your Imagination”</span>
              </div>

              <div className="mt-10 mx-auto w-full lg:w-10/12 font-fahkwang text-justify font-bold text-white lg:bg-no-repeat lg:bg-cover lg:h-64  xl:h-48 px-5 lg:py-2 xl:py-5 lg:px-20 py-5 items-center bg-center" style={{backgroundImage: `url(${descBackground})`}}>
              Dengan tema ini kami berusaha mengajak masyarakat Kota Bogor dan sekitarnya khususnya para pelajar SMA Sederajat untuk mengembangkan imajinasi dan juga sebagai wadah pendukung bagi mereka yang memiliki kemampuan di bidang akademik maupun non-akademik. Wonderland sendiri identik dengan imajinasi. Harapannya Grab It Fast 2022 dapat memberikan inspirasi bagi para pelajar bahwa dengan imajinasi setiap orang akan mampu berpikir di luar cara pandang yang biasa untuk mendapatkan hasil atau solusi yang luar biasa melalui ide-ide baru.
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  )
}

export default Theme