import React, { useState, useEffect, useContext } from 'react';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import MovieIsPlay from '../components/MovieIsPlay';
import Cart from '../components/Cart';

import { AuthContext } from '../shared/context/auth-context';

import LoadingSpinner from '../shared/components/LoadingSpinner';
import ErrorModal from '../shared/components/ErrorModal';

import axios from 'axios';

import './Library.css';

const Library = () => {
  const auth = useContext(AuthContext);

  const [error, setError] = useState(null);
  const clearError = () => {
    setError(null);
  };
  const [isLoading, setIsLoading] = useState(false);

  const [movieList, setMovieList] = useState([]);

  const fetchData = () => {
    const tempArr = [];
    setIsLoading(true);
    axios({
      method: 'get',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: '/v1/ticket',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        console.log(res.data.ticket);
        if (res.data.ticket.length === 0) {
          setMovieList([]);
          setIsLoading(false);
          return;
        }
        res.data.ticket.forEach((ticket) => {
          axios({
            method: 'get',
            baseURL: process.env.REACT_APP_BACKEND_URL,
            url: `/v1/movie/${ticket.filmId}`,
          }).then((res) => {
            tempArr.push({ movie: res.data.movie, ticket: ticket });
            setMovieList((prev) => [...prev, { ...res.data.movie, ...ticket }]);
          });
        });
        console.log(tempArr);
        // setMovieList([...tempArr]);
        console.log(movieList);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner />}
      <div className="library-wrapper">
        <Navbar tab={3} />
        <Cart movieList={movieList} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Library;
