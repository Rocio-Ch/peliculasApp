import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { API_KEY, API_URL } from "../apiTMDBapp";
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import DetailMovie from './components/DetailMovie';
import Trailer from './components/Trailer';
import NotFound from './components/NotFound';
import LatestReleases from "./components/LatestReleases";
import Popular from "./components/Popular";


export default function App() {

  const [movieResults, setMovieResults] = useState("")
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    fetch(`${API_URL}/search/movie?api_key=${API_KEY}${search ? `&query=${search}` : ""}&page=${currentPage}`)   
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(data.total_pages)
        setMovieResults(data.results)
        })
      }, [search, currentPage])

  return (
    <BrowserRouter>
      <Header setCurrentPage={setCurrentPage} setSearch={setSearch} currentPage={currentPage} />
      <Routes>
        <Route path='/' element={<MainContainer movieResults={movieResults} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />} />
        <Route path='/search/:search' element={<MainContainer movieResults={movieResults} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} search={search} />} />
        <Route path='/latest-releases' element={ <LatestReleases/> } />
        <Route path='/popular' element={ <Popular/> } />
        <Route path='/description/:id' element={<DetailMovie />} />
        <Route path='/trailer/:id' element={<Trailer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}