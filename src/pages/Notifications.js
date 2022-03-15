import React, { useState, useEffect } from 'react';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import Notification from '../components/Notification';

import LoadingSpinner from '../shared/components/LoadingSpinner';
import ErrorModal from '../shared/components/ErrorModal';

import axios from 'axios';

import './Notifications.css';

const Notifications = () => {
  const [error, setError] = useState(null);
  const clearError = () => {
    setError(null);
  };
  const [isLoading, setIsLoading] = useState(false);

  const [movieList, setMovieList] = useState([]);

  console.log(movieList);

  const fetchData = () => {
    setIsLoading(true);
    axios({
      method: 'get',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: '/v1/movie',
    })
      .then((res) => {
        if (res.data.films.length === 0) {
          setMovieList([]);
          setIsLoading(false);
          return;
        }
        setMovieList(res.data.films);
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
      <div className="notifications-wrapper">
        <Navbar tab={1} />
        <div className="content-wrapper">
          <Notification message={{ content: 'demo-message 1', time: '11h' }} />
          <Notification message={{ content: 'demo-message 2', time: '11h' }} />
          <Notification message={{ content: 'demo-message 3', time: '11h' }} />
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Notifications;
