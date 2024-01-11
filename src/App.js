import React from "react";
import { Routes, Route } from "react-router-dom";

//style by Sass Partials
import "./styles/main.scss";

//pages by React BrowserRouter
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ErrorPage from "./pages/Error404";

//components Header && Footer
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Product />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
