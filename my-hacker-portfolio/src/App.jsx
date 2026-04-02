import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      {/* Visual background effect */}
      <div className="scanlines"></div>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;