import { Outlet } from "react-router-dom";
import style from "../asset/scss/style.scss";

import Loadding from "../components/Loadding";
import ShadowLayer from "../components/ShadowLayer";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";
import Header from "components/Header";
import Footer from "components/Footer";
import { useState } from "react";
import Login from "components/Login";
import Overlay from "components/Overlay";
import Register from "components/Register";


const home = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function MainLayout2() {
  const [open1, setOpen1] = useState('')
  return (
    <>
      <Header setOpen1={setOpen1} open1={open1}/>
      <Box sx={home} className="home">
        <Outlet />
      </Box>
      {open1 == 'LOGIN' && 
      <Login />}
      {open1 == 'REGISTER' && 
      <Register />}
      {open1 && 
      <Overlay setOpen1={setOpen1}/>}
      {/* <Loadding />
      <ShadowLayer />
      <ToastContainer /> */}
      <Footer />
      
    </>
  );
}
