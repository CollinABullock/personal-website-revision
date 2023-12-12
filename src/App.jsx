import { useState } from 'react';
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom";
import About from './components/about';
import Portfolio from './components/portfolio';
import Videos from './components/videos';
import './App.css'

export default function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Videos" element={<Videos />} />
    </Routes>
    </BrowserRouter>
    </>  
  )
}