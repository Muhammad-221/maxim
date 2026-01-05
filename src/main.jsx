import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './App.scss';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/maxim">
    <App />
  </BrowserRouter>
)
