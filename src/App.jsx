import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import MainContainer from './components/MainContainer';

export default function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
