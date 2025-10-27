import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/header.css";
import "./styles/product-layout.css";
import "./styles/product-sections.css";
import "./styles/product-usecases.css";
import "./styles/product-ingredients.css";
import "./styles/product-howtouse.css";
import "./styles/product-safety.css";
import "./styles/product-cards.css";
import "./styles/product-grantha.css";
import "./styles/custom.css";
// import "./styles/custom-clean.css";
import "./styles/product-gallery.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
