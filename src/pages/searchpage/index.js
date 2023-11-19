import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchPage() {
  
  const [searchResults, setSearchResults] = useState([]);
  
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  
  let query = useQuery();
  const searchTerm = query.get("q");
  
  useEffect(() => {
    if(searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(`search/multi?include_adult=true&query=${searchTerm}`);
      setSearchResults(request.data.results);
    } catch(e) {
      console.log("error: ", e);
    }
  }
  

  return (
    <div>SearchPage</div>
  )
}