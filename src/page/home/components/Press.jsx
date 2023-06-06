import React from 'react';
import press1 from "asset/home-bridex/press1.png";
import press2 from "asset/home-bridex/press2.png";
import press3 from "asset/home-bridex/press3.png";
import press4 from "asset/home-bridex/press4.png";
import press5 from "asset/home-bridex/press5.png";

function Press() {
    return (
        <section className="press">
        <div className="container">
          <div className="press-about">
            <h2>PRESS ABOUT US</h2>
            <div className="press-items">
              <marquee className="press-img">
              <img src={press1} alt="" />
              <img src={press2} alt="" />
              <img src={press3} alt="" />
              <img src={press4} alt="" />
              <img src={press5} alt="" />
              </marquee>
            </div>
            </div>
        </div>
      </section>
    )
}

export default Press
