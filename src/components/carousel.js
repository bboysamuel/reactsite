
import React, {render, useState} from 'react';

import Carousel from 'react-bootstrap/Carousel'



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/list-it-marketing-real-estate-sam.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/real_estate.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/seo.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);

export default ControlledCarousel;




// -----------


// // Carousel --------
// const Carousel = (props) => {
//   return <div className="carousel">
//     <Controls
//     direction="left"
//     clickFunction={this.previousSlide}
//     glyph="&#9664;"
//     />
//   <Slide url={picUrl} />
//   <Controls
//   direction="right"
//   clickFunction={this.nextSlide}
//   glyph="&#9654;"
//   />
//   </div>
// }

// // slides ------
// // style component. pass in the image url as a string.
// const Slide = ({url}) => {
//   const styles = {
//     backgroundImage: `url(${url})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   }
//   return (
//     <div className="slide-pic" style={styles}></div>
//   )
// }

// // controls ------

// const Controls = ( {direction, clickFunction, glyph}) => (
//   <div
//   className={`slide-arrow ${direction}`}
//   onClick={clickFunction}>
//     { glyph }
//   </div>
// );

// export default Carousel;


