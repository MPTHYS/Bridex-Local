import React from 'react'
import logo from "asset/home-bridex/logo-bridex.svg";
import mxh1 from "asset/home-bridex/mxh1.svg";
import mxh2 from "asset/home-bridex/mxh2.svg";
import mxh3 from "asset/home-bridex/mhx3.svg";
import mxh4 from "asset/home-bridex/mxh4.svg";
import mxh5 from "asset/home-bridex/mxh5.svg";
import partner from "asset/home-bridex/partner.png";
import partner1 from "asset/home-bridex/partner1.png";




function Footer() {
  const dataFooter = [
    {
        img : mxh1
    },
    {
        img : mxh2
    },
    {
        img : mxh3
    },
    {
        img : mxh4
    },
    {
        img : mxh5
    },
]
const mxhFooter = dataFooter?.map ((element, index) => {
  return (
    <div key={index}>
      <img src={element.img} alt="" />
    </div>
  )
});
const dataPartner = [
    {
        img : partner
    },
    {
        img : partner1
    },
]
const partners = dataPartner?.map ((element,index) => {
  return (
    <div className="footer-img" key={index}>
        <img src={element.img} alt="" />
      </div>
  )
})


    return (
      <>
        <section className="footers">
        <div className="container">
          <div className="footer-mobile">
            <div className="footer">
            <div className="footer-logo">
              <img src={logo} alt="" />
              <strong>Join the Community</strong>
              <div className="footer-items">
              {mxhFooter}
              </div>
            </div>
            </div>
            <div className="footer-manile1">
            <div className="footer-main">
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
              <div>Cookie Policy</div>
              <div>Responsible Disclosure</div>
            </div>
            <div className="footer-main">
              <div>Careers</div>
              <div>Press</div>
              <div>Help</div>
              <div>Contact</div>
            </div>
            <div className="footer-main">
              <div>Home</div>
              <div>What is BRX?</div>
              <div>Whitepaper</div>
              <div>BRX Coin</div>
            </div>
            <div className="footer-partner">
              <h5>Partner</h5>
              <div className="footer-img">{partners}</div>
              
            </div>
            </div>
          
          </div>
        </div>
      </section>
      </>
    );
}

export default Footer
