import React, { Component } from "react";
import "./Section1.scss";
import icon1 from "../../assets/images/main/Section1/icon1.svg";
import img1 from "../../assets/images/main/Section1/background.png";

class Section1 extends Component {
  render() {
    return (
      <div className="Section1">
        <div className="container">
          <div className="text-content">
            <h2>Quality cleaning for your home</h2>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="buttons">
              <button>Get a free quote</button>
              <div className="tell">
                <img src={icon1} alt="icon1..." />
                <div className="text-tell">
                  <pre>Call us now</pre>
                  <a href="#">(414) 567 - 2109</a>
                </div>
              </div>
            </div>
          </div>
          <img src={img1} alt="img1..." />
        </div>
      </div>
    );
  }
}

export default Section1;
