import React from 'react';
import QuotesCarousel from "./QuotesCarousel"


const FeatureOne = (props) => {

  return <div class="row safe" id="aboutTop">
  <div id="bioId" class="col-lg-6">
    <p class="my-4 bioTitle">Samuel McKaig</p>

    {/* <h2>Creator | Consultant</h2> */}
    <p>The American creator and consultant known for his work in entertainment, real estate, and marketing.</p>
    <ul>
      <QuotesCarousel />
      {/* <li>SEO</li>
      <li>Content</li>
      <li>Marketing</li>
      <li>Full Stack Development</li> */}
      {/* <li>
      <p>
        <i><strong> "Sam is a marketing genius" </strong> - <a href="https://en.wikipedia.org/wiki/Neal_Israel"> Neal Isreal </a> (Writer/Director/Producer "Finding Neverland", "Police Academy", "Surf Ninjas", "Bachelor Party")</i> </p>

      </li>
      <li>
      <p>
        <i><strong> "Artists of a new and exiting kind" </strong> - <a href="https://NewsPress.com"> NewsPress.com </a> (Entertainment Section)</i> </p>
      </li>
      <li>
      <p>
        <i><strong> "truly a top-tier talent." </strong> - <a href="https://en.wikipedia.org/wiki/Don_Murray_(actor)"> Don Murray </a> (Oscar Nominated Actor / Producer "Bus Stop", "Twin Peaks", "Advise and Consent")</i> </p>
      </li> */}


      {/* <li>JavaScript</li>
      <li>jQuery</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Wordpress</li>
      <li>ReactJS</li>
      <li>NodeJS</li>
      <li>SEO</li>
      <li>
        <strong>and more...</strong>
      </li> */}
    </ul>

    {/* <p>
        <i><strong> "Sam is a marketing genius" </strong> - <a href="https://en.wikipedia.org/wiki/Neal_Israel"> Neal Isreal </a> (Writer/Director/Producer "Finding Neverland, Police Academy, Surf Ninjas, Bachelor Party")</i> </p> */}
  </div>
  <div class="col-lg-6">
    <img class="profileImage" src="media/sam-linked-in-profile.jpeg" alt=""></img>
  </div>
</div>
}

export default FeatureOne;
