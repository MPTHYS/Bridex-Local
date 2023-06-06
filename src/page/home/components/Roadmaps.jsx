import React from 'react';
import roadmap from "asset/home-bridex/roadmap.png";


function Roadmaps() {
    return (
        <section className="roadmaps">
        <div className="container">
          <div className="roadmap">
            <img src={roadmap} alt="" style={{width:"100%"}}/>
          </div>
        </div>
      </section>
    )
}

export default Roadmaps
