import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Detail } from './Pages/Detail/Detail';
import { Login } from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/detail" element={ <Detail /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
