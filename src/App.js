import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import React from 'react';
import Articles from './components/pages/Articles';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import Sweden from "./components/pages/subpages/Svenska";
import Svenska from './components/pages/subpages/Svenska';
import NoviSad from './components/pages/subpages/NoviSad';
import Kusadasi from './components/pages/subpages/Kusadasi';
import Avala from './components/pages/subpages/Avala';
import Greece from './components/pages/subpages/Greece1';
import Budapest from './components/pages/subpages/Budapest';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/articles' exact element={<Articles/>}/>
          <Route path='/sign-up' exact element={<SignUp/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/articles/svenska" exact element={<Svenska/>}/>
          <Route path="/articles/novi-sad" exact element={<NoviSad/>}/>
          <Route path="/articles/greece21" exact element={<Greece/>}/>
          <Route path="/articles/kusadasi" exact element={<Kusadasi/>}/>
          <Route path="/articles/avala" exact element={<Avala/>}/>
          <Route path="/articles/budapest" exact element={<Budapest/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
