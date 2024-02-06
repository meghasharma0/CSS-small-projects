import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ItemContextProvider } from './function/context/EcommerceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </React.StrictMode>
);
