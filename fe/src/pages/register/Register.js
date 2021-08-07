import {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("/auth/register", {
            username,
            email,
            password,
          });
          res.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
      };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form onSubmit={handleSubmit} className="registerForm">
                <label>Username</label>
                <input className="registerInput" autoComplete="false" onChange={e=>setUsername(e.target.value)} type="text" placeholder="Username"/>
                <label>Email</label>
                <input className="registerInput" autoComplete="false" onChange={e=>setEmail(e.target.value)} type="text" placeholder="Email"/>
                <label>Password</label>
                <input className="registerInput" autoComplete="false" type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="loginButton"><Link className="link" to="/login">Login</Link></button>
            {error && <span>Account already exists with username/email. </span>}
        </div>

       
    )
}

export default Register
