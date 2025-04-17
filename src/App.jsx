import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
//import Nav  from './Nav';//
import Homepage from './Homepage';
import Footer from './Footer';
import Reservations from './Reservatons';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/Reservations' element={<Reservations />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>

  )

}


export default App;
