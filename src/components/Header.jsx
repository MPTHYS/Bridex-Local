import React from "react";
import logo from "asset/home-bridex/logo-bridex.svg";
import iconmenu from "asset/home-bridex/iconmenu.png";
import iconbrx from "asset/home-bridex/iconbrx.png";
import { useState } from "react";
import icongame from "asset/home-bridex/iconGame.png";
import { NavLink } from "react-router-dom";
import { dataHeader, dataListChange, dataListCoin } from "./Header/helper";
import iconname from "asset/home-bridex/iconName.png";
import icondown from "asset/home-bridex/caret-down.png";
import iconmail from "asset/text/iconmail.png";
import Overlay from "./Overlay";
import down from "asset/staking/iconclick.png";
import tokenBNB from "asset/text/TokenBNB.png";
import tokenBRX from "asset/text/TokenBRX.png";
import tokenBUSD from "asset/text/TokenBUSD.png";

const dataSymbol = [
  {
    name: "BUSD",
    img: tokenBUSD,
    icon: down,
  },
  {
    name: "BNB",
    img: tokenBNB,
    icon: down,
  },
  {
    name: "BRX",
    img: tokenBRX,
    icon: down,
  },
  {
    name: "GBRX",
    img: icongame,
    icon: down,
  },
];

function Header(props) {
  const { setOpen1, open1 } = props;

  const [open, setOpen] = useState(false);
  function handleMenu() {
    setOpen(!open);
  }
  const listMenu = dataHeader?.map((element, index) => {
    return (
      <div key={index}>
        {/* {element.img} */}

        {element.name}
      </div>
    );
  });
  const menuHeader = dataHeader?.map((e, i) => {
    return (
      <div key={i}>
        <NavLink to={e?.link}>
          <img src={e.img} alt="" style={{ width: "15px", height: "15px" }} />
          {e.name}
          <img src={e.items} alt="" />
          {e.hover?.map((element, index) => {
            return (
              <div key={index} className="header-hover1">
                <NavLink to={e?.link}>
                  <div>{element.name}</div>
                </NavLink>
                <NavLink to={element?.link}>
                  <div>{element.name1}</div>
                </NavLink>
              </div>
            );
          })}
          {e.hover1?.map((element, index) => {
            return (
              <div className="header-hover2" key={index}>
                <NavLink to={element?.link}>
                  {" "}
                  <div>{element.name}</div>
                </NavLink>
                <NavLink to={element?.link1}>
                  <div>{element.name1}</div>
                </NavLink>
                <NavLink to={element?.link2}>
                  <div>{element.name2}</div>
                </NavLink>
              </div>
            );
          })}
        </NavLink>
      </div>
    );
  });
  const listChange = dataListChange?.map((element, index) => {
    return (
      <div key={index}>
        <NavLink to={element?.link}>
          <img src={element.img} alt="" />
          {element.name}
        </NavLink>
      </div>
    );
  });
  const [change, setChange] = useState(-1);
  const handleChange = (index) => {
    if (change == index) {
      setChange(-1);
    } else {
      setChange(index);
    }
  };
  const [sys, setSys] = useState(-1);
  const handleSys = (index) => {
    if (sys == index) {
      setSys(-1);
    } else {
      setSys(index);
    }
  };
  const [popupIcon, setPopupIcon] = useState("");
  const [state, setState] = useState({
    img: tokenBUSD,
    icon: down,
  });
  const handleChangeIcon = (name) => {
    setState(name);
  };
  const handleOpenPopup = () => {
    setPopupIcon(!popupIcon);
  };

  return (
    <section className="headers">
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <NavLink to="/">
              <img src={logo} alt="" style={{ width: "100px" }} />
            </NavLink>
          </div>
          <div className={`header-menu`}>{menuHeader}</div>
          <div className="header-notify">
            <div
              className={`header-notify-reward`}
              onClick={() => setOpen1("bell")}
            >
              <i
                class="fi fi-rr-bell"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
              {open1 == "bell" && (
                <div className="reward">
                  <div className="reward-title">
                    <div
                      onClick={() => handleSys("sys")}
                      style={{
                        borderBottom: `${sys == "sys" ? "2px solid red" : ""}`,
                      }}
                    >
                      System Notice
                    </div>
                    <div
                      onClick={() => handleSys("rew")}
                      style={{
                        borderBottom: `${sys == "rew" ? "2px solid red" : ""}`,
                      }}
                    >
                      Reward
                    </div>
                  </div>
                  {sys == "sys" && (
                    <div className="reward-time">
                      <div>
                        <img src={iconmail} alt="" style={{ width: "25px" }} />{" "}
                        Hello, ahihihuhu
                      </div>
                      <div>2 days ago</div>
                    </div>
                  )}

                  {sys == "rew" && (
                    <div className="reward-eee">
                      <div className="reward-time1">
                        <div className="reward-time2">
                          <div>
                            <img
                              src={iconmail}
                              alt=""
                              style={{ width: "25px" }}
                            />
                            Hello, ahihihuhu
                          </div>
                          <div>2 days ago</div>
                        </div>

                        <span>Welcome back</span>
                      </div>
                      <div className="reward-time-get">
                        <div className="time-get">
                          <img
                            src={icongame}
                            alt=""
                            style={{ width: "25px" }}
                          />
                          <div>Get 100 GBRX</div>
                        </div>
                        <button className="time-get-btn">GET</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {open1 && <Overlay setOpen1={setOpen1} />}
            </div>
            <div
              className={`header-notify-change`}
              onClick={() => handleChange("index")}
            >
              <img
                src={iconname}
                alt=""
                style={{ width: "30px", borderRadius: "15px" }}
              />
              <img src={icondown} alt="" style={{ width: "20px" }} />

              {change == "index" && (
                <div className="notify-change">
                  <div className="change-title">ahihihuhu@gmail.com</div>
                  <div className="change-list">{listChange}</div>
                </div>
              )}
              {change == "index" && (
                <Overlay onClick={() => handleChange("-1")} />
              )}
            </div>
          </div>

          <div className="header-btn">
            <button
              className={`header-btn-reg`}
              onClick={() => setOpen1("REGISTER")}
            >
              REGISTER
            </button>
            <button
              className={`header-btn-login`}
              onClick={() => setOpen1("LOGIN")}
            >
              LOGIN
            </button>
          </div>

          <div className={`header-iconmenu`} onClick={handleMenu}>
            <img
              src={iconmenu}
              alt=""
              style={{ width: "25px", height: "25px" }}
            />
          </div>
        </div>
      </div>
      {!open && (
        <div className="header-brx">
          <div className="container">
            <div className="brx">
              <strong>1 BRX</strong> <span>= 0.414 USD</span>
              <img src={iconbrx} alt="" />
              <p></p>
              <div onClick={handleOpenPopup} className="brx-popup">
                <img src={state.img} alt="" style={{ width: "20px" }} /> 0
                <img
                  src={state.icon}
                  alt=""
                  style={{ width: "10px", height: "5px" }}
                />
                {popupIcon && (
                  <div>
                    {dataSymbol?.map((e, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => handleChangeIcon(e, "name")}
                        >
                          <img src={e.img} alt="" style={{ width: "20px" }} />
                          {e.name}
                          <img
                            src={e.icon}
                            alt=""
                            style={{ width: "10px", height: "5px" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`header-mobile ${open == true ? "active" : "noactive"}`}>
        <div className="header-mobile-menu">
          {listMenu}
          <span className="header-btn">
            <button className="header-btn-reg">REGISTER</button>
            <button className="header-btn-login">LOGIN</button>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Header;
