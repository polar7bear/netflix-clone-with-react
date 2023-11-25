import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import "./searchpage.css";
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {
  
  const [searchResults, setSearchResults] = useState([]);
  
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  
  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(`search/multi?include_adult=true&query=${searchTerm}`);
      setSearchResults(request.data.results);
    } catch(e) {
      console.log("error: ", e);
    }
  };
  
  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className='movie' key={movie.id}>
                <div className='movie_column-poster'>
                  <img src={movieImageUrl} alt="movie img" className='movie_poster' />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : (
      <section className='no-results'>
        <div className='no-results_text'>
          <p>찾고자하는 검색어"{debouncedSearchTerm}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    )
  }

  return renderSearchResults();
}