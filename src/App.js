import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
// import About from './components/About'; 



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/experience' element={<Experience />} />
          {/* <Route path='/About' element={<About />} /> */}
          <Route path='/Blog' element={<Blog />} />
        </Routes>
      </Router>
      <Footer /> 
    </div>
  );
}

export default App;