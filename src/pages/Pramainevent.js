import React from 'react'
import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

import PraBackround from "../assets/images/pramainevent.jpg"
import Praevent from "../assets/images/praevent/praevent.png"
import Main from "../assets/images/praevent/main.png"

function Pramainevent() {
  return (
    <div className="font-lansdowne bg-no-repeat min-h-screen bg-cover bg-top" style={{backgroundImage: `url(${PraBackround})`}}>
      <Navbar/>
      <div>
        <div className="flex pt-40">
          <div className="hidden lg:block lg:w-1/6">
            <Navigator/>
          </div>
          <div className="mx-6 lg:mx-0 w-6/6 lg:w-5/6 pr-0 lg:pr-20">
            <div className="transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-100 duration-300">
              <img src={Praevent} className="w-2/6 -ml-10 -rotate-12" alt="" />
              <div className="bg-neutral-200 rounded-xl p-8 text-3xl">
                <div className="font-bold">
                  Forcy Championship 2021
                </div>
                <span>
                Forcy Championship (FORCHAMP) merupakan ajang kompetisi yang diselenggarakan oleh komunitas mahasiswa Bogor di Telkom University. Rangkaian Pra Event Forchamp ini melibatkan beberapa kompetisi, yaitu kompetisi musik, poster, dan e-sport. Dari keempat kompetisi tersebut diharapkan dapat meningkatkan sportivitas, kerja sama, keaktifan, kekompakan, serta menumbuhkan rasa solidaritas.
                </span>
              </div>
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-100 duration-300">
              <img src={Main} className="w-2/6 ml-auto rotate-12" alt="" />
              <div className="bg-neutral-200 rounded-xl p-8 text-3xl space-y-10">
                <div>
                  <div className="font-bold">
                    Try Out UTBK & Telkom University
                  </div>
                  <span>
                    Memberikan soal-soal kepada para peserta dalam bentuk try out secara online yang bertujuan agar membantu mereka dalam mempersiapkan diri untuk mengikuti seleksi masuk perguruan tinggi khususnya Telkom University.
                  </span>
                </div>

                <div>
                  <div className="font-bold">
                    Road Show
                  </div>
                  <span>
                    Road Show merupakan kegiatan sosialisasi untuk mempromosikan Telkom University ke beberapa sekolah menengah atas yang bertujuan agar para siswa mendapatkan informasi yang lebih jelas mengenai Telkom University.
                  </span>
                </div>
                <div>
                  <div className="font-bold">
                  Tel-U Expo
                  </div>
                  <span>
                  Tel-U Expo merupakan kegiatan untuk memperkenalkan, serta menunjukan hasil karya tiap-tiap jurusan di Telkom University kepada para peserta dengan tujuan agar peserta dapat lebih tertarik dan memiliki gambaran yang lebih jelas mengenai jurusan yang mereka minati di Telkom University.
                  </span>
                </div>
                <div>
                  <div className="font-bold">
                  Talkshow 
                  </div>
                  <span>
                  Talkshow merupakan kegiatan yang bertujuan untuk membahas suatu materi dan mencari solusi terhadap permasalahan dengan cara interaksi kepada para peserta. Dengan begitu, para peserta seminar mendapatkan informasi baru yang dapat dikembangkan menjadi sesuatu yang lebih luas kepada orang banyak.
                  </span>
                </div>
                <div>
                  <div className="font-bold">
                  Special Perfomance 
                  </div>
                  <span>
                  Kegiatan Grab It Fast 2022 akan ditutup oleh pengisi acara ternama sebagai salah satu daya tarik sekaligus sebagai puncak acara.
                  </span>
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