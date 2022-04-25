import React from 'react'

import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

import MaskotBackground from "../assets/images/background_maskot.jpg"
import Geulis from "../assets/images/maskot/geulis.png"
import Ujang from "../assets/images/maskot/ujang.png"
import Kasep from "../assets/images/maskot/kasep.png"

function Mascot() {
  return (
    <div className="bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${MaskotBackground})`}}>
      <Navbar/>
      <div className="pt-60">
        <div className="flex">
          <div className="hidden lg:block w-1/6">
            <Navigator/>
          </div>
          <div className="w-full lg:w-5/6">

            <div className="flex-col flex-none lg:flex lg:flex-row justify-between items-center">
              <div className="w-full lg:w-5/12">
                <img src={Kasep} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-7/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-white">
                  Kasep
                </div>
                <div className="font-fahkwang text-shadow-white text-red-100 w-full lg:w-11/12 text-justify space-y-5 pb-10 lg:pb-0">
                  <p>
                    Kenalin, ini maskot pertama yang akan nemenin kalian. Namanya Kasep, dia terkenal humble dan friendly. Kasep juga sangat kreatif, makanya Kasep sering memiliki ide-ide yang unik.
                  </p>
                  <p>
                    Oiya, si Kasep ini juga punya hobi baca buku, dia juga punya wawasan yang luas dan suka belajar dari hal-hal baru yang dia temui.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-col flex-none lg:flex lg:flex-row-reverse justify-between items-center">
              <div className="w-full lg:w-5/12">
                <img src={Ujang} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-7/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-white">
                  Ujang
                </div>
                <div className="font-fahkwang text-shadow-white text-red-100 w-full lg:w-11/12 text-justify space-y-5 pb-10 lg:pb-0">
                  <p>
                    Nah setelah kenalan sama Kasep, yuk kita kenalan sama salah satu sahabatnya juga yang bernama Ujang. Ujang itu selalu ceria dan suka mengeksplorasi dengan mencoba hal-hal baru.
                  </p>
                  <p>
                    Selain itu, Ujang juga jago banget bikin inovasi-inovasi yang tidak terduga dengan tangan ajaibnya loh!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-col flex-none lg:flex lg:flex-row justify-between items-center">
              <div className="w-full lg:w-5/12">
                <img src={Geulis} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-7/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-white">
                  Geulis
                </div>
                <div className="font-fahkwang text-shadow-white text-red-100 w-full lg:w-11/12 text-justify space-y-5 pb-10 lg:pb-0">
                  <p>
                    Nah, kalo ini maskot kita yang terakhir. Kenalin, namanya Geulis. Dia punya kebiasaan unik banget, yaitu suka berimajinasi tinggi. Banyak imajinasinya yang bikin orang terkagum-kagum.
                  </p>
                  <p>
                  Oiya, si Geulis ini banyak disukain orang juga loh! Karena selain cantik, dia juga penyayang dan lemah lembut. Kalian juga bakal terpesona kalau ketemu si Geulis.
                  </p>
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

export default Mascot