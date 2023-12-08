import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
