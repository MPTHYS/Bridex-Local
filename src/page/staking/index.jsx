import React from "react";
import { useState } from "react";
import banner from "asset/staking/banner-staking.png";
import iconclick from "asset/staking/iconclick.png";
import iconnft from "asset/private-bridex/iconprivate.png";
import { listStaking } from "./helper";

function Staking() {
  const [open, setOpen] = useState("");
  function handleOpen(index) {
    if (open == index) {
      setOpen("");
    } else {
      setOpen(index);
    }
  }

  const mapStaking = listStaking?.map((e, i) => {
    return (
      <div className="banner-text">
        <div className="banner-text-table">
          <div className="banner-text-icon">
            <img src={iconnft} alt="" />
            <div className="banner-text-title">
              <strong>{e?.title}</strong>
              <div>
                1 week withdrawal: <strong>{e?.maxWithdrawal}$</strong>
              </div>
             {e.refund ? <div>Refund fee on withdrawal: <strong>{e.refund}%</strong></div> : ''}
            </div>
          </div>
          <div className="banner-text-packega">
            <div>
              Packega:{" "}
              <strong>
                {e?.packega} {e?.symbol}
              </strong>
            </div>
            <div>
              price:{" "}
              <strong>
                {e?.price} {e?.symbolBuy}
              </strong>
            </div>
          </div>
          <button className="banner-text-btn">LOGIN NOW</button>
          <div
            className={`banner-text-click`}
            onClick={() => handleOpen(i + 1)}
          >
            <div>Details</div>
            <span>
              <img src={iconclick} alt="" />
            </span>
              <div
            className={`banner-text-open ${
              open == i + 1 ? "active" : "noactive"
            }`}
          >
            {e?.items?.map((el, ind) => {
              return (
                <div key={ind} className="banner-text-list">
                  <div className="banner-text-list0">
                    <div className="banner-text-list1">
                      <div>
                        <p>Packega: {el.raito}%</p>
                        <p>{el.month} Month</p>
                      </div>
                      <div>
                        {el.amount} {el.symbol}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        
        </div>
      </div>
    );
  });
  return (
    <>
      <section className="stakings">
        <div className="container">
          <div className="banner">
            <div className="banner-main">
              <div className="banner-element">
                <h1>Staking</h1>
                <p>
                  Looking for a less resource-intensive alternative to mining?
                  Use your BRX tokens to earn more tokens, for Free.
                </p>
              </div>
              <div className="banner-items">
                <img src={banner} alt="" />
              </div>
            </div>
            <div className="flex"> {mapStaking}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Staking;
