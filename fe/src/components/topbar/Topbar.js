import { Link } from "react-router-dom";
import "./topbar.css"

const Tobar = () => {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/add">Post Item</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <>
                            <img className="topImg" alt="profile" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            <i className=" topSearchIcon fas fa-search" />
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
