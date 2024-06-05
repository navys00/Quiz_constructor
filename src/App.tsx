import React from 'react';
import ReactDOM from "react-dom/client";
import { Header } from './components/Header';
import './App.css';
import { Template } from './components/Template';
import { MainBody } from './components/MainBody';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Form } from './pages/Form';
import { User_form } from './components/User_form';
import { Suggested } from './components/Suggested';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form/:id' element={<Form />} />
        <Route path='/response/:id' element={<User_form />} />
        <Route path='/suggested' element={<Suggested />} />
      </Routes>

    </div>
  );
}

export default App;
