import React, { Component } from "react";
import "./Section6.scss";
import img1 from "../../assets/images/main/Section1/icon1.svg";

class Section6 extends Component {
  render() {
    return (
      <div className="Section6">
        <div className="container">
          <div className="content">
            <div className="text-content">
              <h2>Contact Us</h2>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="tell">
                <img src={img1} alt="img1..." />
                <div className="text-tell">
                  <pre>Call us now</pre>
                  <a href="#">(414) 567 - 2109</a>
                </div>
              </div>
              <pre></pre>
              <h3>Not convinced yet?</h3>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <button>Browse our packages</button>
            </div>
            <form action="">
              <div className="part">
                <div className="part2">
                  <label htmlFor="fullName">Full name</label>
                  <input type="text" id="fullName" />
                </div>
                <div className="part2">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input type="tel" id="phoneNumber" />
                </div>
              </div>
              <div className="part">
                <div className="part2">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" />
                </div>
                <div className="part2">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
              </div>
              <div className="part">
                <div className="part2">
                  <label htmlFor="requestedService">Requested service</label>
                  <input type="text" id="requestedService" />
                </div>
                <div className="part2">
                  <label htmlFor="dayOfService">Day of service</label>
                  <input type="number" id="dayOfService" />
                </div>
              </div>
              <div className="part2">
                <label htmlFor="addANote">Add a note</label>
                <textarea style={{ display: "block" }} />
              </div>
              <input className="btn" type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Section6;
