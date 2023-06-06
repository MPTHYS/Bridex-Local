
import BannerBg from "components/styles/BannerBg";
import React from "react";
import { useState } from "react";
import banner from "asset/exchange/banner-exchange.png";
import items1 from "asset/home-bridex/danhhieu1.png";
import items2 from "asset/home-bridex/danhhieu2.png";
import items3 from "asset/home-bridex/danhhieu3.png";
import items4 from "asset/home-bridex/danhhieu4.png";
import items5 from "asset/home-bridex/danhhieu5.png";
import items6 from "asset/home-bridex/danhhieu6.png";

const dataSale = [
  {
    img: items1,
    total: "$50,000",
    bonus: "$500",
  },
  {
    img: items2,
    total: "$150,000",
    bonus: "$2,500",
  },
  {
    img: items3,
    total: "$250,000",
    bonus: "$3,500",
  },
  {
    img: items4,
    total: "$500,000",
    bonus: "$11,250",
  },
  {
    img: items5,
    total: "$1,000,000",
    bonus: "$30,000",
  },
  {
    img: items6,
    total: "$3,000,000",
    bonus: "$200,000",
  },
];
const dataBonus = [
  {
    stt: 1,
    symbol: "$150,000",
    bonus: "$10,000",
  },
  {
    stt: 2,
    symbol: "$250,000",
    bonus: "$20,000",
  },
  {
    stt: 3,
    symbol: "$500,000",
    bonus: "$50,000",
  },
  {
    stt: 4,
    symbol: "$1,000,000",
    bonus: "$120,000",
  },
  {
    stt: 5,
    symbol: "$3,000,000",
    bonus: "$500,000",
  },
];

function Reward() {
  const listDataSale =dataSale?.map ((e,i)=>{
      return(
          <div key={i}>
            <div>
            <div>{e.img}</div>  
            <div> {e.total}</div> 
            <div>{e.bonus}</div>  
            <div> <button>GET</button> </div> 
            </div>
          </div>
      )
  })

  const listDataBonus = dataBonus?.map((el,index)=>{
      return(
          <div  className="rewards-table-lists" key={index}>
            <div>
             <div>{el.stt}</div>
             <div> {el.symbol}</div>
             <div>{el.bonus}</div>
             <div><button>GET</button></div>
             </div>
          </div>
      )
  })

  const [change, setChange] = useState("");
  const handleChange = (name) => {
    setChange(name);
  };
  return (
    <>
      <BannerBg
        bg={banner}
        title={"Rewards"}
        des={"Rewards received when sales reach milestone"}
      />
      <section className="rewards">
        <div className="container">
          <div className="rewards-table">
            <div className="rewards-table-main">
              <div className="rewards-table-income">
                <div className="rewards-table-btn">
                  <div
                    onClick={() => handleChange("sales")}
                    style={{
                      background: `${
                        change == "sales" ? "rgba(29, 84, 176, 0.5)" : ""
                      }`,
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    <button>Sales</button>
                  </div>
                  <div
                    onClick={() => handleChange("commision")}
                    style={{
                      background: `${
                        change == "commision" ? "rgba(29, 84, 176, 0.5)" : ""
                      }`,
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    <button>Commision</button>
                  </div>
                  <div
                    onClick={() => handleChange("bonus")}
                    style={{
                      background: `${
                        change == "bonus" ? "rgba(29, 84, 176, 0.5)" : ""
                      }`,
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    <button>Bonus</button>
                  </div>
                </div>
                {change == "sales" && (
                  <div className="rewards-table-sales">
                    <div>Income</div>
                    <span>$0</span>
                  </div>
                )}
              </div>
              {change == "sales" && (
                <div>
                  <div className="rewards-table-title">
                    <div>Level</div>
                    <div>Level</div>
                    <div>Bonus</div>
                    <div></div>
                  </div>
                  <div className="rewards-table-list">
                   {listDataSale}
                  </div>
                  {/* <div className="rewards-table-list">
                    <div>
                      <img src={badge2} alt="" style={{ width: "30px" }} />
                    </div>
                    <div>$150,000</div>
                    <div>$2,500</div>
                    <div>
                      <button>GET</button>
                    </div>
                  </div>
                  <div className="rewards-table-list">
                    <div>
                      <img src={badge3} alt="" style={{ width: "30px" }} />
                    </div>
                    <div>$250,000</div>
                    <div>$3,500</div>
                    <div>
                      <button>GET</button>
                    </div>
                  </div>
                  <div className="rewards-table-list">
                    <div>
                      <img src={badge4} alt="" style={{ width: "30px" }} />
                    </div>
                    <div>$500,000</div>
                    <div>$11,250</div>
                    <div>
                      <button>GET</button>
                    </div>
                  </div>
                  <div className="rewards-table-list">
                    <div>
                      <img src={badge5} alt="" style={{ width: "30px" }} />
                    </div>
                    <div>$1,000,000</div>
                    <div>$30,000</div>
                    <div>
                      <button>GET</button>
                    </div>
                  </div>
                  <div className="rewards-table-list">
                    <div>
                      <img src={badge6} alt="" style={{ width: "30px" }} />
                    </div>
                    <div>$3,000,000</div>
                    <div>$200,000</div>
                    <div>
                      <button>GET</button>
                    </div>
                  </div> */}
                </div>
              )}
              {change == "commision" && (
                <div className="rewards-table-commis">
                  <div>
                    <p>
                      When you refer 5 people and make the first deposit to the
                      website, you will receive a commission on the total amount
                      loaded ("Only 5 people 1 time")
                    </p>
                  </div>
                  <div className="rewards-table-user">
                    <div>STT</div>
                    <div>User 1</div>
                    <div>User 2</div>
                    <div>User 3</div>
                    <div>User 4</div>
                    <div>User 5</div>
                    <div>Total</div>
                    <div>Bonus</div>
                    <div></div>
                  </div>
                  <div className="rewards-table-data">Empty data...</div>
                </div>
              )}

              {change == "bonus" && (
                <div className="rewards-table-bonus">
                  <p>Get the highest number of 5 friends you refer!</p>
                  <div className="rewards-table-title">
                    <div>Level</div>
                    <div>Total Per User</div>
                    <div>Bonus</div>
                    <div></div>
                  </div>
                  <div className="rewards-table-lists">
                {listDataBonus}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reward;
