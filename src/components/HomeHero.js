import React from 'react'
import './Home.css'
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'

const HomeHero = () => {
  return <div id="home" className="homeHeroDiv">
    <div className="hero-image">
    <div className="hero-text">
    <h1>Samuel McKaig</h1>
    <h3>The Official Website For The Unofficial Genius</h3>
    {/* <button onClick="window.location.href='/routines'">Get Started</button> */}
  </div>
</div>
</div>
}

export default HomeHero;
