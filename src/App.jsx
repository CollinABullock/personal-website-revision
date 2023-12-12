import { useState } from 'react';
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom";
import About from './components/about';
import './App.css'

export default function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>  
  )
}