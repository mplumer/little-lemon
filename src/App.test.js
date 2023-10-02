// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/sections/bookingPage/BookingForm";


test("renders the 'Choose date' label", () => {
  // Create a mock function for setAvailableTimes
  const setAvailableTimes = jest.fn();

  render(<BookingForm setAvailableTimes={setAvailableTimes} />);
  const chooseDateLabel = screen.getByText("Choose date");
  expect(chooseDateLabel).toBeInTheDocument();
});



// // Mock setAvailableTimes function for testing
// const mockSetAvailableTimes = jest.fn();

// describe("BookingForm Component", () => {
//   it("should initialize available times correctly", () => {
//     const initialState = []; // Set an initial state for testing
//     const result = initializeTimes(initialState);
//     const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    
//     expect(result).toEqual(expectedTimes);
//   });

//   it("should update times state correctly", () => {
//     const initialState = ["09:00", "10:00", "11:00"]; // Set an initial state for testing
//     const action = { type: "UPDATE_TIMES", date: "2023-10-10" };
//     const result = updateTimes(initialState, action);

//     // In this example, we expect the same times to be returned regardless of the date
//     const expectedTimes = ["09:00", "10:00", "11:00"];
    
//     expect(result).toEqual(expectedTimes);
//   });

//   it("should handle date change and call setAvailableTimes", () => {
//     const { getByLabelText } = render(
//       <BookingForm setAvailableTimes={mockSetAvailableTimes} />
//     );

//     // Simulate a date change event
//     const dateInput = screen.getByLabelText("Choose date");
//     fireEvent.change(dateInput, { target: { value: "2023-10-10" } });

//     // The setAvailableTimes function should be called with the expected value
//     expect(mockSetAvailableTimes).toHaveBeenCalledWith(["09:00", "10:00", "11:00"]);
//   });
// });
