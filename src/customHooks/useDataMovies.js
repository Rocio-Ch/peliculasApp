import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function useDataMovies() {

  const navigate = useNavigate()
  const [data, setData] = useState([])

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url)
        setData(data)
    } catch (error) {
        navigate("/not-found")
    }
  }
   
  return { getData, data }
}