import React from 'react'
import About from "../assets/images/navigation/about.png";
import Lineup from "../assets/images/navigation/lineup.png";
import Map from "../assets/images/navigation/map.png";
import Mascot from "../assets/images/navigation/maskot.png";
import Theme from "../assets/images/navigation/theme.png";
import Media from "../assets/images/navigation/media.png";
import ThrowbackIcon from "../assets/images/navigation/throwback.png";
import NavBackground from "../assets/images/navbarReverse.png";
import { Link } from 'react-router-dom';
function Navigator() {
  return (
    <div className="font-lansdowne justify-center hidden space-y-2 lg:flex lg:flex-col bg-no-repeat bg-contain bg-bottom" style={{backgroundImage: `url(${NavBackground})`}}>
      <div>
        <Link to="/about-us">
          <img src={About} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
          <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
            ABOUT US
          </div>
        </Link>
      </div>
      <div>
        <Link to="/line-up">
          <img src={Lineup} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
          <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
            LINE UP
          </div>
        </Link>
      </div>
      <div>
        <Link to="/maps">
          <img src={Map} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
          <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
            MAPS
          </div>
        </Link>
      </div>
      <div>
        <Link to="/mascot">
          <img src={Mascot} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
          <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
            MASCOT
          </div>
        </Link>
      </div>
      <div>
        <Link to="/theme">
          <img src={Theme} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
          <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
            THEME
          </div>
        </Link>
      </div>
      <div>
        <Link to="/throwback">
          <img src={ThrowbackIcon} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
          <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
            THROWBACK
          </div>
        </Link>
      </div>
      <div>
        <Link to="/media">
          <img src={Media} className="transition duration-300 rounded-full hover:shadow-md hover:shadow-pink-300 w-24 hover:rotate-45 mx-auto" alt="" />
          <div className="text-center pt-2 text-white text-2xl text-shadow-lg text-shadow-white">
            MEDIA
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navigator