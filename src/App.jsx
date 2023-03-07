import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//style by Sass Partials
import "./index.css";

//pages by React BrowserRouter
import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Product";
import PageNotFound from "./pages/Error404";

//components Header && Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products/:productId" element={<Singleproduct />} />
            <Route path="/kaza" element={<Navigate to="/" replace />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;