import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";


const GlobalStyled = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;

    font-family: sans-serif;

    body{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: lightblue ;
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
