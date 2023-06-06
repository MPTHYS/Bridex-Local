import React from "react";
import logo from "asset/home-bridex/logo-bridex.svg";
import iconmenu from "asset/home-bridex/iconmenu.png";
import iconbrx from "asset/home-bridex/iconbrx.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { dataHeader } from "./Header/helper";
function Header(props) {
  const { setOpen1, open1 } = props;

  const [open, setOpen] = useState(false);
  function handleMenu() {
    setOpen(!open);
  }
  const listMenu = dataHeader?.map((element, index) => {
    return (
      <div key={index}>
        {element.name}
      </div>
    );
  });
  const menuHeader = dataHeader?.map((e, i) => {
    return (
      <div key={i} style={{ display: "flex", alignItems: "center" }}>
        <NavLink to={e?.link}>
          {" "}
          <img src={e.img} alt="" style={{ width: "15px", height: "15px" }} />
          {e.name}
        </NavLink>
      </div>
    );
  });

  return (
    <section className="headers">
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src={logo} alt="" style={{ width: "100px" }} />
          </div>
          <div className="header-menu">{menuHeader}</div>

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
              <div>asd</div>
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
