import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Picks } from './components/index';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/picks" element={ <Picks/> } />
      </Routes>
    </div>
  )
}

export default App;
