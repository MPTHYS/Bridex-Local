import Exchange from "page/exchange";
import Staking from "page/staking";
import Parivate from "page/parivate";
import React from "react";
import PrivateRoute from "./layout/PrivateRoute";
import Farming from "page/farming";
import Test from "page/text";
import HistoryPrivate from "page/historyprivate";
import HistoryStaking from "page/historystaking";
import Deposit from "page/deposit";
import Withdraw from "page/withdraw";
import Transfer from "page/transfer";
import PlayGame from "page/playgame";
import Reward from "page/rewards";
import Referral from "page/referral";
import Profile from "page/profile";
import ChangePassword from "page/changepassword";
import KYC from "page/kyc";

// const MarketplaceMain = React.lazy(() => import('./page/marketplace'))
const Home = React.lazy(() => import("./page/home"));
const Marketplace = React.lazy(() => import("./page/marketplace"));

// const Page404 = React.lazy(() => import("./page/page404"));
const routers = [
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/private-sale",
        element: <Parivate />,
      },
      {
        path: "/staking",
        element: <Staking />,
      },
      {
        path: "/exchange",
        element: <Exchange />,
      },
      {
        path: "/farming",
        element: <Farming />,
      },
      {
        path: "/play-game",
        element: <PlayGame />,
      },
      {
        path: "/history-private",
        element: <HistoryPrivate />,
      },
      {
        path: "/history-staking",
        element: <HistoryStaking />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/transfer",
        element: <Transfer />,
      },
      {
        path: "/reward",
        element: <Reward />,
      },
      {
        path: "/referral",
        element: <Referral />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/kyc",
        element: <KYC />,
      },
    ],
  },

  {
    path: "/test",
    element: <Test />,
  },
 
  // {
  //     path: "/login",
  //     element: <NewLogin />,
  // },

  // {
  //     path: "*",
  //     element: <Page404 />,
  // },
];

export default routers;
