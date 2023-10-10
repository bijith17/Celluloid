import React, { useEffect, useState } from 'react';
import Axios from '../Constants/Axios';
import axios from 'axios';
import { API_KEY, imgUrl } from '../Constants/Constants';

function Card(props) {
  const [movies, setMovies] = useState([]); 
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    Axios.get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        error('Something might be an error! Check it');
      });
  }, [props.url]); 

  

  return (
    <div >
      <h1 className='px-4 py-2 sm:py-4 sm:text-3xl text-white shadow-sm'>{props.title}</h1>
      <div className='card p-3 flex overflow-x-scroll '>
        {movies.map((obj) => (
          <img
            key={obj.id} // Provide a unique key
            src={imgUrl + obj.backdrop_path}
            className={props.isSmall? 'p-1 shadow-md w-60 sm:w-72 lg:w-80' :'p-1 shadow-md w-72 sm:w-80 lg:w-96'}
            alt={obj.title} 
           
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
