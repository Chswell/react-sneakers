import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.scss';
import 'macro-css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);


// Для сервера
// npm install -g json-server
// скрипт в packege.json 
// "server": "json-server -w server/db.json -p 3001"

