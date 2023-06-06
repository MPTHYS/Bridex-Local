import BannerBg from "components/styles/BannerBg";
import React from "react";
import banner from "asset/exchange/banner-exchange.png";
import icondown from "asset/home-bridex/caret-down.png";
import iconname from "asset/home-bridex/iconName.png";

function Profile() {
  return (
    <>
      <BannerBg
        bg={banner}
        title={"Profile"}
        des={"Start profile to Enjoy High Earnings"}
      />
      <section className="profiles">
        <div className="container">
          <div className="profile-main-text">
            <div className="profile">
              <div className="profile-main">
                <div className="profile-main-country">
                  <div>Country</div>
                  <div>
                    <input type="text" value="Select..." />
                    <span></span>
                    <img src={icondown} alt="" style={{ width: "25px" }} />
                  </div>
                </div>
                <div className="profile-main-user">
                  <div className="profile-main-user-name" style={{ flex: "5" }}>
                    <div>User Name</div>
                    <div>
                      {" "}
                      <input type="text" />
                    </div>
                  </div>
                  <div className="profile-main-user-name" style={{ flex: "4" }}>
                    <div>Display Name</div>
                    <div>
                      {" "}
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div className="profile-main-user">
                  <div className="profile-main-user-name" style={{ flex: "5" }}>
                    <div>Email</div>
                    <div>
                      {" "}
                      <input type="text" />
                    </div>
                  </div>
                  <div className="profile-main-user-name" style={{ flex: "4" }}>
                    <div>Phone</div>
                    <div>
                      {" "}
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                </div>
                <div className="profile-main-gender">
                  <div>
                    <input type="radio" />
                  </div>
                  <div>Female</div>
                  <div>
                    <input type="radio" />
                  </div>
                  <div>Male</div>
                </div>
              </div>
              <div className="profile-avata">
                <div>Up news avatar</div>
                <div>
                  <img
                    src={iconname}
                    alt=""
                    style={{ width: "200px", borderRadius: "10px" }}
                  />
                </div>
                <div>
                  <button>CANCEL</button>
                </div>
              </div>
            </div>
            <button className="profile-main-btn">SUBMIT</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
