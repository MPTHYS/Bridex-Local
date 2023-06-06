import BannerBg from "components/styles/BannerBg";
import React from "react";
import banner from "asset/exchange/banner-exchange.png";
import iconkyc from "asset/text/iconkyc.svg";
import icondown from "asset/home-bridex/caret-down.png";

function KYC() {
  return (
    <>
      <BannerBg
        bg={banner}
        title={"KYC"}
        des={"Start kyc to Enjoy High Earnings"}
      />
      <section className="kycs">
        <div className="container">
          <div className="kyc">
            <div className="kyc-title">
              <strong>KYC</strong> <span>| Personal information</span>
            </div>
            <div className="kyc-err">
              <div className="kyc-err-bg">
                <div>
                  <img src={iconkyc} alt="" />
                </div>
                <div className="kyc-err-el">
                  <div>Additional Personal Information</div>
                  <span>
                    To keep your information secure, please add the following
                    information
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="kyc-tab">
            <div className="kyc-tab-main">
              <div>Country</div>
              <div>
                <input type="text" value="Select..." />
                <span></span>
                <img src={icondown} alt="" style={{ width: "25px" }} />
              </div>
            </div>
            <div className="kyc-main-user">
              <div className="kyc-main-user-name" style={{ flex: "1" }}>
                <div>First Name</div>
                <div>
                  {" "}
                  <input type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="kyc-main-user-name" style={{ flex: "1" }}>
                <div>Last Name</div>
                <div>
                  {" "}
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div className="kyc-tab-main">
              <div>Document</div>
              <div>
                <input type="text" value="Select..." />
                <span></span>
                <img src={icondown} alt="" style={{ width: "25px" }} />
              </div>
            </div>
            <div className="kyc-tab-number">
              <div>Corresponding document number</div>
              <div>
                <input
                  type="text"
                  placeholder="Corresponding document number"
                />
              </div>
            </div>
            <div className="kyc-main-gender">
              <div>
                <input type="radio" />
                <div>Female</div>
              </div>

              <div>
                <input type="radio" />
                <div>Male</div>
              </div>
            </div>
            <div className="kyc-main-check">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                I have read and agree to the user confirmation statement
              </div>
            </div>
            <div className="kyc-main-btn">
              <button>NEXT</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KYC;
