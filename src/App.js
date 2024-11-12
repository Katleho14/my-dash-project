// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './Pages/OverviewPage';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

