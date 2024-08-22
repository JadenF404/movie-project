import React from 'react'

const MovieList = ({movies}) => {   
    console.log("MovieList component rendered with movies:", movies);

    return (
    <div>
        <h2>Movie List</h2>
        <table>
            <thead>
                <tr>
                    <th> Title </th>
                    <th> Rating </th>
                    <th> Director </th>  
                    <th> Actor1 </th>                    
                    <th> Actor2 </th>                                      
                </tr>
            </thead>
            <tbody>
                {movies.map((movie) => (
                    <tr key = {movie.id}>
                        <td>{movie.title}</td>
                        <td>{movie.rating}</td>
                        <td>{movie.director}</td>
                        <td>{movie.actor1}</td>
                        <td>{movie.actor2}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default MovieList