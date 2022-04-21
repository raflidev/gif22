import React from 'react'

import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

import MaskotBackground from "../assets/images/background_maskot.jpg"
import Geulis from "../assets/images/maskot/geulis.png"
import Ujang from "../assets/images/maskot/ujang.png"
import Kasep from "../assets/images/maskot/kasep.png"

function Maskot() {
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
                <img src={Geulis} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-7/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-white">
                  Geulis
                </div>
                <div className="font-fahkwang text-shadow-white text-red-100 w-full lg:w-11/12 text-justify space-y-5 pb-10 lg:pb-0">
                  <p>
                    Perkenalkan! Si Geulis adalah maskot kami, Geulis ini selain memiliki paras yang cantik dia juga punya banyak keahlian lhoo! Dia memiliki karakter ceria, cerdas dan memiliki rasa ingin tahu yang tinggi sesuai sama warna kesukaannya yaitu warna kuning nih, peeps!
                  </p>
                  <p>
                    Nah, karena rasa ingin tahunya yang tinggi dia bisa dibilang multi tasking lhoo saking banyak nya hal yang dia suka pelajarin. Oiya! si Geulis ini punya hobi menggambar. Katanya, lewat gambar dia bisa mengekspresikan apapun. Selama beraktivitas, si Geulis selalu ditemani dengan si Kasep dan si Ujang.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-col flex-none lg:flex lg:flex-row-reverse justify-between items-center">
              <div className="w-full lg:w-5/12">
                <img src={Kasep} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-7/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-white">
                  Kasep
                </div>
                <div className="font-fahkwang text-shadow-white text-red-100 w-full lg:w-11/12 text-justify space-y-5 pb-10 lg:pb-0">
                  <p>
                    Kenalin nih maskot kita selain si Geulis, dia juga punya teman namanya si Kasep!! Kasep itu sangat kreatif dan memiliki ide-ide unik yang tentunya sangat mind blowing.
                  </p>
                  <p>
                    Oiya! Kasep sangat suka warna oranye, karena melambangkan semangat, optimisme dan percaya diri. Wihh, seru ya temenan sama si Kasep!!!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-col flex-none lg:flex lg:flex-row justify-between items-center">
              <div className="w-full lg:w-5/12">
                <img src={Ujang} className="mx-auto lg:mx-0 w-1/2 lg:w-9/12" alt="" />
              </div>
              <div className="w-full lg:w-7/12 px-10">
                <div className="font-axr text-center lg:text-left py-5 lg:py-0 text-red-100 uppercase text-5xl text-shadow-white">
                  Ujang
                </div>
                <div className="font-fahkwang text-shadow-white text-red-100 w-full lg:w-11/12 text-justify space-y-5 pb-10 lg:pb-0">
                  <p>
                    Nah, ini adalah temannya si Geulis dan si Kasep, yang bernama si Ujang. Ujang itu selalu ceria dan tidak pernah takut untuk mengekspresikan dirinya, dia menyukai semua warna loh!! Namun diantara semua warna yang paling dia sukai adalah warna merah. Sesuai dengan karakternya yang berani dalam mengekspresikan apapun yang dia rasakan yaaa peeps.
                  </p>
                  <p>
                    Eiitss, jangan takut sama si Ujang ya peeps! walaupun dia hewan tapi dia mau berteman dengan siapa saja dan selalu ceria lhoo, jadi jangan takut yaa. Oiya! di acara Grab It Fast 2021 kalo kalian mau bawa hewan peliharaan kalian, boleh banget nih, nanti pasti bakal di temenin sama si Ujang!
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

export default Maskot