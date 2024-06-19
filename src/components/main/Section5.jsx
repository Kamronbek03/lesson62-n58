import React, { Component } from "react";
import "./Section5.scss";
import img1 from "../../assets/images/main/Section5/img1.svg";
import img2 from "../../assets/images/main/Section5/img2.svg";
import img3 from "../../assets/images/main/Section5/img3.svg";

class Section5 extends Component {
  render() {
    return (
      <div className="Section5">
        <div className="container">
          <pre></pre>
          <div className="content">
            <div className="text-content">
              <h2>Articles & resources</h2>
              <div className="buttons">
                <button className="btn1">Get a free quote</button>
                <button className="btn2">Browse articles</button>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <img className="img" src={img1} alt="img1...." />
                <div className="card2">
                  <h4>
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <div className="data">
                    <h5>Jan 28, 2022</h5>
                    <img src={img3} alt="img3..." />
                  </div>
                </div>
              </div>
              <div className="card">
                <img className="img" src={img2} alt="img2..." />
                <div className="card2">
                  <h4>
                    How to properly disinfect your phone and other electronics
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <div className="data">
                    <h5>Feb 1, 2022</h5>
                    <img src={img3} alt="img3..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section5;
