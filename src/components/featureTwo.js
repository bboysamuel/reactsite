import React from 'react';


const FeatureTwo = (props) => {

  return <div className="row safe">
  <div className="col-lg-6">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/83zxNjz6LRI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>

  <div id="featureTwo" className="col-lg-6">
    <h1 className="my-4">Content Creation</h1>

    {/* <h2>Creator | Consultant</h2> */}
    <p>From feature film and TV to commercials and magazine covers, Sam's have been seen in mulplte countries, currencies, and languages across the globe.</p>
    <ul>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Wordpress</li>
      <li>ReactJS</li>
      <li>NodeJS</li>
      <li>SEO</li>
      <li>
        <strong>and more...</strong>
      </li>
    </ul>
    <p></p>
  </div>
</div>
}

export default FeatureTwo;
