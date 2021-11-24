import React from 'react';
import '../../App.css'

export default function Home() {
  return (
    <div className="row">
    <div className="col-sm-12 col-lg-4">
    <img class="card-img-top" src='./assets/images/CompanyNight.jpeg' alt="Card image cap"></img>
    </div>
    <div className="col-sm-12 col-lg-8" align="center">
    <h1>About Me</h1>
    <p>
    Welcome to my Github portfolio page. I'm Alex, and I'm an upcoming web developer expected to graduate from the Coding Bootcamp at the University of Texas at Austin. When I'm not sharpening my coding skills, I'm most likely analyzing market moves, catching a game, or spending time with my loved ones. By December of 2021, I'll be a full-stack web developer capable of developing and deploying interactive user experiences, and given enough time, meet real-world needs with my applications.
    </p>
    </div>
  </div>
  );
}
