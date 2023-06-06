import React from "react";
import banner from "asset/exchange/banner-exchange.png";
import BannerBg from "components/styles/BannerBg";
import iconfb from "asset/text/iconfb.jpg";
import icontele from "asset/text/icontele.png";
import icontwi from "asset/text/icontwi.png";

function Referral() {
  return (
    <>
      <BannerBg
        bg={banner}
        title={"Referral"}
        des={"Start Referral to Enjoy High Earnings"}
      />
      <section className="referrals">
        <div className="container">
          <div className="referral">
            <div className="referral-main">
              <h2>Share your link NOW and Let's grow together!</h2>
              <div className="referral-main-tab">
                <h3>My Referral Link</h3>
                <div className="referral-main-inbut">
                  <input type="text" />
                  <button>COPY REFERRAL LINK</button>
                  <div className="referral-main-mxh">
                    <div>Share</div>
                    <img
                      src={iconfb}
                      alt=""
                      style={{ width: "30px", borderRadius: "20px" }}
                    />
                    <img
                      src={icontele}
                      alt=""
                      style={{ width: "30px", borderRadius: "20px" }}
                    />
                    <img src={icontwi} alt="" style={{ width: "50px" }} />
                  </div>
                </div>
              </div>
              <div className="referral-main-note">
                <div>
                  <strong>Note:</strong>
                  <p>System Referral</p>
                  <strong>Total:</strong>
                  <p>0 Users</p>
                </div>
                <div>
                  {" "}
                  <span>Ahihihuhu@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Referral;
