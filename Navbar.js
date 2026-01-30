import "./Navbar.css";
import { useState } from "react";
import wecure from "../assets/wecure.png";
function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <nav className="navbar">
            <div className="nav-left">
                <img src={wecure} alt="We-Cure Logo" className="nav-logo" />
            </div>
            <div className="nav-right">
                {isLoggedIn ? (
                    <>
                    <a href="/home">home</a>
                    <a href="/doctors">doctors</a>
                    <a href="/appointments">appointments</a>
                    <a href="/about">about</a>
                    <a href="/contact">contact</a>
                    <a href="/signup">signup</a>
                    <button onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>
                    </>
                ):(
                    <>
                        <a href="/home">home</a>
                        <a href="/signup">signup</a>
                        <a href="/login">login</a>
                        <button onClick={() => setIsLoggedIn(true)}>
                            Login
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
export default Navbar;
