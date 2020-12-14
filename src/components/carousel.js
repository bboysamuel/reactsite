
import React, {render, useState} from 'react';

import Carousel from 'react-bootstrap/Carousel'



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carouselClass" activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="d-block w-100 sliderPic"
          src="media/list-it-marketing-real-estate-sam.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Samuel McKaig</h3>
          <p>Welcome To The Official Website</p>
        </Carousel.Caption>

      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 sliderPic"
          src="media/real_estate.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ListItMarketing.com</h3>
          <p>Relied on by real estate professionals to market listings</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderPic"
          src="media/stunt_sport_image.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Stunt Sport</h3>
          <p>
            Directed by Samuel McKaig and released by Fox Action Films & Artist View Entertainment
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


