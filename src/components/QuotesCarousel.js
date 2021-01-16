
import React, {render, useState} from 'react';

import Carousel from 'react-bootstrap/Carousel'
import  './QuotesCarousel.css'

function QuotesCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( <>
    <div id="textSlide">
    <Carousel fade={true} className="quotesCarouselClass" activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item className="smallCaro">

      <p>
        <i><strong> "Sam is a marketing genius" </strong> - <a href="https://en.wikipedia.org/wiki/Neal_Israel"> Neal Isreal </a> (Writer/Director/Producer "Finding Neverland", "Police Academy", "Surf Ninjas", "Bachelor Party")</i> </p>

      </Carousel.Item>

      <Carousel.Item className="smallCaro">

      <p>
        <i><strong> "Artists of a new and exiting kind" </strong> - <a href="https://NewsPress.com"> NewsPress.com </a> (Entertainment Section)</i> </p>

      </Carousel.Item>
      <Carousel.Item className="smallCaro">

      <p>
        <i><strong> "truly a top-tier talent." </strong> - <a href="https://en.wikipedia.org/wiki/Don_Murray_(actor)"> Don Murray </a> (Oscar Nominated Actor / Producer "Bus Stop", "Twin Peaks", "Advise and Consent")</i> </p>

      </Carousel.Item>
    </Carousel>
    </div>
</>
  );
}


// render(<ControlledCarousel />);



export default QuotesCarousel;



