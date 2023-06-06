import React from 'react';
import trustus from "asset/home-bridex/trustus.png";
import icontems from "asset/home-bridex/icontems.png";

function Trustus() {
    return (
        <section className="trustus">
        <div className="container">
        <div className="trus">
              <div className="trus-img">
                <img src={trustus} alt="" />
              </div>
        <div className="trus-element">
                <h2>TRUST US, WE CAN HELP YOU!</h2>
                <p>Assertively implement enabled infrastructures vis-a-vis holistic channels. Completely innovate high-quality markets whereas standards compliant vortals. Seamlessly iterate customer.</p>
                <div className="trus-item">
                  <div><img src={icontems} alt="" /><strong>Are you looking for a consulting?</strong></div>
                  <div><img src={icontems} alt="" /><strong>Looking for earning more money?</strong></div>
                </div>
              </div>
              </div>
        </div>
      </section>
    )
}

export default Trustus
