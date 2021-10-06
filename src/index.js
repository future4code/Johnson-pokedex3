import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";


const GlobalStyled = createGlobalStyle`
  
    
    body {
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
