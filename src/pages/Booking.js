import React from 'react';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import Screen from '../components/Screen';

import './Booking.css';

const Booking = () => {
  return (
    <React.Fragment>
      <div className="booking-wrapper">
        <Navbar />
        <Screen />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Booking;
