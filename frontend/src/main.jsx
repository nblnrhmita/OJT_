import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- 1. IMPOR BrowserRouter
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. BUNGKUS <App /> DI DALAM <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);