import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import contactImage from "../assets/contact.jpeg";
import Footer from "../Footer/Footer";
function Contact() {
    let email = "Email: contact@wecare.com";
    let phone = "Phone: +91 9876543210";
    let address = "Address: We-Cure, Kadapa, 516003, India";
    return (
        <>
            <Navbar />
            <div className="contact">
                <h3>Contact</h3>
                <img src={contactImage} alt="Contact" />
                <p>
                    We are always here to assist you with your healthcare needs. Whether you
                    have questions about our services, appointments, or consultations, feel
                    free to reach out to us.
                </p>
                <p>
                    Our support team is available to guide patients and address concerns in a
                    timely and professional manner. We believe in clear communication and
                    patient satisfaction.
            </p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
                <p>
                    You can contact us for appointment scheduling, service inquiries, feedback,
                    or general assistance. We value your trust and are committed to supporting
                    your healthcare journey.
                </p>
                <p>
                    At We-Cure, your health and well-being are our top priorities.
                </p>
            </div>
            <Footer/>
        </>
    );
}
export default Contact;
