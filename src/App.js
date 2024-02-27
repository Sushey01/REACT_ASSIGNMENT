import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/Blog' element={<Blog />} />
        </Routes>
      </Router>
      <Analytics />
      <Footer /> 
    </div>
  );
}

export default App;