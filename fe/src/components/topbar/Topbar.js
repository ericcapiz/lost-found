import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

const Tobar = () => {
    const {user,dispatch} = useContext(Context);
    // const PF = "https://lost-my-stuff.herokuapp.com/images/"
    console.log("user top",user)

    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"});
        window.location.replace("/login");
    }

    return (
        <div className="top">
            <div className="topLeft">
                <h1 className="h1Title" >Lost & Found</h1>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/add">Post Item</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout} >
                        {user && "Logout"}
                    </li>
                    
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <>
                            <p className="greet" style={{marginRight:"15px"}}>Hi, {user.username}</p>
                            <img className="topImg" alt="" src={ user.profilePic}/>
                            <Link className="link set" to="/settings">Settings</Link>
                        </>
                    ):(
                        <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/login">Login</Link></li>
                            <li className="topListItem"><Link className="link" to="/register">Register</Link></li>
                        </ul>
                    )
                }
        </div>
        </div>
    )
}

export default Tobar
