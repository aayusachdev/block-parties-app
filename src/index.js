import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={<h6 className='loading-container'>Loading data...</h6>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
