import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Username"/>
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Email"/>
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Password"/>
                <button className="registerButton">Register</button>
            </form>
            <button className="loginButton"><Link className="link" to="/login">Login</Link></button>
        </div>
    )
}

export default Register
