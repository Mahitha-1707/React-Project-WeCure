import "./About.css";
import Navbar from "../Navbar/Navbar";
import aboutImage from "../assets/about.jpeg";
import Footer from "../Footer/Footer";
function About() {
    let about = {
        info: "We-Cure is dedicated to providing top-notch healthcare services to our community.",
        mission:
            "Our mission is to revolutionize healthcare delivery by leveraging technology to bridge the gap between patients and healthcare providers.",
        vision:
            "Our vision is to create a world where everyone has access to high-quality healthcare services."
    };
    return (
        <>
            <Navbar />
            <div className="about">
                <h3>About</h3>
                <p>About We-Cure</p>
                <img src={aboutImage} alt="About We-Cure" />
                <p>{about.info}</p>
                <p>
                    We-Cure was founded with the belief that quality healthcare should be
                    accessible to all, regardless of location or background. By combining
                    medical expertise with digital technology, we aim to simplify healthcare
                    services and improve patient experiences.
                </p>
                <p>{about.mission}</p>
                <p>
                    Our team works closely with healthcare professionals to ensure accurate
                    diagnosis, effective treatment, and continuous patient support. We focus
                    on innovation, efficiency, and patient-centered care.
                </p>
                <p>{about.vision}</p>
                <p>
                    By promoting awareness, preventive care, and timely medical attention,
                    We-Cure strives to build healthier communities and a more connected
                    healthcare ecosystem.
                </p>
            </div>
            <Footer/>
            </>
        );
    }
export default About;
