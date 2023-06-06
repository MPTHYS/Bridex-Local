import React, { useState } from 'react'
import banner from "asset/home-bridex/banner-bridex.png";
import banner1 from "asset/home-bridex/sliderImg1.png";
import banner2 from "asset/home-bridex/sliderImg2.png";
import banner3 from "asset/home-bridex/sliderImg3.png";
import banner4 from "asset/home-bridex/sliderImg4.png";
import Login from 'components/Login';
import Overlay from 'components/Overlay';




function Banner() {

  const dataBanner = [
    {
        img : banner1
    },
    {
        img : banner2
    },
    {
        img : banner3
    },
    {
        img : banner4
    },
]
    const listBanner = dataBanner?.map((element, index) => {
        return (
          <div key={index}>
            <img src={element.img} alt="" />
          </div>
        );
      });
      const [log, setLog] = useState(-1)
      const _login = (index)=> {
        if(log == index) {
          setLog(-1)
        } else{
          setLog(index)
        }
      }
    return (
        <section className="banners">
        <div className="container">
          <div className="banner">
            <div className="banner-img">
              <img src={banner} alt="" />
            </div>
            <div className="banner-text">
              <h1>Learn and invest in crypto opportunities</h1>
              <p>
                $10 million bonus to the community for referring users to BRX
                through registration
              </p>
              
              <button className={`banner-btn`} onClick={()=> _login('index')} >LOGIN NOW</button>
              {log == ('index') && <Login />}
              {log == ('index') && <Overlay onClick={()=> _login('-1')}/> }
              
            </div>
          </div>
          <div className="banner-items">{listBanner}</div>
        </div>
      </section>
    )
}

export default Banner
