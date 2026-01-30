import "./Landing.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Landing() {
    return (
        <>
            <Navbar home="Home"
                about="About"
                contact="Contact"
                login="Login"
                signup="Signup"
            />
            <div className="landing">
                <div className="landing-content">
                    <h1>Welcome to We-Cure</h1>
                    <h2>We Care with Heart and Soul</h2>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Landing;
