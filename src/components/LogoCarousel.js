
// import React, {render, useState} from 'react';

// import Carousel from 'react-bootstrap/Carousel'
// import  './LogoCarousel.css'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function LogoCarousel() {




const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="media/inevifit.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="media/inevifit.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="path-to-img" onDragStart={handleDragStart} className="yours-custom-class" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}
return Gallery


}

export default LogoCarousel;



