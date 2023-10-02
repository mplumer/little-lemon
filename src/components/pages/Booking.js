import Hero from "../sections/bookingPage/Hero";
import BookingForm from "../sections/bookingPage/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingAPI";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Hero />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}