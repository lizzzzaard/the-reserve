import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from './Layout/Layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
      </Routes>
    </Router>
  )
}

export default App;
