import React, { useState, useReducer, useEffect } from "react";

// Reducer function to update available times based on the selected date
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // In this example, we return the same times regardless of the date
      return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ];
    default:
      return state;
  }
};

function BookingForm({ setAvailableTimes }) {
  // Initialize availableTimes using the reducer
  const [timesState, dispatchTimes] = useReducer(timesReducer, []);

  // Additional state variables for guests and occasion
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday"); // Default value

  // Event handler for date change
  const handleDateChange = (event) => {
    // Dispatch an action to update available times based on the selected date
    dispatchTimes({ type: "UPDATE_TIMES", date: event.target.value });
  };

  useEffect(() => {
    // When timesState changes, update the available times in the parent component
    setAvailableTimes(timesState);
  }, [timesState, setAvailableTimes]);

  return (
    <>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={timesState.date} 
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={timesState.date}>
          {/* Map availableTimes from timesState */}
          {timesState.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;



