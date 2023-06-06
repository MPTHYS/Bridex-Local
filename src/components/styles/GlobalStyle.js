import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  body {
    font-family: 'IBM Plex Sans'
  }
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
  
  section{
    max-width:1920px;
  }
  .row{
    margin:0;
  }
  img{
    max-width:100%;
  }
  @media (max-width: 568px){

    h1{
      font-size: 30px;
    }
    h2{
      font-size: 24px;
    }
    p{
      font-size:14px
    }
  }
`;