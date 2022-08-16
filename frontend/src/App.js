
import './style/App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import User from './pages/User';
import Error from './pages/Error';

function App() {
  return (

    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in" element={<Connexion />} />
          <Route path="/user" element={<User />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;