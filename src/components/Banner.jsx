import React from "react";

function Banner(props) {
  const { title, des, img, strong } = props;
  return (
    <section className="farmings">
      <div className="container">
        <div className="banner">
          <div className="banner-main">
            <div className="banner-element">
              <h1>{title}</h1>
              <p>
                {des} <strong style={{ color: "blue" }}>{strong}</strong>
              </p>
            </div>
            <div className="banner-items">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
