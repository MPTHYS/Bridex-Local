import Footer from "components/Footer";
import Header from "components/Header";
import BannerBg from "components/styles/BannerBg";
import React, { useState } from "react";
import banner from "asset/exchange/banner-exchange.png";
import icons from "asset/text/icons.png";
import tokenBUSD from "asset/text/TokenBUSD.png";
import tokenBNB from "asset/text/TokenBNB.png";
import tokenBRX from "asset/text/TokenBRX.png";
import HistoryTable from "components/styles/HistoryTable";
import Wallet from "components/styles/Wallet";
import Overlay from "components/Overlay";

function Withdraw() {
  return (
    <>
      <BannerBg
        bg={banner}
        title={"Withdraw"}
        des={"Start withdraw to Enjoy High Earnings"}
      />
      <Wallet
        title={"Withdraw"}
        nameInput1={"Wallet USDT.BEP20 - Note *"}
        nameInput2={"Choice"}
        nameInput3={"Amount of BUSD"}
        img={tokenBUSD}
        p={"Max available:"}
        strong={"0 BUSD"}
        p1={"Max withdraw:"}
        strong1={"20 BUSD"}
        icons1={icons}
        icons2={icons}
        icons3={icons}
        p3={
          "The overhead fees are not fixed, subject to change depending on the state of the blockchain networks"
        }
        p4={"Estimated completion time: 2 minutes"}
        p5={"Fee:"}
        strong2={"0 BUSD (5%)"}
        p6={"Please enable KYC to use this function!"}
        strong3={"Go to KYC"}
      />

      <HistoryTable
        title={"History Withdraw"}
        row1={"#"}
        row2={"Symbol"}
        row3={"Address To"}
        row4={"Amount"}
        row5={"Status"}
        row6={"Time"}
        empty={"Empty data..."}
      />
    </>
  );
}

export default Withdraw;
