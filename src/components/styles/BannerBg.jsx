import React from 'react';
function BannerBg(props) {
    const {title, des, bg}=props
    return (
        <section className="exchange">
      <div className="exchange-bg">
        <img src={bg} alt="" />
      </div>
      <div className="container">
        <div className="exchanges">
          <h1>{title}</h1>
          <p>{des}</p>
        </div>
        </div>
        </section>
            
      
    )
}

export default BannerBg

