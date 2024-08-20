import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const response = await fetch('http://127.0.0.1:5000/movies')
    const data = await response.json() 
    setMovies(data)
    console.log(data.movies)
  }
  

      (
    <>
      
    </>
  )
}

export default App
