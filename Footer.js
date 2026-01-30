import "./Footer.css";
import facebook from '../assets/facebook.jpeg';
import twitter from '../assets/twitter.jpeg';
import instagram from '../assets/instagram.jpeg';
function Footer() {
    return (
        <>
            <hr className="footer-divider" />
            <footer className="footer">
                <p>&copy; 2026 WeCure. All rights reserved.</p>
                <p>Find us on:</p>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="Twitter" />
                <img src={instagram} alt="Instagram" />
            </footer>
        </>
    );
}
export default Footer;
