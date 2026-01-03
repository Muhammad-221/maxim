import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './App.scss';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
