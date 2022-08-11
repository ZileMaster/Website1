import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import React from 'react';
import Articles from './components/pages/Articles';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/articles' exact element={<Articles/>}/>
          <Route path='/sign-up' exact element={<SignUp/>}/>
          <Route path="contact" exact element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
