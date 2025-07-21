import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css';
import './card.css';
import Left from './mtavari/Left';
import Right from './mtavari/Right';
import Login from './enroll/Login';
import Main from './Mtavari';
import Registration from './enroll/registration';  
import Create from './mtavari/Create'; // Import the Create component

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Registration />} />
  <Route path="/main" element={<Main />} />
  <Route path="/Create" element={<Create />} /> {/* Add this line */}
</Routes>
    </BrowserRouter>

  );
}

export default App;