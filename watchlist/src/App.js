import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import "./lib/font-awesome/css/all.min.css";
import './App.css'

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' Component={Watchlist}/>
          <Route path='/watched' Component={Watched}/>
          <Route path='/add' Component={Add}/>
        </Routes>
      </Router>
     </GlobalProvider>

  );
}

export default App;
