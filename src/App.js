import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blank from './pages/Admin/Blank';
import Dashboard from './pages/Admin/Dashboard';
import MainLayout from './layout/MainLayout';

import React, { Fragment } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Carousel from './components/Carousel';
import Footer from './shared/components/Footer';
import Navbar from './shared/components/Navbar';
import CardFilm from './components/CardFilm';
import MovieIsPlay from './components/MovieIsPlay';
import BoxActor from './components/BoxActor';
import FilmDetail from './components/FilmDetail';
import BookingTicket from './components/BookingTicket';
import BoxPayment from './components/BoxPayment';

function App() {
  return (
    <div className='app'>
      {/* <Navbar /> */}
      {/* <FilmDetail /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Carousel /> */}
      {/* <BookingTicket /> */}
      {/* <CardFilm /> */}
      {/* <MovieIsPlay /> */}
      {/* <BoxActor /> */}
      {/* <BoxPayment /> */}
      {/* <Footer /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='addfilm' element={<Blank />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
