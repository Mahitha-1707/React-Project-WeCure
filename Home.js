import homeImage from "../assets/home.jpeg";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Home() {
    return (
        <>
            <Navbar />
            <div className="home">
                <h3>Home Page</h3>
                <p>Welcome to We-Cure!</p>
                <img src={homeImage} alt="Home" />
                <p>
                    We-Cure is a healthcare platform designed to make medical services
                    accessible, affordable, and convenient for everyone. Our goal is
                    to bridge the gap between patients and healthcare professionals
                    using modern technology.
                </p>
                <p>
                    Through We-Cure, patients can consult experienced doctors, receive
                    medical advice, and manage their health needs without unnecessary
                    delays or travel. We focus on providing quality healthcare solutions
                    that are reliable and easy to use.
                </p>
                <p>
                    Our platform supports a wide range of medical services including
                    general consultations, specialist appointments, follow-ups, and
                    preventive healthcare. We ensure that patients receive timely
                    attention and personalized care.
                </p>
                <p>
                    We-Cure also emphasizes transparency and trust. Patients can view
                    doctor profiles, understand treatment options, and make informed
                    decisions about their health.
                </p>
                <p>
                    With a strong commitment to innovation and patient satisfaction,
                    We-Cure continues to improve healthcare delivery and promote
                    healthier communities.
                </p>
            </div>
            <Footer/>
        </>
    );
}
export default Home;
