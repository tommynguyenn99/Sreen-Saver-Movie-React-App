import React from 'react';
import {API_IMG} from "../components/globals/globals";


const MovieCard = (props) => {
  return (
    <div className='card'>
        <div className="poster">
            <img src={API_IMG + props.poster_path} alt="Movie Posters" />
        </div>

    
    <div className="info">
        <p className='title'>{props.title}</p>
        <p className='rating'>{props.vote_average}</p>
        <p className='release'>{props.release_date}</p>
    </div>
    </div>
  )
}
export default MovieCard