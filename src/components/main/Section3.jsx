import React, { Component } from "react";
import "./Section3.scss";
import img1 from "../../assets/images/main/Section3/img1.svg";
import img2 from "../../assets/images/main/Section3/img2.svg";
import img3 from "../../assets/images/main/Section3/img3.svg";

class Section3 extends Component {
  render() {
    return (
      <div className="Section3">
        <div className="container">
          <div className="text-content">
            <h2>Our Services</h2>
            <button>Explore services</button>
          </div>
          <div className="cards">
            <div className="card">
              <img style={{ marginTop: "34px" }} src={img1} alt="img1..." />
              <h3>House cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="card">
              <img src={img2} alt="img2..." />
              <h3>Office cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="card">
              <img style={{ marginTop: "24px" }} src={img3} alt="img3..." />
              <h3>Industrial cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section3;
