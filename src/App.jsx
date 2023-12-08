import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Auth from "../utils/Auth";
import Dashboard from "../components/Dashboard";
import Help from "../components/Help";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>}></Route>
    <Route path="/help" element={<Help/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Auth><Dashboard/></Auth>}></Route>

  
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}
