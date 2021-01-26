import React, {useEffect} from 'react';
import QuotesCarousel from "./QuotesCarousel"
import Aos from "aos"
import "aos/dist/aos.css"


const FeatureOne = (props) => {
  useEffect( () => {
    Aos.init({duration: 1000})
  }, [])

  return (<>
  <div className="row " id="aboutTop">
  <div id="bioId" className="col-lg-6">
    <p className="my-4 safe bioTitle">Samuel McKaig</p>

    {/* <h2>Creator | Consultant</h2> */}
    <p>The American creator and consultant known for his work in entertainment, real estate, and marketing.</p>
    <ul>
      <QuotesCarousel />

    </ul>


  </div>
  <div data-aos="fade-in" className="col-lg-6">
    <img className="profileImage" src="media/sam-mckaig-official-website.jpeg" alt=" Sam McKaig Santa Barbara real estate"></img>
  </div>
</div>
</>)
}

export default FeatureOne;
