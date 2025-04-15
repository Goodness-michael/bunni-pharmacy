import { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  HealthBlog,
  ProductPage,
  SignUp,
  ProductDetail,
} from "./Pages"


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HealthBlog" element={<HealthBlog />} />
        <Route path="/ProductPage" element={<ProductPage />} />

        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductDetail/>} />
      </Routes>
    </Router>
  );
}

export default App
