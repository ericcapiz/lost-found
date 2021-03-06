import { useContext, useState } from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import {Context} from "../../context/Context";
import axios from 'axios';
import "./settings.css";
import { Link } from "react-router-dom";



const Settings = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const {user, dispatch} = useContext(Context);

    const PF = "https://lost-my-stuff.herokuapp.com/images/"

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };

        if(file){
            const data = new FormData();
            
            // const filename = file.name;
            data.append("file",file);
            data.append("upload_preset","lost-my-stuff");
            data.append("cloud_name", "dzckc7kxv")
            
            try {
              await axios.post("https://api.cloudinary.com/v1_1/dzckc7kxv/image/upload",data)
              .then ((data)=>{
                updatedUser.profilePic = data.data.secure_url
                
                
                }).catch(err=>{console.log(err)})
                
            } catch (error) {
                console.log(error);
            }
        }
        try {
           const res = await axios.put("https://lost-my-stuff.herokuapp.com/api/users/"+user._id, updatedUser);
            setSuccess(true)
            dispatch({type:"UPDATE_SUCCESS", payload: res.data})
        } catch (error) {
            console.log(error);
            dispatch({type:"UPDATE_FAILURE"})
        }
    }


    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Account: <br/> <p className="settingsTitleDelete">If you need to change either the username, email and/or password, <br/> change the field(s) needed and type in the other fields with the current info.</p></span>
                    
                    {/* <span className="settingsTitleDelete">Delete Account</span> */}
                </div>
                <form className="settingsForm" onSubmit={handleSubmit} >
                    <label>Update Profile Picture</label>
                    <div className="settingsPP">
                        <img src={ file ? URL.createObjectURL(file) : PF + user.profilePic} alt="profile" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)} />
                    <div className="buttons">
                    <button className="settingsSubmitButton" type="submit">Save Changes</button>
                    <Link to="/" className="link"><button className="settingsCancelButton" type="submit">Cancel Changes</button></Link>
                    </div>
                    {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile Updated Sucessfully!</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
