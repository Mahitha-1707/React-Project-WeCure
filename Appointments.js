import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Appointments.css";
function Appointments() {
    function bookAppointment(e) {
        e.preventDefault();
        alert("Appointment booked successfully!");
    }
    return (
        <>
            <Navbar />
            <div className="appointments">
                <h3>Appointments</h3>
            <p>
                We-Cure offers a simple and convenient appointment booking system designed
                to save your time and effort. Patients can easily schedule appointments
                with doctors based on availability.
            </p>
            <p>
                <h4>How Appointments Work:</h4>
                <br />
                Choose a doctor → Select a date → Pick a time slot → Confirm appointment.
            </p>
                <p>
                    Our appointment system helps reduce waiting time at clinics and ensures
                    smooth consultation experiences for both patients and doctors.
                </p>
                <p>
                    Patients can book appointments for:
                    <br />
                     General consultations <br />
                     Specialist visits<br />
                     Follow-up checkups<br />  
                    Online consultations<br />
                </p>
                <p>
                    Appointment reminders help patients stay informed and prepared, ensuring
                    better time management and improved healthcare outcomes.
                </p>
                <hr />
                <h4>To Book an Appointment-Fill the Form Below</h4>
                <form className="appointment-form" onSubmit={bookAppointment}>
                    <label>Patient Name</label>
                    <input type="text" required />
                    <label>Department</label>
                    <select required>
                    <option value="">Select Department</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Neurology</option>
                    <option>Pediatrics</option>
                    <option>Orthopedics</option>
                    </select>
                    <label>Doctor</label>
                    <select required>
                        <option value="">Select Doctor</option>
                        <option>Dr.Ramesh Kumar</option>
                        <option>Dr.Roopa Salwan</option>
                        <option>Dr.Noor Sharma</option>
                        <option>Dr.Rohit Batra</option>
                        <option>Dr.Prithika Chary</option>
                        <option>Dr.Karthik Kacchadia</option>
                        <option>Dr.Neha Singh</option>
                        <option>Dr.Rahul Mehta</option>
                        <option>Dr.Vikram Joshi</option>
                        <option>Dr.Pooja Nair</option>
                    </select>
                    <label>Date & Time</label>
                    <input type="datetime-local" required />
                    <label>Reason for Visit</label>
                    <textarea rows="4" required></textarea>
                    <button type="submit">Book Appointment</button>
                </form>
            <p>
                In case of emergencies, patients are advised to contact the clinic directly.
                Routine appointments can be rescheduled or canceled as needed.
            </p>
            <p>
                We-Cure is committed to making healthcare accessible, efficient, and
                patient-friendly through smart appointment management.
            </p>
            </div>
            <Footer/>
        </>
    );
}
export default Appointments;
