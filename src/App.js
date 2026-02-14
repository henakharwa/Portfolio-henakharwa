import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Leadership/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
