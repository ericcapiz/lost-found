import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
           <form className="loginForm">
               <label>Email</label>
               <input className="loginInput" type="text" placeholder="Email" />
               <label>Password</label>
               <input className="loginInput" type="password" placeholder="Password" />
               <button className="loginBtn">Login</button>
           </form>
           <button className="registerBtn"><Link className="link" to="/register">Register</Link></button>
        </div>
    )
}

export default Login
