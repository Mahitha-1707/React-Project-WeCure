import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Doctors from "../Doctors/Doctors";
import Appointments from "../Appointments/Appointments";
import Home from "../Home/Home";
function Links() {
    return (
        <BrowserRouter>
           <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Doctors" element={<Doctors />} />
    <Route path="/Appointments" element={<Appointments />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Login" element={<Login />} />
</Routes>
        </BrowserRouter>
    );
}
export default Links;
