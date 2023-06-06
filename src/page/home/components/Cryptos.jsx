import React from 'react';
import iconcypto1 from "asset/home-bridex/iconbanner1.png";
import iconcypto2 from "asset/home-bridex/iconbanner2.png";
import iconcypto3 from "asset/home-bridex/iconbanner3.png";
import iconcypto4 from "asset/home-bridex/iconbanner4.png";

function Cryptos() {
    const dataCypto = [
        {
            img : iconcypto1,
            title : 'Used by millions. Trusted with billions.',
            e : 'Bridex has the most users of any decentralized platform, ever.'
        },
        {
            img : iconcypto2,
            title :'Trade anything. No registration, no hassle.',
            e : 'Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'
        },
        {
            img : iconcypto3,
            title :'Earn passive income with crypto.',
            e : 'Bridex makes it easy to make your crypto work for you.'
        },
        {
            img : iconcypto4,
            title :'Bridex makes our world go round.',
            e : 'BRX token is at the heart of the Bridex ecosystem. Buy it, win it, farm it, spend it,'
        },
    ]
    const crypto = dataCypto?.map((element, index) => {
        return (
          <div key={index} className="crypto-text">
            <img src={element.img} alt="" />
            <div>{element.title}</div>
            <p>{element.e}</p>
          </div>
        );
      });
    return (
        <section className="cryptos">
        <div className="container">
          <div className="crypto">
            <h1>CRYPTO OPPORTUNITIES</h1>
            <div className="crypto-main">{crypto}</div>
          </div>
        </div>
      </section>
    )
}

export default Cryptos
