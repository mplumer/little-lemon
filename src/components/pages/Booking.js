import React, { useState } from "react";
import BookingForm from "../sections/bookingPage/BookingForm";
import Hero from "../sections/bookingPage/Hero";


export default function Booking() {
    // Move availableTimes state to Main component
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);

    return (
        <>
            <Hero />
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </>
    );
}

