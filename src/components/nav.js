import React from 'react';


const Nav = (props) => {
  return <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/">Samuel McKaig | Official Website</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#aboutTop">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projectsTop">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contactTop">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
}

export default Nav
