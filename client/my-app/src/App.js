import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import GraphicsCards from './GraphicsCards';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <GraphicsCards></GraphicsCards>
    </div>
  );
}

export default App;
