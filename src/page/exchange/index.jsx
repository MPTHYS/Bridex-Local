import React from "react";
import banner from "asset/exchange/banner-exchange.png";
import icondown from "asset/exchange/icondown.png";
import busd from "asset/exchange/BUSD.png";
import swap from "asset/exchange/swap.svg";
import { useState } from "react";
import iconx from "asset/home-bridex/iconx.png";
import iconsearch from "asset/home-bridex/iconsearch.png";
import eth from "asset/home-bridex/eth.png";
import bnb from "asset/home-bridex/bnb.png";
import usdt from "asset/home-bridex/usdt.png";
import btc from "asset/home-bridex/btc.png";
import xrp from "asset/home-bridex/xrp.png";
import BannerBg from "components/styles/BannerBg";

const dataSwap = [
  {
    name: "BUSD",
    img: busd,
    isAcitve: false,
  },
  {
    name: "BNB",
    img: busd,
    isAcitve: true,
  },
];
const dataCoin = [
  {
    img: eth,
    title: "ETH",
    total: "Ethereum",
  },
  {
    img: bnb,
    title: "BNB",
    total: "Binance",
  },
  {
    img: usdt,
    title: "USDT",
    total: "Ethereum",
  },
  {
    img: btc,
    title: "BTC",
    total: "Bit Coin",
  },
  {
    img: xrp,
    title: "XRP",
    total: "Ethereum",
  },
];
const listcoin = dataCoin?.map((e, i) => {
  return (
    <div key={i}>
      <img src={e.img} alt="" style={{ width: "30px" }} />
      {e.title}
    </div>
  );
});
const listscrool = dataCoin?.map((e, i) => {
  return (
    <div key={i}>
      <img src={e.img} alt="" style={{ width: "30px" }} />
      <strong>{e.title}</strong>
      <span>{e.total}</span>
    </div>
  );
});

function Exchange() {
  const [state, setState] = useState('');
  const handleSwap = () => {
    setState(!state);
  };
  const [popup, setPopup] = useState("");
  const hanndlePopup = (name) => {
    setPopup(name);
  };

  return (
    <>
      <>
        <BannerBg
          bg={banner}
          title={"Exchange"}
          des={"Start Exchange to Enjoy High Earnings"}
        />
        <section className="exchange">
          <div className="container">
            <div className="exchanges-main">
              <div className="exchanges-table">
                <div className="exchange-table-title">
                  <div>Claim</div>
                  <p>Trade tokens in an instant</p>
                </div>
                <div className="exchange-table-input">
                  <input type="text" />
                  <div
                    className={`exchange-pupop`}
                    onClick={() => hanndlePopup("BNB")}
                  >
                    <div className="exchange-table-max">
                      <strong>MAX</strong>
                    </div>
                    {!state ? (
                      <div className="exchange-table-img">
                        <img
                          src={busd}
                          alt=""
                          style={{ width: "32px", height: "32px" }}
                        />
                        BUSD
                      </div>
                    ) : (
                      <div className="exchange-table-img">
                        <img
                          src={busd}
                          alt=""
                          style={{ width: "32px", height: "32px" }}
                        />
                        BNB
                      </div>
                    )}
                    <div className="exchange-table-icon">
                      <img
                        src={icondown}
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handleSwap("isAcitve")}
                  className="exchange-table-swap"
                >
                  <img src={swap} alt="" />
                </div>
                <div className="exchange-table-input">
                  <input type="text" />
                  <div
                    className={`exchange-pupop1`}
                    onClick={() => hanndlePopup("BNB")}
                  >
                    {state ? (
                      <div className="exchange-table-img">
                        <img
                          src={busd}
                          alt=""
                          style={{ width: "32px", height: "32px" }}
                        />
                        BUSD
                      </div>
                    ) : (
                      <div className="exchange-table-img">
                        <img
                          src={busd}
                          alt=""
                          style={{ width: "32px", height: "32px" }}
                        />
                        BNB
                      </div>
                    )}
                    <div className="exchange-table-icon">
                      <img
                        src={icondown}
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="exchange-table-button">
                  <button className="exchange-table-btn">Submit</button>
                </div>
              </div>
            </div>
            {popup === "BNB" && (
              <div className="table-pupop">
                <div className="pupop">
                  <div className="pupop-swap">
                    <h2>Swap From</h2>
                    <div className={`close`} onClick={() => hanndlePopup("")}>
                      <img src={iconx} alt="" style={{ width: "20px" }} />
                    </div>
                  </div>

                  <div className="pupop-input">
                    <input type="text" />
                    <img src={iconsearch} alt="" style={{ width: "30px" }} />
                  </div>
                  <div className="pupop-total">
                    <div className="pupop-total-text">All</div>
                    <div>Top coins</div>
                    <div>Fiat currencies</div>
                  </div>
                  <div className="pupop-coin">{listcoin}</div>
                  <div className="pupop-scroll">
                    {listscrool}
                    {listscrool}
                    {listscrool}
                    {listscrool}
                    {listscrool}
                    {listscrool}
                    {listscrool}
                    {listscrool}
                  </div>
                </div>
              </div>
            )}
            {popup && (
              <div className={`overlay`} onClick={() => hanndlePopup("")}></div>
            )}
          </div>
        </section>
      </>
    </>
  );
}

export default Exchange;
