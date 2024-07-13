import React from 'react';
import './App.css';
import Home from './Pages/Home';
import UseComponent from './Component/UsePage/UseComponent';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'


function App() {

  return (
    <div>
     <Router>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>

      </div>
  );
}

export default App;
