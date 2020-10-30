import React from 'react';


const FeatureOne = (props) => {

  return <div class="row safe" id="aboutTop">
  <div id="bioId" class="col-lg-6">
    <h1 class="my-4">Samuel McKaig</h1>

    {/* <h2>Creator | Consultant</h2> */}
    <p>The American creator and consultant known for his work in entertainment, real estate, and marketing.</p>
    <ul>
      <li>SEO</li>
      <li>Content</li>
      <li>Marketing</li>
      <li>Full Stack Development</li>


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

    <p>
        <i><strong> "Sam is a marketing genius" </strong> - <a href="https://en.wikipedia.org/wiki/Neal_Israel"> Neal Isreal </a> (Writer/Director/Producer "Finding Neverland, Police Academy, Surf Ninjas, Bachelor Party")</i> </p>
  </div>
  <div class="col-lg-6">
    <img class="profileImage" src="media/sam-linked-in-profile.jpeg" alt=""></img>
  </div>
</div>
}

export default FeatureOne;
