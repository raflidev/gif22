import React from 'react'
import Navbar from '../components/Navbar'

import PraBackround from "../assets/images/pramainevent.jpg"
import Judul from "../assets/images/praevent/judul.png"
import Praevent from "../assets/images/praevent/praevent.png"
import Main from "../assets/images/praevent/main.png"

function Pramainevent() {
  return (
    <div className="font-lansdowne font-bold bg-no-repeat min-h-screen bg-cover bg-top" style={{backgroundImage: `url(${PraBackround})`}}>
      <Navbar/>
      <div>
        <div className="pt-40">
          <div className="mx-0 md:mx-6 lg:mx-0 text-white">
            <img src={Judul} alt="" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-auto -mb-0 lg:-mb-20" />
              <img src={Praevent} alt="" className="block lg:hidden mr-auto w-4/12 md:w-3/12 mb-5 lg:w-3/12" />
            <div className="space-y-10 mx-auto w-5/6 px-0 xl:px-36">

              <div className="text-2xl">
              <img src={Praevent} alt="" className="hidden lg:block absolute -z-0 w-1/6 -left-10 xl:-left-0 -rotate-12 pt-0 lg:pt-16" />
                <div className="font-medium text-4xl lg:text-7xl">
                  Forcy Championship (FORCHAMP)
                </div>
                <div className="p-4 lg:py-8 -ml-5 px-10 lg:px-28 rounded-3xl lg:rounded-full font-fahkwang text-left lg:text-justify mt-2 bg-sky-900">
                  Forcy Championship (FORCHAMP) merupakan ajang kompetisi yang diselenggarakan oleh komunitas mahasiswa Bogor di Telkom University. Rangkaian Pra Event Forchamp ini melibatkan beberapa kompetisi, yaitu kompetisi musik, poster, dan e-sport. Dari keempat kompetisi tersebut diharapkan dapat meningkatkan sportivitas, kerja sama, keaktifan, kekompakan, serta menumbuhkan rasa solidaritas.
                </div>
              </div>

              <div className="text-2xl">
                <div className="font-medium text-4xl lg:text-7xl">
                  Try Out UTBK & Telkom University
                </div>
                <div className="p-4 lg:py-8 -ml-5 px-10 lg:px-28 rounded-3xl lg:rounded-full font-fahkwang text-left lg:text-justify mt-2 bg-sky-900">
                  Memberikan soal-soal kepada para peserta dalam bentuk try out secara online yang bertujuan agar membantu mereka dalam mempersiapkan diri untuk mengikuti seleksi masuk perguruan tinggi khususnya Telkom University.
                </div>
              </div>

              <div className="text-2xl ">
                <div className="font-medium text-4xl lg:text-7xl">
                  Road Show
                </div>
                <div className="p-4 lg:py-8 -ml-5 px-10 lg:px-28 rounded-3xl lg:rounded-full font-fahkwang text-left lg:text-justify mt-2 bg-sky-900"> 
                  Road Show merupakan kegiatan sosialisasi untuk mempromosikan Telkom University ke beberapa sekolah menengah atas yang bertujuan agar para siswa mendapatkan informasi yang lebih jelas mengenai Telkom University.
                </div>
              </div>


              <div className="text-2xl">
                <img src={Main} alt="" className="ml-auto -mr-0 md:-mr-10 lg:-mr-20 xl:-mr-28 w-4/12 md:w-3/12 mb-5 lg:w-3/12" />
                <div className="font-medium text-4xl lg:text-7xl">
                Tel-U Expo
                </div>
                <div className="p-4 lg:py-8 -ml-5 px-10 lg:px-28 rounded-3xl lg:rounded-full font-fahkwang text-left lg:text-justify mt-2 bg-sky-900">
                Tel-U Expo merupakan kegiatan untuk memperkenalkan, serta menunjukan hasil karya tiap-tiap jurusan di Telkom University kepada para peserta dengan tujuan agar peserta dapat lebih tertarik dan memiliki gambaran yang lebih jelas mengenai jurusan yang mereka minati di Telkom University.
                </div>
              </div>
              
              <div className="text-2xl">
                <div className="font-medium text-4xl lg:text-7xl">
                  Talkshow 
                </div>
                <div className="p-4 lg:py-8 -ml-5 px-10 lg:px-28 rounded-3xl lg:rounded-full font-fahkwang text-left lg:text-justify mt-2 bg-sky-900">
                  Talkshow merupakan kegiatan yang bertujuan untuk membahas suatu materi dan mencari solusi terhadap permasalahan dengan cara interaksi kepada para peserta. Dengan begitu, para peserta seminar mendapatkan informasi baru yang dapat dikembangkan menjadi sesuatu yang lebih luas kepada orang banyak.
                </div>
              </div>

              <div className="text-2xl">
                <div className="font-medium text-4xl lg:text-7xl">
                  Special Perfomance 
                </div>
                <div className="p-4 lg:py-8 -ml-5 px-10 lg:px-28 rounded-3xl lg:rounded-full font-fahkwang text-left lg:text-justify mt-2 bg-sky-900">
                  Kegiatan Grab It Fast 2022 akan ditutup oleh pengisi acara ternama sebagai salah satu daya tarik sekaligus sebagai puncak acara.
                </div>
              </div>

            </div>
            

          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  )
}

export default Pramainevent