import './index.css';
import './sub-main.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
