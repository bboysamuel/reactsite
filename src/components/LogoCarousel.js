
import React, {render, useState} from 'react';

import Carousel from 'react-bootstrap/Carousel'
import  './LogoCarousel.css'



function LogoCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( <>
    <div id="logoSlide">
    <Carousel fade={true} className="logoCarouselClass" activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item className="smallLogoCaro">

      <img
          className="smallLogoPic"
          src="media/list-it-marketing-real-estate-sam.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Samuel McKaig</h3>
          <p>Welcome To The Official Website</p>
        </Carousel.Caption>

      </Carousel.Item>


      <Carousel.Item className="smallLogoCaro">


      <p>
        <i><strong> "Artists of a new and exiting kind" </strong> - <a href="https://NewsPress.com"> NewsPress.com </a> (Entertainment Section)</i> </p>

      </Carousel.Item>
      <Carousel.Item className="smallLogoCaro">



      <p>
        <i><strong> "truly a top-tier talent." </strong> - <a href="https://en.wikipedia.org/wiki/Don_Murray_(actor)"> Don Murray </a> (Oscar Nominated Actor / Producer "Bus Stop", "Twin Peaks", "Advise and Consent")</i> </p>

      </Carousel.Item>
    </Carousel>
    </div>
</>
  );
}


// render(<ControlledCarousel />);



export default LogoCarousel;



