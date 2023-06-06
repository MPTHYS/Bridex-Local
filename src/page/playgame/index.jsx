import BannerBg from "components/styles/BannerBg";
import React, { useState } from "react";
import banner from "asset/exchange/banner-exchange.png";
import supper from "asset/text/super.png";
import bgSupper from "asset/text/bgSuper.png";

function PlayGame() {
  const [change, setChange] = useState("manual");
  const handleChange = (name) => {
    setChange(name);
  };
  return (
    <>
      <BannerBg
        bg={banner}
        title={"Game"}
        des={"Start Game to Enjoy High Earnings"}
      />
      <section className="gameplay">
        <div className="container">
          <div className="gameplays">
            <div className="gameplays-manual">
              <div className={`gameplays-btn `}>
                <div
                  onClick={() => handleChange("manual")}
                  style={{
                    background: `${
                      change == "manual" ? "rgba(29, 84, 176, 0.5)" : ""
                    }`,
                    borderRadius: "5px",
                  }}
                >
                  <button>Manual</button>
                </div>
                <div
                  onClick={() => handleChange("auto")}
                  style={{
                    background: `${
                      change == "auto" ? "rgba(29, 84, 176, 0.5)" : ""
                    }`,
                    borderRadius: "5px",
                  }}
                >
                  <button>Auto</button>
                </div>
              </div>
              {change == "manual" && (
                <div className="gameplays-manuals">
                  <div className="gameplays-amount">
                    <div>Amount</div>
                    <input type="text" value="0.01" />
                  </div>
                  <div className="gameplays-payout">
                    <div>Payout</div>
                    <div>Change: 98.01980%</div>
                  </div>
                  <input
                    className="gameplays-input"
                    type=""
                    name=""
                    value="1.01"
                  />
                  <button className="gameplays-bet">BET</button>
                </div>
              )}

              {change == "auto" && (
                <div className="gameplays-manuals">
                  <div className="gameplays-amount">
                    <div>Amount</div>
                    <input type="text" value="0.01" />
                  </div>
                  <div className="gameplays-payout">
                    <div>Payout</div>
                    <div>Change: 98.01980%</div>
                  </div>
                  <input
                    className="gameplays-input"
                    type=""
                    name=""
                    value="1.01"
                  />
                  <div className="gameplays-best">
                    <div>Number of Bests</div>
                    <input type="text" />
                  </div>
                  <div className="gameplays-best">
                    <div>Stop on win</div>
                    <input type="text" />
                  </div>
                  <div className="gameplays-best">
                    <div>Stop on lose</div>
                    <input type="text" />
                  </div>
                  <button className="btn">START AUTO BET </button>
                </div>
              )}
            </div>
            <div className="gameplays-img">
              <div className="gameplays-bg">
                <img src={bgSupper} alt="" />
              </div>
              <div>1.00x</div>
              <img src={supper} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlayGame;
