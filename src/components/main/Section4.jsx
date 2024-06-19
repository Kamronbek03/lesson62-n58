import React, { Component } from "react";
import "./Section4.scss";
import img1 from "../../assets/images/main/Section4/img1.svg";
import img2 from "../../assets/images/main/Section1/icon1.svg";

class Section4 extends Component {
  render() {
    return (
      <div className="Section4">
        <div className="container">
          <div className="content">
            <img src={img1} alt="img1..." />
            <div className="text-content">
              <h5>Covid-19 sanitization</h5>
              <h2>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h2>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="buttons">
                <button>Get a free quote</button>
                <div className="tell">
                  <img src={img2} alt="img2..." />
                  <div className="text-tell">
                    <pre>Call us now</pre>
                    <a href="#">(414) 567 - 2109</a>
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

export default Section4;
