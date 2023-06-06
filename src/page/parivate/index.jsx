import React from "react";
import Banner from "components/Banner";
import bannerprivate from "asset/private-bridex/PrivateSales.png";
import iconpri from "asset/private-bridex/iconprivate.png";

const dataPrivateSale = [
  {
    img: iconpri,
    textPackega: "Packega:",
    packega: 1000,
    symbol: "BRX",
    textPrice: "Price:",
    price: 469,
    symbolBuy: "BUSD",
    month: 6,
    raito: 6,
    amount: 60,
    month1: 9,
    raito1: 6,
    amount1: 60,
    month2: 12,
    raito2: 9,
    amount2: 90,
    month3: 15,
    raito3: 9,
    amount3: 90,
    month4: 24,
    raito4: 70,
    amount4: 700,
  },
  {
    img: iconpri,
    textPackega: "Packega:",
    packega: 2000,
    symbol: "BRX",
    textPrice: "Price:",
    price: 939,
    symbolBuy: "BUSD",
    month: 6,
    raito: 6,
    amount: 120,
    month1: 9,
    raito1: 6,
    amount1: 120,
    month2: 12,
    raito2: 9,
    amount2: 180,
    month3: 15,
    raito3: 9,
    amount3: 180,
    month4: 24,
    raito4: 70,
    amount4: 1400,
  },
  {
    img: iconpri,
    textPackega: "Packega:",
    packega: 5000,
    symbol: "BRX",
    textPrice: "Price:",
    price: 2348,
    symbolBuy: "BUSD",
    month: 6,
    raito: 6,
    amount: 300,
    month1: 9,
    raito1: 6,
    amount1: 300,
    month2: 12,
    raito2: 9,
    amount2: 450,
    month3: 15,
    raito3: 9,
    amount3: 450,
    month4: 24,
    raito4: 70,
    amount4: 3500,
  },
  {
    img: iconpri,
    textPackega: "Packega:",
    packega: 8000,
    symbol: "BRX",
    textPrice: "Price:",
    price: 3756,
    symbolBuy: "BUSD",
    month: 6,
    raito: 6,
    amount: 480,
    month1: 9,
    raito1: 6,
    amount1: 480,
    month2: 12,
    raito2: 9,
    amount2: 720,
    month3: 15,
    raito3: 9,
    amount3: 720,
    month4: 24,
    raito4: 70,
    amount4: 5600,
  },
  {
    img: iconpri,
    textPackega: "Packega:",
    packega: 15000,
    symbol: "BRX",
    textPrice: "Price:",
    price: 7044,
    symbolBuy: "BUSD",
    month: 6,
    raito: 6,
    amount: 900,
    month1: 9,
    raito1: 6,
    amount1: 900,
    month2: 12,
    raito2: 9,
    amount2: 1350,
    month3: 15,
    raito3: 9,
    amount3: 1350,
    month4: 24,
    raito4: 70,
    amount4: 10500,
  },
];
const dataPrivate = dataPrivateSale?.map((e, i) => {
  return (
    <div key={i} className="packega">
      <div className="packega-main">
        <img src={e.img} alt="" />
        <div>
          <div>
            {e.textPackega}{" "}
            <strong>
              {e.packega} {e.symbol}
            </strong>
          </div>
          <div>
            {e.textPrice}{" "}
            <strong>
              {e.price} {e.symbolBuy}
            </strong>
          </div>
        </div>
      </div>
      <div className="main-test">
        <div>
          <p>{e.month} months</p>
          <strong>
            {e.amount} {e.symbol}
          </strong>
        </div>
        <div>{e.raito}%</div>
      </div>
      <div className="main-test">
        <div>
          <p>{e.month1} months</p>
          <strong>
            {e.amount1} {e.symbol}
          </strong>
        </div>
        <div>{e.raito1}%</div>
      </div>
      <div className="main-test">
        <div>
          <p>{e.month2} months</p>
          <strong>
            {e.amount2} {e.symbol}
          </strong>
        </div>
        <div>{e.raito2}%</div>
      </div>
      <div className="main-test">
        <div>
          <p>{e.month3} months</p>
          <strong>
            {e.amount3} {e.symbol}
          </strong>
        </div>
        <div>{e.raito3}%</div>
      </div>
      <div className="main-test">
        <div>
          <p>{e.month4} months</p>
          <strong>
            {e.amount4} {e.symbol}
          </strong>
        </div>
        <div>{e.raito4}%</div>
      </div>
      <div className="btn">
        <button className="packega-btn">LOGIN NOW</button>
      </div>
    </div>
  );
});

function Parivate() {
  return (
    <>
      <Banner
        title={"Private Sale"}
        des={
          "Each user can only buy 1 package, so consider choosing the most suitable package for you Total remaining private sales supply"
        }
        strong={"BRX"}
        img={bannerprivate}
      />
      <div className="packegas">{dataPrivate}</div>
    </>
  );
}

export default Parivate;
