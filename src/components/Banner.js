import React, {useState, useEffect} from 'react';
import requests from "../api/requests";
import axios from '../api/axios';
import "./Banner.css"
export default function Banner() {
    
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        //현재 상영중인 여러영화 정보 가져오기
        const request = await axios.get(requests.fetchNowPlaying);
        //여러 영화 중 영화 하나의 ID를 가져오기
        const movieId = request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ].id;
        
        //특정 영화의 더 상세한 정보 가져오기
        const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
          params: {append_to_response: "videos"}
        });
        setMovie(movieDetail);
    };

    const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
    };
  return (
    <header className='banner'
    style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      backgroundPosition: "top center",
      backgroundSize: "cover"
    }}>
      <div className='banner_contents'>
        <h1 className='banner_title'>{movie.title || movie.name || movie.original_name}</h1>

        <div className='banner_buttons'>
          <button className='banner_button play'>Play</button>
          <button className='banner_button info'>More Information</button>
        </div>

        <h1 className='banner_description'>{truncate(movie.overview, 100)}</h1>
      </div>

      <div className='banner-fadeBottom'></div>

    </header> 
    
  )
}
