import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';


export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}