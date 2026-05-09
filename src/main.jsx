import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure the path matches your folder structure: src/styles/index.css
import './styles/index.css';

/**
 * The 'root' element is located in your /index.html file.
 * StrictMode is used here to help identify potential problems 
 * in the application during development.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);