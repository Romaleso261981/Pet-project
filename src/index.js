import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

const basename = process.env.NODE_ENV !== 'production' ? '/final-project-team5-front' : '/final-project-team5-front/';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(basename);
root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>
);
