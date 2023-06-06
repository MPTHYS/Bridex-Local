import React from "react";
import tokenBUSD from "asset/text/TokenBUSD.png";

import BannerBg from "components/styles/BannerBg";

import banner from "asset/exchange/banner-exchange.png";
import Wallet from "components/styles/Wallet";
import icons from "asset/text/icons.png";
import HistoryTable from "components/styles/HistoryTable";

function Transfer() {
  return (
    <>
      <BannerBg
        bg={banner}
        title={"Transfer"}
        des={"Start transfer to Enjoy High Earnings"}
      />
      <Wallet
        title={"Transfer"}
        nameInput1={"Username"}
        nameInput2={"Choice"}
        nameInput3={"Amount of BUSD"}
        img={tokenBUSD}
        p={"Max available:"}
        strong={"0 BUSD"}
        icons1={icons}
        icons2={icons}
        p3={
          "The overhead fees are not fixed, subject to change depending on the state of the blockchain networks"
        }
        p4={"Estimated completion time: 2 minutes"}
        p6={"Please enable KYC to use this function!"}
        strong3={"Go to KYC"}
      />
      <HistoryTable
        title={"History Transfer"}
        row1={"#"}
        row2={"Symbol"}
        row3={"Description"}
        row4={"Amount"}
        row5={"Time"}
        empty={"Empty data..."}
      />
    </>
  );
}

export default Transfer;
