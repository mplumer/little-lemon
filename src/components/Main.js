import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./Booking";
import HomePage from "./HomePage";


function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </Router>
    );
}

export default Main;