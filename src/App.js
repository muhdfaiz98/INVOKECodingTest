import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Randomiser from './components/Randomiser';


export default function App() {
  return (
    <div className='RandoContainer'>
          <Header />
          <Randomiser />
    </div>
  )
}



