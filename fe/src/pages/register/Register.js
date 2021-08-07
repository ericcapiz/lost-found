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
            {error && <span style={{ fontSize:"1.1rem", color:"brown", marginTop:"10px"}}>Account already exists with username and/or email. <br /> 
            Please  <Link style={{color:"#0000FF", fontWeight:"bold", textDecoration:"none", fontSize:"1.1rem"}} to="/login">Login</Link> to continue </span>}
            <form onSubmit={handleSubmit} className="registerForm">
                <label>Username</label>
                <input className="registerInput" autoComplete="off" onChange={e=>setUsername(e.target.value)} type="text" placeholder="Username"/>
                <label>Email</label>
                <input className="registerInput" autoComplete="off" onChange={e=>setEmail(e.target.value)} type="text" placeholder="Email"/>
                <label>Password</label>
                <input className="registerInput" autoComplete="off" type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="loginButton"><Link className="link" to="/login">Login</Link></button>
        </div>

       
    )
}

export default Register
