import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/Booking";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import Menu from "./pages/Menu";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}