import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import DetailMovie from './components/DetailMovie'

export default function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/descripcion' element={<DetailMovie />}/>
      </Routes>
    </BrowserRouter>
  );
}
