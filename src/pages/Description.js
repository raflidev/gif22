import React from 'react'

import DesBackground from "../assets/images/background_descpage.png"
import Head from "../assets/images/head.png"
import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

function Description() {
  return (
    <div className="font-lansdowne min-h-screen bg-no-repeat bg-cover bg-top " style={{backgroundImage: `url(${DesBackground})`}}>
      <Navbar/>
      <div>
        <div className="flex pt-40">
          <div className="hidden lg:block lg:w-1/6">
            <Navigator/>
          </div>
          <div className="mx-6 lg:mx-0 w-6/6 lg:w-5/6 pr-0 lg:pr-20">
            <div className="transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-100 duration-300">
              <img src={Head} className="-rotate-12" alt="" />
              <div className="bg-neutral-200 rounded-xl p-8 text-3xl">
              Grab It Fast 2022 merupakan kegiatan yang diselenggarakan oleh Family of Rain City (FORCY) Telkom University, yakni komunitas mahasiswa dari Bogor yang berada di Telkom University. Kegiatan ini menjadi salah satu upaya dalam mempromosikan Telkom University kepada masyarakat Bogor dan sekitarnya yang terdiri atas pra-event dan main event. Pra event terdiri atas rangkaian acara Forcy Championship, Sosialisasi, dan Try Out sedangkan main event terdiri atas rangkaian acara talkshow dan penampilan dari bintang tamu ternama sebagai puncak acara.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description