import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './views/Header'
import MainContainer from './views/MainContainer'
import DetailMovie from './views/DetailMovie'
import Trailer from './views/Trailer'
import NotFound from './components/NotFound'
import LatestReleases from "./views/LatestReleases"
import Popular from "./views/Popular"
import SearchContainer from "./views/SearchContainer"

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
  )
}