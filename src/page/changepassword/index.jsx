import React from "react";
import banner from "asset/exchange/banner-exchange.png";

import BannerBg from "components/styles/BannerBg";

function ChangePassword() {
  return (
    <>
      <BannerBg
        bg={banner}
        title={"Change Password"}
        des={"Start change password to Enjoy High Earnings"}
      />
      <section className="change">
        <div className="container">
          <div className="changes">
            <div className="changes-pass">
              <h2>Change Password</h2>
              <div>
                <div>Old Password</div>
                <div>
                  <input type="text" placeholder="Old Password" />
                </div>
              </div>
              <div>
                <div>New Password</div>
                <div>
                  <input type="text" placeholder="New Password" />
                </div>
              </div>
              <div>
                <div>Comfirm Password</div>
                <div>
                  <input type="text" placeholder="Comfirm Password" />
                </div>
              </div>
              <button className="changes-pass-btn">CHANGE PASSWORD</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChangePassword;
