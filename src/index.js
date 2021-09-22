import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";


const GlobalStyled = createGlobalStyle`
  
    margin:0;
    padding:0;
    box-sizing: border-box;

    font-family: sans-serif;

    html{
      width: 100vw;
      height: 100vh;
      overflow: hidden;

    body {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: blueviolet;
    }
  }
`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
