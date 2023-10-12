import React, { useEffect, useState } from 'react'
import Axios from '../Constants/Axios'
import { API_KEY, imgUrl } from '../Constants/Constants';

function Banner() {
  const [movie,setMovie]=useState();
  useEffect(()=>{
    Axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results);
      setMovie(response.data.results[7])
    })
  },[])
  return (
    <div>
      <img src={movie? imgUrl+movie.backdrop_path : ""} className='w-full ' alt="" />
      <div className="movieDetails absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 ">
        <h1 className='text-2xl sm:text-5xl my-3 font-bold text-shadow'>{ movie ? movie.title : ""}</h1>
        <h2 className='text-md text-text rounded-md invisible sm:visible '>{movie ? movie.overview : ""}</h2>
        <div className="buttons absolute top-1/4 sm:relative ">
          <button className='bg-white border border-1 outline-none border-hover px-3 sm:px-7 py-2 m-2 sm:text-xl  scale-95 hover:bg-hover hover:scale-100 hover:text-white transition transition-duration-1000  rounded'>▶ Play</button>
          <button className='bg-text px-3 sm:px-7  py-2 m-2  sm:text-xl scale-95 hover:scale-100 transition transition-duration-1000  hover:bg-hover rounded'>ⓘ info</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
