import React, {useEffect} from 'react'
import './Home.css'
import Aos from "aos"
import 'aos/dist/aos.css'

const HomeHero = () => {
  useEffect( () => {
    Aos.init({duration: 1000})
  })
  return <div id="home" className="homeHeroDiv">

    <div className="hero-image">


      <div className="hero-text">

        <h1 id="heroTextHeader" data-aos="fade-down" >Samuel McKaig</h1>
        <h3 id="heroTextSecondary" data-aos="fade-up" >The Official Website</h3>

      </div>

    </div>

</div>
}

export default HomeHero;
