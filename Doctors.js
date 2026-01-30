import Navbar from "../Navbar/Navbar";
import "./Doctors.css";
import {useState} from "react";
import {Link} from "react-router-dom";
import ramesh from "../assets/ramesh.webp";
import roopa from "../assets/roopa.jpeg";
import noor from "../assets/noor.jpg";
import rohit from "../assets/rohit.jpeg";
import prithika from "../assets/prithika.jpeg";
import karthik from "../assets/karthik.avif";
import neha from "../assets/neha.jpg";
import rahul from "../assets/rahul.webp";
import vikram from "../assets/vikram.jpg";
import pooja from "../assets/pooja.webp";
import Footer from "../Footer/Footer";
function Doctors() {
    const doctorsData = [
        { name: "Dr. Ramesh Kumar", dept: "Cardiology", img: ramesh },
        { name: "Dr. Roopa Salwan", dept: "Dermatology", img: roopa },
        { name: "Dr. Noor Sharma", dept: "Neurology", img: noor },
        { name: "Dr. Rohit Batra", dept: "Orthopedics", img: rohit },
        { name: "Dr. Prithika Chary", dept: "Pediatrics", img: prithika },
        { name: "Dr. Karthik Kacchadia", dept: "General", img: karthik },
        { name: "Dr. Neha Singh", dept: "Gynecology", img: neha },
        { name: "Dr. Rahul Mehta", dept: "ENT", img: rahul },
        { name: "Dr. Vikram Joshi", dept: "Psychiatry", img: vikram },
        { name: "Dr. Pooja Nair", dept: "Nutrition", img: pooja }
    ];
    const [department, setDepartment] = useState("All");
    const filteredDoctors =
        department === "All"
            ? doctorsData
            : doctorsData.filter(d => d.dept === department);
    return (
        <>
            <Navbar />
            <div className="doctors">
                <h3>Our Doctors</h3>
                <select
                    className="filter"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)} >
                <option value="All">
                    All Departments
                </option>
                <option value="Cardiology">
                    Cardiology
                    </option>
                <option value="Dermatology">
                    Dermatology
                    </option>
                    <option value="Neurology">
                        Neurology
                        </option>
                    <option value="Orthopedics">
                        Orthopedics
                        </option>
                    <option value="Pediatrics">
                        Pediatrics
                        </option>
                        <option value="General">
                            General</option>
                        <option value="Gynecology">
                            Gynecology</option>
                        <option value="ENT">
                            ENT</option>
                    <option value="Psychiatry">
                        Psychiatry</option>
                    <option value="Nutrition">
                        Nutrition</option>
                </select>
                <div className="doctor-grid">
                    {filteredDoctors.map((doc, index) => (
                <div className="doctor-card" key={index}>
                    <img src={doc.img} alt={doc.name} />
                    <h4>{doc.name}</h4>
                    <p>{doc.dept}</p>
                    <Link to="/Appointments" className="book-btn">
                        Book Now
                    </Link>
                </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Doctors;
