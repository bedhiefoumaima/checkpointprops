import React from 'react'
import MovieCard from "../Moviecard/MovieCard"

const Movielist = ({moviesData}) => {
    return (
        <div>
            <h1>
         Movies Liste
            </h1>
           {moviesData.map((el) => (
           <MovieCard movie={el} key={el.id} />
           ))}
        </div>
    )
      
}

export default Movielist
