import React, { useState } from "react";
import banner from "asset/exchange/banner-exchange.png";
import Header from "components/Header";
import Footer from "components/Footer";
import BannerBg from "components/styles/BannerBg";
import tokenBUDS from "asset/text/TokenBUSD.png";
import tokenBNB from "asset/text/TokenBNB.png";
import tokenBRX from "asset/text/TokenBRX.png";
import code from "asset/text/QR.png";
import HistoryTable from "components/styles/HistoryTable";

const dataDeposit = [
  {
    img: tokenBUDS,
    symbol: "UBSD",
  },
  {
    img: tokenBNB,
    symbol: "BNB",
  },
  {
    img: tokenBRX,
    symbol: "BRX",
  },
];

function Deposit() {
  const deposit = dataDeposit?.map((e, index) => {
    return (
      <div key={index}>
        <button className={`deposit-btn`} onClick={() => hanndletest}>
          <img style={{ width: "70px" }} src={e.img} alt="" />
          <span>{e.symbol}</span>
        </button>
      </div>
    );
  });
  const [text, setText] = useState(false);
  const hanndletest = () => {
    setText(!text);
  };

  return (
    <>
      <BannerBg
        bg={banner}
        title={"Deposit"}
        des={"Start deposit to Enjoy High Earnings"}
      />
      <section className="deposits">
        <div className="container">
          <div className="deposit">
            <div className="deposit-main">
              <div
                className={`deposit-main-btn ${
                  text == true ? "active" : "noactive"
                } `}
              >
                {deposit}
              </div>

              <div className="deposit-main-text">
                <div className="deposit-main-wallet">
                  <div className="deposit-main-code">
                    <img src={code} alt="" />
                    <span>QR CODE</span>
                    <p>0x85B20faF334155FCCFf0f2558363507a49f1Fdde</p>
                  </div>
                  <div className="deposit-main-deposit">
                    <h3>Deposit BUSD WALLET</h3>
                    <span>Please send BUSD BEP20</span>
                    <div>
                      <button className="deposit-main-btn1">
                        Copy Address
                      </button>
                      <button className="deposit-main-btn2">
                        Save QR Code
                      </button>
                    </div>
                    <p>
                      Your transaction will be completed once it is confirmed by
                      the blockchain network. Confirmation time can vary and
                      depends on the fee transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HistoryTable
            title={"History Deposit"}
            row1={"#"}
            row2={"Symbol"}
            row3={"Description"}
            row4={"Amount"}
            row5={"Time"}
            empty={"Empty data..."}
          />
        </div>
      </section>
    </>
  );
}

export default Deposit;
