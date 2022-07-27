import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Detail } from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/detail" element={ <Detail /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
