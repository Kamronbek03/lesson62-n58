import React, { Component } from "react";
import "./Section2.scss";
import img1 from "../../assets/images/main/Section2/img1.svg";
import img2 from "../../assets/images/main/Section2/img2.svg";
import img3 from "../../assets/images/main/Section2/img3.svg";

class Section2 extends Component {
  render() {
    return (
      <div className="Section2">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
          <div className="cards">
            <div className="card">
              <img src={img1} alt="img1..." />
              <h3>1. Schedule online</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className="card">
              <img src={img2} alt="img2..." />
              <h3>2. Pay online easily </h3>
              <p>
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                amet at nunc.
              </p>
            </div>
            <div className="card">
              <img src={img3} alt="img3..." />
              <h3>3. Get your house cleaned</h3>
              <p>
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                cursus eleifend.
              </p>
            </div>
          </div>
          <div className="buttons">
            <button className="btn1">Get a free quote</button>
            <button className="btn2">Explore services</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;
