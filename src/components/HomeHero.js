import React from 'react'
import './Home.css'
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'

const HomeHero = () => {
  return <div>
    <div className="hero-image">
  <div className="hero-text">
    <h2>Samuel McKaig</h2>
    <h4>The Official Website For The Unofficial Genius</h4>
    {/* <button onClick="window.location.href='/routines'">Get Started</button> */}
  </div>
</div>
</div>
}

export default HomeHero;
