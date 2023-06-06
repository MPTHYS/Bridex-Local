import iconhome from "asset/home-bridex/iconhome.png";
import iconprivate from "asset/home-bridex/iconprivate.png";
import iconexchange from "asset/home-bridex/iconexchange.png";
import iconstaking from "asset/home-bridex/iconstaking.png";
import iconfarming from "asset/home-bridex/iconfarming.png";
import iconwallet from 'asset/home-bridex/iconWallet.png';
import icongame from 'asset/home-bridex/iconGame.png';
import icondown from "asset/home-bridex/caret-down.png";
import iconreward from 'asset/text/iconreward.png';
import down from 'asset/staking/iconclick.png';
import tokenBNB from 'asset/text/TokenBNB.png';
import tokenBRX from 'asset/text/TokenBRX.png';
import tokenBUSD from 'asset/text/TokenBUSD.png';


export const dataHeader = [
    {
        name : 'Home',
        img :  iconhome,
        link: '/'
    },
    {
        name : 'Private Sale',
        img : iconprivate,
        link: '/private-sale',
        items: icondown,
        hover:[  
             {
                name: 'Private Sale',
                name1: 'History',
                link: '/history-private'
            }
        ]
    },
    {
        name : 'Exchange',
        img : iconexchange,
        link: '/exchange'
    },
    {
        name : 'Staking',
        img : iconstaking,
        link: '/staking',
        items: icondown,
        hover:[  
            {
               name: 'Staking',
               name1: 'History',
               link: '/history-staking'
           }
       ]
    },
    {
        name: 'Wallet',
        img: iconwallet,
        link: '/wallet',
        items: icondown,
        hover1:[  
            {
               name: 'Deposit',
               name1: 'Withdraw',
               name2: 'Transfer',
               link: '/deposit',
               link1: "/withdraw",
               link2: '/transfer'
           }
       ]
    },
    {
        name : 'Farming',
        img : iconfarming,
        link: '/farming'
    },
    {
        name: 'Game',
        img : icongame,
        link:'/play-game'
    }
]
 export const dataListChange = [
    {
        name: 'Reward',
        img : iconreward,
        link: '/reward'
    },
    {
        name: 'Referral',
        link: '/referral'
    },
    {
        name: 'Profile',
        link: '/profile'
    },
    {
        name: 'Change password',
        link: '/change-password'
    },
    {
        name: 'KYC',
        link: '/kyc'
    },
    {
        name: 'Logout',
        link: '/reward'
    },
 ]
 export const dataListCoin = [
    {
        name: 'BUSD',
        img: tokenBUSD,
        icon: down
    },
    {
        name: 'BNB',
        img: tokenBNB,
        icon: down
    },
    {
        name: 'BRX',
        img: tokenBRX,
        icon: down
    },
    {
        name: 'GBRX',
        img: icongame,
        icon: down
    },
 ]