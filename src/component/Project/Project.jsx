import React from "react";
import "./Project.css";
import one from "../../img/one.png"
import two from "../../img/two.webp"
import three from "../../img/three.png"

export const Project = () => {
  return (
    <React.Fragment>
      <h1 className="text-center  text-capitalize my-5"> Project{""}</h1>
      <div className="containerCard">
        <div class="card">
          <img src={two} alt="Avatar" className="img-card" />
          <div class="container">
          <a href="https://github.com/Ankit222002/Anti-theft-detection-" target="_blank">
  <btn className="btn-one">View as</btn>
</a>
          </div>
        </div>

        <div class="card">
          <img src={three} alt="Avatar" className="img-card2" />
          <div class="container">
          <a href="https://github.com/Ankit222002?tab=repositories" target="_blank">
  <btn className="btn-one">View as</btn>
</a>
          </div>
        </div>

        <div class="card">
          <img src={one} alt="Avatar" className="img-card3" />
          <div class="container">
          <a href="https://github.com/Ankit222002/no.platedetection" target="_blank">
  <btn className="btn-one">View as</btn>
</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
 