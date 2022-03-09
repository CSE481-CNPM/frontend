import React from 'react';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import BookingTicket from '../components/BookingTicket';

import './Booking.css';

const Booking = () => {
  return (
    <React.Fragment>
      <div className="booking-wrapper">
        <Navbar />
        <BookingTicket />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Booking;
