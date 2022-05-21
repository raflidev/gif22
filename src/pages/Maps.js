import React from 'react'

import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

import MapsBackground from "../assets/images/background_maps.jpg"
import TitleThrowback from "../assets/images/maps/teks maps.png"
import Denah from "../assets/images/maps/denah.png"


function Maps() {
  return (
    <div className="bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${MapsBackground})`}}>
      <Navbar/>
      <div className="pt-60">
        <div className="flex">
          <div className="hidden lg:block w-1/6">
            <Navigator/>
          </div>
          <div className="w-full lg:w-5/6">
            <div className="m-auto pb-20">
              <img src={TitleThrowback} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-auto w-full lg:w-4/12" alt="" />
            </div>
            <div className="w-5/6 lg:w-4/6 m-auto">
              <img className="mx-auto mb-10" src={Denah} alt="" />
              <div className="font-lansdowne text-4xl text-pink-300">
                <h1 className="uppercase">Keterangan tempat:</h1>
                <div className="mt-5 flex-row lg:flex space-x-0 lg:space-x-20">
                  <div className="w-full lg:w-1/2 space-y-3">
                    <div className="flex">
                      <div className="w-1/6">A</div><div className="w-5/6">: Panggung</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">B</div><div className="w-5/6">: Tempat Penonton</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">C1</div><div className="w-5/6">: Toilet</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">C2</div><div className="w-5/6">: Toilet</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">D1</div><div className="w-5/6">: MASUK GOR</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">D2</div><div className="w-5/6">: keluar GOR</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">E</div><div className="w-5/6">: Mini expo</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">F</div><div className="w-5/6">: Medis</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">G</div><div className="w-5/6">: Booth Food & Beverage</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">H1</div><div className="w-5/6">: Booth Sponsor</div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-3">
                    <div className="flex">
                      <div className="w-1/6">H2</div><div className="w-5/6">: Booth Sponsor</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">H3</div><div className="w-5/6">: Booth Sponsor</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">i</div><div className="w-5/6">: PhotoBooth</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">J</div><div className="w-5/6">: gate</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">K</div><div className="w-5/6">: Foodtruck</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">L1</div><div className="w-5/6">: Clear area</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">L2</div><div className="w-5/6">: Clear area</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">L3</div><div className="w-5/6">: Clear area</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/6">L4</div><div className="w-5/6">: Clear area</div>
                    </div>
                  </div>
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

export default Maps