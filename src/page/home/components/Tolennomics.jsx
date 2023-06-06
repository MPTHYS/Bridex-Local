import React from 'react';
import tokentable from "asset/home-bridex/Token-Metrics.png";


function Tolennomics() {
    return (
        <section className="tolennomics">
        <div className="container">
          <div className="tolenomicss">
            <h2>TOLENNOMICS</h2>
            <p>Our team consists of professional developers, crypto investors , designers and managers.</p>
            <div className="tolenomicss-img">
              <img src={tokentable} alt="" style={{width:"100%"}}/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Tolennomics
