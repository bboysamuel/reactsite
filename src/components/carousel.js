
import React from 'react';


// Carousel --------
const Carousel = (props) => {
  return <div className="carousel">
    <Controls
    direction="left"
    clickFunction={this.previousSlide}
    glyph="&#9664;"
    />
  <Slide url={picUrl} />
  <Controls
  direction="right"
  clickFunction={this.nextSlide}
  glyph="&#9654;"
  />
  </div>
}

// slides ------
// style component. pass in the image url as a string.
const Slide = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div className="slide-pic" style={styles}></div>
  )
}

// controls ------

const Controls = ( {direction, clickFunction, glyph}) => (
  <div
  className={`slide-arrow ${direction}`}
  onClick={clickFunction}>
    { glyph }
  </div>
);

export default Carousel;
