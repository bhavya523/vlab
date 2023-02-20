import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Subject from './components/Subject.js';
import Navbar from './components/Navbar.js';
import Chemintro from './components/Subjects/Chemistry/Chemintro.js';
import ChemNavbar from './components/Subjects/Chemistry/ChemNavbar.js';
import DaaNavbar from './components/Subjects/Daa/DaaNavbar.js';
import DsNavbar from './components/Subjects/Ds/DsNavbar.js';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sub" element={<Subject />} />
      <Route path="/sub/chem/intro" element={<Chemintro />} />
      <Route path="/sub/chem" element={<ChemNavbar />} />
      <Route path="/sub/daa" element={<DaaNavbar />} />
      <Route path="/sub/ds" element={<DsNavbar />} />
    </Routes>
    </>
  );
}

export default App;
