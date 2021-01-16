import React, {useEffect} from 'react'
import './Home.css'
import Aos from "aos"
import 'aos/dist/aos.css'

const HomeHero = () => {
  useEffect( () => {
    Aos.init({duration: 3000})
  })
  return <div id="home" className="homeHeroDiv">

    <div className="hero-image">


      <div className="hero-text">

        <h1 data-aos="fade-down" >Samuel McKaig</h1>
        <h3 data-aos="fade-in" >The Official Website</h3>

      </div>

    </div>


</div>
}

export default HomeHero;
