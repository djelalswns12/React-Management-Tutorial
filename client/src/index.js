import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './img/logo.png';
import reportWebVitals from './reportWebVitals';
import GoogleButton from './components/GoogleButton';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Login,Home, About, User } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
