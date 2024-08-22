import { useState, useEffect } from 'react'
import MovieList from './MovieList'
import './App.css'
import MovieForm from './MovieForm'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const response = await fetch('http://127.0.0.1:5000/movies')
    const data = await response.json() 
    setMovies(data.movies)
    console.log(data.movies)
  }
  

  return <><MovieList movies={movies} />
          <MovieForm />
  </>

}

export default App
