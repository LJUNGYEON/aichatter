import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './js/header';
import SideBar from './js/sidebar';
import reportWebVitals from './reportWebVitals';
import CountEx from './CountEx';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Header />
    <SideBar />
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
