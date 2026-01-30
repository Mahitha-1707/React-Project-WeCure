import "./Signup.css";
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom";
function Signup({ SignUpPage }) {
    function handleSignup(e) {
        e.preventDefault();
        alert("Signup successful!");
    }
    return (
        <>
            <Navbar />
            <h3>Sign Up Page</h3>
            <div className="container">
                <form onSubmit={handleSignup}>
                    <input type="text" placeholder="Username" /><br />
                    <input type="email" placeholder="Email" /><br />
                    <input type="password" placeholder="Password" /><br />
                    <button type="submit">Sign Up</button>
                    <Link to="/Login" className="login-button">
                        Login
                    </Link>
                </form>
            </div>
        </>
    );
}
export default Signup;
