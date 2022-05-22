import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Navigator from '../components/Navigator'

import MapsBackground from "../assets/images/background_lineup_1.png"
import TitleThrowback from "../assets/images/lineup/line up.png"

import Igdi from "../assets/images/lineup/idgi.png"
import Vierra from "../assets/images/lineup/vierra.png"
import Evaalicia from "../assets/images/lineup/evaalicia.png"
import Chang from "../assets/images/lineup/chang.png"

import spotify from "../assets/images/lineup/spotify button.png"
import twitter from "../assets/images/lineup/twitter button.png"
import yt from "../assets/images/lineup/yt button.png"
import ig from "../assets/images/lineup/ig button.png"
import Back from "../assets/images/lineup/back button.png"


function LineUp() {

  const [star, setStar] = useState(false);
  const [modal, setModal] = useState(false);
  const [artis, setArtis] = useState('');

  var text = "";
  var linkSpotify = "";
  var linkYt = "";
  var linkIg = "";
  var linkTwitter = "";

  if(artis === "idgitaf") {
    text = `Idgitaf mulai dikenal setelah beberapa video unggahannya viral. Dengan suara vokal yang unik Idgitaf terus mengeluarkan karya-karyanya yang berhasil menarik perhatian. Lagu "Takut" adalah salah satu lagu yang melesat naik dan diperdengarkan di mana-mana`
    linkSpotify = "https://open.spotify.com/artist/7pFWMC2E7h8eL3SZyHRsRq?si=LluXHIAIQHe_y0CgzVDmAw&utm_source=copy-link"
    linkYt = "https://youtube.com/c/Idgitaf"
    linkIg = "https://instagram.com/idgitaf?igshid=YmMyMTA2M2Y="
    linkTwitter = "https://twitter.com/idgitaf"
  }else if(artis === "Eva alicia"){
    text = `Eva Alicia dikenal sebagai content creator yang insipiratif karena mengunggah konten-konten seninya, salah satunya ia berhasil mencetak rekor MURI lukisan terpanjang. Selain itu, ia juga memiliki bisnis emas saat belum menginjak umur 20 tahun.`
    linkIg = "https://www.instagram.com/aliciaeva9/?hl=id"
  }else if(artis === "the changcuters"){
    text = `The Changcuters adalah grup musik asal Bandung yang dibentuk pada tahun 2004. Aksi panggung dan penampilan yang unik dari The Changcuters membuat mereka sukses mendapatkan banyak penggemar`
    linkSpotify = "https://open.spotify.com/artist/1DZs8IjMvRQqB3i0uvgCc5?si=BSpuvi1dRyqgXM_yHQmsCA&utm_source=copy-link"
    linkYt = "https://youtube.com/c/WOWMaTVlLembagaPenyiaranTheChangcutersl"
    linkIg = "https://instagram.com/thechangcuters?igshid=YmMyMTA2M2Y="
    linkTwitter = "https://twitter.com/twitchangcuters"
  }else if(artis === "vierra"){
    text = `Vierratale (dulunya: Vierra) adalah grup band musik asal Jakarta yang terbentuk pada november 2008. Nama Vierratale langsung melambung berkat album pertama mereka (MY FIRST LOVE) yang terjual sebanyak 9 juta kopi dan mendapat penghargaan platinum.`
    linkSpotify = "https://open.spotify.com/artist/0yz3hWDSRvBZ8V5HMYVWzp?si=2fiNjY5XQlGZdDt-lFYGWw&utm_source=copy-link"
    linkYt = "https://youtube.com/channel/UCJonrfzGa5Q34dzpJ517Zzg"
    linkIg = "https://instagram.com/vierratale___?igshid=YmMyMTA2M2Y="
    linkTwitter = "https://twitter.com/Vierratale"
  }

  return (
    <div className="bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${MapsBackground})`}}>
      <Navbar/>
      <div className="pt-60">
        <div className="flex">
          <div className="hidden lg:block w-1/6">
            <Navigator/>
          </div>
          <div className="w-full lg:w-5/6">
            <div className="m-auto">
              <img src={TitleThrowback} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-auto w-full lg:w-5/12" alt="" />
            </div>
            <div className="flex mb-20">
              <div className="mx-auto space-x-6">
                <button onClick={() => setStar(false)} className="uppercase font-lansdowne text-2xl rounded-lg bg-purple-900 text-white px-6 py-2 hover:bg-purple-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Speakers</button>
                <button onClick={() => setStar(true)} className="uppercase font-lansdowne text-2xl rounded-lg bg-purple-900 text-white px-6 py-2 hover:bg-purple-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Guest Stars</button>
              </div>
            </div>
            <div className="w-5/6 lg:w-4/6 m-auto">
            { !star && !modal && 
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div onClick={() => {setArtis("idgitaf");setModal(true)}} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <img src={Igdi} alt="" />
                </div>
                <div onClick={() => {setArtis("Eva alicia");setModal(true)}} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <img src={Evaalicia} alt="" />
                </div>
                <div onClick={() => {setArtis("vierra");setModal(true)}} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <img src={Vierra} alt="" />
                </div>
              </div>
            } 
            { star && !modal && 
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div onClick={() => {setArtis("idgitaf");setModal(true)}} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <img src={Igdi} alt="" />
                </div>
                <div onClick={() => {setArtis("the changcuters");setModal(true)}} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <img src={Chang} alt="" />
                </div>
                <div onClick={() => {setArtis("vierra");setModal(true)}} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <img src={Vierra} alt="" />
                </div>
              </div>
            } 
            </div>

            { modal &&
              <div className="flex p-10 w-5/6 m-auto bg-cyan-700 rounded-xl">
                <div className="flex w-full space-x-5">
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center">
                      <div className="w-1/6">
                        <img onClick={() => {setModal(false)}} src={Back} alt="" />
                      </div>
                      <div className="w-5/6">
                        <span className="font-lansdowne text-4xl uppercase text-yellow-200 tracking-wider">About {artis}</span>
                      </div>
                    </div>
                    <p className='py-5 text-lg text-justify text-white'>
                     {text}
                    </p>
                  </div>
                  <div className="hidden lg:block w-1/2">
                    <div className="flex">
                      <div className="w-5/6">                     
                        {artis === "idgitaf" &&
                          <img className='ml-auto' src={Igdi} alt="" />
                        }
                        {artis === "Eva alicia" &&
                          <img className='ml-auto' src={Evaalicia} alt="" />
                        }
                        {artis === "vierra" &&
                          <img className='ml-auto' src={Vierra} alt="" />
                        }
                        {artis === "the changcuters" &&
                          <img className='ml-auto' src={Chang} alt="" />
                        }
                      </div>
                      <div className="w-1/6">
                      
                        <div className="flex flex-col space-y-5 mt-10 ml-3">
                        {artis !== "Eva alicia" &&
                          <a href={linkYt} target="_blank" rel="noreferrer">
                            <img src={yt} className="w-8/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" alt="" />
                          </a>
                        }
                          <a href={linkIg} target="_blank" rel="noreferrer">
                            <img src={ig} className="w-8/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" alt="" />
                          </a>
                        {artis !== "Eva alicia" &&
                          <a href={linkSpotify} target="_blank" rel="noreferrer">
                            <img src={spotify} className="w-8/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" alt="" />
                          </a>
                        }
                        {artis !== "Eva alicia" &&
                          <a href={linkTwitter} target="_blank" rel="noreferrer">
                            <img src={twitter} className="w-8/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" alt="" />
                          </a>
                        }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            <div className="h-screen"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineUp