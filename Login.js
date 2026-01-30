import Navbar from "../Navbar/Navbar";
import "./Login.css";
function Login() {
    function handleLogin(e) {
        e.preventDefault();
        alert("Login successful!");
    }
    return (
        <>
            <Navbar />
            <h3>Login Page</h3>
            <div className="Login">
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" /><br />
                    <input type="password" placeholder="Password" /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}
export default Login;
