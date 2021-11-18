import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="beer/" element={<Beer />} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/randombeer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
