import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";


const GlobalStyled = createGlobalStyle`
  
  /* box-sizing: border-box;
  
  font-family: sans-serif;
  
  html{
    overflow: hidden; */
    
    body {
      /* display: flex; */
      /* align-items: center; */
      /* justify-content: center; */
      margin: 0;
      padding: 0;
      max-width: 100vw;
      height: auto;
      background-color: #ffcb05;
      button{
        cursor:pointer;
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
