import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ArrayProvider } from './components/Header/Pages/arrayproducts/ArrayProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ArrayProvider>
      <App />
    </ArrayProvider>
  </React.StrictMode>

);

reportWebVitals();
