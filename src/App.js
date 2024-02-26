import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Blog from './components/Blog';


// import Experience from "./components/Experience";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Router> */}
      <Navbar />
      <Hero />
      <Analytics/>
      <Footer/>
      <Blog/>
      {/* </Router> */}
    </div>
  );
}

export default App;
