import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';
import LandingComponent from './component/landing/landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
