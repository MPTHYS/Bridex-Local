import React from "react";
import { useState } from "react";
import Banner from "page/home/components/Banner";
import Cryptos from "page/home/components/Cryptos";
import Press from "page/home/components/Press";
import Roadmaps from "page/home/components/Roadmaps";
import Tokens from "page/home/components/Tokens";
import Tolennomics from "page/home/components/Tolennomics";
import Trustus from "page/home/components/Trustus";

function Home() {
  return (
    <>
      <Banner />
      <Cryptos />
      <Tokens />
      <Tolennomics />
      <Roadmaps />
      <Press />
      <Trustus />
    </>
  );
}

export default Home;
