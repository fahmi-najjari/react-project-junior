import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change to react-dom/client
import App from './App';

// Find the root DOM node
const rootElement = document.getElementById('root');

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
