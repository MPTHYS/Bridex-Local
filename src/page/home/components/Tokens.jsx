import React from 'react';
import ios from "asset/home-bridex/ios.png";
import android from "asset/home-bridex/android.png";
import token from "asset/home-bridex/token.png";
import iconcoppy from "asset/home-bridex/iconcoppy.png";
import danhhieu1 from "asset/home-bridex/danhhieu1.png";
import danhhieu2 from "asset/home-bridex/danhhieu2.png";
import danhhieu3 from "asset/home-bridex/danhhieu3.png";
import danhhieu4 from "asset/home-bridex/danhhieu4.png";
import danhhieu5 from "asset/home-bridex/danhhieu5.png";
import danhhieu6 from "asset/home-bridex/danhhieu6.png";

function Tokens() {
    return (
        <section className="tokens">
        <div className="container">
          <div className="token">
            <div className="token-element">
              <h1>TOKEN SALE IS LIVE TAKE YOUR 5% Bonus</h1>
              <h5>When you refer 5 people, you will get an extra 20% bonus</h5>
              <div className="token-items">
                <img src={ios} alt="" />
                <img src={android} alt="" />
              </div>
              <div className="token-add">
                {" "}
                <strong>$BRX</strong> Contract Address
              </div>
              <div className="token-bep20">
                <div className="bep20">
                  <div>Bep20</div>
                </div>
                
                <div className="bep20-img">
                <div>0x119a805a2aff26dee78d29122d08360acd459e36</div>
                <img
                    src={iconcoppy}
                    alt=""
                    style={{ width: "25px", height: "20px" }}/>
                </div>
              </div>
            </div>
            <div className="token-img">
              <img src={token} alt="" />
            </div>
          </div>
          <div className="sell-bonus">
            <div className="sell-table">
              <div className="sell-title">
                <div>Level</div>
                <div>Total</div>
                <div>Bonus</div>
              </div>
              <div>
                <p><img src={danhhieu1} alt="" style={{width:"25px"}}/></p>
                <p>$ 50,000</p>
                <p>$500</p>
              </div>
              <div>
                <p><img src={danhhieu2} alt="" style={{width:"25px"}}/></p>
                <p>$ 150,000</p>
                <p>$ 2,500</p>
              </div>
              <div>
                <p><img src={danhhieu3} alt="" style={{width:"25px"}}/></p>
                <p>$ 250,000</p>
                <p>$ 3500</p>
              </div>
              <div>
                <p><img src={danhhieu4} alt="" style={{width:"25px"}}/></p>
                <p>$ 500,000</p>
                <p>$ 11,250</p>
              </div>
              <div>
                <p><img src={danhhieu5} alt="" style={{width:"25px"}}/></p>
                <p>$ 1,000,000</p>
                <p>$ 30,000</p>
              </div>
              <div className="sell-and">
                <p><img src={danhhieu6} alt="" style={{width:"25px"}}/></p>
                <p>$ 3,000,000</p>
                <p>$ 200,000</p>
              </div>
            </div>
            <div className="sell-ele">
              <h2>Bonus Sale</h2>
              <p>Each referral who is invested will earn bonus $200,000</p>
            </div>
          </div>
          <div className="private">
            <div className="private-sale">
              <h2>Private Sale</h2>
              <p>Be a savvy investor. When buying Private Sale, you get huge profits</p>
            </div>
            <div className="private-table">
              <div className="private-title">
                <p>#Unlock</p>
                <p>Date</p>
                <p>Unlocked Token</p>
              </div>
              <div>
                <p>1</p>
                <p>6 month</p>
                <p>6%</p>
              </div>
              <div>
                <p>2</p>
                <p>9 month</p>
                <p>6%</p>
              </div>
              <div>
                <p>3</p>
                <p>12 month</p>
                <p>9%</p>
              </div>
              <div>
                <p>4</p>
                <p>15 month</p>
                <p>9%</p>
              </div>
              <div className="private-late">
                <p>5</p>
                <p>24 month</p>
                <p>70%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Tokens
