import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home } from './components/index';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App;
