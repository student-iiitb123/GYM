import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Server from './components/Server/Server';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Server />
  </BrowserRouter>
    
  </>
);
