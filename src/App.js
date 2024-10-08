import * as React from 'react';

import Dashboard from './pages/Dashboard';
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
function App() {
  
   
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
