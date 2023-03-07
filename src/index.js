import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router"
import router from "./router"
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
  <Header />
    <App />
    <Footer />
  </RouterProvider>
  </React.StrictMode>
);
