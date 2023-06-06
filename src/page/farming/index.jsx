import React from "react";
import Banner from "components/Banner";
import bannerfarming from "asset/farming/banner-farming.png";
import iconfarm from "asset/farming/iconfarming.png";
import iconsfarm from "asset/text/iconfarm.png";

const dataFarming = [
  {
    logo: iconfarm,
    symbolDeposit: "BUSD",
    symbolReceive: "BRX",
    apy: 7,
    myDeposit: 0,
    totalUSD: 0,
    dayReceive: 30,
    pool: 14641,
  },
  {
    logo: iconfarm,
    symbolDeposit: "BUSD",
    symbolReceive: "BRX",
    apy: 14.28,
    myDeposit: 0,
    totalUSD: 0,
    dayReceive: 60,
    pool: 20012511,
  },
  {
    logo: iconfarm,
    symbolDeposit: "BUSD",
    symbolReceive: "BRX",
    apy: 22,
    myDeposit: 0,
    totalUSD: 0,
    dayReceive: 90,
    pool: 19924,
  },
];
const listData = [
  {
    logo: iconfarm,
    symbolDeposit: "BUSD",
    symbolReceive: "BRX",
    apy: 22,
    myDeposit: 0,
    totalUSD: 0,
    dayReceive: 90,
    pool: 19924,
    earned: "Earned",
    totalBRX: 0,
    now: 0.0,
    icon: iconsfarm,
  },
  {
    logo: iconfarm,
    symbolDeposit: "BUSD",
    symbolReceive: "BRX",
    apy: 14.28,
    myDeposit: 0,
    totalUSD: 0,
    dayReceive: 60,
    pool: 20012511,
    earned: "Earned",
    totalBRX: 0,
    now: 0.0,
    icon: iconsfarm,
  },
  {
    logo: iconfarm,
    symbolDeposit: "BUSD",
    symbolReceive: "BRX",
    apy: 7,
    myDeposit: 0,
    totalUSD: 0,
    dayReceive: 30,
    pool: 14641,
    earned: "Earned",
    totalBRX: 0,
    now: 0.0,
    icon: iconsfarm,
  },
];
const listdatafarm = listData?.map((element, index) => {
  return (
    <div key={index}>
      <div className="banner-text-table">
        <div className="banner-text-title1">
          <img src={iconfarm} alt="" />
          <h2>
            {element.symbolDeposit}-{element.symbolReceive}
          </h2>
        </div>
        <div className="banner-text-main">
          <h5>APY</h5>
          <div>
            <h5>{element.apy}%</h5>
          </div>
        </div>
        <div className="banner-text-element1">
          <div>
            {" "}
            <span>Available BUSD</span>
            <div>
              {element.myDeposit} {element.symbolReceive}
            </div>
            <span>${element.totalUSD}</span>
          </div>
          <div className="banner-text-btn2">
            <button>GET</button>
          </div>
        </div>
        <div className="banner-text-test">
          <div className="banner-text-time">
            <div>time</div>
            <div>{element.dayReceive} day</div>
          </div>
          <div className="banner-text-time">
            <div>Liquidity</div>
            <div>${element.pool}</div>
          </div>
          <button className="banner-text-btn1">ENABAL FARM</button>
        </div>
        <div className="farming-data">
          <div className="farming-data-farm">
            <div>
              <div>
                {element.earned} {element.symbolReceive}
                <img src={element.icon} alt="" style={{ width: "15px" }} />
              </div>
            </div>
            <div>
              <strong>
                {element.totalBRX} {element.symbolReceive}
              </strong>
            </div>
            <div>
              <span>${element.now}</span>
            </div>
          </div>
          <div className="farming-data-btn">
            <button>HARVEST</button>
          </div>
        </div>
      </div>
    </div>
  );
});

function Farming() {
  const cardFarming = dataFarming?.map((e, i) => {
    return (
      <div key={i}>
        <div className="banner-text-table">
          <div className="banner-text-title1">
            <img src={iconfarm} alt="" />
            <h2>
              {e.symbolDeposit}-{e.symbolReceive}
            </h2>
          </div>
          <div className="banner-text-main">
            <h5>APY</h5>
            <div>
              <h5>{e.apy}%</h5>
            </div>
          </div>
          <div className="banner-text-element">
            <div>Available BUSD</div>
            <h3>
              {e.myDeposit} {e.symbolReceive}
            </h3>
            <div>${e.totalUSD}</div>
          </div>
          <div className="banner-text-test">
            <div className="banner-text-time">
              <div>time</div>
              <div>{e.dayReceive} day</div>
            </div>
            <div className="banner-text-time">
              <div>Liquidity</div>
              <div>${e.pool}</div>
            </div>
            <button className="banner-text-btn">LOGIN NOW</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <Banner
        title={"Farming"}
        des={
          "Looking for a less resource-intensive alternative to mining? Use your BRX tokens to earn more tokens, for Free."
        }
        img={bannerfarming}
      />
      <div className="banner-text1">
        {cardFarming}
        {listdatafarm}
      </div>
    </>
  );
}

export default Farming;
