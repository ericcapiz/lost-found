import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from 'axios';
import "./login.css";

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("https://lost-my-stuff.herokuapp.com/api/auth/login",{
                username: userRef.current.value,
                password : passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data});
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"});
        }
    }


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
           <form onSubmit={handleSubmit} className="loginForm">
               <label>Username</label>
               <input autoComplete="off" ref={userRef} className="loginInput" type="text" placeholder="Username" />
               <label>Password</label>
               <input autoComplete="off" ref={passwordRef} className="loginInput" type="password" placeholder="Password" />
               <button className="loginBtn" disabled={isFetching} type="submit">Login</button>
           </form>
           <button className="registerBtn"><Link className="link" to="/register">Register</Link></button>
           <br /><p>Demo Login:</p>
           <br /><p>Username: demo (lowercase)</p>
           <br /><p>Password: password (lowercase)</p>
        </div>
    )
}

export default Login
