import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
// import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics/>
      <Footer/>
      {/* <Experience/> */}
    </div>
  );
}

export default App;
