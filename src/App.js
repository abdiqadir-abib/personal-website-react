// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DarkModeToggle from './components/DarkModeToggle';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <DarkModeToggle />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
