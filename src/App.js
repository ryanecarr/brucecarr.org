import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import About from './Pages/About';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
