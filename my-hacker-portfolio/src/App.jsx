import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      {/* Visual background effect */}
      <div className="scanlines"></div>
      <Footer/>
    </div>
  );
}

export default App;