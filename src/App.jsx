import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import DetailMovie from './components/DetailMovie';
import Trailer from './components/Trailer';
import NotFound from './components/NotFound';
import LatestReleases from "./components/LatestReleases";
import Popular from "./components/Popular";
import SearchContainer from "./components/SearchContainer";

export default function App() {

  const [search, setSearch] = useState("")

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path='/' element={!search ? <MainContainer search={search} /> : <SearchContainer search={search}/>} />
        <Route path='/latest-releases' element={ <LatestReleases/> } />
        <Route path='/popular' element={ <Popular /> } />
        <Route path='/description/:id' element={<DetailMovie />} />
        <Route path='/trailer/:id' element={<Trailer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}