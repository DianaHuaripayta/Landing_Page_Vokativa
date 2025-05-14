import { BrowserRouter } from "react-router-dom"; // ✅ Solo aquí
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "./styles/fonts.css";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);