import React, { useState } from "react";
import tokenBUSD from "asset/text/TokenBUSD.png";
import tokenBNB from "asset/text/TokenBNB.png";
import tokenBRX from "asset/text/TokenBRX.png";
import Overlay from "components/Overlay";

const dataSymbol = [
  {
    id: 1,
    img: tokenBNB,
    name: "BNB",
  },
  {
    id: 2,
    img: tokenBUSD,
    name: "BUSD",
  },
  {
    id: 3,
    img: tokenBRX,
    name: "BRX",
  },
];

function Wallet(props) {
  const [data, setData] = useState({
    name: 'BUSD',
    img: tokenBUSD
  });
  const changeData = (name) => {
    setData(name)
  };


  const {
    title,
    nameInput1,
    nameInput2,
    nameInput3,
    icons1,
    icons2,
    icons3,
    p,
    strong,
    strong1,
    strong2,
    strong3,
    p1,
    p3,
    p4,
    p5,
    p6,
  } = props;
  const [popup, setPopup] = useState("");
  const hanndlePopup = () => {
    setPopup(!popup);
  };
  return (
    <section className="withdraw-card">
      <div className="container">
        <div className="withdraws">
          <div className="withdraw">
            <h2>{title}</h2>
          </div>
          <div className="withdraw-note">
            <div>
              <div>{nameInput1}</div>
              <input type="text" />
            </div>
            <div className={`withdraw-busd`}>
              <div>{nameInput2}</div>
              <div className={`busd`} onClick={hanndlePopup}>
                <input type="text" value=" " />
               <div className="busd-abc">
               <img src={data.img} alt="" style={{width:'30px'}} /> {data.name}
                </div>
                {popup && (
                  <div className="popup">
                    {dataSymbol?.map((e, i) => {
                      return (
                        <div key={i} onClick={()=>changeData(e,'name')}>
                          <img src={e.img} alt="" style={{ width: "30px" }} />
                          {e.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div>
              <div>{nameInput3}</div>
              <input type="text" />
            </div>
          </div>
          <div className="withdraw-busd">
            <div>
              {p}
              <strong> {strong}</strong>
            </div>
            <div>
              {p1}
              <strong> {strong1}</strong>
            </div>

            <div className="withdraw-Fee">
              <img src={icons1} alt="" />
              <div>{p3}</div>
            </div>
            <div className="withdraw-Fee">
              <img src={icons2} alt="" />
              <div>{p4}</div>
            </div>
            <div className="withdraw-Fee">
              <img src={icons3} alt="" />
              <div>
                {p5} <strong>{strong2}</strong>
              </div>
            </div>
          </div>
          <div className="withraw-kyc">
            {p6} <strong>{strong3}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wallet;
