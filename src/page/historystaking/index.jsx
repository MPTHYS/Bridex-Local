import Banner from "components/Banner";
import React from "react";
import bannerlogo from "asset/staking/banner-staking.png";
import HistoryTable from "components/styles/HistoryTable";

function HistoryStaking() {
  return (
    <>
      <Banner
        title={"History Staking"}
        des={
          "Looking for a less resource-intensive alternative to mining? Use your BRX tokens to earn more tokens, for Free."
        }
        img={bannerlogo}
      />
      <HistoryTable
        title={"History Staking"}
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

export default HistoryStaking;
